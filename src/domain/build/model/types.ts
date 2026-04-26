export type BuildFileFormat = "schem" | "nbt" | "litematic" | "schematic";

export interface BuildAsset {
  id: string;
  imageUrl: string;
  alt: string;
}

export interface BuildMetadata {
  dimensions: string;
  blocks: number;
  worldEditCompatible: boolean;
  sourceGameVersion: string;
  [key: string]: string | number | boolean;
}

export interface BuildModel {
  id: string;
  slug: string;
  title: string;
  description: string;
  images: BuildAsset[];
  fileUrl: string;
  format: BuildFileFormat;
  sizeBytes: number;
  author: string;
  dateAdded: string;
  version: string;
  tags: string[];
  categories: string[];
  metadata: BuildMetadata;
}

export interface BuildQueryParams {
  search: string;
  tags: string[];
  categories: string[];
  formats: BuildFileFormat[];
}
