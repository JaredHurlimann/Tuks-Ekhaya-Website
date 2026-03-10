import { Link } from "react-router-dom";
import heroImage from "../../assets/heroImage1.jpg";
import heroImage2 from "../../assets/heroImage2.jpg";
import heroImage3 from "../../assets/heroImage3.jpg";
import heroImage4 from "../../assets/heroImage4.jpg";
import { ImageCarousel } from "../../components/media/ImageCarousel";

export const HomePage = () => {
  return (
    <section className="page page--hero">
      <div className="hero-split">
        {/* Left Side: Content */}
        <div className="hero-split__content">
          <div className="hero-split__tagline">
            <span>Adventures</span>
            <span className="dot" aria-hidden="true">•</span>
            <span>Memories</span>
            <span className="dot" aria-hidden="true">•</span>
            <span>Legacies</span>
          </div>
          
          <h1 className="hero-split__title">
            Tuks Ekhaya <br />
            <span className="accent-text">Your Home</span>
          </h1>
          
          <p className="hero-split__description">
          Tuks Ekhaya prides itself on its strong set 
          of moral values and principles, and believes 
          every student should have the opportunity to enjoy a 
          full student life.
          </p>
          
          <div className="hero-split__actions">
            <Link to="/life-at-ekhaya" className="btn btn--primary btn--large">
              Explore Life @ Tuks Ekhaya
            </Link>
            <Link to="/events" className="btn btn--ghost btn--large">
              View Events
            </Link>
          </div>
        </div>

        {/* Right Side: Your Carousel */}
        <div className="hero-split__media">
          <ImageCarousel
            images={[
              { src: heroImage, alt: "Tuks Ekhaya residence life" },
              { src: heroImage2, alt: "Exterior photo" },
              { src: heroImage3, alt: "Common areas" },
              { src: heroImage4, alt: "Interior photo" }
            ]}
          />
        </div>
      </div>
    </section>
  );
};