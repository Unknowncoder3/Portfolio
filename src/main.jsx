import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles.css";

const GITHUB = "https://github.com/Unknowncoder3";
const LINKEDIN = "https://www.linkedin.com/in/snehasish-das-b75a551b0/";
const TABLEAU = "https://public.tableau.com/app/profile/snehasish.das4354";
const EMAIL = "mailto:snehasishdas146@gmail.com";

const projects = [
  {
    title: "AI-Based Candidate Screening & Interview System",
    category: "AI / Applied AI",
    description: "Recruitment workflow combining resume, GitHub, academic and project signals with deterministic scoring, local LLM assistance, interview workflows and lightweight integrity signals.",
    stack: ["Python", "Streamlit", "OpenCV", "Ollama", "NLP"],
    repo: "https://github.com/Unknowncoder3/AI-BASED-RECRUITMENT-SCREENING",
    featured: true
  },
  {
    title: "E-Commerce Customer Intelligence & Sales Analytics",
    category: "Data Analytics",
    description: "End-to-end retail analytics covering data cleaning, revenue analysis, customer behavior, RFM segmentation, product/geographic analysis and interactive Tableau reporting.",
    stack: ["Python", "Pandas", "NumPy", "Tableau", "RFM"],
    repo: "https://github.com/Unknowncoder3/E-Commerce-Customer-Intelligence-Sales-Analytics",
    live: TABLEAU,
    featured: true
  },
  {
    title: "Early Behavioral Screening AI",
    category: "AI / Computer Vision",
    description: "Research prototype using video processing, structured observable signals and AI-assisted interpretation with responsible-AI and non-diagnostic safeguards.",
    stack: ["Python", "OpenCV", "Streamlit", "LLM", "ReportLab"],
    repo: "https://github.com/Unknowncoder3/Early-behavioral-screening-AI",
    featured: true
  },
  {
    title: "AI-Based Travel Planner",
    category: "AI / Recommendation",
    description: "Personalized travel planning application using structured travel data, user preferences, recommendation logic and external information sources.",
    stack: ["Python", "Flask", "Pandas", "REST APIs"],
    repo: "https://github.com/Unknowncoder3/AI-based-Travel-Planner",
    live: "https://globetrotter.streamlit.app/",
    featured: true
  },
  {
    title: "StudyBuddy",
    category: "AI Application",
    description: "AI-oriented productivity platform combining code analysis, PDF processing, voice workflows, web extraction and video-analysis modules.",
    stack: ["Python", "Flask", "JavaScript", "AI"],
    repo: "https://github.com/Unknowncoder3/StudyBuddy",
    featured: true
  },
  {
    title: "Madhav Store Sales Dashboard",
    category: "Business Intelligence",
    description: "Retail BI dashboard covering sales, profit, customers, products, categories, discounts and time-based performance.",
    stack: ["Power BI", "DAX", "Power Query", "Data Modeling"],
    repo: "https://github.com/Unknowncoder3/MADHAV-STORE-DASHBOARD",
    featured: true
  },
  {
    title: "HR Analytics Dashboard",
    category: "Business Intelligence",
    description: "Interactive workforce analytics dashboard focused on attrition, demographics, job satisfaction and employee patterns.",
    stack: ["Tableau", "Excel", "Data Analysis"],
    repo: "https://github.com/Unknowncoder3/HR-Analytics-Dashboard",
    live: "https://public.tableau.com/views/HRAnalyticsDashboard_17871712227680/HRAnalyticsDashboard"
  },
  {
    title: "AI-Based Web Scraper",
    category: "GenAI / Retrieval",
    description: "Semantic web extraction and question-answering prototype using embeddings, retrieval and LLM-based interpretation.",
    stack: ["Python", "Embeddings", "FAISS", "LLM"],
    repo: "https://github.com/Unknowncoder3/Ai-based-Web-scrapper"
  },
  {
    title: "Movie Recommendation System",
    category: "Machine Learning",
    description: "Content-based movie recommendation system using vectorized text features and similarity scoring.",
    stack: ["Python", "TF-IDF", "Scikit-learn", "Flask"],
    repo: "https://github.com/Unknowncoder3/Movie-Recommendation-system"
  },
  {
    title: "Spam SMS Detection",
    category: "Machine Learning",
    description: "NLP classification project for detecting spam messages from text data.",
    stack: ["Python", "NLP", "Scikit-learn"],
    repo: "https://github.com/Unknowncoder3/spam-sms-detection"
  },
  {
    title: "SQL Data Analysis",
    category: "Data Analytics",
    description: "Analytical SQL project focused on querying, transformation and extracting business insights from structured data.",
    stack: ["SQL", "SQLite"],
    repo: "https://github.com/Unknowncoder3/SQL-Data-Analysis"
  },
  {
    title: "Face Recognition System",
    category: "Computer Vision",
    description: "Computer-vision project exploring face detection and recognition workflows.",
    stack: ["Python", "OpenCV", "Computer Vision"],
    repo: "https://github.com/Unknowncoder3/Face-Recognition-System"
  }
];

