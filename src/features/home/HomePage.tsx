import { Link } from "react-router-dom";
import heroImage from "../../assets/ekhaya-hero.svg";

export const HomePage = () => {
  return (
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
        <figure className="hero__media">
          <img
            src={heroImage}
            alt="Stylised illustration of Tuks Ekhaya residence"
            className="hero__image"
          />
          <figcaption className="hero__image-caption">
            Real photos of Tuks Ekhaya can be showcased here.
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

