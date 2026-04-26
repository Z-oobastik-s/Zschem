import { buildsApi } from "@domain/build/api/buildsApi";
import { BuildModel, BuildQueryParams } from "@domain/build/model/types";

export const buildsService = {
  fetchCatalog: (params: BuildQueryParams): Promise<BuildModel[]> => buildsApi.getAll(params),
  fetchBySlug: (slug: string): Promise<BuildModel | null> => buildsApi.getBySlug(slug),
  fetchById: (id: string): Promise<BuildModel | null> => buildsApi.getById(id),
  resolveJsonLink: (slug: string) => buildsApi.getJsonEndpoint(slug),
  resolveDownloadLink: (slug: string) => buildsApi.getDownloadEndpoint(slug)
};
