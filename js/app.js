/**
 * THE DEVELOPER'S DIGITAL ATELIER — APPLICATION LOGIC
 * Navigation, accessibility, modal dialog, honest form handling, toast notifications.
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
  const closeBtn = document.getElementById("modal-close-btn");
  const modalTitle = document.getElementById("modal-title");
  const modalSubtitle = document.getElementById("modal-subtitle");
  const modalProblem = document.getElementById("modal-problem");
  const modalOverview = document.getElementById("modal-overview");
  const modalTechTags = document.getElementById("modal-tech-tags");
  const modalFeatures = document.getElementById("modal-features");
  const modalArchitecture = document.getElementById("modal-architecture");
  const modalCode = document.getElementById("modal-code");
  const modalStatus = document.getElementById("modal-status");

  let lastFocusedElement = null;

  // Open modal button listeners
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest(".js-open-project-modal");
    if (trigger) {
      const projectId = trigger.getAttribute("data-project-id");
      openProjectModal(projectId, trigger);
    }
  });

  function openProjectModal(projectId, trigger) {
    const project = window.PORTFOLIO_DATA.projects.find(p => p.id === projectId);
    if (!project || !modalBackdrop) return;

    lastFocusedElement = trigger;

    modalTitle.textContent = project.title;
    modalSubtitle.textContent = `// ${project.badge} • ${project.category}`;
    modalProblem.textContent = project.problemStatement;
    modalOverview.textContent = project.overview;

    modalTechTags.innerHTML = project.technologies
      .map(t => `<span class="tech-tag">${t}</span>`)
      .join("");

    modalFeatures.innerHTML = project.verifiedFeatures
      .map(f => `
        <li class="feature-bullet">
          ${ICONS.check}
          <span>${f}</span>
        </li>
      `)
      .join("");

    modalArchitecture.innerHTML = project.architecturalHighlights
      .map(h => `
        <li class="feature-bullet">
          ${ICONS.check}
          <span>${h}</span>
        </li>
      `)
      .join("");

    modalCode.textContent = project.codePreview || "// Code preview verified from local implementation.";
    modalStatus.textContent = project.status;

    modalBackdrop.classList.add("open");
    modalBackdrop.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    // Focus close button for keyboard accessibility
    setTimeout(() => {
      closeBtn.focus();
    }, 100);
  }

  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove("open");
    modalBackdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  // Backdrop click close
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  // Escape key close
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop && modalBackdrop.classList.contains("open")) {
      closeModal();
    }
  });
}

/**
 * Honest Contact Form Handling
 */
function initContactForm() {
  const form = document.getElementById("portfolio-contact-form");
  const copyBtn = document.getElementById("copy-draft-btn");

  if (!form) return;

  const nameInput = document.getElementById("contact-name");
  const emailInput = document.getElementById("contact-email");
  const subjectInput = document.getElementById("contact-subject");
  const messageInput = document.getElementById("contact-message");

  // Inline error containers
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const subjectError = document.getElementById("subject-error");
  const messageError = document.getElementById("message-error");

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validate() {
    let isValid = true;

    // Name validation
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      nameError.textContent = "Please enter your name (minimum 2 characters).";
      nameError.classList.add("active");
      nameInput.classList.add("is-invalid");
      isValid = false;
    } else {
      nameError.classList.remove("active");
      nameInput.classList.remove("is-invalid");
    }

    // Email validation
    if (!validateEmail(emailInput.value.trim())) {
      emailError.textContent = "Please enter a valid email address.";
      emailError.classList.add("active");
      emailInput.classList.add("is-invalid");
      isValid = false;
    } else {
      emailError.classList.remove("active");
      emailInput.classList.remove("is-invalid");
    }

    // Subject validation
    if (!subjectInput.value.trim() || subjectInput.value.trim().length < 3) {
      subjectError.textContent = "Please enter a subject (minimum 3 characters).";
      subjectError.classList.add("active");
      subjectInput.classList.add("is-invalid");
      isValid = false;
    } else {
      subjectError.classList.remove("active");
      subjectInput.classList.remove("is-invalid");
    }

    // Message validation
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      messageError.textContent = "Please enter your message (minimum 10 characters).";
      messageError.classList.add("active");
      messageInput.classList.add("is-invalid");
      isValid = false;
    } else {
      messageError.classList.remove("active");
      messageInput.classList.remove("is-invalid");
    }

    return isValid;
  }

  // Clear errors on input
  [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
    input.addEventListener("input", () => {
      input.classList.remove("is-invalid");
      const err = document.getElementById(`${input.id.replace("contact-", "")}-error`);
      if (err) err.classList.remove("active");
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();

    // Recipient email from config if available, otherwise prompt transparently
    const targetEmail = (window.PORTFOLIO_DATA.personal.email && window.PORTFOLIO_DATA.personal.email.trim() !== "")
      ? window.PORTFOLIO_DATA.personal.email
      : "";

    const formattedBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    if (targetEmail) {
      // Launch user's default email client with draft
      const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(formattedBody)}`;
      window.location.href = mailtoUrl;
      showToast("Opening your default mail client with message pre-filled...", "info");
    } else {
      // Honest notification when recipient address is not yet configured
      copyToClipboard(
        `Subject: ${subject}\nFrom: ${name} (${email})\n\n${message}`,
        "Message copied to clipboard! You can paste and send this via your preferred email or messaging platform."
      );
    }
  });

  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const name = nameInput.value.trim() || "[Your Name]";
      const email = emailInput.value.trim() || "[Your Email]";
      const subject = subjectInput.value.trim() || "Full-Stack Developer Opportunity";
      const message = messageInput.value.trim() || "[Your Message]";

      const textToCopy = `Subject: ${subject}\nSender: ${name} <${email}>\n\nMessage:\n${message}`;
      copyToClipboard(textToCopy, "Draft copied to clipboard!");
    });
  }
}

/**
 * Toast notification system
 */
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    ${type === "success" ? ICONS.check : ICONS.info}
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 4000);
}

/**
 * Clipboard utility
 */
function copyToClipboard(text, successMessage) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMessage, "success");
    }).catch(() => {
      fallbackCopy(text, successMessage);
    });
  } else {
    fallbackCopy(text, successMessage);
  }
}

function fallbackCopy(text, successMessage) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand("copy");
    showToast(successMessage, "success");
  } catch (err) {
    showToast("Unable to copy to clipboard.", "info");
  }
  document.body.removeChild(textarea);
}
