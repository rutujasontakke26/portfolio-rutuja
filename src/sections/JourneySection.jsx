import { ArrowUpRight, BriefcaseBusiness, GraduationCap, MapPin } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { portfolio } from "../data/portfolio.js";

export default function JourneySection() {
  const { education } = portfolio;

  return (
    <section className="section-shell content-section journey-section" id="journey">
      <Reveal>
        <SectionHeading
          eyebrow="THE JOURNEY SO FAR"
          title={<>Learning, building<br /><span>and looking ahead.</span></>}
          description="The details below stick to what’s known so far; the marked fields are ready for a college and dates."
        />
      </Reveal>
      <div className="timeline">
        <Reveal className="timeline-item">
          <span className="timeline-marker timeline-marker-lilac"><GraduationCap size={18} /></span>
          <article className="timeline-card">
            <div className="timeline-heading"><span>EDUCATION</span><span className="timeline-status">IN PROGRESS</span></div>
            <h3>{education.qualification} <span>({education.shortName})</span></h3>
            <p>{education.stage} · {education.institution}</p>
            <div className="timeline-detail"><MapPin size={14} /> {education.location}</div>
            <div className="timeline-placeholder">{education.dates}</div>
          </article>
        </Reveal>
        <Reveal className="timeline-item" delay={0.08}>
          <span className="timeline-marker timeline-marker-mint"><BriefcaseBusiness size={17} /></span>
          <article className="timeline-card">
            <div className="timeline-heading"><span>CAREER GOAL</span><span className="timeline-status status-open">OPEN TO OPPORTUNITIES</span></div>
            <h3>Looking for a paid internship</h3>
            <p>I’m eager to apply what I know, learn from a team and gain real-world experience. No previous internship is listed in the supplied resume.</p>
            <a className="timeline-link" href="#contact">Let’s connect <ArrowUpRight size={15} /></a>
          </article>
        </Reveal>
      </div>
      <p className="timeline-footnote">No certifications or awards were included in the supplied files.</p>
    </section>
  );
}
