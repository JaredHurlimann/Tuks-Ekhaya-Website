export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__text">
          &copy; {year} Tuks Ekhaya Men&apos;s Residence. All rights reserved.
        </p>
        <p className="footer__text footer__text--muted">
          
        </p>
      </div>
    </footer>
  );
};

