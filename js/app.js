/**
 * ====================================================================
 * MAHADEVA PRASAD S — APPLICATION LOGIC
 * Navigation, modal inspector, honest contact draft workflow, toast.
 * ====================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize dynamic data rendering
  if (window.PortfolioRenderer && window.PORTFOLIO_DATA) {
    window.PortfolioRenderer.init(window.PORTFOLIO_DATA);
  }

  initNavigation();
  initProjectModals();
  initContactForm();
  initScrollSpy();
});

/**
 * Navigation Bar Behaviors
 */
function initNavigation() {
  const header = document.querySelector(".site-header");
  const navToggle = document.getElementById("nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const mobileLinks = mobileNav ? mobileNav.querySelectorAll(".nav-link") : [];

  // Sticky header background transition on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, { passive: true });

  // Mobile menu toggle
  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = navToggle.classList.contains("open");
      if (isOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        closeMobileNav();
      });
    });

    // Close on click outside
    document.addEventListener("click", (e) => {
      if (!navToggle.contains(e.target) && !mobileNav.contains(e.target) && mobileNav.classList.contains("open")) {
        closeMobileNav();
      }
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileNav.classList.contains("open")) {
        closeMobileNav();
        navToggle.focus();
      }
    });
  }

  function openMobileNav() {
    navToggle.classList.add("open");
    navToggle.setAttribute("aria-expanded", "true");
    mobileNav.classList.add("open");
  }

  function closeMobileNav() {
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    mobileNav.classList.remove("open");
  }
}

/**
 * Scrollspy to highlight active link
 */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".site-header .nav-link");

  if (!("IntersectionObserver" in window)) return;

  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -70% 0px",
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          const href = link.getAttribute("href");
          if (href === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/**
 * Project Details Modal Dialog
 */
function initProjectModals() {
  const modalBackdrop = document.getElementById("project-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalFooterCloseBtn = document.getElementById("modal-footer-close-btn");
  let lastFocusedElement = null;

  if (!modalBackdrop) return;

  // Delegate clicks on "Inspect Architecture" buttons
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest(".js-open-project-modal");
    if (!trigger) return;

    const projectId = trigger.getAttribute("data-project-id");
    const project = window.PORTFOLIO_DATA?.projects?.find(p => p.id === projectId);

    if (project) {
      lastFocusedElement = trigger;
      openModal(project);
    }
  });

  function openModal(project) {
    document.getElementById("modal-title").textContent = project.title;
    document.getElementById("modal-subtitle").textContent = `// ${project.badge.toUpperCase()}`;
    document.getElementById("modal-problem").textContent = project.problemStatement;
    document.getElementById("modal-overview").textContent = project.overview;

    // Tech Tags
    const tagsContainer = document.getElementById("modal-tech-tags");
    if (tagsContainer) {
      tagsContainer.innerHTML = project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join("");
    }

    // Verified Features
    const featuresContainer = document.getElementById("modal-features");
    if (featuresContainer) {
      featuresContainer.innerHTML = project.verifiedFeatures.map(f => `
        <li class="modal-feature-item">
          ${ICONS.check}
          <span>${f}</span>
        </li>
      `).join("");
    }

    // Architectural Highlights
    const archContainer = document.getElementById("modal-architecture");
    if (archContainer) {
      archContainer.innerHTML = project.architecturalHighlights.map(a => `
        <li class="modal-feature-item">
          ${ICONS.arrowRight}
          <span>${a}</span>
        </li>
      `).join("");
    }

    // Code Snippet
    const codeBlock = document.getElementById("modal-code");
    if (codeBlock) {
      codeBlock.textContent = project.codeSnippet || "// Code preview verified and maintained in repository.";
    }

    // Status
    const statusEl = document.getElementById("modal-status");
    if (statusEl) {
      statusEl.textContent = project.status;
    }

    // Repo Link
    const repoBtn = document.getElementById("modal-repo-btn");
    if (repoBtn) {
      repoBtn.href = project.repo || window.PORTFOLIO_DATA?.social?.github;
    }

    modalBackdrop.classList.add("open");
    modalBackdrop.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    if (modalCloseBtn) {
      modalCloseBtn.focus();
    }
  }

  function closeModal() {
    modalBackdrop.classList.remove("open");
    modalBackdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeModal);
  }

  if (modalFooterCloseBtn) {
    modalFooterCloseBtn.addEventListener("click", closeModal);
  }

  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop.classList.contains("open")) {
      closeModal();
    }
  });
}

/**
 * Contact Form Logic (Honest Draft Workflow)
 */
function initContactForm() {
  const form = document.getElementById("portfolio-contact-form");
  const copyBtn = document.getElementById("copy-draft-btn");

  if (!form) return;

  function getFormData() {
    return {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      subject: form.subject.value.trim(),
      message: form.message.value.trim()
    };
  }

  function validate() {
    let isValid = true;
    const { name, email, subject, message } = getFormData();

    // Name
    const nameErr = document.getElementById("name-error");
    if (!name) {
      nameErr.textContent = "Please enter your name.";
      nameErr.classList.add("visible");
      isValid = false;
    } else {
      nameErr.classList.remove("visible");
    }

    // Email
    const emailErr = document.getElementById("email-error");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      emailErr.textContent = "Please provide a valid email address.";
      emailErr.classList.add("visible");
      isValid = false;
    } else {
      emailErr.classList.remove("visible");
    }

    // Subject
    const subjectErr = document.getElementById("subject-error");
    if (!subject) {
      subjectErr.textContent = "Please provide a subject line.";
      subjectErr.classList.add("visible");
      isValid = false;
    } else {
      subjectErr.classList.remove("visible");
    }

    // Message
    const msgErr = document.getElementById("message-error");
    if (!message) {
      msgErr.textContent = "Please write a brief message.";
      msgErr.classList.add("visible");
      isValid = false;
    } else {
      msgErr.classList.remove("visible");
    }

    return isValid;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validate()) return;

    const data = getFormData();
    const recipient = window.PORTFOLIO_DATA?.personal?.email || "mahadevaprasads84@gmail.com";
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(
      `Hello Mahadeva Prasad,\n\n${data.message}\n\nBest regards,\n${data.name}\n${data.email}`
    )}`;

    window.location.href = mailtoUrl;
    showToast("Opening default email client with your drafted message...");
  });

  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const data = getFormData();
      const textToCopy = `To: ${window.PORTFOLIO_DATA?.personal?.email || "mahadevaprasads84@gmail.com"}\nSubject: ${data.subject || "Software Developer Opportunity"}\n\nMessage:\n${data.message || "(No message body)"}\n\nFrom: ${data.name || "(Anonymous)"} (${data.email || "No email"})`;

      if (navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast("Draft copied to clipboard!");
        }).catch(() => {
          showToast("Unable to copy to clipboard.");
        });
      } else {
        showToast("Clipboard access not supported.");
      }
    });
  }
}

/**
 * Toast Notification Helper
 */
function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    ${ICONS.info}
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 250ms ease";
    setTimeout(() => toast.remove(), 250);
  }, 4000);
}
