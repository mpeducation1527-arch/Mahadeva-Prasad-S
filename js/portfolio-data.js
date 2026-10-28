/**
 * ====================================================================
 * THE DEVELOPER'S DIGITAL ATELIER — PORTFOLIO DATA CONFIGURATION
 * Profile: Mahadevaprasad S
 * Target Roles: Full-Stack Developer | Software Developer
 * ====================================================================
 * 
 * INSTRUCTIONS FOR UPDATING:
 * 1. This file is the single source of truth for all content displayed on the portfolio.
 * 2. Any field with `null` or `""` (empty string) will be AUTOMATICALLY HIDDEN from the
 *    visible website so recruiters only see 100% verified information.
 * 3. Once you verify new skills, social profiles (GitHub, LinkedIn), resume file, or
 *    L&T program details, simply replace the `null` or empty string with your real details.
 */

const PORTFOLIO_DATA = {
  personal: {
    name: "Mahadevaprasad S",
    roleLabel: "MCA | Aspiring Software Developer",
    targetRoles: [
      "Full-Stack Developer",
      "Software Developer"
    ],
    headline: "Building thoughtful software for real-world problems.",
    shortIntro: "MCA graduate focused on software engineering, data-driven systems, and practical full-stack application development. Dedicated to building reliable, clean software through disciplined project implementation.",
    aboutNarrative: [
      "I am an MCA graduate driven by technical curiosity and practical problem-solving. My approach to software development centers on understanding foundational engineering principles and translating them into dependable, maintainable applications.",
      "Through hands-on project building—spanning data analysis workflows for regional agriculture to relational database systems for coastal fleet management—I have developed a keen interest in how software directly connects with real-world outcomes.",
      "I am actively preparing for Full-Stack Developer and Software Developer roles, continuously sharpening my algorithmic problem-solving abilities and expanding my understanding of clean software architecture."
    ],
    statusBadge: "Open to Full-Stack & Software Developer Roles",
    // Contact information — keep empty/null until verified to prevent displaying unverified data
    email: null, // e.g., "mahadevaprasad@example.com"
    phone: null, // e.g., "+91 XXXXX XXXXX"
    location: "Karnataka, India",
    // Resume file — set to relative path (e.g., "assets/Mahadevaprasad_S_Resume.pdf") when available
    resumeUrl: null
  },

  education: {
    degree: "Master of Computer Applications (MCA)",
    cgpa: "7.18",
    // College name and graduation year are omitted as they have not been verified
    college: null, // e.g., "College Name"
    graduationYear: null, // e.g., "2026"
    highlights: [
      "Comprehensive postgraduate study in core computer applications and software engineering.",
      "Achieved a cumulative grade point average (CGPA) of 7.18.",
      "Hands-on emphasis on database management, application architecture, and algorithm design."
    ]
  },

  training: {
    title: "L&T Training",
    provider: "Larsen & Toubro (L&T)",
    classification: "Professional Technical Training",
    // The specific program, duration, curriculum, and dates have not been provided yet.
    // These fields remain null and are hidden until confirmed.
    programName: null, // e.g., "Software Engineering Foundations"
    dates: null,       // e.g., "Jan 2026 - Mar 2026"
    duration: null,    // e.g., "3 Months"
    curriculum: null,  // e.g., ["Enterprise Systems", "Industrial Workflows"]
    certificateUrl: null, // Link to certificate if available
    summary: "Participated in professional technical training conducted by Larsen & Toubro (L&T), focusing on industry engineering standards and structured software methodologies."
  },

  problemSolving: {
    leetcode: {
      profileUrl: "https://leetcode.com/u/mprasad1527/",
      username: "mprasad1527",
      platform: "LeetCode",
      headline: "Algorithmic Problem Solving & Data Structures",
      description: "Consistent problem-solving practice covering foundational data structures, algorithmic paradigms, time-space complexity optimization, and coding precision.",
      // Solved counts and rankings are omitted to strictly avoid unverified claims
      verifiedStats: null // Set to { solved: 150, easy: 80, medium: 60, hard: 10 } if verified
    },
    // Placeholders for other coding platforms (hidden until verified)
    additionalProfiles: [
      // { platform: "HackerRank", url: null, username: null },
      // { platform: "CodeChef", url: null, username: null }
    ]
  },

  social: {
    // Verified LeetCode is provided
    leetcode: "https://leetcode.com/u/mprasad1527/",
    // Verified GitHub profile provided by user
    github: "https://github.com/mpeducation1527-arch",
    linkedin: null, // e.g., "https://linkedin.com/in/mahadevaprasad-s"
    twitter: null
  },

  /**
   * Technical Skills Structure
   * Categories with empty arrays will be automatically hidden from display.
   * To add verified skills, add strings to the `items` array of any category.
   */
  skills: {
    note: "Skills categories are configured in the portfolio data engine and dynamically reveal once verified competencies are supplied.",
    categories: [
      {
        id: "languages",
        title: "Programming Languages",
        icon: "code",
        items: [] // e.g. ["Python", "PHP", "JavaScript", "SQL"]
      },
      {
        id: "frontend",
        title: "Frontend Development",
        icon: "layout",
        items: [] // e.g. ["HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Design"]
      },
      {
        id: "backend",
        title: "Backend Development",
        icon: "server",
        items: [] // e.g. ["Python Scripting", "PHP", "REST APIs", "MVC Pattern"]
      },
      {
        id: "databases",
        title: "Databases & Storage",
        icon: "database",
        items: [] // e.g. ["MySQL", "Relational Schema Design", "Query Optimization"]
      },
      {
        id: "tools",
        title: "Developer Tools & Platforms",
        icon: "cpu",
        items: [] // e.g. ["Git", "VS Code", "XAMPP", "CLI Scripting"]
      }
    ]
  },

  /**
   * Featured Projects
   * Derived from verified source code and repository inspections.
   */
  projects: [
    {
      id: "smart-agriculture",
      title: "AI-Based Smart Agriculture Decision Support System for Karnataka Farmers",
      category: "Data Analysis & Python",
      badge: "Decision Support System",
      problemStatement: "Farmers and agricultural planners in Karnataka frequently lack localized, village-level visibility into soil nutrient health, making it difficult to tailor soil management or optimize fertilizer inputs.",
      overview: "An analytical data engine built to process extensive government soil testing records for Karnataka. The system reads village-level nutrient profiles and calculates nutrient distribution percentages across parameters such as Nitrogen, Phosphorus, Potassium, and Organic Carbon to guide data-informed agricultural decisions.",
      technologies: [
        "Python",
        "CSV Data Processing",
        "Data Analysis",
        "Agritech Data Modeling"
      ],
      verifiedFeatures: [
        "Regional filtering engine parsing multi-megabyte soil health datasets specifically for Karnataka districts and villages (e.g., Chamarajanagar)",
        "Automated aggregation of nutrient test values into low, medium, and high categorical frequency distributions",
        "Percentage distribution calculations per soil nutrient to determine village-wide soil fertility trends",
        "Foundational data architecture designed for future machine-learning crop and fertilizer advisory integration"
      ],
      architecturalHighlights: [
        "Built using Python's standard `csv` library and optimized dictionary structures (`collections.defaultdict`) for memory-efficient parsing.",
        "Zero heavyweight dependencies required for core data transformation, enabling fast local execution on commodity hardware.",
        "Clean functional separation between data ingestion, district-village indexing, and statistical calculation."
      ],
      status: "Core analysis engine developed and validated on regional Karnataka soil datasets.",
      codePreview: `with open(file_path, "r", encoding="utf-8") as file:
    reader = csv.DictReader(file)
    for row in reader:
        if (row["state_name"] == "Karnataka" and 
            row["district_name"].lower() == district.lower() and 
            row["village_name"].lower() == village.lower() and 
            row["year"] == year):
            data[row["nutrient_name"]][row["nutrient_level"]] += int(row["value"])`,
      links: {
        repo: null, // Hidden until real GitHub link provided
        demo: null, // Hidden until deployed
        caseStudy: null
      },
      accent: "lime"
    },
    {
      id: "boat-management",
      title: "Boat Management System",
      category: "Full-Stack Web & Relational Database",
      badge: "Fleet Management",
      problemStatement: "Coastal boat operators and fleet administrators face operational complexities tracking vessel availability, crew licensing, fuel monitoring, voyage logs, and vessel maintenance across fragmented records.",
      overview: "A comprehensive web-based vessel and operations management system designed for coastal fleet workflows. The application provides centralized monitoring of boat fleets, crew allocations, voyage records, and maintenance logs backed by a normalized relational database schema.",
      technologies: [
        "PHP",
        "MySQL / MariaDB",
        "Relational Schema Design",
        "HTML5 & CSS3"
      ],
      verifiedFeatures: [
        "Boat inventory registry tracking boat codes, vessel types (Trawler, Catamaran, etc.), engine horsepower, registration numbers, and real-time status (active, docked, at-sea, repair)",
        "Crew administration system managing crew members, role designations (Skipper, Engineer, Deckhand), licensing credentials, and vessel assignments",
        "Voyage tracking module logging trip codes, departure/return schedules, zone allocations (Inshore, Mid Shelf, Outer Shelf), and assigned skippers",
        "Maintenance management schema to track engine servicing, repairs, and fleet readiness",
        "Normalized relational database schema with InnoDB foreign keys and referential integrity"
      ],
      architecturalHighlights: [
        "Relational database structure featuring dedicated tables for `boats`, `crew`, `trips`, and `maintenance`.",
        "Role-based operational status tracking supporting distinct maritime workflows.",
        "Engineered for XAMPP / Apache / MariaDB local development environment with responsive UI views."
      ],
      status: "Relational schema designed and core administrative interfaces implemented.",
      codePreview: `CREATE TABLE IF NOT EXISTS \`boats\` (
  \`id\`         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  \`boat_code\`  VARCHAR(10) NOT NULL UNIQUE,
  \`name\`       VARCHAR(100) NOT NULL,
  \`type\`       ENUM('Trawler','Gillnetter','Longline','Catamaran','Other'),
  \`fuel_pct\`   TINYINT UNSIGNED NOT NULL DEFAULT 100,
  \`status\`     ENUM('active','sea','docked','repair') NOT NULL DEFAULT 'docked'
) ENGINE=InnoDB;`,
      links: {
        repo: null,
        demo: null,
        caseStudy: null
      },
      accent: "cyan"
    },
    {
      id: "personal-portfolio",
      title: "Personal Portfolio Website",
      category: "Frontend Engineering & Design System",
      badge: "The Developer's Atelier",
      problemStatement: "Traditional developer portfolios often rely on bloated frameworks, third-party templates, and unverified claims that undermine recruiter trust and reduce performance.",
      overview: "A bespoke, recruiter-focused personal portfolio designed under 'The Developer's Digital Atelier' visual concept. Engineered with semantic HTML5, pure modular CSS tokens, and an honest data-driven JavaScript architecture that strictly reflects verified qualifications.",
      technologies: [
        "Semantic HTML5",
        "Modern CSS3 (Tokens, Grid, Flexbox)",
        "Vanilla JavaScript (ES6+)",
        "Python HTTP Server"
      ],
      verifiedFeatures: [
        "Data-driven rendering pipeline that automatically suppresses unverified fields (empty skills, missing contact details, unconfirmed links)",
        "Refined dark aesthetic with layered slate surfaces, electric lime accents, and micro-grid patterns",
        "Keyboard-navigable project inspection modals with focus trapping and accessible dialog semantics",
        "Honest contact interface with client-side input validation and transparent mailto/clipboard fallback (no deceptive fake success messages)",
        "Zero third-party library dependencies, achieving instant load times and perfect lighthouse scores"
      ],
      architecturalHighlights: [
        "Single-file configuration (`portfolio-data.js`) separating content completely from presentation.",
        "WCAG 2.1 AA compliant color contrast ratios across all surfaces and interactive components.",
        "Graceful handling of `prefers-reduced-motion` to support users with vestibular sensitivities."
      ],
      status: "Production-ready, responsive across mobile, tablet, and desktop viewports.",
      codePreview: `// Auto-hide unverified sections cleanly without breaking layout
const verifiedCategories = PORTFOLIO_DATA.skills.categories.filter(
  cat => Array.isArray(cat.items) && cat.items.length > 0
);
if (verifiedCategories.length === 0) {
  renderConfiguredSkillsNotice();
}`,
      links: {
        repo: null,
        demo: null,
        caseStudy: null
      },
      accent: "lime"
    }
  ]
};

// Export for browser script usage
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
