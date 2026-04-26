import { BuildFileFormat, BuildQueryParams } from "@domain/build/model/types";

interface FiltersPanelProps {
  query: BuildQueryParams;
  allCategories: string[];
  allFormats: BuildFileFormat[];
  visibleCount: number;
  onSearch: (value: string) => void;
  onToggleCategory: (category: string) => void;
  onToggleFormat: (format: BuildFileFormat) => void;
  onClear: () => void;
  hasActiveFilters: boolean;
  collapsed: boolean;
  onToggleCollapsed: () => void;
}

export const FiltersPanel = ({
  query,
  allCategories,
  allFormats,
  visibleCount,
  onSearch,
  onToggleCategory,
  onToggleFormat,
  onClear,
  hasActiveFilters,
  collapsed,
  onToggleCollapsed
}: FiltersPanelProps) => (
  <aside className={`filters-panel filters-panel--sidebar ${collapsed ? "filters-panel--collapsed" : ""}`}>
    <div className="filters-panel__header">
      <h3>Filters</h3>
      <button className="filters-panel__collapse" type="button" onClick={onToggleCollapsed}>
        {collapsed ? ">" : "<"}
      </button>
    </div>
    <div className="filters-panel__top">
      <input
        className="neon-input"
        value={query.search}
        onChange={(event) => onSearch(event.target.value)}
        placeholder="Search by build title"
      />
      <button
        className="neon-button neon-button--ghost filters-panel__clear"
        type="button"
        onClick={onClear}
        disabled={!hasActiveFilters}
      >
        Reset
      </button>
    </div>
    <div className="filters-panel__stats">{visibleCount} builds found</div>
    <div className="filters-panel__group">
      <h4>Formats</h4>
      <div className="filters-list">
        {allFormats.map((format) => (
          <button
            key={format}
            className={`filters-item ${query.formats.includes(format) ? "filters-item--active" : ""}`}
            type="button"
            onClick={() => onToggleFormat(format)}
          >
            {format}
          </button>
        ))}
      </div>
    </div>
    <div className="filters-panel__group">
      <h4>Categories</h4>
      <div className="filters-list">
        {allCategories.map((category) => (
          <button
            key={category}
            className={`filters-item ${query.categories.includes(category) ? "filters-item--active" : ""}`}
            type="button"
            onClick={() => onToggleCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  </aside>
);
