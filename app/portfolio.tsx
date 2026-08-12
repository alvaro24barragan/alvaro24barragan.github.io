"use client";

import { useEffect, useState } from "react";
import data from "@/content/profile.json";
import { languageOptions, translateContent, ui, type Language } from "@/app/i18n";

const courseCategories = [
  "GenAI & deep learning",
  "ML & MLOps",
  "Python & data",
  "AI foundations",
];

const featuredCourseOrder = [
  "Designing Agentic Systems with LangChain",
  "Developing LLM Applications with LangChain",
  "Transformer Models with PyTorch",
  "Introduction to MLflow",
  "Monitoring Machine Learning Concepts",
  "MLOps Concepts",
];

const featuredCourses = data.courses
  .filter((course) => course.featured)
  .sort((first, second) => featuredCourseOrder.indexOf(first.title) - featuredCourseOrder.indexOf(second.title));

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const publicAsset = (path: string) => `${basePath}${path}`;

export default function Portfolio() {
  const [educationOpen, setEducationOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const copy = ui[language];
  const t = (value: string) => translateContent(language, value);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const initialTheme = savedTheme === "dark" ? "dark" : "light";
    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
  };

  const openEducation = () => {
    setEducationOpen(true);
    window.setTimeout(() => {
      document.getElementById("education")?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label={copy.goToTop}>
          <span className="brand-mark">AB</span>
        </a>
        <nav aria-label={copy.mainNavigation}>
          <a href="#experience">{copy.experience}</a>
          <a href="#current-focus">{copy.currentFocus}</a>
          <button type="button" onClick={openEducation}>{copy.education}</button>
          <a href="#projects">{copy.projects}</a>
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "light" ? copy.enableDarkMode : copy.enableLightMode}
            title={theme === "light" ? copy.enableDarkMode : copy.enableLightMode}
          >
            <span className="theme-symbol" aria-hidden="true">{theme === "light" ? "◐" : "○"}</span>
            <span>{theme === "light" ? "DARK" : "LIGHT"}</span>
          </button>
          <div className="language-switcher" role="group" aria-label={copy.languageSelector}>
            {languageOptions.map((option) => (
              <button
                className={`language-option ${language === option.code ? "is-active" : ""}`}
                type="button"
                aria-pressed={language === option.code}
                onClick={() => setLanguage(option.code)}
                key={option.code}
              >
                {option.label}
              </button>
            ))}
          </div>
          <a className="nav-cta" href={`mailto:${data.profile.email}`}>{copy.contact}</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero page-width">
          <div className="hero-copy">
            <p className="eyebrow">{t(data.profile.positioning)}</p>
            <h1>{data.profile.name}</h1>
            <p className="hero-summary">{t(data.profile.summary)}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#experience">{copy.exploreProfile} <span aria-hidden="true">↓</span></a>
              <a className="button button-secondary" href={`mailto:${data.profile.email}`}>{copy.getInTouch} <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <aside className="profile-panel" aria-label={copy.professionalSummary}>
            <div className="profile-panel-heading">
              <p>{copy.currentProfile}</p>
            </div>
            <dl>
              <div><dt>{copy.basedIn}</dt><dd>{t(data.profile.location)}</dd></div>
              <div><dt>{copy.currentRole}</dt><dd>{t("Data Consultant")} · NFQ</dd></div>
              <div><dt>{copy.coreFocus}</dt><dd>LLMs · RAG · ML · {t("Automation")}</dd></div>
              <div><dt>{copy.languages}</dt><dd>ES {t("Native")} · EN C1 · DE A2</dd></div>
            </dl>
          </aside>
        </section>

        <section className="highlights page-width" aria-label={copy.profileHighlights}>
          {data.highlights.map((item) => (
            <div className="highlight" key={item.label}>
              <strong>{item.value}</strong>
              <span>{t(item.label)}</span>
            </div>
          ))}
        </section>

        <section id="experience" className="section page-width">
          <div className="section-heading">
            <div><p className="section-number">01</p><h2>{copy.experience}</h2></div>
            <p>{copy.experienceDescription}</p>
          </div>
          <div className="experience-list">
            {data.experience.map((job) => (
              <article className="experience-item" key={`${job.company}-${job.period}`}>
                <div className="experience-meta">
                  <p>{job.company}</p>
                  <span>{t(job.location)}</span>
                  <time>{t(job.period)}</time>
                </div>
                <div className="experience-copy">
                  <h3>{t(job.role)}</h3>
                  <p>{t(job.summary)}</p>
                  <div className="tag-row">{job.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                  <details className="role-details">
                    <summary>{copy.fullResponsibilities} <span aria-hidden="true">+</span></summary>
                    <ul>{job.details.map((detail) => <li key={detail}>{t(detail)}</li>)}</ul>
                  </details>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="current-focus" className="section current-focus page-width">
          <div className="section-heading">
            <div><p className="section-number">02</p><h2>{copy.currentFocus}</h2></div>
            <p>{copy.focusDescription}</p>
          </div>
          <div className="focus-grid">
            {data.currentFocus.map((item) => (
              <article className="focus-card" key={item.title}>
                <span className="focus-status">{t(item.status)}</span>
                <h3>{t(item.title)}</h3>
                <p>{t(item.description)}</p>
                {item.skills.length > 0 && (
                  <div className="focus-competencies">
                    {"competencyLabel" in item && item.competencyLabel && <p className="focus-competency-label">{t(item.competencyLabel)}</p>}
                    <div className="tag-row">{item.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                  </div>
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
              <span className="education-title"><span className="section-number">03</span><span>{copy.educationAndCourses}</span></span>
              <span className="education-action">{educationOpen ? copy.closeFullRecord : copy.exploreEducation(data.courses.length)} <span aria-hidden="true">{educationOpen ? "−" : "+"}</span></span>
            </button>

            <div className="degree-grid">
              {data.education.map((item) => (
                <article className="degree" key={item.degree}>
                  <div className="degree-meta"><span>{t(item.period)}</span><span>{t(item.location)}</span></div>
                  <h3>{t(item.degree)}</h3>
                  <p className="institution">{item.institution}</p>
                  <p>{t(item.summary)}</p>
                  <p className="thesis"><strong>{item.degree === "Master's Degree in Artificial Intelligence" ? copy.mastersThesis : copy.bachelorsThesis}</strong> {t(item.thesis)}</p>
                  {item.link && <a href={item.link} target="_blank" rel="noreferrer">{copy.viewRepository} <span aria-hidden="true">↗</span></a>}
                  <details className="degree-details">
                    <summary>{copy.moreAboutDegree} <span aria-hidden="true">+</span></summary>
                    <div className="degree-details-content">
                      <div className="degree-area-list">
                        {item.areas.map((area) => (
                          <section className="degree-area" key={area.title}>
                            <h4>{t(area.title)}</h4>
                            <p>{t(area.description)}</p>
                          </section>
                        ))}
                      </div>
                      <div className="tag-row">{item.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                    </div>
                  </details>
                </article>
              ))}
            </div>

            <div id="education-details" className="education-details" hidden={!educationOpen}>
              <div className="learning-intro">
                <div>
                  <p className="eyebrow">{copy.continuousLearning}</p>
                  <h2>{copy.learningHeading}</h2>
                </div>
                <p>{copy.learningDescription}</p>
              </div>

              <div className="featured-learning">
                {featuredCourses.map((course) => (
                  <a className="featured-course" href={publicAsset(course.certificate)} target="_blank" rel="noreferrer" key={course.title}>
                    <span>{course.provider}</span>
                    <strong>{course.title}</strong>
                    <small>{course.date}{course.duration ? ` · ${course.duration}` : ""}</small>
                    <b>{copy.viewCertificate} ↗</b>
                  </a>
                ))}
              </div>

              <div className="course-library">
                {courseCategories.map((category) => {
                  const courses = data.courses.filter((course) => course.category === category);
                  return (
                    <section className="course-group" key={category}>
                      <div className="course-group-heading"><h3>{t(category)}</h3><span>{copy.courseCount(courses.length)}</span></div>
                      <div className="course-list">
                        {courses.map((course) => (
                          <a href={publicAsset(course.certificate)} target="_blank" rel="noreferrer" className="course-row" key={course.title}>
                            <span className="course-title">{course.title}</span>
                            <span>{course.provider}</span>
                            <span>{course.duration ?? copy.certificate}</span>
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
            <div><p className="section-number">04</p><h2>{copy.selectedProjects}</h2></div>
            <p>{copy.projectsDescription}</p>
          </div>
          <div className="project-grid">
            {data.projects.map((project) => (
              <article className="project" key={project.title}>
                <h3>{t(project.title)}</h3>
                <div className="project-record">
                  <div className="record-block">
                    <span className="record-label">{copy.problemContext}</span>
                    <p>{t(project.context)}</p>
                  </div>
                  <div className="record-block record-approach">
                    <span className="record-label">{copy.approach}</span>
                    <p>{t(project.description)}</p>
                  </div>
                  {project.title !== "RAG Document Assistant" && (
                    <div className="record-block record-evidence">
                      <span className="record-label">{copy.evidence}</span>
                      <div className="evidence-links">
                        {project.reports?.map((report) => (
                          <a href={report.url} target="_blank" rel="noreferrer" key={report.url}>{t(report.label)} <span aria-hidden="true">↗</span></a>
                        ))}
                        {project.link && <a href={project.link} target="_blank" rel="noreferrer">{copy.viewRepository} <span aria-hidden="true">↗</span></a>}
                        {!project.link && !project.reports?.length && <span>{copy.methodArchitecture}</span>}
                      </div>
                    </div>
                  )}
                  <div className="record-block record-stack">
                    <span className="record-label">{copy.stack}</span>
                    <div className="tag-row">{project.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills-section">
          <div className="page-width">
            <div className="section-heading">
              <div><p className="section-number">05</p><h2>{copy.technicalProfile}</h2></div>
              <p>{copy.technicalDescription}</p>
            </div>
            <div className="skills-grid">
              {data.skillGroups.map((group) => (
                <article key={group.title}>
                  <h3>{t(group.title)}</h3>
                  <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
            <div className="languages">
              <h3>{copy.languages}</h3>
              {data.languages.map((item) => <div key={item.language}><span>{t(item.language)}</span><strong>{t(item.level)}</strong></div>)}
            </div>
          </div>
        </section>

        <section id="other-activities" className="section beyond-work page-width">
          <div className="section-heading">
            <div><p className="section-number">06</p><h2>{copy.otherActivities}</h2></div>
            <p>{copy.activitiesDescription}</p>
          </div>
          <div className="activity-list">
            {data.additionalActivities.map((activity) => (
              <article className="activity-card" key={activity.title}>
                <div className="activity-meta">
                  <p>{t(activity.organisation)}</p>
                  <time>{t(activity.period)}</time>
                </div>
                <div>
                  <h3>{t(activity.title)}</h3>
                  <p>{t(activity.description)}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section page-width">
          <div>
            <p className="eyebrow">{copy.contact}</p>
            <h2>{copy.getInTouch}</h2>
            <p>{copy.contactDescription}</p>
          </div>
          <div className="contact-actions">
            <a className="button contact-button" href={`mailto:${data.profile.email}`}>{copy.email} <span aria-hidden="true">↗</span></a>
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
