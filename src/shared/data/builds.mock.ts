import { BuildModel } from "@domain/build/model/types";

export const MOCK_BUILDS: BuildModel[] = [
  {
    id: "b_01",
    slug: "200x200survipvp",
    title: "200x200 SurviPvP",
    description:
      "Compact PvP survival arena with balanced layout for fast server events and minigames.",
    images: [
      { id: "a1", imageUrl: "200x200survipvp/1.jpg", alt: "200x200 SurviPvP preview 1" },
      { id: "a2", imageUrl: "200x200survipvp/2.jpg", alt: "200x200 SurviPvP preview 2" },
      { id: "a3", imageUrl: "200x200survipvp/3.jpg", alt: "200x200 SurviPvP preview 3" },
      { id: "a4", imageUrl: "200x200survipvp/4.jpg", alt: "200x200 SurviPvP preview 4" },
      { id: "a5", imageUrl: "200x200survipvp/5.jpg", alt: "200x200 SurviPvP preview 5" },
      { id: "a6", imageUrl: "200x200survipvp/6.jpg", alt: "200x200 SurviPvP preview 6" }
    ],
    fileUrl: "200x200survipvp/200x200survipvp.schem",
    format: "schem",
    sizeBytes: 345_057,
    author: "Zoobastiks",
    dateAdded: "2026-04-26T04:43:00.000Z",
    version: "1.0.0",
    tags: ["pvp", "survival", "arena"],
    categories: ["PvP", "Arena"],
    metadata: {
      dimensions: "200x200",
      blocks: 0,
      worldEditCompatible: true,
      sourceGameVersion: "1.20+"
    }
  },
  {
    id: "b_02",
    slug: "largespawn",
    title: "Large Spawn",
    description:
      "Large spawn area for multiplayer server entry points with broad navigation space.",
    images: [
      { id: "b1", imageUrl: "largespawn/19686751_xl.jpg", alt: "Large Spawn preview 1" },
      { id: "b2", imageUrl: "largespawn/19686752_xl.jpg", alt: "Large Spawn preview 2" }
    ],
    fileUrl: "largespawn/largespawn.schem",
    format: "schem",
    sizeBytes: 826_022,
    author: "Zoobastiks",
    dateAdded: "2026-04-26T04:45:00.000Z",
    version: "1.0.0",
    tags: ["spawn", "hub", "server"],
    categories: ["Spawn", "Hub"],
    metadata: {
      dimensions: "Large",
      blocks: 0,
      worldEditCompatible: true,
      sourceGameVersion: "1.20+"
    }
  },
  {
    id: "b_03",
    slug: "locomotive",
    title: "Locomotive",
    description:
      "Decorative locomotive build suitable for steampunk zones, stations and roleplay maps.",
    images: [
      { id: "c1", imageUrl: "locomotive/19675659_xl.jpg", alt: "Locomotive preview 1" },
      { id: "c2", imageUrl: "locomotive/19675662_xl.jpg", alt: "Locomotive preview 2" },
      { id: "c3", imageUrl: "locomotive/19675663_xl.jpg", alt: "Locomotive preview 3" },
      { id: "c4", imageUrl: "locomotive/19675665_xl.jpg", alt: "Locomotive preview 4" }
    ],
    fileUrl: "locomotive/locomotive.schem",
    format: "schem",
    sizeBytes: 9_628,
    author: "Zoobastiks",
    dateAdded: "2026-04-26T04:46:00.000Z",
    version: "1.0.0",
    tags: ["train", "transport", "steampunk"],
    categories: ["Decoration", "Vehicle"],
    metadata: {
      dimensions: "Small",
      blocks: 0,
      worldEditCompatible: true,
      sourceGameVersion: "1.20+"
    }
  },
  {
    id: "b_04",
    slug: "zpanzer",
    title: "Z Panzer",
    description:
      "Military-themed armored vehicle build for war servers and battlefield maps.",
    images: [
      { id: "d1", imageUrl: "Zpanzer/1.jpg", alt: "Z Panzer preview 1" },
      { id: "d2", imageUrl: "Zpanzer/2.jpg", alt: "Z Panzer preview 2" },
      { id: "d3", imageUrl: "Zpanzer/3.jpg", alt: "Z Panzer preview 3" }
    ],
    fileUrl: "Zpanzer/Z_panzer.schem",
    format: "schem",
    sizeBytes: 24_041,
    author: "Zoobastiks",
    dateAdded: "2026-04-26T04:39:00.000Z",
    version: "1.0.0",
    tags: ["tank", "military", "vehicle"],
    categories: ["Vehicle", "Military"],
    metadata: {
      dimensions: "Medium",
      blocks: 0,
      worldEditCompatible: true,
      sourceGameVersion: "1.20+"
    }
  },
  {
    id: "b_05",
    slug: "zschem-city-rayone",
    title: "Zschem City Rayone",
    description:
      "City district build pack designed for urban roleplay and survival economy worlds.",
    images: [
      { id: "e1", imageUrl: "Zschem_city_rayone/1.jpg", alt: "Zschem City Rayone preview 1" },
      { id: "e2", imageUrl: "Zschem_city_rayone/2.jpg", alt: "Zschem City Rayone preview 2" },
      { id: "e3", imageUrl: "Zschem_city_rayone/3.jpg", alt: "Zschem City Rayone preview 3" },
      { id: "e4", imageUrl: "Zschem_city_rayone/4.jpg", alt: "Zschem City Rayone preview 4" }
    ],
    fileUrl: "Zschem_city_rayone/Zschem_city_rayone.schematic",
    format: "schematic",
    sizeBytes: 349_773,
    author: "Zoobastiks",
    dateAdded: "2026-04-26T04:22:00.000Z",
    version: "1.0.0",
    tags: ["city", "district", "roleplay"],
    categories: ["City", "Roleplay"],
    metadata: {
      dimensions: "Large",
      blocks: 0,
      worldEditCompatible: true,
      sourceGameVersion: "1.20+"
    }
  },
  {
    id: "b_06",
    slug: "z-small-starter-house",
    title: "Z Small Starter House",
    description:
      "Simple starter house for survival beginnings, compact and resource-friendly.",
    images: [
      { id: "f1", imageUrl: "Z_Small_starter_house/1.jpg", alt: "Starter house preview 1" },
      { id: "f2", imageUrl: "Z_Small_starter_house/2.jpg", alt: "Starter house preview 2" },
      { id: "f3", imageUrl: "Z_Small_starter_house/3.jpg", alt: "Starter house preview 3" }
    ],
    fileUrl: "Z_Small_starter_house/Z_Small_starter_house.schematic",
    format: "schematic",
    sizeBytes: 6_326,
    author: "Zoobastiks",
    dateAdded: "2026-04-26T04:39:00.000Z",
    version: "1.0.0",
    tags: ["starter", "survival", "house"],
    categories: ["House", "Survival"],
    metadata: {
      dimensions: "Small",
      blocks: 0,
      worldEditCompatible: true,
      sourceGameVersion: "1.20+"
    }
  },
  {
    id: "b_07",
    slug: "dragon-np",
    title: "Dragon NP",
    description:
      "Large fantasy dragon structure for adventure hubs and dark-fantasy server zones.",
    images: [
      { id: "g1", imageUrl: "DragonNP/19407511-minecraft-night_xl.jpg", alt: "Dragon NP preview 1" },
      { id: "g2", imageUrl: "DragonNP/19407513-minecraft-dragon_xl.jpg", alt: "Dragon NP preview 2" },
      { id: "g3", imageUrl: "DragonNP/19407514-minecraft-free_xl.jpg", alt: "Dragon NP preview 3" },
      { id: "g4", imageUrl: "DragonNP/19407516-minecraft-nether_xl.jpg", alt: "Dragon NP preview 4" },
      { id: "g5", imageUrl: "DragonNP/19407518-minecraft-download_xl.jpg", alt: "Dragon NP preview 5" },
      { id: "g6", imageUrl: "DragonNP/19407523-minecraft-vanilla_xl.jpg", alt: "Dragon NP preview 6" }
    ],
    fileUrl: "DragonNP/DragonNPv38-59.nbt",
    format: "nbt",
    downloadFiles: [
      {
        id: "gdl-1",
        format: "nbt",
        fileUrl: "DragonNP/DragonNPv38-59.nbt",
        sizeBytes: 599_777,
        label: "DragonNP .nbt"
      },
      {
        id: "gdl-2",
        format: "schem",
        fileUrl: "DragonNP/DragonNPv38-59.schem",
        sizeBytes: 13_064,
        label: "DragonNP .schem"
      },
      {
        id: "gdl-3",
        format: "litematic",
        fileUrl: "DragonNP/DragonNPv38-59.litematic",
        sizeBytes: 15_402,
        label: "DragonNP .litematic"
      }
    ],
    sizeBytes: 599_777,
    author: "Zoobastiks",
    dateAdded: "2026-04-26T06:42:00.000Z",
    version: "1.0.0",
    tags: ["dragon", "fantasy", "nether"],
    categories: ["Adventure", "Decoration"],
    metadata: {
      dimensions: "Large",
      blocks: 0,
      worldEditCompatible: true,
      sourceGameVersion: "1.20+"
    }
  },
  {
    id: "b_08",
    slug: "futuristic-house",
    title: "Futuristic House",
    description:
      "Compact modern house with futuristic style for sci-fi survival or city maps.",
    images: [
      { id: "h1", imageUrl: "futuristichouse/19469773_xl.jpg", alt: "Futuristic House preview 1" },
      { id: "h2", imageUrl: "futuristichouse/19469774_xl.jpg", alt: "Futuristic House preview 2" },
      { id: "h3", imageUrl: "futuristichouse/19469775_xl.jpg", alt: "Futuristic House preview 3" },
      { id: "h4", imageUrl: "futuristichouse/19469777_xl.jpg", alt: "Futuristic House preview 4" },
      { id: "h5", imageUrl: "futuristichouse/19469778_xl.jpg", alt: "Futuristic House preview 5" }
    ],
    fileUrl: "futuristichouse/futuristichouse.schem",
    format: "schem",
    sizeBytes: 6_256,
    author: "Zoobastiks",
    dateAdded: "2026-04-26T06:39:00.000Z",
    version: "1.0.0",
    tags: ["futuristic", "house", "starter"],
    categories: ["House", "Sci-Fi"],
    metadata: {
      dimensions: "Small",
      blocks: 0,
      worldEditCompatible: true,
      sourceGameVersion: "1.20+"
    }
  },
  {
    id: "b_09",
    slug: "futuristic-house-2",
    title: "Futuristic House 2",
    description:
      "Second variant of futuristic compact house with refined structure and details.",
    images: [
      { id: "i1", imageUrl: "futuristichouse2/19494654_xl.jpg", alt: "Futuristic House 2 preview 1" },
      { id: "i2", imageUrl: "futuristichouse2/19494655_xl.jpg", alt: "Futuristic House 2 preview 2" },
      { id: "i3", imageUrl: "futuristichouse2/19494656_xl.jpg", alt: "Futuristic House 2 preview 3" },
      { id: "i4", imageUrl: "futuristichouse2/19494658_xl.jpg", alt: "Futuristic House 2 preview 4" },
      { id: "i5", imageUrl: "futuristichouse2/19494662_xl.jpg", alt: "Futuristic House 2 preview 5" },
      { id: "i6", imageUrl: "futuristichouse2/19494663_xl.jpg", alt: "Futuristic House 2 preview 6" }
    ],
    fileUrl: "futuristichouse2/futuristichouse2.schem",
    format: "schem",
    sizeBytes: 6_743,
    author: "Zoobastiks",
    dateAdded: "2026-04-26T06:39:00.000Z",
    version: "1.0.0",
    tags: ["futuristic", "house", "modern"],
    categories: ["House", "Sci-Fi"],
    metadata: {
      dimensions: "Small",
      blocks: 0,
      worldEditCompatible: true,
      sourceGameVersion: "1.20+"
    }
  },
  {
    id: "b_10",
    slug: "creaking-heart-tree",
    title: "Creaking Heart Tree",
    description:
      "Mystic tree build with fantasy mood, suitable for themed spawn and quest locations.",
    images: [
      { id: "j1", imageUrl: "Creaking Heart Tree/19621937_xl.jpg", alt: "Creaking Heart Tree preview 1" },
      { id: "j2", imageUrl: "Creaking Heart Tree/19621938_xl.jpg", alt: "Creaking Heart Tree preview 2" },
      { id: "j3", imageUrl: "Creaking Heart Tree/19621939_xl.jpg", alt: "Creaking Heart Tree preview 3" },
      { id: "j4", imageUrl: "Creaking Heart Tree/19621942_xl.jpg", alt: "Creaking Heart Tree preview 4" }
    ],
    fileUrl: "Creaking Heart Tree/Creaking Heart Tree.litematic",
    format: "litematic",
    sizeBytes: 131_449,
    author: "Zoobastiks",
    dateAdded: "2026-04-26T06:34:00.000Z",
    version: "1.0.0",
    tags: ["tree", "fantasy", "quest"],
    categories: ["Nature", "Adventure"],
    metadata: {
      dimensions: "Medium",
      blocks: 0,
      worldEditCompatible: false,
      sourceGameVersion: "1.20+"
    }
  }
];
