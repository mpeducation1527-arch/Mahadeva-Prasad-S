/**
 * THE DEVELOPER'S DIGITAL ATELIER — DATA RENDERER
 * Dynamically binds verified data to semantic DOM elements.
 * Strictly hides/omits unverified fields.
 */

const PortfolioRenderer = {
  /**
   * Initializes all data bindings
   */
  init(data) {
    if (!data) {
      console.error("Portfolio data not found.");
      return;
    }

    this.data = data;
    this.renderHeader();
    this.renderHero();
    this.renderAbout();
    this.renderSkills();
    this.renderProjects();
    this.renderEducationTraining();
    this.renderProblemSolving();
    this.renderContact();
    this.renderFooter();
  },

  /**
   * Header navigation & resume link handling
   */
  renderHeader() {
    const brandNameEl = document.getElementById("header-brand-name");
    const resumeContainerEl = document.getElementById("header-resume-container");

    if (brandNameEl) {
      brandNameEl.textContent = this.data.personal.name;
    }

    // Only render Resume button if a verified URL/file is provided
    if (resumeContainerEl) {
      if (this.data.personal.resumeUrl && this.data.personal.resumeUrl.trim() !== "") {
        resumeContainerEl.innerHTML = `
          <a href="${this.data.personal.resumeUrl}" class="btn btn-outline-accent btn-sm" target="_blank" rel="noopener noreferrer">
            <span>Resume</span>
            ${ICONS.externalLink}
          </a>
        `;
        resumeContainerEl.style.display = "block";
      } else {
        resumeContainerEl.innerHTML = "";
        resumeContainerEl.style.display = "none";
      }
    }
  },

  /**
   * Hero section data binding
   */
  renderHero() {
    const metaLabelEl = document.getElementById("hero-meta-label");
    const nameEl = document.getElementById("hero-name");
    const headlineEl = document.getElementById("hero-headline");
    const introEl = document.getElementById("hero-intro");
    const heroLeetcodeEl = document.getElementById("hero-leetcode-link");
    const heroGithubEl = document.getElementById("hero-github-link");

    if (metaLabelEl) metaLabelEl.textContent = this.data.personal.roleLabel;
    if (nameEl) nameEl.textContent = this.data.personal.name;
    if (headlineEl) headlineEl.innerHTML = `Building <span class="highlight">thoughtful software</span> for real-world problems.`;
    if (introEl) introEl.textContent = this.data.personal.shortIntro;

    if (heroLeetcodeEl && this.data.problemSolving.leetcode.profileUrl) {
      heroLeetcodeEl.href = this.data.problemSolving.leetcode.profileUrl;
      heroLeetcodeEl.innerHTML = `
        ${ICONS.leetcode}
        <span>leetcode.com/u/${this.data.problemSolving.leetcode.username}</span>
        ${ICONS.externalLink}
      `;
    }

    if (heroGithubEl && this.data.social.github && this.data.social.github.trim() !== "") {
      const githubUsername = this.data.social.github.replace(/\/$/, '').split('/').pop();
      heroGithubEl.href = this.data.social.github;
      heroGithubEl.innerHTML = `
        ${ICONS.github}
        <span>github.com/${githubUsername}</span>
        ${ICONS.externalLink}
      `;
      heroGithubEl.style.display = "inline-flex";
    }
  },

  /**
   * About Me narrative & compact education card
   */
  renderAbout() {
    const narrativeContainer = document.getElementById("about-narrative");
    const eduCgpaEl = document.getElementById("about-edu-cgpa");
    const eduHighlightsEl = document.getElementById("about-edu-highlights");

    if (narrativeContainer && this.data.personal.aboutNarrative) {
      narrativeContainer.innerHTML = this.data.personal.aboutNarrative
        .map(paragraph => `<p>${paragraph}</p>`)
        .join("");
    }

    if (eduCgpaEl) {
      eduCgpaEl.textContent = this.data.education.cgpa;
    }

    if (eduHighlightsEl && this.data.education.highlights) {
      eduHighlightsEl.innerHTML = this.data.education.highlights
        .map(h => `
          <li class="highlight-item">
            <span class="bullet-icon"></span>
            <span>${h}</span>
          </li>
        `)
        .join("");
    }
  },

  /**
   * Technical Skills renderer
   * Shows categories only if verified items exist.
   * If empty, renders transparent architectural note for recruiters.
   */
  renderSkills() {
    const container = document.getElementById("skills-container");
    if (!container) return;

    const categories = this.data.skills.categories;
    const activeCategories = categories.filter(cat => Array.isArray(cat.items) && cat.items.length > 0);

    if (activeCategories.length > 0) {
      container.innerHTML = `
        <div class="skills-categories-grid">
          ${activeCategories.map(cat => `
            <div class="skill-category-card">
              <h3 class="skill-category-title">
                ${ICONS[cat.icon] || ICONS.code}
                <span>${cat.title}</span>
              </h3>
              <div class="skill-chips">
                ${cat.items.map(skill => `<span class="skill-chip">${skill}</span>`).join("")}
              </div>
            </div>
          `).join("")}
        </div>
      `;
    } else {
      // Honest, professional notice explaining the maintained structure
      container.innerHTML = `
        <div class="skills-notice">
          <div class="skills-notice-header">
            ${ICONS.info}
            <strong>Technical Skills Architecture: Ready for Verified Input</strong>
          </div>
          <p class="skills-notice-text">
            In accordance with high verification standards, proficiency lists are reserved strictly for certified and validated competencies rather than arbitrary ratings. The skills data pipeline is structured and categorized in <code>js/portfolio-data.js</code> and will populate automatically as verified technologies are confirmed.
          </p>
          <div class="skills-code-sample">
            <pre>// Configured categories in js/portfolio-data.js:
[
  "Programming Languages",
  "Frontend Development",
  "Backend Development",
  "Databases & Storage",
  "Developer Tools & Platforms"
]</pre>
          </div>
        </div>
      `;
    }
  },

  /**
   * Featured Projects renderer
   */
  renderProjects() {
    const container = document.getElementById("projects-grid");
    if (!container) return;

    container.innerHTML = this.data.projects.map((proj, index) => {
      const isCyan = proj.accent === "cyan";
      const iconKey = proj.id === "smart-agriculture" ? "leaf" : proj.id === "boat-management" ? "anchor" : "terminal";

      return `
        <article class="project-card" data-project-id="${proj.id}">
          <div class="project-preview">
            <div class="project-preview-grid"></div>
            <div class="project-preview-illustration">
              <div class="diagram-icon ${isCyan ? "diagram-accent-cyan" : ""}">
                ${ICONS[iconKey] || ICONS.code}
              </div>
            </div>
          </div>
          <div class="project-card-body">
            <div class="project-meta-top">
              <span class="badge ${isCyan ? "badge-cyan" : "badge-accent"}">${proj.badge}</span>
              <span class="badge">// 0${index + 1}</span>
            </div>
            <h3 class="project-title">${proj.title}</h3>
            
            <div class="problem-box ${isCyan ? "problem-box-cyan" : ""}">
              <div class="problem-box-title">Problem Statement</div>
              <p class="problem-box-text">${proj.problemStatement}</p>
            </div>

            <div class="project-tech-tags" aria-label="Technologies used">
              ${proj.technologies.map(t => `<span class="tech-tag">${t}</span>`).join("")}
            </div>

            <ul class="project-features-list" aria-label="Key features">
              ${proj.verifiedFeatures.slice(0, 3).map(f => `
                <li class="feature-bullet">
                  ${ICONS.check}
                  <span>${f}</span>
                </li>
              `).join("")}
            </ul>

            <div class="project-card-footer">
              <span class="project-status-note">${proj.status}</span>
              <button type="button" class="btn btn-secondary btn-sm js-open-project-modal" data-project-id="${proj.id}">
                <span>Details</span>
                ${ICONS.arrowRight}
              </button>
            </div>
          </div>
        </article>
      `;
    }).join("");
  },

  /**
   * Education & L&T Training
   */
  renderEducationTraining() {
    const trainingSummaryEl = document.getElementById("training-summary");
    if (trainingSummaryEl) {
      trainingSummaryEl.textContent = this.data.training.summary;
    }
  },

  /**
   * Problem-Solving Profile (LeetCode)
   */
  renderProblemSolving() {
    const leetcodeLinkBtn = document.getElementById("leetcode-action-btn");
    const leetcodeUsernameEl = document.getElementById("leetcode-username-display");

    if (leetcodeLinkBtn && this.data.problemSolving.leetcode.profileUrl) {
      leetcodeLinkBtn.href = this.data.problemSolving.leetcode.profileUrl;
    }

    if (leetcodeUsernameEl) {
      leetcodeUsernameEl.textContent = this.data.problemSolving.leetcode.username;
    }
  },

  /**
   * Contact details & methods
   */
  renderContact() {
    const contactMethodsContainer = document.getElementById("contact-methods-container");
    if (!contactMethodsContainer) return;

    const methods = [];

    // Verified LeetCode
    methods.push(`
      <div class="contact-item">
        ${ICONS.leetcode}
        <div>
          <div style="font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-mono);">CODING PROFILE</div>
          <a href="${this.data.problemSolving.leetcode.profileUrl}" target="_blank" rel="noopener noreferrer" style="color: var(--text-primary); font-weight: 500;">
            leetcode.com/u/${this.data.problemSolving.leetcode.username}
          </a>
        </div>
      </div>
    `);

    // Verified GitHub
    if (this.data.social.github && this.data.social.github.trim() !== "") {
      const githubUsername = this.data.social.github.replace(/\/$/, '').split('/').pop();
      methods.push(`
        <div class="contact-item">
          ${ICONS.github}
          <div>
            <div style="font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-mono);">GITHUB PROFILE</div>
            <a href="${this.data.social.github}" target="_blank" rel="noopener noreferrer" style="color: var(--text-primary); font-weight: 500;">
              github.com/${githubUsername}
            </a>
          </div>
        </div>
      `);
    }

    // Location
    if (this.data.personal.location) {
      methods.push(`
        <div class="contact-item">
          ${ICONS.info}
          <div>
            <div style="font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-mono);">LOCATION</div>
            <span style="color: var(--text-primary); font-weight: 500;">${this.data.personal.location}</span>
          </div>
        </div>
      `);
    }

    // Optional email if configured
    if (this.data.personal.email && this.data.personal.email.trim() !== "") {
      methods.push(`
        <div class="contact-item">
          ${ICONS.mail}
          <div>
            <div style="font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-mono);">EMAIL</div>
            <a href="mailto:${this.data.personal.email}" style="color: var(--accent-primary); font-weight: 500;">${this.data.personal.email}</a>
          </div>
        </div>
      `);
    }

    if (contactMethodsContainer) {
      contactMethodsContainer.innerHTML = methods.join("");
    }
  },

  /**
   * Footer with dynamic year & verified details
   */
  renderFooter() {
    const footerYearEl = document.getElementById("footer-year");
    const footerNameEl = document.getElementById("footer-name");
    const footerLeetcodeLink = document.getElementById("footer-leetcode-link");
    const footerGithubLink = document.getElementById("footer-github-link");

    if (footerYearEl) {
      footerYearEl.textContent = new Date().getFullYear();
    }

    if (footerNameEl) {
      footerNameEl.textContent = this.data.personal.name;
    }

    if (footerLeetcodeLink && this.data.problemSolving.leetcode.profileUrl) {
      footerLeetcodeLink.href = this.data.problemSolving.leetcode.profileUrl;
    }

    if (footerGithubLink && this.data.social.github && this.data.social.github.trim() !== "") {
      footerGithubLink.href = this.data.social.github;
      footerGithubLink.style.display = "inline-block";
    }
  }
};

if (typeof window !== "undefined") {
  window.PortfolioRenderer = PortfolioRenderer;
}
