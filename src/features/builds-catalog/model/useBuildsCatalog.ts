import { useEffect, useMemo, useState } from "react";
import { BuildFileFormat, BuildModel, BuildQueryParams } from "@domain/build/model/types";
import { buildsService } from "@domain/build/service/buildsService";
import { MOCK_BUILDS } from "@shared/data/builds.mock";

type SetValue<T extends string> = (value: T) => void;

const initialQuery: BuildQueryParams = {
  search: "",
  tags: [],
  categories: [],
  formats: []
};

export const useBuildsCatalog = () => {
  const [query, setQuery] = useState<BuildQueryParams>(initialQuery);
  const [items, setItems] = useState<BuildModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const run = async () => {
      setIsLoading(true);
      const result = await buildsService.fetchCatalog(query);
      setItems(result);
      setIsLoading(false);
    };
    void run();
  }, [query]);

  const allCategories = useMemo(
    () =>
      [...new Set(MOCK_BUILDS.flatMap((build) => build.categories))].sort((a, b) => a.localeCompare(b)),
    []
  );

  const allFormats = useMemo(
    () => [...new Set(MOCK_BUILDS.map((build) => build.format))] as BuildFileFormat[],
    []
  );

  const setSearch: SetValue<string> = (search) => setQuery((prev) => ({ ...prev, search }));

  const toggleFilter = (key: "tags" | "categories" | "formats", value: string) => {
    setQuery((prev) => {
      const source = prev[key] as string[];
      const next = source.includes(value) ? source.filter((item) => item !== value) : [...source, value];
      return { ...prev, [key]: next };
    });
  };

  return {
    items,
    isLoading,
    query,
    allCategories,
    allFormats,
    setSearch,
    clearFilters: () => setQuery(initialQuery),
    hasActiveFilters: query.search.length > 0 || query.categories.length > 0 || query.formats.length > 0,
    toggleCategory: (category: string) => toggleFilter("categories", category),
    toggleFormat: (format: BuildFileFormat) => toggleFilter("formats", format)
  };
};
