import { Link } from "react-router-dom";
import heroImage from "../../assets/heroImage1.jpg";
import heroImage2 from "../../assets/heroImage2.jpg";
import heroImage3 from "../../assets/heroImage3.jpg";
import heroImage4 from "../../assets/heroImage4.jpg";
import { ImageCarousel } from "../../components/media/ImageCarousel";

export const HomePage = () => {
  return (
    <>
      <section className="home-hero-strip" aria-label="Images of Tuks Ekhaya">
        <div className="home-hero-strip__tagline">
          <span>Adventures</span>
          <span className="dot-separator" aria-hidden="true">
            &bull;
          </span>
          <span>Memories</span>
          <span className="dot-separator" aria-hidden="true">
            &bull;
          </span>
          <span>Legacies</span>
        </div>
        <ImageCarousel
          images={[
            {
              src: heroImage,
              alt: "Stylised illustration of Tuks Ekhaya residence"
            },
            {
              src: heroImage2,
              alt: "Placeholder for Tuks Ekhaya exterior photo"
            },
            {
              src: heroImage3,
              alt: "Placeholder for Tuks Ekhaya common areas"
            },
            {
              src: heroImage4,
              alt: "Placeholder for Tuks Ekhaya interior photo"
            }
          ]}
        />
      </section>
      <section className="page page--hero">
        <div className="hero">
          <div className="hero__content">
            <h1 className="hero__title">Welcome to Tuks Ekhaya</h1>
            <p className="hero__subtitle">
              A home away from home for students of the University of Pretoria.
            </p>
            <p className="hero__body">
              Explore life at Ekhaya, meet the HC, stay up to date with events,
              and find everything you need to thrive academically and socially.
            </p>
            <div className="hero__actions">
              <Link to="/life-at-ekhaya" className="btn btn--primary">
                Discover Residence Life
              </Link>
              <Link to="/events" className="btn btn--ghost">
                View Events
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

