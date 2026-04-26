import { BuildGrid } from "@features/builds-catalog/ui/BuildGrid";
import { FiltersPanel } from "@features/builds-catalog/ui/FiltersPanel";
import { useBuildsCatalog } from "@features/builds-catalog/model/useBuildsCatalog";
import { useState } from "react";

const HomePage = () => {
  const {
    items,
    isLoading,
    query,
    allCategories,
    allFormats,
    setSearch,
    clearFilters,
    hasActiveFilters,
    toggleCategory,
    toggleFormat
  } =
    useBuildsCatalog();
  const [filtersCollapsed, setFiltersCollapsed] = useState(false);

  return (
    <main className="layout">
      <header className="hero hero--compact">
        <h1>Zschem</h1>
        <span className="hero__divider" />
        <p className="hero__description">
          Minecraft build distribution platform. Store, preview, filter and distribute structures.
        </p>
      </header>
      <section className="catalog-shell">
        <FiltersPanel
          query={query}
          allCategories={allCategories}
          allFormats={allFormats}
          visibleCount={items.length}
          onSearch={setSearch}
          onToggleCategory={toggleCategory}
          onToggleFormat={toggleFormat}
          onClear={clearFilters}
          hasActiveFilters={hasActiveFilters}
          collapsed={filtersCollapsed}
          onToggleCollapsed={() => setFiltersCollapsed((prev) => !prev)}
        />
        <div className="catalog-shell__grid">
          <BuildGrid builds={items} isLoading={isLoading} />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
