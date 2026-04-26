import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BuildModel } from "@domain/build/model/types";
import { buildsService } from "@domain/build/service/buildsService";
import { GalleryLightbox } from "@shared/ui/GalleryLightbox";
import { NeonButton } from "@shared/ui/NeonButton";
import { formatBytes, formatDate } from "@shared/lib/format";

const BuildDetailsPage = () => {
  const { slug = "" } = useParams();
  const [build, setBuild] = useState<BuildModel | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const run = async () => {
      setIsLoading(true);
      const payload = await buildsService.fetchBySlug(slug);
      setBuild(payload);
      setIsLoading(false);
    };
    void run();
  }, [slug]);

  if (isLoading) {
    return <main className="layout"><div className="state-card">Loading build details...</div></main>;
  }

  if (!build) {
    return (
      <main className="layout">
        <div className="state-card">
          Build not found. <Link to="/">Return to catalog</Link>
        </div>
      </main>
    );
  }

  const downloadFiles =
    build.downloadFiles && build.downloadFiles.length > 0
      ? build.downloadFiles
      : [
          {
            id: `${build.id}-default`,
            fileUrl: build.fileUrl,
            format: build.format,
            sizeBytes: build.sizeBytes,
            label: `${build.title} .${build.format}`
          }
        ];

  const availableFormats = [...new Set(downloadFiles.map((file) => file.format))].join(", ");

  return (
    <main className="layout">
      <Link className="back-link" to="/">
        {"<"} Back to catalog
      </Link>
      <section className="details-header">
        <div>
          <h1>{build.title}</h1>
          <p>{build.description}</p>
          <div className="build-card__tags">
            {build.tags.map((tag) => (
              <span key={tag} className="tag-pill">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="details-actions">
          {downloadFiles.map((file) => (
            <NeonButton key={file.id} href={file.fileUrl} download>
              Download {file.format}
              {file.sizeBytes ? ` - ${formatBytes(file.sizeBytes)}` : ""}
            </NeonButton>
          ))}
          <NeonButton href={buildsService.resolveJsonLink(build.slug)} variant="ghost">
            JSON Endpoint
          </NeonButton>
        </div>
      </section>

      <GalleryLightbox images={build.images} />

      <section className="details-meta">
        <div className="meta-item"><strong>ID:</strong> {build.id}</div>
        <div className="meta-item"><strong>Slug:</strong> {build.slug}</div>
        <div className="meta-item"><strong>Author:</strong> {build.author}</div>
        <div className="meta-item"><strong>Version:</strong> {build.version}</div>
        <div className="meta-item"><strong>Added:</strong> {formatDate(build.dateAdded)}</div>
        <div className="meta-item"><strong>Size:</strong> {formatBytes(build.sizeBytes)}</div>
        <div className="meta-item"><strong>Format:</strong> {build.format}</div>
        <div className="meta-item"><strong>Formats:</strong> {availableFormats}</div>
        <div className="meta-item"><strong>Dimensions:</strong> {build.metadata.dimensions}</div>
        <div className="meta-item"><strong>Blocks:</strong> {build.metadata.blocks}</div>
        <div className="meta-item">
          <strong>WorldEdit:</strong> {build.metadata.worldEditCompatible ? "Supported" : "Not required"}
        </div>
      </section>
    </main>
  );
};

export default BuildDetailsPage;
