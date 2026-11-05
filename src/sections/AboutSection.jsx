import { ArrowUpRight, MapPin, GraduationCap, Sparkles } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { portfolio } from "../data/portfolio.js";

export default function AboutSection() {
  return (
    <section className="section-shell content-section about-section" id="about">
      <Reveal>
        <SectionHeading
          eyebrow="A LITTLE ABOUT ME"
          title={<>Curious by nature.<br /><span>Growing with purpose.</span></>}
          description="I’m early in my journey—and excited about what I can learn by building, contributing and showing up."
        />
      </Reveal>
      <div className="about-grid">
        <Reveal className="about-story">
          <p>{portfolio.about}</p>
          <a className="text-link" href="#contact">A little more about my next step <ArrowUpRight size={16} /></a>
        </Reveal>
        <Reveal className="about-facts" delay={0.1}>
          <div className="about-fact">
            <span className="fact-icon fact-icon-lilac"><GraduationCap size={19} /></span>
            <div><span className="fact-label">CURRENTLY</span><strong>Third-year BCA student</strong><small>Institution details to be added</small></div>
          </div>
          <div className="about-fact">
            <span className="fact-icon fact-icon-peach"><MapPin size={19} /></span>
            <div><span className="fact-label">BASED IN</span><strong>Ahilyanagar, India</strong><small>Maharashtra</small></div>
          </div>
          <div className="about-fact">
            <span className="fact-icon fact-icon-mint"><Sparkles size={19} /></span>
            <div><span className="fact-label">WHAT’S NEXT</span><strong>Paid internship</strong><small>Ready to learn by contributing</small></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
