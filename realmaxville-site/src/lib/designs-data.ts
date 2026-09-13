export interface DesignImage {
  src: string;
  alt: string;
  caption: string;
}

export interface Design {
  slug: string;
  name: string;
  type: "RESIDENTIAL" | "COMMERCIAL" | "MIXED-USE";
  priceUSD: number;
  dodoProductId: string;
  beds: number;
  baths: number;
  area: string;
  description: string;
  details: string;
  features: string[];
  cover: string;
  floorPlan: string;
  gallery: DesignImage[];
}

export const designs: Design[] = [
  {
    slug: "lagos-villa",
    name: "Lagos Villa",
    type: "RESIDENTIAL",
    priceUSD: 1500,
    dodoProductId: "pdt_lagos_villa",
    beds: 4,
    baths: 3,
    area: "320 m²",
    description: "A contemporary 4-bedroom villa with open-plan living, private garden, and rooftop terrace. Designed for tropical comfort with cross-ventilation and natural light.",
    details: "This design maximizes natural ventilation through strategic window placement and open corridors. The ground floor features an open kitchen, living, and dining area that flows into a private garden. The upper floor houses four en-suite bedrooms with a shared family lounge. Materials include exposed concrete, local stone, and timber accents.",
    features: ["Rooftop Terrace", "Private Garden", "Smart Wiring", "Solar Ready", "Staff Quarter"],
    cover: "/images/projects/mrs-margaret/1.jpg",
    floorPlan: "/images/projects/mrs-margaret/2.jpg",
    gallery: [
      { src: "/images/projects/mrs-margaret/1.jpg", alt: "Lagos Villa front elevation", caption: "Front Elevation — Contemporary facade with clean geometric lines" },
      { src: "/images/projects/mrs-margaret/2.jpg", alt: "Lagos Villa living area", caption: "Open-Plan Living — Floor-to-ceiling windows with garden views" },
      { src: "/images/projects/mrs-margaret/3.jpg", alt: "Lagos Villa kitchen", caption: "Modern Kitchen — Integrated appliances with island counter" },
      { src: "/images/projects/mrs-margaret/4.jpg", alt: "Lagos Villa master bedroom", caption: "Master Suite — En-suite with walk-in closet" },
      { src: "/images/projects/mrs-margaret/5.jpg", alt: "Lagos Villa rooftop terrace", caption: "Rooftop Terrace — Outdoor entertaining with city views" },
      { src: "/images/projects/double-face-home/1.jpg", alt: "Lagos Villa garden view", caption: "Private Garden — Landscaped courtyard with water feature" },
    ],
  },
  {
    slug: "eko-residence",
    name: "Eko Residence",
    type: "RESIDENTIAL",
    priceUSD: 2200,
    dodoProductId: "pdt_eko_residence",
    beds: 5,
    baths: 4,
    area: "480 m²",
    description: "A luxury 5-bedroom residence with home cinema, gym, and infinity pool. Premium finishes throughout with imported fixtures and smart home integration.",
    details: "This premium residence is designed for the discerning homeowner. Features include a double-height living room, wine cellar, cinema room, and a fully equipped gym. The master suite occupies an entire wing with walk-in closet and spa bathroom. The exterior features an infinity pool with landscaped gardens.",
    features: ["Infinity Pool", "Home Cinema", "Gym", "Wine Cellar", "Smart Home", "Staff Quarter"],
    cover: "/images/projects/double-face-home/1.jpg",
    floorPlan: "/images/projects/double-face-home/2.jpg",
    gallery: [
      { src: "/images/projects/double-face-home/1.jpg", alt: "Eko Residence exterior", caption: "Grand Entrance — Double-height portico with marble columns" },
      { src: "/images/projects/double-face-home/2.jpg", alt: "Eko Residence living room", caption: "Double-Height Living — 6m ceiling with designer chandelier" },
      { src: "/images/projects/double-face-home/3.jpg", alt: "Eko Residence pool", caption: "Infinity Pool — Heated pool with LED lighting" },
      { src: "/images/projects/mabushi-villa/1.jpg", alt: "Eko Residence master suite", caption: "Master Wing — Private lounge with panoramic windows" },
      { src: "/images/projects/mabushi-villa/2.jpg", alt: "Eko Residence cinema", caption: "Home Cinema — 12-seat theatre with Dolby Atmos" },
      { src: "/images/projects/mabushi-villa/3.jpg", alt: "Eko Residence gym", caption: "Private Gym — 80m² with professional equipment" },
    ],
  },
  {
    slug: "island-duplex",
    name: "Island Duplex",
    type: "RESIDENTIAL",
    priceUSD: 1100,
    dodoProductId: "pdt_island_duplex",
    beds: 3,
    baths: 2,
    area: "250 m²",
    description: "A modern 3-bedroom duplex perfect for young professionals. Compact yet spacious design with parking for two vehicles and a private courtyard.",
    details: "Designed for efficient urban living, this duplex maximizes every square meter. The ground floor features an open-plan kitchen and living area with a private courtyard for outdoor dining. The upper floor has three bedrooms with the master featuring a walk-in closet. Built-in storage throughout reduces clutter.",
    features: ["Private Courtyard", "Built-in Storage", "Two-Car Garage", "Generator Space", "Water Treatment"],
    cover: "/images/projects/residential-apartment/1.jpg",
    floorPlan: "/images/projects/residential-apartment/2.jpg",
    gallery: [
      { src: "/images/projects/residential-apartment/1.jpg", alt: "Island Duplex exterior", caption: "Modern Facade — Clean lines with cantilevered balcony" },
      { src: "/images/projects/residential-apartment/2.jpg", alt: "Island Duplex living area", caption: "Open Living — Compact layout with maximum natural light" },
      { src: "/images/projects/residential-apartment/3.jpg", alt: "Island Duplex kitchen", caption: "Fitted Kitchen — Custom cabinetry with stone countertops" },
      { src: "/images/projects/danke-gott-jade/1.jpg", alt: "Island Duplex bedroom", caption: "Master Bedroom — En-suite with built-in wardrobes" },
      { src: "/images/projects/danke-gott-jade/2.jpg", alt: "Island Duplex courtyard", caption: "Private Courtyard — Outdoor dining with pergola" },
    ],
  },
  {
    slug: "marina-office",
    name: "Marina Office",
    type: "COMMERCIAL",
    priceUSD: 1800,
    dodoProductId: "pdt_marina_office",
    beds: 0,
    baths: 2,
    area: "200 m²",
    description: "A sleek 200m² office space with open floor plan, two meeting rooms, and reception area. Designed for productivity with acoustic panels and LED lighting.",
    details: "This commercial office design prioritizes functionality and modern aesthetics. The open floor plan accommodates up to 20 workstations with dedicated zones for collaboration and focus. Two meeting rooms with soundproofing, a reception area, and pantry complete the layout. Floor-to-ceiling windows provide abundant natural light.",
    features: ["Open Floor Plan", "Meeting Rooms", "Acoustic Panels", "LED Lighting", "Reception Area"],
    cover: "/images/projects/kaduna-conference-center/1.jpg",
    floorPlan: "/images/projects/kaduna-conference-center/2.jpg",
    gallery: [
      { src: "/images/projects/kaduna-conference-center/1.jpg", alt: "Marina Office entrance", caption: "Reception Area — Glass-partitioned entrance with waiting lounge" },
      { src: "/images/projects/kaduna-conference-center/2.jpg", alt: "Marina Office open plan", caption: "Open Workspace — 20 workstations with ergonomic layout" },
      { src: "/images/projects/kaduna-conference-center/3.jpg", alt: "Marina Office meeting room", caption: "Meeting Room — 12-person boardroom with AV equipment" },
      { src: "/images/projects/kaduna-conference-center/4.jpg", alt: "Marina Office breakout", caption: "Breakout Zone — Informal collaboration space" },
      { src: "/images/projects/blocks-of-flat/1.jpg", alt: "Marina Office exterior", caption: "Building Facade — Curtain wall glazing with structural frame" },
    ],
  },
  {
    slug: "victoria-tower",
    name: "Victoria Tower",
    type: "COMMERCIAL",
    priceUSD: 3200,
    dodoProductId: "pdt_victoria_tower",
    beds: 0,
    baths: 3,
    area: "350 m²",
    description: "A multi-story commercial building with retail ground floor, office spaces, and penthouse suite. Mixed-use design for maximum rental yield.",
    details: "Victoria Tower is a three-story commercial building designed for mixed revenue streams. The ground floor features retail spaces with street-facing facades. The first and second floors house flexible office spaces that can be configured as open plan or partitioned. The penthouse suite serves as a premium executive office or residential unit.",
    features: ["Retail Ground Floor", "Flexible Offices", "Penthouse Suite", "Elevator Shaft", "Backup Power"],
    cover: "/images/projects/blocks-of-flat/1.jpg",
    floorPlan: "/images/projects/blocks-of-flat/2.jpg",
    gallery: [
      { src: "/images/projects/blocks-of-flat/1.jpg", alt: "Victoria Tower exterior", caption: "Tower Overview — Three-story mixed-use commercial building" },
      { src: "/images/projects/blocks-of-flat/2.jpg", alt: "Victoria Tower retail", caption: "Ground Floor Retail — Street-facing glass storefronts" },
      { src: "/images/projects/blocks-of-flat/3.jpg", alt: "Victoria Tower office floor", caption: "Office Floors — Flexible open-plan or partitioned layout" },
      { src: "/images/projects/blocks-of-flat/4.jpg", alt: "Victoria Tower penthouse", caption: "Penthouse Suite — Premium executive space with terrace" },
      { src: "/images/projects/blocks-of-flat/5.jpg", alt: "Victoria Tower elevator", caption: "Elevator Lobby — Modern lift system with waiting area" },
      { src: "/images/projects/blocks-of-flat/6.jpg", alt: "Victoria Tower parking", caption: "Parking Garage — Covered parking with security system" },
    ],
  },
  {
    slug: "lekki-mixed-use",
    name: "Lekki Mixed-Use",
    type: "MIXED-USE",
    priceUSD: 2500,
    dodoProductId: "pdt_lekki_mixed",
    beds: 2,
    baths: 2,
    area: "280 m²",
    description: "A versatile mixed-use building with 2 residential units and commercial space. Ideal for investors seeking rental income from both residential and commercial tenants.",
    details: "This mixed-use design combines two self-contained residential apartments on the upper floors with a commercial space on the ground floor. Each residential unit features two bedrooms, a living area, kitchen, and balcony. The ground floor commercial space has its own entrance and can accommodate a shop, clinic, or office.",
    features: ["2 Residential Units", "Commercial Space", "Separate Entrances", "Balconies", "Parking Lot"],
    cover: "/images/projects/transient-hospital/1.jpg",
    floorPlan: "/images/projects/transient-hospital/2.jpg",
    gallery: [
      { src: "/images/projects/transient-hospital/1.jpg", alt: "Lekki Mixed-Use exterior", caption: "Building Overview — Ground floor commercial with residential above" },
      { src: "/images/projects/transient-hospital/2.jpg", alt: "Lekki Mixed-Use commercial", caption: "Ground Floor Commercial — Versatile retail/office space" },
      { src: "/images/projects/transient-hospital/3.jpg", alt: "Lekki Mixed-Use residential", caption: "Residential Unit — 2-bedroom apartment with modern finishes" },
      { src: "/images/projects/transient-hospital/4.jpg", alt: "Lekki Mixed-Use kitchen", caption: "Unit Kitchen — Fully fitted with breakfast bar" },
      { src: "/images/projects/transient-hospital/5.jpg", alt: "Lekki Mixed-Use balcony", caption: "Private Balcony — Outdoor space for each residential unit" },
      { src: "/images/projects/transient-hospital/6.jpg", alt: "Lekki Mixed-Use parking", caption: "Parking Lot — Dedicated spaces for commercial and residential" },
    ],
  },
];

export function getDesignBySlug(slug: string): Design | undefined {
  return designs.find((d) => d.slug === slug);
}
