export const AboutPage = () => {
  return (
    <section className="page">
      <header className="page__header">
        <h1>About Tuks Ekhaya</h1>
        <p className="page__subtitle">
          Learn more about our history, values, and leadership.
        </p>
      </header>
      <div className="page__grid">
        <article className="card">
          <h2 className="card__title">Our Identity</h2>
          <p className="card__body">
            Tuks Ekhaya is a men&apos;s residence at the University of Pretoria
            that focuses on academic excellence, brotherhood, and holistic
            development. We aim to create a supportive environment where each
            resident can grow and contribute.
          </p>
        </article>
        <article className="card">
          <h2 className="card__title">House Committee (HC)</h2>
          <p className="card__body">
            The HC leads the residence, organises events, and represents
            residents. This site is designed to later include profiles, contact
            details, and admin tools for HC members to manage live content.
          </p>
        </article>
      </div>
    </section>
  );
};

