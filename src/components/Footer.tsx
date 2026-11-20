import './Footer.css';

export default function Footer() {
  return (
    <footer className="minimal-footer" role="contentinfo">
      <div className="minimal-footer-container">
        <span className="minimal-footer-copy">
          © {new Date().getFullYear()} CHARAN KUMAR
        </span>
        <span className="minimal-footer-role">
          SOFTWARE DEVELOPER
        </span>
      </div>
    </footer>
  );
}
