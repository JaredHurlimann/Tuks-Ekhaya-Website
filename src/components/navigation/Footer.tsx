export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__text">
          &copy; {year} Tuks Ekhaya Men&apos;s Residence. All rights reserved.
        </p>
        <p className="footer__text footer__text--muted">
          Built with React and Vite. Future-ready for live events and admin
          tools.
        </p>
      </div>
    </footer>
  );
};

