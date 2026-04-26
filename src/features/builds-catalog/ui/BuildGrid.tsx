import { BuildModel } from "@domain/build/model/types";
import { BuildCard } from "@features/builds-catalog/ui/BuildCard";

interface BuildGridProps {
  builds: BuildModel[];
  isLoading: boolean;
}

export const BuildGrid = ({ builds, isLoading }: BuildGridProps) => {
  if (isLoading) {
    return <div className="state-card">Syncing build index...</div>;
  }

  if (builds.length === 0) {
    return <div className="state-card">No builds found for current filters.</div>;
  }

  return (
    <section className="build-grid">
      {builds.map((build) => (
        <BuildCard key={build.id} build={build} />
      ))}
    </section>
  );
};
