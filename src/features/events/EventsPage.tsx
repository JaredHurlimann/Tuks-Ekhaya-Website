export const EventsPage = () => {
  return (
    <section className="page">
      <header className="page__header">
        <h1>Events</h1>
        <p className="page__subtitle">
          Stay informed about socials, sports, academics and more.
        </p>
      </header>
      <div className="page__grid">
        <article className="card card--highlight">
          <h2 className="card__title">Live events module (coming soon)</h2>
          <p className="card__body">
            This page is built as the entry point for a future web app layer
            where HC/admin members will be able to create, edit, and manage
            live events, registrations, and announcements.
          </p>
          <p className="card__body">
            Under the hood, the app is structured into features and shared
            components so that adding authentication, an admin dashboard, and
            real‑time updates will be straightforward.
          </p>
        </article>
      </div>
    </section>
  );
};