const skillGroups = [
  ["Programming", ["Python", "SQL", "Java", "C", "C++", "JavaScript"]],
  ["Data & BI", ["Pandas", "NumPy", "Matplotlib", "Excel", "Power BI", "Tableau", "EDA", "RFM Analysis"]],
  ["AI / ML", ["Scikit-learn", "NLP", "Computer Vision", "LLMs", "RAG", "Embeddings", "FAISS", "Recommendation Systems"]],
  ["Engineering", ["Flask", "FastAPI", "Streamlit", "React", "Vite", "REST APIs", "Git", "GitHub"]]
];

function App() {
  const [dark, setDark] = useState(true);
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.88) el.classList.add("is-visible");
      });
    };
    reveal();
    window.addEventListener("scroll", reveal, { passive: true });
    window.addEventListener("resize", reveal);
    return () => {
      window.removeEventListener("scroll", reveal);
      window.removeEventListener("resize", reveal);
    };
  }, []);

  const categories = useMemo(() => ["All", ...new Set(projects.map(p => p.category))], []);
  const visible = projects.filter(p => filter === "All" || p.category === filter);
  const displayed = showAll ? visible : visible.filter(p => p.featured).slice(0, 6);

  return (
    <div className="site-shell">
      <nav className="navbar navbar-expand-lg fixed-top nav-glass">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home">SD<span>.</span></a>
          <button className="navbar-toggler border-0" data-bs-toggle="collapse" data-bs-target="#nav">
            <i className="bi bi-list fs-2"></i>
          </button>
          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
              {["About","Projects","Experience","Skills","Contact"].map(x =>
                <li className="nav-item" key={x}><a className="nav-link" href={"#" + x.toLowerCase()}>{x}</a></li>
              )}
              <li className="nav-item ms-lg-2">
                <button className="theme-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">
                  <i className={dark ? "bi bi-sun" : "bi bi-moon-stars"}></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-orbit orbit-a"></div>
          <div className="hero-orbit orbit-b"></div>
          <div className="hero-grid-lines"></div>
          <div className="container position-relative">
            <div className="hero-grid">
              <div className="hero-copy">
                <div className="eyebrow"><span></span> Open to entry-level opportunities</div>
                <h1>Data, AI & software<br /><em>built for real problems.</em></h1>
                <p className="hero-lead">
                  I'm <strong>Snehasish Das</strong>, a Data Analyst and Applied AI Developer building
                  data-driven products, intelligent workflows and practical analytics applications.
                </p>
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <a className="btn btn-primary-custom" href="#projects">Explore Projects <i className="bi bi-arrow-right"></i></a>
                  <a className="btn btn-outline-custom" href={GITHUB} target="_blank" rel="noreferrer"><i className="bi bi-github"></i> GitHub</a>
                  <a className="btn btn-outline-custom" href={LINKEDIN} target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i> LinkedIn</a>
                  <a className="btn btn-outline-custom" href="/resume.pdf" target="_blank" rel="noreferrer"><i className="bi bi-file-earmark-pdf"></i> Resume</a>
                </div>
                <div className="hero-meta">
                  <span><i className="bi bi-code-slash"></i> Python & SQL</span>
                  <span><i className="bi bi-bar-chart"></i> Analytics & BI</span>
                  <span><i className="bi bi-stars"></i> Applied AI</span>
                </div>
              </div>
              <div className="hero-panel">
                <div className="terminal-card">
                  <div className="terminal-top"><span></span><span></span><span></span><small>portfolio.py</small></div>
                  <div className="terminal-body">
                    <p><b>01</b> <span className="code-key">profile</span> = &#123;</p>
                    <p><b>02</b> &nbsp; <span className="code-key">"role"</span>: <span className="code-string">"Data + Applied AI"</span>,</p>
                    <p><b>03</b> &nbsp; <span className="code-key">"focus"</span>: [<span className="code-string">"analytics"</span>, <span className="code-string">"AI"</span>],</p>
                    <p><b>04</b> &nbsp; <span className="code-key">"builds"</span>: <span className="code-string">"end-to-end"</span>,</p>
                    <p><b>05</b> &nbsp; <span className="code-key">"mindset"</span>: <span className="code-string">"measure impact"</span></p>
                    <p><b>06</b> &#125;</p>
                    <div className="terminal-status"><span className="pulse"></span> ready_to_build()</div>
                  </div>
                </div>
                <div className="floating-stat stat-one"><strong>12+</strong><span>Projects</span></div>
                <div className="floating-stat stat-two"><strong>4</strong><span>Core domains</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section reveal">
          <div className="container">
            <div className="section-label">01 / ABOUT</div>
            <div className="row g-5 align-items-start">
              <div className="col-lg-5">
                <h2>I turn messy inputs into useful systems.</h2>
              </div>
              <div className="col-lg-7">
                <p className="large-copy">
                  My work sits at the intersection of <strong>data analytics, business intelligence,
                  machine learning and applied AI</strong>. I enjoy taking a problem from raw data or
                  unstructured input through analysis, modeling, application logic and a usable interface.
                </p>
                <div className="about-points">
                  <div><span>01</span><p>Translate business questions into measurable analytical problems.</p></div>
                  <div><span>02</span><p>Build practical ML/AI workflows rather than isolated experiments.</p></div>
                  <div><span>03</span><p>Document projects clearly so the work is understandable and reproducible.</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section reveal">
          <div className="container">
            <div className="section-label">02 / SELECTED WORK</div>
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-4 mb-4">
              <div>
                <h2>Projects that show the work.</h2>
                <p className="section-sub">A curated view of analytics, AI, ML and engineering projects.</p>
              </div>
              <div className="filter-row">
                {categories.map(c => <button key={c} className={filter === c ? "filter active" : "filter"} onClick={() => {setFilter(c); setShowAll(false)}}>{c}</button>)}
              </div>
            </div>
            <div className="row g-4">
              {displayed.map((p, i) => <ProjectCard key={p.title} project={p} index={i} onDetails={() => setSelectedProject(p)} />)}
            </div>
            {visible.length > displayed.length && (
              <div className="text-center mt-5">
                <button className="btn btn-outline-custom" onClick={() => setShowAll(!showAll)}>
                  {showAll ? "Show Featured" : `View All ${visible.length} Projects`} <i className="bi bi-arrow-down"></i>
                </button>
              </div>
            )}
          </div>
        </section>

        
        <section className="section snapshot-section reveal">
          <div className="container">
            <div className="section-label">03 / RECRUITER SNAPSHOT</div>
            <div className="row g-3">
              <div className="col-6 col-lg-3"><div className="snapshot-card"><strong>12+</strong><span>Portfolio projects</span></div></div>
              <div className="col-6 col-lg-3"><div className="snapshot-card"><strong>4</strong><span>Core technical domains</span></div></div>
              <div className="col-6 col-lg-3"><div className="snapshot-card"><strong>50K+</strong><span>Rows analyzed</span></div></div>
              <div className="col-6 col-lg-3"><div className="snapshot-card"><strong>40%</strong><span>Reporting effort reduced</span></div></div>
            </div>
          </div>
        </section>

<section id="experience" className="section reveal">
          <div className="container">
            <div className="section-label">04 / EXPERIENCE</div>
            <div className="experience-card">
              <div className="exp-top">
                <div>
                  <span className="tag">INTERNSHIP</span>
                  <h3>Data Mining Intern</h3>
                  <p className="muted">CK and Sons Textiles</p>
                </div>
                <span className="exp-date">Internship Experience</span>
              </div>
              <div className="row g-4 mt-2">
                <div className="col-md-7">
                  <p>Worked on data extraction, cleaning, analysis and reporting workflows to support operational decision-making.</p>
                  <ul className="impact-list">
                    <li><strong>50K+</strong> rows analyzed across business data.</li>
                    <li>Used <strong>Python, SQL and Excel</strong> for analysis and reporting.</li>
                    <li>Helped reduce reporting effort by approximately <strong>40%</strong>.</li>
                    <li>Improved decision turnaround by approximately <strong>2×</strong> through more structured reporting.</li>
                  </ul>
                </div>
                <div className="col-md-5">
                  <div className="mini-metrics">
                    <div><strong>50K+</strong><span>Rows analyzed</span></div>
                    <div><strong>40%</strong><span>Reporting effort reduced</span></div>
                    <div><strong>2×</strong><span>Decision turnaround</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section reveal">
          <div className="container">
            <div className="section-label">05 / TOOLKIT</div>
            <div className="row g-4">
              {skillGroups.map(([name, skills]) =>
                <div className="col-md-6" key={name}>
                  <div className="skill-card">
                    <h4>{name}</h4>
                    <div className="skill-pills">{skills.map(s => <span key={s}>{s}</span>)}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="section proof-section reveal">
          <div className="container">
            <div className="proof-card">
              <div>
                <div className="section-label">06 / PROOF OF WORK</div>
                <h2>More than a portfolio page.</h2>
                <p>Explore the code, dashboards and technical work behind the projects.</p>
              </div>
              <div className="proof-links">
                <a href={GITHUB} target="_blank" rel="noreferrer"><i className="bi bi-github"></i><span>GitHub<small>Source code & projects</small></span><i className="bi bi-arrow-up-right"></i></a>
                <a href={TABLEAU} target="_blank" rel="noreferrer"><i className="bi bi-bar-chart-line"></i><span>Tableau Public<small>Interactive dashboards</small></span><i className="bi bi-arrow-up-right"></i></a>
                <a href={LINKEDIN} target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i><span>LinkedIn<small>Professional profile</small></span><i className="bi bi-arrow-up-right"></i></a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section reveal">
          <div className="container">
            <div className="contact-inner">
              <div className="section-label">07 / CONTACT</div>
              <h2>Let's build something useful.</h2>
              <p>I'm open to entry-level opportunities across data analytics, business intelligence, applied AI and Python-focused roles.</p>
              <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
                <a className="btn btn-primary-custom" href={EMAIL}>Email Me <i className="bi bi-arrow-up-right"></i></a>
                <a className="btn btn-outline-custom" href="/resume.pdf" target="_blank" rel="noreferrer"><i className="bi bi-file-earmark-pdf"></i> View Resume</a>
                <a className="btn btn-outline-custom" href={LINKEDIN} target="_blank" rel="noreferrer">Connect on LinkedIn</a>
              </div>
            </div>
          </div>
        </section>
      </main>


      {selectedProject && (
        <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="project-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close">
              <i className="bi bi-x-lg"></i>
            </button>
            <span className="project-category">{selectedProject.category}</span>
            <h2>{selectedProject.title}</h2>
            <p className="modal-description">{selectedProject.description}</p>
            <div className="modal-grid">
              <div>
                <h5>Technology</h5>
                <div className="stack">{selectedProject.stack.map(x => <span key={x}>{x}</span>)}</div>
              </div>
              <div>
                <h5>What this demonstrates</h5>
                <ul>
                  <li>Problem-to-application thinking</li>
                  <li>Practical data / AI workflow design</li>
                  <li>Documented, inspectable project work</li>
                </ul>
              </div>
            </div>
            <div className="d-flex flex-wrap gap-2 mt-4">
              <a className="btn btn-primary-custom" href={selectedProject.repo} target="_blank" rel="noreferrer">Open Repository <i className="bi bi-github"></i></a>
              {selectedProject.live && <a className="btn btn-outline-custom" href={selectedProject.live} target="_blank" rel="noreferrer">Open Live <i className="bi bi-box-arrow-up-right"></i></a>}
            </div>
          </div>
        </div>
      )}

      <footer>
        <div className="container d-flex flex-column flex-md-row justify-content-between gap-3">
          <span>© {new Date().getFullYear()} Snehasish Das</span>
          <span>Data Analyst · Applied AI Developer</span>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({ project, index, onDetails }) {
  return (
    <div className="col-md-6 col-xl-4">
      <article className="project-card h-100 reveal-card" style={{"--delay": `${index * 70}ms`}}>
        <div className="project-number">{String(index + 1).padStart(2, "0")}</div>
        <span className="project-category">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="stack">{project.stack.map(x => <span key={x}>{x}</span>)}</div>
        <div className="project-actions mt-auto pt-4">
          <button className="project-detail-btn" onClick={onDetails}>Case Study <i className="bi bi-arrow-right"></i></button>
          <a href={project.repo} target="_blank" rel="noreferrer">Repository <i className="bi bi-arrow-up-right"></i></a>
          {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live <i className="bi bi-box-arrow-up-right"></i></a>}
        </div>
      </article>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);