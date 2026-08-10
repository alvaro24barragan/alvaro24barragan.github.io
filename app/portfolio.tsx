"use client";

import { useState } from "react";
import data from "@/content/profile.json";

const courseCategories = [
  "GenAI & deep learning",
  "ML & MLOps",
  "Python & data",
  "AI foundations",
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const publicAsset = (path: string) => `${basePath}${path}`;

export default function Portfolio() {
  const [educationOpen, setEducationOpen] = useState(false);

  const openEducation = () => {
    setEducationOpen(true);
    window.setTimeout(() => {
      document.getElementById("education")?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Go to the top">
          <span className="brand-mark">AB</span>
          <span>{data.profile.name}</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#experience">Experience</a>
          <a href="#current-focus">Current focus</a>
          <button type="button" onClick={openEducation}>Education</button>
          <a href="#projects">Projects</a>
          <a className="nav-cta" href={`mailto:${data.profile.email}`}>Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero page-width">
          <div className="hero-copy">
            <p className="eyebrow">{data.profile.positioning}</p>
            <h1>{data.profile.name}</h1>
            <p className="hero-summary">{data.profile.summary}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#experience">Explore my profile <span aria-hidden="true">↓</span></a>
              <a className="button button-secondary" href={`mailto:${data.profile.email}`}>Get in touch <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <aside className="hero-brief" aria-label="Professional summary">
            <div className="brief-topline"><span>Current profile</span><span className="status-dot">Applied AI</span></div>
            <h2>{data.profile.role}</h2>
            <dl>
              <div><dt>Based in</dt><dd>{data.profile.location}</dd></div>
              <div><dt>Current role</dt><dd>Data Consultant · NFQ</dd></div>
              <div><dt>Core focus</dt><dd>LLMs · RAG · ML · Automation</dd></div>
              <div><dt>Languages</dt><dd>ES Native · EN C1 · DE A2</dd></div>
            </dl>
          </aside>
        </section>

        <section className="highlights page-width" aria-label="Profile highlights">
          {data.highlights.map((item) => (
            <div className="highlight" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        <section id="experience" className="section page-width">
          <div className="section-heading">
            <div><p className="section-number">01</p><h2>Experience</h2></div>
            <p>Professional experience across AI consulting, document intelligence, retrieval systems and data workflows.</p>
          </div>
          <div className="experience-list">
            {data.experience.map((job) => (
              <article className="experience-item" key={`${job.company}-${job.period}`}>
                <div className="experience-meta">
                  <p>{job.company}</p>
                  <span>{job.location}</span>
                  <time>{job.period}</time>
                </div>
                <div className="experience-copy">
                  <h3>{job.role}</h3>
                  <p>{job.summary}</p>
                  <div className="tag-row">{job.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                  <details className="role-details">
                    <summary>Full responsibilities <span aria-hidden="true">+</span></summary>
                    <ul>{job.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                  </details>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="current-focus" className="section current-focus page-width">
          <div className="section-heading">
            <div><p className="section-number">02</p><h2>Current focus</h2></div>
            <p>Certifications and personal projects currently in progress or planned next.</p>
          </div>
          <div className="focus-grid">
            {data.currentFocus.map((item) => (
              <article className="focus-card" key={item.title}>
                <span className="focus-status">{item.status}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noreferrer">
                    {item.linkLabel} <span aria-hidden="true">↗</span>
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="education" className={`education-section ${educationOpen ? "is-open" : ""}`}>
          <div className="page-width">
            <button
              className="education-toggle"
              type="button"
              aria-expanded={educationOpen}
              aria-controls="education-details"
              onClick={() => setEducationOpen((open) => !open)}
            >
              <span className="education-title"><span className="section-number">03</span><span>Education & courses</span></span>
              <span className="education-action">{educationOpen ? "Close full record" : `Explore 2 degrees + ${data.courses.length} verified courses`} <span aria-hidden="true">{educationOpen ? "−" : "+"}</span></span>
            </button>

            <div className="degree-grid">
              {data.education.map((item) => (
                <article className="degree" key={item.degree}>
                  <div className="degree-meta"><span>{item.period}</span><span>{item.location}</span></div>
                  <h3>{item.degree}</h3>
                  <p className="institution">{item.institution}</p>
                  <p>{item.summary}</p>
                  <p className="thesis"><strong>Thesis:</strong> {item.thesis}</p>
                  {item.link && <a href={item.link} target="_blank" rel="noreferrer">View repository <span aria-hidden="true">↗</span></a>}
                </article>
              ))}
            </div>

            <div id="education-details" className="education-details" hidden={!educationOpen}>
              <div className="learning-intro">
                <div>
                  <p className="eyebrow">Continuous learning</p>
                  <h2>Every course, not just a selection.</h2>
                </div>
                <p>The portfolio keeps the initial view concise, while preserving the complete learning record and the original certificate for verification.</p>
              </div>

              <div className="featured-learning">
                {data.courses.filter((course) => course.featured).map((course) => (
                  <a className="featured-course" href={publicAsset(course.certificate)} target="_blank" rel="noreferrer" key={course.title}>
                    <span>{course.provider}</span>
                    <strong>{course.title}</strong>
                    <small>{course.date}{course.duration ? ` · ${course.duration}` : ""}</small>
                    <b>View certificate ↗</b>
                  </a>
                ))}
              </div>

              <div className="course-library">
                {courseCategories.map((category) => {
                  const courses = data.courses.filter((course) => course.category === category);
                  return (
                    <section className="course-group" key={category}>
                      <div className="course-group-heading"><h3>{category}</h3><span>{courses.length} courses</span></div>
                      <div className="course-list">
                        {courses.map((course) => (
                          <a href={publicAsset(course.certificate)} target="_blank" rel="noreferrer" className="course-row" key={course.title}>
                            <span className="course-title">{course.title}</span>
                            <span>{course.provider}</span>
                            <span>{course.duration ?? "Certificate"}</span>
                            <span>{course.date}</span>
                            <span aria-hidden="true">↗</span>
                          </a>
                        ))}
                      </div>
                    </section>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section page-width">
          <div className="section-heading">
            <div><p className="section-number">04</p><h2>Selected projects</h2></div>
            <p>Selected work in Generative AI, recommendation systems, statistical computing and mathematical modelling.</p>
          </div>
          <div className="project-grid">
            {data.projects.map((project, index) => (
              <article className="project" key={project.title}>
                <div className="project-index">0{index + 1}</div>
                <p className="project-context">{project.context}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.note && <p className="project-note">{project.note}</p>}
                <div className="tag-row">{project.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                {project.reports?.map((report) => (
                  <a href={report.url} target="_blank" rel="noreferrer" key={report.url}>{report.label} <span aria-hidden="true">↗</span></a>
                ))}
                {project.link && <a href={project.link} target="_blank" rel="noreferrer">View repository <span aria-hidden="true">↗</span></a>}
              </article>
            ))}
          </div>
        </section>

        <section className="skills-section">
          <div className="page-width">
            <div className="section-heading">
              <div><p className="section-number">05</p><h2>Technical profile</h2></div>
              <p>Tools and methods used across professional experience, academic projects and continuous learning.</p>
            </div>
            <div className="skills-grid">
              {data.skillGroups.map((group) => (
                <article key={group.title}><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>
              ))}
            </div>
            <div className="languages">
              <h3>Languages</h3>
              {data.languages.map((item) => <div key={item.language}><span>{item.language}</span><strong>{item.level}</strong></div>)}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section page-width">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Get in touch</h2>
            <p>For professional enquiries, collaborations or questions about the projects presented here, contact me by email or LinkedIn.</p>
          </div>
          <div className="contact-actions">
            <a className="button contact-button" href={`mailto:${data.profile.email}`}>Email <span aria-hidden="true">↗</span></a>
            <a className="button contact-linkedin" href={data.profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </main>

      <footer className="site-footer page-width">
        <span>© 2026 {data.profile.name}</span>
        <div><a href={data.profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={data.profile.github} target="_blank" rel="noreferrer">GitHub</a></div>
      </footer>
    </div>
  );
}
