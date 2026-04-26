import { Link } from "react-router-dom";
import { BuildModel } from "@domain/build/model/types";
import { formatBytes, formatDate } from "@shared/lib/format";

interface BuildCardProps {
  build: BuildModel;
}

export const BuildCard = ({ build }: BuildCardProps) => (
  <article className="build-card">
    <Link className="build-card__image-wrap" to={`/build/${build.slug}`}>
      <img className="build-card__image" src={build.images[0]?.imageUrl} alt={build.images[0]?.alt} loading="lazy" />
    </Link>
    <div className="build-card__content">
      <div className="build-card__title-row">
        <h3>{build.title}</h3>
        <span className="build-card__format">{build.format}</span>
      </div>
      <p className="build-card__description">{build.description}</p>
      <div className="build-card__meta">
        <span>{formatBytes(build.sizeBytes)}</span>
        <span>{formatDate(build.dateAdded)}</span>
      </div>
      <div className="build-card__tags">
        {build.tags.map((tag) => (
          <span key={tag} className="tag-pill">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </article>
);
