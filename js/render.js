/**
 * ====================================================================
 * MAHADEVA PRASAD S — DATA RENDERER
 * Dynamically binds verified data to semantic DOM elements.
 * "Technology with Purpose" Architecture
 * ====================================================================
 */

const PortfolioRenderer = {
  init(data) {
    if (!data) {
      console.error("Portfolio data not found.");
      return;
    }

    this.data = data;
    this.renderHeader();
    this.renderHero();
    this.renderVision();
    this.renderProjects();
    this.renderSkills();
    this.renderAbout();
    this.renderEducationAndExperience();
    this.renderProblemSolving();
    this.renderContact();
    this.renderFooter();
  },

  /**
   * Header navigation and direct Resume button
   */
  renderHeader() {
    const brandNameEl = document.getElementById("header-brand-name");
    const resumeContainerEl = document.getElementById("header-resume-container");

    if (brandNameEl) {
      brandNameEl.textContent = this.data.personal.name;
    }

    if (resumeContainerEl && this.data.personal.resumeUrl) {
      resumeContainerEl.innerHTML = `
        <a href="${this.data.personal.resumeUrl}" class="btn btn-outline-blue btn-sm" target="_blank" rel="noopener noreferrer" aria-label="Download or View Resume PDF">
          <span>Resume</span>
          ${ICONS.download}
        </a>
      `;
      resumeContainerEl.style.display = "block";
    }
  },

  /**
   * Hero section data binding & verified social profiles
   */
  renderHero() {
    const roleBadgeEl = document.getElementById("hero-role-badge");
    const nameEl = document.getElementById("hero-name");
    const headlineEl = document.getElementById("hero-headline");
    const introEl = document.getElementById("hero-intro");
    const heroResumeBtnEl = document.getElementById("hero-resume-btn");
    const stripLinksEl = document.getElementById("hero-strip-links");

    if (roleBadgeEl) roleBadgeEl.textContent = this.data.personal.statusBadge;
    if (nameEl) nameEl.textContent = this.data.personal.name;
    if (headlineEl) {
      headlineEl.innerHTML = `Building <span class="text-gradient-blue">Technology with Purpose.</span>`;
    }
    if (introEl) introEl.textContent = this.data.personal.intro;

    if (heroResumeBtnEl && this.data.personal.resumeUrl) {
      heroResumeBtnEl.href = this.data.personal.resumeUrl;
      heroResumeBtnEl.innerHTML = `<span>View Resume</span> ${ICONS.download}`;
    }

    if (stripLinksEl) {
      stripLinksEl.innerHTML = `
        <a href="${this.data.social.linkedin}" class="btn btn-secondary btn-sm" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
          ${ICONS.linkedin}
          <span>LinkedIn</span>
        </a>
        <a href="${this.data.social.github}" class="btn btn-secondary btn-sm" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
          ${ICONS.github}
          <span>GitHub</span>
        </a>
        <a href="${this.data.social.leetcode}" class="btn btn-secondary btn-sm" target="_blank" rel="noopener noreferrer" aria-label="LeetCode Profile">
          ${ICONS.leetcode}
          <span>LeetCode</span>
        </a>
      `;
    }
  },

  /**
   * Beyond Code — My Vision Section
   */
  renderVision() {
    const container = document.getElementById("vision-cards-container");
    if (!container || !this.data.vision) return;

    container.innerHTML = this.data.vision.pillars.map(pillar => {
      let iconSvg = ICONS.code;
      let cardClass = "vision-tech";
      let badgeClass = "badge-blue";

      if (pillar.id === "public-service") {
        iconSvg = ICONS.target;
        cardClass = "vision-public-service";
        badgeClass = "badge-violet";
      } else if (pillar.id === "social-startup") {
        iconSvg = ICONS.leaf;
        cardClass = "vision-startup";
        badgeClass = "badge-teal";
      }

      return `
        <article class="card vision-card ${cardClass}">
          <div class="card-header-icon">
            <div class="icon-badge icon-badge-${pillar.accent}" aria-hidden="true">
              ${iconSvg}
            </div>
            <div>
              <span class="vision-pillar-number">${pillar.pillarNumber}</span>
              <h3 class="vision-title">${pillar.title}</h3>
            </div>
          </div>
          
          <p class="vision-body">${pillar.summary}</p>

          <div class="vision-tags-row">
            ${pillar.tags.map(t => `<span class="badge ${badgeClass}">${t}</span>`).join("")}
          </div>
        </article>
      `;
    }).join("");
  },

  /**
   * Featured Projects Showcase
   */
  renderProjects() {
    const container = document.getElementById("projects-grid");
    if (!container || !this.data.projects) return;

    container.innerHTML = this.data.projects.map((proj, idx) => {
      let icon = ICONS.leaf;
      let cardAccentClass = "project-card-teal";
      let badgeClass = "badge-teal";

      if (proj.id === "boat-management") {
        icon = ICONS.anchor;
        cardAccentClass = "project-card-blue";
        badgeClass = "badge-blue";
      } else if (proj.id === "recycling-detection") {
        icon = ICONS.recycle;
        cardAccentClass = "project-card-violet";
        badgeClass = "badge-violet";
      }

      return `
        <article class="project-card ${cardAccentClass}" data-project-id="${proj.id}">
          <div class="project-preview">
            <div class="icon-badge icon-badge-${proj.accent}" style="width: 58px; height: 58px;" aria-hidden="true">
              ${icon}
            </div>
          </div>

          <div class="project-card-body">
            <div class="project-top-row">
              <span class="badge ${badgeClass}">${proj.badge}</span>
              <span class="badge">// 0${idx + 1}</span>
            </div>

            <h3 class="project-card-title">${proj.title}</h3>
            <p class="project-desc">${proj.problemStatement}</p>

            <div class="tech-tag-container" aria-label="Technologies used">
              ${proj.technologies.map(t => `<span class="tech-tag">${t}</span>`).join("")}
            </div>

            <div class="project-actions-row">
              <a href="${proj.repo}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" aria-label="View ${proj.title} on GitHub">
                ${ICONS.github}
                <span>Repository</span>
              </a>
              <button type="button" class="btn btn-outline-${proj.accent} btn-sm js-open-project-modal" data-project-id="${proj.id}" aria-label="Inspect ${proj.title} Architecture">
                <span>Inspect Architecture</span>
                ${ICONS.arrowRight}
              </button>
            </div>
          </div>
        </article>
      `;
    }).join("");
  },

  /**
   * Technical Skills Renderer
   */
  renderSkills() {
    const container = document.getElementById("skills-container");
    if (!container || !this.data.skills) return;

    container.innerHTML = `
      <div class="skills-grid">
        ${this.data.skills.map(category => `
          <div class="skill-card">
            <div class="skill-card-header">
              <div class="icon-badge icon-badge-blue" style="width: 38px; height: 38px;" aria-hidden="true">
                ${ICONS[category.icon] || ICONS.code}
              </div>
              <h3 class="skill-card-title">${category.title}</h3>
            </div>
            <div class="skill-pill-list">
              ${category.items.map(item => `
                <div class="skill-pill-item">
                  <span class="skill-dot"></span>
                  <span>${item}</span>
                </div>
              `).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    `;
  },

  /**
   * About Me Narrative & Verified Quick Facts
   */
  renderAbout() {
    const narrativeEl = document.getElementById("about-narrative-container");
    const certsEl = document.getElementById("about-certifications-list");
    const langsEl = document.getElementById("about-languages-list");

    if (narrativeEl && this.data.about) {
      narrativeEl.innerHTML = this.data.about.narrative
        .map(paragraph => `<p>${paragraph}</p>`)
        .join("");
    }

    if (certsEl && this.data.certifications) {
      certsEl.innerHTML = this.data.certifications
        .map(cert => `
          <div class="skill-pill-item">
            ${ICONS.check}
            <span>${cert}</span>
          </div>
        `).join("");
    }

    if (langsEl && this.data.languages) {
      langsEl.innerHTML = this.data.languages
        .map(lang => `<span class="badge badge-blue">${lang}</span>`)
        .join("");
    }
  },

  /**
   * Education & Verified Internship Timeline
   */
  renderEducationAndExperience() {
    const eduTimelineEl = document.getElementById("education-timeline");
    const internListEl = document.getElementById("internships-container");

    if (eduTimelineEl && this.data.education) {
      eduTimelineEl.innerHTML = this.data.education.map(item => {
        const isMca = item.cgpaAwaitingConfirmation;
        return `
          <div class="timeline-item">
            <div class="timeline-dot ${isMca ? "dot-violet" : ""}"></div>
            <div class="timeline-content">
              <div class="timeline-year">${item.period}</div>
              <h4 class="timeline-title">${item.degree}</h4>
              <div class="timeline-institution">${item.institution}</div>
              ${item.percentage ? `<div class="timeline-meta">Aggregate: <strong>${item.percentage}</strong></div>` : ""}
              ${item.highlights ? `
                <ul style="margin-top: 8px; display: flex; flex-direction: column; gap: 4px;">
                  ${item.highlights.map(h => `<li style="font-size: 0.8rem; color: var(--text-secondary); display: flex; gap: 6px;">• <span>${h}</span></li>`).join("")}
                </ul>
              ` : ""}
              ${isMca ? `
                <div class="cgpa-confirm-box" role="note">
                  ${ICONS.alert}
                  <div>
                    <strong>Data Flag (Awaiting Confirmation):</strong> Resume lists CGPA <strong>6.86</strong>, while a prior profile entry noted <strong>7.18</strong>. Displayed neutrally pending final verification.
                  </div>
                </div>
              ` : ""}
            </div>
          </div>
        `;
      }).join("");
    }

    if (internListEl && this.data.internships) {
      internListEl.innerHTML = this.data.internships.map(intern => `
        <div class="card" style="padding: var(--space-5); margin-bottom: var(--space-4);">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
            <span class="badge badge-${intern.accent}">${intern.program}</span>
            <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">${intern.year}</span>
          </div>
          <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin-bottom: 6px;">${intern.role}</h4>
          <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">${intern.description}</p>
        </div>
      `).join("");
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
   * Contact details & verified links
   */
  renderContact() {
    const contactLinksEl = document.getElementById("contact-direct-links");
    if (!contactLinksEl) return;

    contactLinksEl.innerHTML = `
      <a href="mailto:${this.data.personal.email}" class="contact-method-card" aria-label="Email Mahadeva Prasad S">
        <div class="contact-method-icon">
          ${ICONS.mail}
        </div>
        <div class="contact-method-text">
          <span class="contact-method-label">Direct Email</span>
          <span class="contact-method-value">${this.data.personal.email}</span>
        </div>
      </a>

      <div class="contact-method-card">
        <div class="contact-method-icon">
          ${ICONS.mapPin}
        </div>
        <div class="contact-method-text">
          <span class="contact-method-label">Location</span>
          <span class="contact-method-value">${this.data.personal.location}</span>
        </div>
      </div>

      <a href="${this.data.social.linkedin}" class="contact-method-card" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
        <div class="contact-method-icon" style="color: #60a5fa;">
          ${ICONS.linkedin}
        </div>
        <div class="contact-method-text">
          <span class="contact-method-label">LinkedIn</span>
          <span class="contact-method-value">linkedin.com/in/mahadevaprasad-s</span>
        </div>
      </a>

      <a href="${this.data.social.github}" class="contact-method-card" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
        <div class="contact-method-icon">
          ${ICONS.github}
        </div>
        <div class="contact-method-text">
          <span class="contact-method-label">GitHub</span>
          <span class="contact-method-value">github.com/mpeducation1527-arch</span>
        </div>
      </a>

      <a href="${this.data.social.leetcode}" class="contact-method-card" target="_blank" rel="noopener noreferrer" aria-label="LeetCode Profile">
        <div class="contact-method-icon" style="color: #f59e0b;">
          ${ICONS.leetcode}
        </div>
        <div class="contact-method-text">
          <span class="contact-method-label">LeetCode</span>
          <span class="contact-method-value">leetcode.com/u/mprasad1527</span>
        </div>
      </a>
    `;
  },

  /**
   * Footer
   */
  renderFooter() {
    const footerYearEl = document.getElementById("footer-year");
    const footerNameEl = document.getElementById("footer-name");

    if (footerYearEl) {
      footerYearEl.textContent = new Date().getFullYear();
    }

    if (footerNameEl) {
      footerNameEl.textContent = this.data.personal.name;
    }
  }
};

if (typeof window !== "undefined") {
  window.PortfolioRenderer = PortfolioRenderer;
}
