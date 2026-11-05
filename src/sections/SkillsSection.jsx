import { BookOpen, Braces, Code2, Compass, GitBranch, Layers3 } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { portfolio } from "../data/portfolio.js";

const icons = [Braces, Code2, Compass, Layers3, GitBranch, BookOpen];

export default function SkillsSection() {
  return (
    <section className="section-shell content-section skills-section" id="skills">
      <Reveal>
        <SectionHeading
          eyebrow="TOOLS & LEARNING"
          title={<>A growing toolkit,<br /><span>built one skill at a time.</span></>}
          description="No percentage bars—just an honest snapshot of what’s documented and what I’m exploring next."
        />
      </Reveal>
      <div className="skills-grid">
        {portfolio.skills.map((group, index) => {
          const Icon = icons[index % icons.length];
          return (
            <Reveal key={group.title} delay={index * 0.045}>
              <article className={`skill-card tone-${group.tone}`}>
                <div className="skill-card-top">
                  <span className="skill-icon"><Icon size={18} /></span>
                  <span className="skill-index">0{index + 1}</span>
                </div>
                <h3>{group.title}</h3>
                <p>{group.note}</p>
                <div className="skill-chips">
                  {group.items.map((item) => <span className="skill-chip" key={item}>{item}</span>)}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
      <p className="skills-footnote">Python, Java and AI/ML are areas of interest—not skills or project experience claimed here.</p>
    </section>
  );
}
