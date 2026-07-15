-- ============================================
-- REALMAXVILLE BUILDING PLANS STORE
-- Supabase PostgreSQL Schema
-- ============================================
-- Run this in your Supabase SQL Editor:
-- https://supabase.com/dashboard/project/_/sql/new
-- ============================================

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- 1. PROFILES (extends Supabase auth.users)
-- ============================================
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  phone TEXT,
  is_admin BOOLEAN DEFAULT false NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', '')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- ============================================
-- 2. PLANS (building plans for sale)
-- ============================================
CREATE TABLE plans (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('Residential', 'Commercial', 'Multi-Family')),
  description TEXT NOT NULL DEFAULT '',
  price NUMERIC(12, 2) NOT NULL CHECK (price >= 0),
  est_build_cost TEXT NOT NULL DEFAULT '',
  beds INTEGER NOT NULL DEFAULT 0 CHECK (beds >= 0),
  baths INTEGER NOT NULL DEFAULT 0 CHECK (baths >= 0),
  sqft INTEGER NOT NULL DEFAULT 0 CHECK (sqft >= 0),
  sku TEXT UNIQUE NOT NULL,
  features TEXT[] DEFAULT '{}',
  image_url TEXT,
  gallery_urls TEXT[] DEFAULT '{}',
  pdf_url TEXT,
  is_published BOOLEAN DEFAULT false NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER plans_updated_at
  BEFORE UPDATE ON plans
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Indexes
CREATE INDEX idx_plans_type ON plans(type);
CREATE INDEX idx_plans_published ON plans(is_published) WHERE is_published = true;
CREATE INDEX idx_plans_slug ON plans(slug);
CREATE INDEX idx_plans_created ON plans(created_at DESC);

-- ============================================
-- 3. ORDERS (purchase records)
-- ============================================
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'failed', 'refunded')),
  total NUMERIC(12, 2) NOT NULL DEFAULT 0 CHECK (total >= 0),
  payment_reference TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE OR REPLACE TRIGGER orders_updated_at
  BEFORE UPDATE ON orders
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE INDEX idx_orders_user ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_created ON orders(created_at DESC);

-- ============================================
-- 4. ORDER ITEMS (individual plan purchases)
-- ============================================
CREATE TABLE order_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  plan_id UUID NOT NULL REFERENCES plans(id) ON DELETE RESTRICT,
  price NUMERIC(12, 2) NOT NULL CHECK (price >= 0),
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE INDEX idx_order_items_order ON order_items(order_id);
CREATE INDEX idx_order_items_plan ON order_items(plan_id);

-- ============================================
-- 5. ROW LEVEL SECURITY (RLS)
-- ============================================
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Helper: check if user is admin
CREATE OR REPLACE FUNCTION is_admin(uid UUID)
RETURNS BOOLEAN AS $$
  SELECT COALESCE(
    (SELECT is_admin FROM profiles WHERE id = uid),
    false
  );
$$ LANGUAGE sql SECURITY DEFINER STABLE;

-- Profiles
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Admins can view all profiles"
  ON profiles FOR SELECT USING (is_admin(auth.uid()));

-- Plans: public read published, admin full access
CREATE POLICY "Anyone can view published plans"
  ON plans FOR SELECT USING (is_published = true);
CREATE POLICY "Admins can view all plans"
  ON plans FOR SELECT USING (is_admin(auth.uid()));
CREATE POLICY "Admins can insert plans"
  ON plans FOR INSERT WITH CHECK (is_admin(auth.uid()));
CREATE POLICY "Admins can update plans"
  ON plans FOR UPDATE USING (is_admin(auth.uid()));
CREATE POLICY "Admins can delete plans"
  ON plans FOR DELETE USING (is_admin(auth.uid()));

-- Orders
CREATE POLICY "Users can view own orders"
  ON orders FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create own orders"
  ON orders FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Admins can view all orders"
  ON orders FOR SELECT USING (is_admin(auth.uid()));
CREATE POLICY "Admins can update orders"
  ON orders FOR UPDATE USING (is_admin(auth.uid()));

-- Order items
CREATE POLICY "Users can view own order items"
  ON order_items FOR SELECT
  USING (EXISTS (SELECT 1 FROM orders WHERE orders.id = order_items.order_id AND orders.user_id = auth.uid()));
CREATE POLICY "Users can create order items for own orders"
  ON order_items FOR INSERT
  WITH CHECK (EXISTS (SELECT 1 FROM orders WHERE orders.id = order_items.order_id AND orders.user_id = auth.uid()));
CREATE POLICY "Admins can view all order items"
  ON order_items FOR SELECT USING (is_admin(auth.uid()));

-- ============================================
-- 6. STORAGE BUCKET (plan images)
-- ============================================
INSERT INTO storage.buckets (id, name, public) VALUES ('plan-images', 'plan-images', true);

CREATE POLICY "Public read access for plan images"
  ON storage.objects FOR SELECT USING (bucket_id = 'plan-images');
CREATE POLICY "Admins can upload plan images"
  ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'plan-images' AND is_admin(auth.uid()));
CREATE POLICY "Admins can delete plan images"
  ON storage.objects FOR DELETE USING (bucket_id = 'plan-images' AND is_admin(auth.uid()));

-- ============================================
-- 7. SEED DATA (your existing 6 plans)
-- ============================================
INSERT INTO plans (name, slug, type, description, price, est_build_cost, beds, baths, sqft, sku, features, is_published) VALUES
(
  'Modern Villa Plan', 'modern-villa-plan', 'Residential',
  'Contemporary 4-bedroom villa with open-plan living, private pool, and landscaped garden.',
  250000, '₦15M+', 4, 3, 3200, 'RMV-2024-VR',
  ARRAY['4 Bedrooms', '3 Bathrooms', 'Double Garage', 'Pool Area', 'Smart Home'], true
),
(
  'Urban Apartment Complex', 'urban-apartment-complex', 'Commercial',
  '12-unit apartment block with modern amenities, parking, and communal spaces.',
  750000, '₦45M+', 12, 12, 8500, 'RMV-2024-UC',
  ARRAY['12 Units', 'Parking Garage', 'Elevator', 'Security', 'Generator'], true
),
(
  'Executive Duplex', 'executive-duplex', 'Residential',
  'Luxury 5-bedroom duplex with study, cinema room, and servant quarters.',
  350000, '₦22M+', 5, 4, 4100, 'RMV-2024-ED',
  ARRAY['5 Bedrooms', 'Cinema Room', 'Study', 'Maid Quarters', 'BQ'], true
),
(
  'Commercial Office Block', 'commercial-office-block', 'Commercial',
  'Multi-story office building with conference rooms, parking, and retail space.',
  1200000, '₦85M+', 0, 8, 12000, 'RMV-2024-CO',
  ARRAY['5 Floors', 'Conference Hall', 'Retail Space', 'Underground Parking', 'Fiber'], true
),
(
  'Terrace Houses', 'terrace-houses', 'Multi-Family',
  'Set of 4 terraced houses with shared amenities and private gardens.',
  450000, '₦28M+', 3, 3, 2800, 'RMV-2024-TH',
  ARRAY['3 Bedrooms Each', 'Private Garden', 'Shared Pool', '24/7 Security', 'Estate'], true
),
(
  'Hospitality Resort', 'hospitality-resort', 'Commercial',
  'Boutique resort with 20 rooms, restaurant, spa, and conference facility.',
  3500000, '₦250M+', 20, 20, 25000, 'RMV-2024-HR',
  ARRAY['20 Rooms', 'Restaurant', 'Spa & Gym', 'Conference Hall', 'Pool'], true
);
