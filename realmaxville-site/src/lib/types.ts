export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      plans: {
        Row: Plan;
        Insert: PlanInsert;
        Update: PlanUpdate;
      };
      profiles: {
        Row: Profile;
        Insert: ProfileInsert;
        Update: Partial<Omit<Profile, "id" | "created_at">>;
      };
      orders: {
        Row: Order;
        Insert: OrderInsert;
        Update: Partial<Omit<Order, "id" | "created_at">>;
      };
      order_items: {
        Row: OrderItem;
        Insert: OrderItemInsert;
        Update: Partial<Omit<OrderItem, "id" | "created_at">>;
      };
    };
  };
}

export interface Plan {
  id: string;
  name: string;
  slug: string;
  type: "Residential" | "Commercial" | "Multi-Family";
  description: string;
  price: number;
  est_build_cost: string;
  beds: number;
  baths: number;
  sqft: number;
  sku: string;
  features: string[];
  image_url: string | null;
  gallery_urls: string[];
  pdf_url: string | null;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export type PlanInsert = Omit<Plan, "id" | "created_at" | "updated_at">;
export type PlanUpdate = Partial<Omit<Plan, "id" | "created_at">>;

export interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  phone: string | null;
  is_admin: boolean;
  created_at: string;
}

export type ProfileInsert = Omit<Profile, "created_at">;

export interface Order {
  id: string;
  user_id: string;
  status: "pending" | "paid" | "failed" | "refunded";
  total: number;
  payment_reference: string | null;
  created_at: string;
  updated_at: string;
}

export type OrderInsert = Omit<Order, "id" | "created_at" | "updated_at">;

export interface OrderItem {
  id: string;
  order_id: string;
  plan_id: string;
  price: number;
  created_at: string;
}

export type OrderItemInsert = Omit<OrderItem, "id" | "created_at">;

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
