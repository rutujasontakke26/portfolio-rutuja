import { useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { portfolio } from "../data/portfolio.js";

export default function ContactSection() {
  const [messageReady, setMessageReady] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);

    setMessageReady(true);
    window.location.href = `mailto:${portfolio.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section-shell content-section contact-section" id="contact">
      <div className="contact-backdrop" aria-hidden="true" />
      <Reveal className="contact-copy">
        <p className="eyebrow">YOUR NEXT INTERN?</p>
        <h2 className="contact-title">Let’s make<br /><span>something good.</span></h2>
        <p className="contact-intro">I’m looking for a paid internship where I can contribute, keep learning and grow alongside a thoughtful team.</p>
        <a className="button button-primary contact-cta" href={`mailto:${portfolio.email}?subject=${encodeURIComponent("Paid internship opportunity")}`}>
          Get in touch <ArrowUpRight size={17} />
        </a>
        <div className="contact-details">
          <a href={`mailto:${portfolio.email}`}><Mail size={16} />{portfolio.email}</a>
          <span><MapPin size={16} />{portfolio.location}</span>
        </div>
        <div className="contact-socials">
          <a href={portfolio.socialLinks.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
          <a href={portfolio.socialLinks.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
        </div>
      </Reveal>
      <Reveal className="contact-form-wrap" delay={0.12}>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-heading"><span>DROP A NOTE</span><span className="form-sparkle">✳</span></div>
          <label htmlFor="contact-name">Your name</label>
          <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="How should I call you?" required />
          <label htmlFor="contact-email">Email address</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
          <label htmlFor="contact-message">A little about it</label>
          <textarea id="contact-message" name="message" rows="4" placeholder="What would you like to chat about?" required />
          <p className="form-note">{portfolio.contactNote}</p>
          <button className="button button-dark form-submit" type="submit">
            Prepare email <Send size={15} />
          </button>
          <p className="form-status" aria-live="polite">{messageReady ? "Your email app should open with your message ready to send." : ""}</p>
        </form>
      </Reveal>
    </section>
  );
}
