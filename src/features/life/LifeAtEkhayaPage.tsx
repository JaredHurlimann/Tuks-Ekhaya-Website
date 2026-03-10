import academicsImg from "../../assets/life-academics.svg";
import communityImg from "../../assets/life-community.svg";

export const LifeAtEkhayaPage = () => {
  return (
    <section className="page">
      <header className="page__header">
        <h1>Life at Ekhaya</h1>
        <p className="page__subtitle">
          Get a feel for the culture, facilities, and day‑to‑day experience.
        </p>
      </header>
      <div className="page__grid">
        <article className="card card--with-image">
          <h2 className="card__title">Academic Support</h2>
          <p className="card__body">
            Study spaces, peer support, and a culture that values academic
            success are central to life at Tuks Ekhaya.
          </p>
          <img
            src={academicsImg}
            alt="Abstract illustration representing academic support"
            className="card__image"
          />
        </article>
        <article className="card">
          <h2 className="card__title">Sports & Culture</h2>
          <p className="card__body">
            Residents participate in various sports, cultural events, and
            residence competitions, building friendships and school spirit.
          </p>
        </article>
        <article className="card card--with-image">
          <h2 className="card__title">Community</h2>
          <p className="card__body">
            We pride ourselves on being a home away from home, with traditions,
            mentorship, and support for every member of the residence.
          </p>
          <img
            src={communityImg}
            alt="Abstract illustration representing community"
            className="card__image"
          />
        </article>
      </div>
    </section>
  );
};

