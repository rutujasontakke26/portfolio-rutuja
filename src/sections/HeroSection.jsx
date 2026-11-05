import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  Sparkles,
} from "lucide-react";
import { portfolio } from "../data/portfolio.js";

function useTypingRole(roles) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      setText(roles[0]);
      return undefined;
    }

    const currentRole = roles[roleIndex];
    const complete = text === currentRole;
    const timer = window.setTimeout(() => {
      if (complete && !deleting) {
        setDeleting(true);
      } else if (text.length === 0 && deleting) {
        setRoleIndex((index) => (index + 1) % roles.length);
        setDeleting(false);
      } else {
        const nextLength = text.length + (deleting ? -1 : 1);
        setText(currentRole.slice(0, nextLength));
      }
    }, complete && !deleting ? 1400 : text.length === 0 && deleting ? 260 : deleting ? 38 : 82);

    return () => window.clearTimeout(timer);
  }, [deleting, reduceMotion, roleIndex, roles, text]);

  return text;
}

export default function HeroSection() {
  const role = useTypingRole(portfolio.roles);
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero-section section-shell" id="home" aria-labelledby="hero-title">
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="hero-kicker"><Sparkles size={15} /> A little curious, a lot determined</div>
          <p className="hero-overline">HELLO, I’M</p>
          <h1 id="hero-title">
            <span className="hero-first-name">{portfolio.firstName}</span>
            <span className="hero-last-name">Sontakke<span className="hero-title-dot">.</span></span>
          </h1>
          <p className="hero-role">
            <span className="role-prefix">I’m a </span>
            <span>{role}</span>
            <span className="typing-cursor" aria-hidden="true" />
          </p>
          <p className="hero-description">
            Building my way into tech with thoughtful web projects, a curious mindset and room to grow.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work <ArrowRight size={17} />
            </a>
            <a className="button button-quiet" href={portfolio.resume} download>
              Download resume <Download size={16} />
            </a>
          </div>
          <p className="availability"><span className="availability-dot" />{portfolio.opportunity}</p>
        </motion.div>

        <div className="hero-art" aria-hidden="true">
          <div className="hero-art-glow" />
          <div className="hero-float-chip hero-chip-top"><Sparkles size={14} /> ideas in progress</div>
          <div className="hero-code-card">
            <div className="hero-code-toolbar">
              <span className="window-lights"><i /><i /><i /></span>
              <span>RUTUJA / PORTFOLIO</span>
            </div>
            <div className="hero-code-content">
              <div className="hero-code-label"><span>01 — CURRENT CHAPTER</span><span>IN PROGRESS</span></div>
              <p className="hero-code-snippet"><span>const</span> journey =<br /><strong>&nbsp;&nbsp;"just getting started"</strong>;</p>
              <div className="hero-code-divider" />
              <div className="hero-code-row">
                <span className="hero-code-icon"><Code2 size={16} /></span>
                <span>Building with HTML, CSS<br />and JavaScript</span>
              </div>
              <div className="hero-code-row">
                <span className="hero-code-icon code-icon-mint"><Sparkles size={15} /></span>
                <span>Learning ReactJS</span>
              </div>
              <div className="hero-code-footer"><span>MADE WITH CURIOSITY</span><span>✳</span></div>
            </div>
          </div>
          <div className="hero-float-chip hero-chip-bottom"><BriefcaseBusiness size={14} /> open to paid internships</div>
        </div>
      </div>
      <div className="hero-bottom">
        <span className="hero-location">{portfolio.location}</span>
        <a className="scroll-cue" href="#about"><ArrowDown size={15} /> Scroll to explore</a>
        <a className="hero-contact-link" href="#contact">Say hello <ArrowUpRight size={15} /></a>
      </div>
      <div className="hero-stats" aria-label="Portfolio at a glance">
        {portfolio.stats.map((stat) => (
          <div className="hero-stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
