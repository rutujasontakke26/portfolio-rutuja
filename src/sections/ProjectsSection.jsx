import { useMemo, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ProjectVisual from "../components/ProjectVisual.jsx";
import { portfolio } from "../data/portfolio.js";

const filters = [
  { id: "all", label: "All work" },
  { id: "python", label: "Python / AI-ML" },
  { id: "java", label: "Java" },
  { id: "web", label: "Web" },
  { id: "other", label: "Other" },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const reduceMotion = useReducedMotion();
  const visibleProjects = useMemo(
    () => portfolio.projects.filter((project) => activeFilter === "all" || project.category === activeFilter),
    [activeFilter],
  );

  return (
    <section className="section-shell content-section projects-section" id="projects">
      <Reveal>
        <SectionHeading
          eyebrow="SELECTED WORK"
          title={<>A few things I’ve<br /><span>made along the way.</span></>}
          description="Small, practical projects that reflect what I’ve been learning. Project details are drawn from my resume and supplied files."
        />
      </Reveal>
      <div className="project-toolbar">
        <div className="project-filters" role="group" aria-label="Filter projects by category">
          {filters.map((filter) => (
            <button
              className={`filter-button ${activeFilter === filter.id ? "is-active" : ""}`}
              key={filter.id}
              type="button"
              aria-pressed={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <span className="project-count">{visibleProjects.length.toString().padStart(2, "0")} selected</span>
      </div>

      {visibleProjects.length ? (
        <motion.div layout={!reduceMotion} className="projects-grid">
          {visibleProjects.map((project, index) => (
            <motion.article
              className={`project-card ${project.featured ? "project-card-featured" : ""}`}
              key={project.id}
              layout
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.34, delay: reduceMotion ? 0 : index * 0.07 }}
              whileHover={reduceMotion ? undefined : { y: -5 }}
            >
              <ProjectVisual type={project.visual} label={project.visualLabel} />
              <div className="project-card-content">
                <div className="project-meta"><span>{project.type}</span><span className="project-number">0{index + 1}</span></div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="project-links">
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Github size={15} /> View on GitHub <ArrowUpRight size={14} />
                    </a>
                  ) : (
                    <span className="project-source-note">No public project link supplied</span>
                  )}
                  {project.featured ? <span className="featured-label">Team project</span> : null}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      ) : (
        <div className="projects-empty" role="status">
          <span>✳</span>
          <h3>No {activeFilter === "python" ? "Python / AI-ML" : "Java"} projects documented yet.</h3>
          <p>As new work takes shape, it can be added here.</p>
        </div>
      )}
    </section>
  );
}
