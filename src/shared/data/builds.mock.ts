import { BuildModel } from "@domain/build/model/types";

export const MOCK_BUILDS: BuildModel[] = [
  {
    id: "b_01",
    slug: "neon-cyber-hub",
    title: "Neon Cyber Hub",
    description:
      "Futuristic spawn platform with layered holographic roads and immersive neon accents.",
    images: [
      { id: "a1", imageUrl: "/images/build-1-a.svg", alt: "Neon Cyber Hub main view" },
      { id: "a2", imageUrl: "/images/build-1-b.svg", alt: "Neon Cyber Hub side view" },
      { id: "a3", imageUrl: "/images/build-1-c.svg", alt: "Neon Cyber Hub top view" }
    ],
    fileUrl: "/files/neon-cyber-hub.schem",
    format: "schem",
    sizeBytes: 4_125_211,
    author: "AstraForge",
    dateAdded: "2026-03-14T11:24:10.000Z",
    version: "1.4.0",
    tags: ["spawn", "futuristic", "pvp-ready"],
    categories: ["Hub", "Sci-Fi"],
    metadata: {
      dimensions: "256x124x256",
      blocks: 158234,
      worldEditCompatible: true,
      sourceGameVersion: "1.20.4"
    }
  },
  {
    id: "b_02",
    slug: "orbital-market-district",
    title: "Orbital Market District",
    description:
      "Complete market zone with custom stalls, transport nodes and adaptable city modules.",
    images: [
      { id: "b1", imageUrl: "/images/build-2-a.svg", alt: "Orbital Market plaza" },
      { id: "b2", imageUrl: "/images/build-2-b.svg", alt: "Orbital Market interior" }
    ],
    fileUrl: "/files/orbital-market-district.litematic",
    format: "litematic",
    sizeBytes: 8_662_110,
    author: "VoxelCrafter",
    dateAdded: "2026-02-27T09:40:00.000Z",
    version: "2.1.2",
    tags: ["city", "trading", "survival"],
    categories: ["District", "Economy"],
    metadata: {
      dimensions: "410x96x390",
      blocks: 232100,
      worldEditCompatible: false,
      sourceGameVersion: "1.21.1"
    }
  },
  {
    id: "b_03",
    slug: "obsidian-fortress-prime",
    title: "Obsidian Fortress Prime",
    description:
      "Defensive megastructure with layered walls, gate systems and boss-arena integration.",
    images: [
      { id: "c1", imageUrl: "/images/build-3-a.svg", alt: "Obsidian Fortress gate" },
      { id: "c2", imageUrl: "/images/build-3-b.svg", alt: "Obsidian Fortress courtyard" }
    ],
    fileUrl: "/files/obsidian-fortress-prime.nbt",
    format: "nbt",
    sizeBytes: 5_312_884,
    author: "BedrockLabs",
    dateAdded: "2026-01-19T15:12:00.000Z",
    version: "1.0.9",
    tags: ["castle", "rpg", "defense"],
    categories: ["Fortress", "Adventure"],
    metadata: {
      dimensions: "320x180x280",
      blocks: 190553,
      worldEditCompatible: true,
      sourceGameVersion: "1.20.6"
    }
  }
];
