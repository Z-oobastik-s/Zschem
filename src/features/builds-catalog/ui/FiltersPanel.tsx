import { BuildFileFormat, BuildQueryParams } from "@domain/build/model/types";
import { Chip } from "@shared/ui/Chip";

interface FiltersPanelProps {
  query: BuildQueryParams;
  allTags: string[];
  allCategories: string[];
  allFormats: BuildFileFormat[];
  onSearch: (value: string) => void;
  onToggleTag: (tag: string) => void;
  onToggleCategory: (category: string) => void;
  onToggleFormat: (format: BuildFileFormat) => void;
}

export const FiltersPanel = ({
  query,
  allTags,
  allCategories,
  allFormats,
  onSearch,
  onToggleTag,
  onToggleCategory,
  onToggleFormat
}: FiltersPanelProps) => (
  <section className="filters-panel">
    <input
      className="neon-input"
      value={query.search}
      onChange={(event) => onSearch(event.target.value)}
      placeholder="Search by title, description or tag"
    />
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
    <div className="filters-panel__group">
      <h4>Tags</h4>
      <div className="chip-list">
        {allTags.map((tag) => (
          <Chip key={tag} label={tag} active={query.tags.includes(tag)} onClick={() => onToggleTag(tag)} />
        ))}
      </div>
    </div>
  </section>
);
