export interface Project {
  slug: string;
  name: string;
  location: string;
  type: string;
  year: string;
  area: string;
  client: string;
  status: string;
  description: string;
  details: string;
  cover: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    slug: "mrs-margaret",
    name: "Mrs Margaret",
    location: "Lagos, Nigeria",
    type: "RESIDENTIAL",
    year: "2023",
    area: "450 m²",
    client: "Private Client",
    status: "Completed",
    description: "A stunning contemporary residence featuring clean geometric lines, floor-to-ceiling glazing, and a seamless indoor-outdoor living experience.",
    details: "The design maximizes natural light while maintaining privacy through strategic screening elements. Every room was carefully oriented to capture cross-ventilation, reducing reliance on mechanical cooling. The material palette blends exposed concrete, warm timber, and steel accents to create a home that feels both modern and inviting.",
    cover: "/images/projects/mrs-margaret/1.jpg",
    gallery: [
      "/images/projects/mrs-margaret/1.jpg",
      "/images/projects/mrs-margaret/2.jpg",
      "/images/projects/mrs-margaret/3.jpg",
      "/images/projects/mrs-margaret/4.jpg",
      "/images/projects/mrs-margaret/5.jpg",
    ],
  },
  {
    slug: "blocks-of-flat",
    name: "Blocks of Flat",
    location: "Lagos, Nigeria",
    type: "MULTI-FAMILY",
    year: "2024",
    area: "3,200 m²",
    client: "Realmaxville Development",
    status: "Completed",
    description: "A modern multi-family residential development designed to optimize density without compromising on livability.",
    details: "Features shared amenity spaces, sustainable systems, and a facade that creates visual rhythm across the streetscape. Each unit enjoys private outdoor space and generous ceiling heights. The building incorporates rainwater harvesting, solar-ready rooftops, and landscaped communal courtyards that foster a sense of community.",
    cover: "/images/projects/blocks-of-flat/1.jpg",
    gallery: [
      "/images/projects/blocks-of-flat/1.jpg",
      "/images/projects/blocks-of-flat/2.jpg",
      "/images/projects/blocks-of-flat/3.jpg",
      "/images/projects/blocks-of-flat/4.jpg",
      "/images/projects/blocks-of-flat/5.jpg",
      "/images/projects/blocks-of-flat/6.jpg",
    ],
  },
  {
    slug: "double-face-home",
    name: "Double Face Home",
    location: "Lagos, Nigeria",
    type: "RESIDENTIAL",
    year: "2023",
    area: "380 m²",
    client: "Private Client",
    status: "Completed",
    description: "An innovative dual-frontage residence that presents distinct architectural expressions on each street.",
    details: "The concept plays with the idea of a building having two personalities — formal and private — connected by a central courtyard. The public facade is bold and geometric, while the rear opens up to a lush garden with floor-to-ceiling sliding doors. A double-height living space acts as the heart of the home, linking both faces seamlessly.",
    cover: "/images/projects/double-face-home/1.jpg",
    gallery: [
      "/images/projects/double-face-home/1.jpg",
      "/images/projects/double-face-home/2.jpg",
      "/images/projects/double-face-home/3.jpg",
    ],
  },
  {
    slug: "transient-hospital",
    name: "Transient Hospital",
    location: "Enugu, Nigeria",
    type: "HEALTHCARE",
    year: "2022",
    area: "1,800 m²",
    client: "Enugu State Health Board",
    status: "Completed",
    description: "A purpose-built healthcare facility designed for rapid deployment and efficient patient flow.",
    details: "The modular design allows for future expansion while maintaining operational efficiency and a healing environment for patients. Wayfinding is intuitive, with clear sightlines from reception to all departments. Natural ventilation corridors and daylighting strategies reduce energy costs while creating a calming atmosphere for recovery.",
    cover: "/images/projects/transient-hospital/1.jpg",
    gallery: [
      "/images/projects/transient-hospital/1.jpg",
      "/images/projects/transient-hospital/2.jpg",
      "/images/projects/transient-hospital/3.jpg",
      "/images/projects/transient-hospital/4.jpg",
      "/images/projects/transient-hospital/5.jpg",
      "/images/projects/transient-hospital/6.jpg",
    ],
  },
  {
    slug: "kaduna-conference-center",
    name: "Kaduna Conference Center",
    location: "Kaduna, Nigeria",
    type: "COMMERCIAL",
    year: "2024",
    area: "2,500 m²",
    client: "Kaduna State Government",
    status: "Completed",
    description: "A landmark commercial conference center featuring a dramatic cantilevered roof structure and expansive column-free interior spaces.",
    details: "The design incorporates local materials and passive cooling strategies suited to the regional climate. The main hall accommodates up to 800 guests with state-of-the-art audiovisual systems. Landscaped plazas and covered walkways connect the conference halls to executive meeting rooms and a VIP lounge.",
    cover: "/images/projects/kaduna-conference-center/1.jpg",
    gallery: [
      "/images/projects/kaduna-conference-center/1.jpg",
      "/images/projects/kaduna-conference-center/2.jpg",
      "/images/projects/kaduna-conference-center/3.jpg",
      "/images/projects/kaduna-conference-center/4.jpg",
    ],
  },
  {
    slug: "mabushi-villa",
    name: "Mabushi Villa",
    location: "Abuja, Nigeria",
    type: "RESIDENTIAL",
    year: "2023",
    area: "620 m²",
    client: "Private Client",
    status: "Completed",
    description: "A luxurious villa nestled in Abuja's upscale Mabushi district.",
    details: "The design draws from traditional Nigerian compound living while embracing contemporary minimalism, featuring expansive gardens, a private pool, and smart home integration. Spacious entertaining areas flow seamlessly into outdoor terraces. Premium finishes throughout include Italian marble, custom millwork, and designer lighting.",
    cover: "/images/projects/mabushi-villa/1.jpg",
    gallery: [
      "/images/projects/mabushi-villa/1.jpg",
      "/images/projects/mabushi-villa/2.jpg",
      "/images/projects/mabushi-villa/3.jpg",
    ],
  },
  {
    slug: "danke-gott-project-jade",
    name: "Danke Gott Project Jade",
    location: "Lagos, Nigeria",
    type: "RESIDENTIAL",
    year: "2024",
    area: "520 m²",
    client: "Danke Gott Properties",
    status: "Completed",
    description: "A premium residential development characterized by its jade-green tinted glass facade and organic architectural form.",
    details: "The building stands as a beacon of modern luxury with panoramic views and state-of-the-art finishes throughout. The distinctive glass curtain wall reflects the surrounding skyline while interior spaces feature open-plan layouts, Italian kitchen systems, and spa-inspired bathrooms.",
    cover: "/images/projects/danke-gott-jade/1.jpg",
    gallery: [
      "/images/projects/danke-gott-jade/1.jpg",
      "/images/projects/danke-gott-jade/2.jpg",
    ],
  },
  {
    slug: "residential-apartment",
    name: "Residential Apartment",
    location: "Lagos, Nigeria",
    type: "RESIDENTIAL",
    year: "2023",
    area: "280 m²",
    client: "Private Client",
    status: "Completed",
    description: "A thoughtfully designed apartment building that maximizes limited urban space.",
    details: "Each unit features open-plan living, private balconies, and cross-ventilation. The facade uses a dynamic pattern of screens that filter light and provide privacy. Efficient floor plans ensure every square meter is functional, while shared rooftop amenities provide residents with city views and social spaces.",
    cover: "/images/projects/residential-apartment/1.jpg",
    gallery: [
      "/images/projects/residential-apartment/1.jpg",
      "/images/projects/residential-apartment/2.jpg",
      "/images/projects/residential-apartment/3.jpg",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
