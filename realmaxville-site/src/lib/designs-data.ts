export interface Design {
  slug: string;
  name: string;
  type: "RESIDENTIAL" | "COMMERCIAL" | "MIXED-USE";
  priceUSD: number;
  dodoProductId: string; // from Dodo dashboard — create product first, paste ID here
  beds: number;
  baths: number;
  area: string;
  description: string;
  details: string;
  features: string[];
  cover: string;
  floorPlan: string;
}

export const designs: Design[] = [
  {
    slug: "lagos-villa",
    name: "Lagos Villa",
    type: "RESIDENTIAL",
    priceUSD: 1500,
    dodoProductId: "pdt_lagos_villa", // TODO: replace with actual Dodo product ID
    beds: 4,
    baths: 3,
    area: "320 m²",
    description: "A contemporary 4-bedroom villa with open-plan living, private garden, and rooftop terrace. Designed for tropical comfort with cross-ventilation and natural light.",
    details: "This design maximizes natural ventilation through strategic window placement and open corridors. The ground floor features an open kitchen, living, and dining area that flows into a private garden. The upper floor houses four en-suite bedrooms with a shared family lounge. Materials include exposed concrete, local stone, and timber accents.",
    features: ["Rooftop Terrace", "Private Garden", "Smart Wiring", "Solar Ready", "Staff Quarter"],
    cover: "/images/projects/mrs-margaret/1.jpg",
    floorPlan: "/images/projects/mrs-margaret/2.jpg",
  },
  {
    slug: "eko-residence",
    name: "Eko Residence",
    type: "RESIDENTIAL",
    priceUSD: 2200,
    dodoProductId: "pdt_eko_residence", // TODO: replace with actual Dodo product ID
    beds: 5,
    baths: 4,
    area: "480 m²",
    description: "A luxury 5-bedroom residence with home cinema, gym, and infinity pool. Premium finishes throughout with imported fixtures and smart home integration.",
    details: "This premium residence is designed for the discerning homeowner. Features include a double-height living room, wine cellar, cinema room, and a fully equipped gym. The master suite occupies an entire wing with walk-in closet and spa bathroom. The exterior features an infinity pool with landscaped gardens.",
    features: ["Infinity Pool", "Home Cinema", "Gym", "Wine Cellar", "Smart Home", "Staff Quarter"],
    cover: "/images/projects/mrs-margaret/3.jpg",
    floorPlan: "/images/projects/mrs-margaret/4.jpg",
  },
  {
    slug: "island-duplex",
    name: "Island Duplex",
    type: "RESIDENTIAL",
    priceUSD: 1100,
    dodoProductId: "pdt_island_duplex", // TODO: replace with actual Dodo product ID
    beds: 3,
    baths: 2,
    area: "250 m²",
    description: "A modern 3-bedroom duplex perfect for young professionals. Compact yet spacious design with parking for two vehicles and a private courtyard.",
    details: "Designed for efficient urban living, this duplex maximizes every square meter. The ground floor features an open-plan kitchen and living area with a private courtyard for outdoor dining. The upper floor has three bedrooms with the master featuring a walk-in closet. Built-in storage throughout reduces clutter.",
    features: ["Private Courtyard", "Built-in Storage", "Two-Car Garage", "Generator Space", "Water Treatment"],
    cover: "/images/projects/mrs-margaret/5.jpg",
    floorPlan: "/images/projects/mrs-margaret/1.jpg",
  },
  {
    slug: "marina-office",
    name: "Marina Office",
    type: "COMMERCIAL",
    priceUSD: 1800,
    dodoProductId: "pdt_marina_office", // TODO: replace with actual Dodo product ID
    beds: 0,
    baths: 2,
    area: "200 m²",
    description: "A sleek 200m² office space with open floor plan, two meeting rooms, and reception area. Designed for productivity with acoustic panels and LED lighting.",
    details: "This commercial office design prioritizes functionality and modern aesthetics. The open floor plan accommodates up to 20 workstations with dedicated zones for collaboration and focus. Two meeting rooms with soundproofing, a reception area, and pantry complete the layout. Floor-to-ceiling windows provide abundant natural light.",
    features: ["Open Floor Plan", "Meeting Rooms", "Acoustic Panels", "LED Lighting", "Reception Area"],
    cover: "/images/projects/mrs-margaret/2.jpg",
    floorPlan: "/images/projects/mrs-margaret/3.jpg",
  },
  {
    slug: "victoria-tower",
    name: "Victoria Tower",
    type: "COMMERCIAL",
    priceUSD: 3200,
    dodoProductId: "pdt_victoria_tower", // TODO: replace with actual Dodo product ID
    beds: 0,
    baths: 3,
    area: "350 m²",
    description: "A multi-story commercial building with retail ground floor, office spaces, and penthouse suite. Mixed-use design for maximum rental yield.",
    details: "Victoria Tower is a three-story commercial building designed for mixed revenue streams. The ground floor features retail spaces with street-facing facades. The first and second floors house flexible office spaces that can be configured as open plan or partitioned. The penthouse suite serves as a premium executive office or residential unit.",
    features: ["Retail Ground Floor", "Flexible Offices", "Penthouse Suite", "Elevator Shaft", "Backup Power"],
    cover: "/images/projects/mrs-margaret/4.jpg",
    floorPlan: "/images/projects/mrs-margaret/5.jpg",
  },
  {
    slug: "lekki-mixed-use",
    name: "Lekki Mixed-Use",
    type: "MIXED-USE",
    priceUSD: 2500,
    dodoProductId: "pdt_lekki_mixed", // TODO: replace with actual Dodo product ID
    beds: 2,
    baths: 2,
    area: "280 m²",
    description: "A versatile mixed-use building with 2 residential units and commercial space. Ideal for investors seeking rental income from both residential and commercial tenants.",
    details: "This mixed-use design combines two self-contained residential apartments on the upper floors with a commercial space on the ground floor. Each residential unit features two bedrooms, a living area, kitchen, and balcony. The ground floor commercial space has its own entrance and can accommodate a shop, clinic, or office.",
    features: ["2 Residential Units", "Commercial Space", "Separate Entrances", "Balconies", "Parking Lot"],
    cover: "/images/projects/mrs-margaret/1.jpg",
    floorPlan: "/images/projects/mrs-margaret/2.jpg",
  },
];

export function getDesignBySlug(slug: string): Design | undefined {
  return designs.find((d) => d.slug === slug);
}
