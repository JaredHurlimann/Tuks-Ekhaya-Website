import { useEffect, useState } from "react";

type CarouselImage = {
  src: string;
  alt: string;
};

type ImageCarouselProps = {
  images: CarouselImage[];
  intervalMs?: number;
};

export const ImageCarousel = ({
  images,
  intervalMs = 8000
}: ImageCarouselProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) {
      return;
    }

    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [images.length, intervalMs]);

  const goTo = (nextIndex: number) => {
    setIndex(nextIndex);
  };

  return (
    <div className="carousel" aria-roledescription="carousel">
      <div className="carousel__viewport">
        {images.map((image, i) => {
          const isActive = i === index;
          return (
            <img
              key={image.src + i}
              src={image.src}
              alt={isActive ? image.alt : ""}
              aria-hidden={!isActive}
              className={`carousel__image ${
                isActive ? "carousel__image--active" : ""
              }`}
            />
          );
        })}
      </div>
      {images.length > 1 ? (
        <div className="carousel__dots" aria-hidden="true">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`carousel__dot ${
                i === index ? "carousel__dot--active" : ""
              }`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

