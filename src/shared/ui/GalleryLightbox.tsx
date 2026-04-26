import { useEffect, useState } from "react";
import { BuildAsset } from "@domain/build/model/types";

interface GalleryLightboxProps {
  images: BuildAsset[];
}

export const GalleryLightbox = ({ images }: GalleryLightboxProps) => {
  const [active, setActive] = useState<number>(0);
  const [zoomed, setZoomed] = useState<boolean>(false);

  if (images.length === 0) return null;

  const prev = () => setActive((index) => (index === 0 ? images.length - 1 : index - 1));
  const next = () => setActive((index) => (index === images.length - 1 ? 0 : index + 1));

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActive((index) => (index === 0 ? images.length - 1 : index - 1));
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActive((index) => (index === images.length - 1 ? 0 : index + 1));
      }
      if (event.key === "Escape") {
        setZoomed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images.length]);

  return (
    <section className="gallery">
      <div className="gallery__stage">
        <button className="gallery__nav" type="button" onClick={prev}>
          {"<"}
        </button>
        <img
          src={images[active].imageUrl}
          alt={images[active].alt}
          className={`gallery__image ${zoomed ? "gallery__image--zoomed" : ""}`}
          onClick={() => setZoomed((value) => !value)}
        />
        <button className="gallery__nav" type="button" onClick={next}>
          {">"}
        </button>
      </div>
      <div className="gallery__thumbs">
        {images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            className={`gallery__thumb ${index === active ? "gallery__thumb--active" : ""}`}
            onClick={() => setActive(index)}
          >
            <img src={image.imageUrl} alt={image.alt} loading="lazy" />
          </button>
        ))}
      </div>
    </section>
  );
};
