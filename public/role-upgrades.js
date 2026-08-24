(() => {
  const roleData = {
    data: {
      eyebrow: "DATA ANALYST ROADMAP",
      title: "From raw data to business decisions.",
      intro: "A practical path focused on analysis, business intelligence, dashboards and decision-ready insights.",
      steps: [
        ["01", "Foundations", "Excel · SQL · Python", "Build strong querying, spreadsheet and Python fundamentals."],
        ["02", "Analysis", "Pandas · NumPy · EDA · Statistics", "Clean data, explore patterns and turn business questions into measurable analysis."],
        ["03", "BI & Dashboards", "Power BI · Tableau · DAX", "Model data, define KPIs and communicate findings through interactive dashboards."],
        ["04", "Business Impact", "RFM · Segmentation · Storytelling", "Translate analysis into customer, sales and operational recommendations."],
        ["05", "Job Ready", "Case studies · SQL · Portfolio", "Present end-to-end projects and prepare for analyst interviews."],
      ]
    },
    ai: {
      eyebrow: "APPLIED AI ROADMAP",
      title: "From ML foundations to useful AI products.",
      intro: "A practical path focused on machine learning, LLM applications, retrieval and deployable AI systems.",
      steps: [
        ["01", "ML Foundations", "Python · Scikit-learn · Evaluation", "Strengthen modeling, feature engineering, validation and measurable evaluation."],
        ["02", "AI Specialization", "NLP · Computer Vision · ML Apps", "Build practical systems around text, images, video and structured data."],
        ["03", "GenAI & RAG", "LLMs · Embeddings · FAISS · RAG", "Build grounded AI workflows with retrieval, prompting and local model tooling."],
        ["04", "AI Engineering", "Flask · Streamlit · APIs · Git", "Turn models into usable applications with clean interfaces and reproducible workflows."],
        ["05", "Job Ready", "Projects · Evaluation · Responsible AI", "Show complete AI systems and explain trade-offs, limitations and real-world impact."],
      ]
    }
  };

  const makeSection = (kind) => {
    const data = roleData[kind];
    const section = document.createElement("section");
    section.className = `role-roadmap-section ${kind}-roadmap-section reveal`;
    section.id = `${kind}-roadmap`;
    section.innerHTML = `
      <div class="container">
        <div class="section-label">${data.eyebrow}</div>
        <div class="roadmap-heading">
          <div><h2>${data.title}</h2><p>${data.intro}</p></div>
          <span class="roadmap-badge">ROLE FOCUS</span>
        </div>
        <div class="roadmap-track">
          ${data.steps.map(([n, name, tools, desc]) => `
            <article class="roadmap-step">
              <span class="roadmap-number">${n}</span>
              <div><h3>${name}</h3><strong>${tools}</strong><p>${desc}</p></div>
            </article>`).join("")}
        </div>
      </div>`;
    return section;
  };

  const makeResumeSection = () => {
    const section = document.createElement("section");
    section.className = "section role-resumes-section reveal";
    section.id = "resumes";
    section.innerHTML = `
      <div class="container">
        <div class="section-label">ROLE-SPECIFIC RESUMES</div>
        <div class="resume-heading">
          <div><h2>Choose the resume for the role.</h2><p>Two focused versions make it easier for recruiters to see the experience most relevant to the opening.</p></div>
        </div>
        <div class="row g-4">
          <div class="col-lg-6"><article class="resume-card"><div class="resume-icon"><i class="bi bi-bar-chart-line"></i></div><div><span>DATA ROLES</span><h3>Data Analyst Resume</h3><p>Python, SQL, Excel, Power BI, Tableau, EDA, RFM and business analytics projects.</p><a class="btn btn-primary-custom" href="/resume-data.pdf" target="_blank" rel="noreferrer"><i class="bi bi-file-earmark-pdf"></i> View Data Resume</a></div></article></div>
          <div class="col-lg-6"><article class="resume-card"><div class="resume-icon"><i class="bi bi-stars"></i></div><div><span>AI ROLES</span><h3>Applied AI Resume</h3><p>Machine learning, computer vision, NLP, LLMs, RAG and end-to-end AI applications.</p><a class="btn btn-primary-custom" href="/resume.pdf" target="_blank" rel="noreferrer"><i class="bi bi-file-earmark-pdf"></i> View Applied AI Resume</a></div></article></div>
        </div>
      </div>`;
    return section;
  };

  const insert = () => {
    if (document.querySelector("#role-resumes")) return true;
    const about = document.querySelector("#about");
    const experience = document.querySelector("#experience");
    const resumes = makeResumeSection();
    resumes.id = "role-resumes";
    const data = makeSection("data");
    const ai = makeSection("ai");
    if (about) about.insertAdjacentElement("afterend", resumes);
    if (experience) {
      experience.insertAdjacentElement("beforebegin", data);
      data.insertAdjacentElement("afterend", ai);
    }
    return true;
  };

  const boot = () => {
    if (insert()) {
      setTimeout(() => document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * .92) el.classList.add("is-visible");
      }), 50);
    }
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot, { once: true });
  else boot();
  const observer = new MutationObserver(() => { if (insert()) observer.disconnect(); });
  observer.observe(document.body, { childList: true, subtree: true });
})();
