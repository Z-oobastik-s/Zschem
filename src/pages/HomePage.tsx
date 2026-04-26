import { BuildGrid } from "@features/builds-catalog/ui/BuildGrid";
import { FiltersPanel } from "@features/builds-catalog/ui/FiltersPanel";
import { useBuildsCatalog } from "@features/builds-catalog/model/useBuildsCatalog";

const HomePage = () => {
  const { items, isLoading, query, allTags, allCategories, allFormats, setSearch, toggleTag, toggleCategory, toggleFormat } =
    useBuildsCatalog();

  return (
    <main className="layout">
      <header className="hero">
        <p className="hero__eyebrow">Minecraft Build Distribution Platform</p>
        <h1>Zschem</h1>
        <p className="hero__description">
          Store, preview, filter and distribute premium Minecraft structure files with API-ready architecture.
        </p>
      </header>
      <FiltersPanel
        query={query}
        allTags={allTags}
        allCategories={allCategories}
        allFormats={allFormats}
        onSearch={setSearch}
        onToggleTag={toggleTag}
        onToggleCategory={toggleCategory}
        onToggleFormat={toggleFormat}
      />
      <BuildGrid builds={items} isLoading={isLoading} />
    </main>
  );
};

export default HomePage;
