import { BuildFileFormat, BuildQueryParams } from "@domain/build/model/types";
import { Chip } from "@shared/ui/Chip";

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
  hasActiveFilters
}: FiltersPanelProps) => (
  <section className="filters-panel">
    <div className="filters-panel__top">
      <input
        className="neon-input"
        value={query.search}
        onChange={(event) => onSearch(event.target.value)}
        placeholder="Search by build title"
      />
      <button className="neon-button neon-button--ghost filters-panel__clear" type="button" onClick={onClear} disabled={!hasActiveFilters}>
        Reset
      </button>
    </div>
    <div className="filters-panel__stats">{visibleCount} builds found</div>
    <div className="filters-panel__group">
      <h4>Formats</h4>
      <div className="chip-list">
        {allFormats.map((format) => (
          <Chip key={format} label={format} active={query.formats.includes(format)} onClick={() => onToggleFormat(format)} />
        ))}
      </div>
    </div>
    <div className="filters-panel__group">
      <h4>Categories</h4>
      <div className="chip-list">
        {allCategories.map((category) => (
          <Chip
            key={category}
            label={category}
            active={query.categories.includes(category)}
            onClick={() => onToggleCategory(category)}
          />
        ))}
      </div>
    </div>
  </section>
);
