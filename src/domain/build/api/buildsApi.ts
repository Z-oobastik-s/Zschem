import { BuildFileFormat, BuildModel, BuildQueryParams } from "@domain/build/model/types";
import { MOCK_BUILDS } from "@shared/data/builds.mock";

const simulatedRequest = async <TData>(data: TData): Promise<TData> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(data), 120);
  });

const normalizeValue = (value: string) => value.trim().toLowerCase();

const matchSearch = (build: BuildModel, query: string) => {
  if (!query) return true;
  const q = normalizeValue(query);
  return (
    normalizeValue(build.title).includes(q) ||
    normalizeValue(build.description).includes(q) ||
    build.tags.some((tag) => normalizeValue(tag).includes(q))
  );
};

const includesAny = (source: string[], values: string[]) =>
  values.length === 0 || values.some((value) => source.includes(value));

const getBuildFormats = (build: BuildModel): BuildFileFormat[] => {
  if (!build.downloadFiles || build.downloadFiles.length === 0) {
    return [build.format];
  }
  return [...new Set(build.downloadFiles.map((file) => file.format))];
};

export const buildsApi = {
  getAll: async (query: BuildQueryParams): Promise<BuildModel[]> => {
    const filtered = MOCK_BUILDS.filter((build) => {
      const passSearch = matchSearch(build, query.search);
      const passTags = includesAny(build.tags, query.tags);
      const passCategories = includesAny(build.categories, query.categories);
      const passFormats =
        query.formats.length === 0 || getBuildFormats(build).some((format) => query.formats.includes(format));
      return passSearch && passTags && passCategories && passFormats;
    });
    return simulatedRequest(filtered);
  },

  getBySlug: async (slug: string): Promise<BuildModel | null> => {
    const build = MOCK_BUILDS.find((item) => item.slug === slug) ?? null;
    return simulatedRequest(build);
  },

  getById: async (id: string): Promise<BuildModel | null> => {
    const build = MOCK_BUILDS.find((item) => item.id === id) ?? null;
    return simulatedRequest(build);
  },

  getJsonEndpoint: (slug: string) => `/api/builds/${slug}.json`,
  getDownloadEndpoint: (slug: string) => `/api/builds/${slug}/download`
};
