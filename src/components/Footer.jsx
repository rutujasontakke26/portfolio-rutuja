import { ArrowUp, Github, Linkedin } from "lucide-react";
import { portfolio } from "../data/portfolio.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a className="footer-brand" href="#home">
          {portfolio.firstName}<span>.</span>
        </a>
        <p>Made with curiosity in Ahilyanagar, India.</p>
        <div className="footer-actions">
          <a
            href={portfolio.socialLinks.github}
            aria-label={`${portfolio.fullName}’s GitHub profile`}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={17} />
          </a>
          <a
            href={portfolio.socialLinks.linkedin}
            aria-label={`${portfolio.fullName}’s LinkedIn profile`}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={17} />
          </a>
          <a className="back-to-top" href="#home" aria-label="Back to top">
            <ArrowUp size={17} />
          </a>
        </div>
      </div>
      <p className="footer-copyright">© {new Date().getFullYear()} {portfolio.fullName}</p>
    </footer>
  );
}
