/**
 * ====================================================================
 * MAHADEVA PRASAD S — PORTFOLIO DATA CONFIGURATION
 * Single Source of Truth
 * Personal Brand: "Technology with Purpose"
 * ====================================================================
 */

const PORTFOLIO_DATA = {
  personal: {
    name: "Mahadeva Prasad S",
    roleLabel: "MCA Student | Aspiring Full-Stack Developer",
    targetRoles: [
      "Full-Stack Developer",
      "Software Developer"
    ],
    conceptHeadline: "Building Technology with Purpose.",
    intro: "I'm Mahadeva Prasad S, an MCA student and aspiring software developer interested in building practical technology that solves real-world problems. My long-term vision connects software innovation, public service, and opportunities for underserved communities.",
    statusBadge: "MCA @ MITE (2025–2027) • Open to Developer Roles",
    email: "mahadevaprasads84@gmail.com",
    location: "Kollegal, Karnataka, India",
    resumeUrl: "assets/Mahadeva_Prasad_S_Resume.pdf"
  },

  social: {
    leetcode: "https://leetcode.com/u/mprasad1527/",
    github: "https://github.com/mpeducation1527-arch",
    linkedin: "https://www.linkedin.com/in/mahadevaprasad-s/"
  },

  /**
   * Section: Beyond Code — My Vision
   * Three connected ambitions presented as long-term aspirations
   */
  vision: {
    title: "Beyond Code — My Vision",
    subtitle: "My future aspirations go beyond a conventional software career, connecting technical craft with public service and grassroots rural innovation.",
    pillars: [
      {
        id: "technology",
        pillarNumber: "PILLAR 01",
        title: "Reliable & Practical Technology",
        accent: "blue",
        summary: "Develop dependable, maintainable, and accessible software applications that address real-world operational bottlenecks. Grounded in strong engineering principles, clean code, and scalable database architecture.",
        tags: ["Practical Software", "Full-Stack Development", "Accessible UX"]
      },
      {
        id: "public-service",
        pillarNumber: "PILLAR 02",
        title: "Public Service & UPSC Dream",
        accent: "violet",
        summary: "Work towards my long-term ambition of the UPSC Civil Services Examination. Aspiring to contribute directly to society through public administration, ethical governance, and policy implementation that creates opportunities for underserved communities.",
        tags: ["UPSC Civil Services", "Public Administration", "Societal Impact"]
      },
      {
        id: "social-startup",
        pillarNumber: "PILLAR 03",
        title: "Agritech & Rural Empowerment",
        accent: "teal",
        summary: "Build an impactful, affordable startup that creates useful technology for farmers, rural communities, and people with limited access to modern digital tools—such as regional decision-support platforms designed for Kannada-speaking users.",
        tags: ["Empowering Farmers", "Rural Innovation", "Digital Inclusivity"]
      }
    ]
  },

  about: {
    title: "About Me",
    subtitle: "A journey driven by curiosity, engineering discipline, and a deep sense of social purpose.",
    narrative: [
      "I am an MCA student at Mangalore Institute of Technology and Engineering (2025–2027) with a deep passion for software development, algorithmic problem-solving, and building practical digital solutions.",
      "My technical foundation centers on Java, Python, JavaScript, and full-stack web architectures backed by relational databases like MySQL. Through verified internship experience, I have developed secure cloud application modules with REST APIs and designed user-centered interfaces using modern UX principles.",
      "Beyond coding, I am guided by the belief that technology must serve a greater purpose. I actively balance technical learning with preparing for my UPSC Civil Services aspirations and exploring ways to build affordable digital solutions that directly benefit farmers and rural communities."
    ]
  },

  /**
   * Featured Projects
   * Strictly verified against project codebases and resume records.
   */
  projects: [
    {
      id: "smart-agriculture",
      title: "AI-Based Smart Agriculture Decision Support System for Karnataka Farmers",
      category: "Agritech & Python Data Engine",
      badge: "Decision Support System",
      accent: "teal",
      problemStatement: "Farmers and agricultural planners across Karnataka frequently lack localized, village-level visibility into soil nutrient health, water conditions, and crop-fertilizer recommendations in their native language.",
      overview: "An analytical decision support engine designed to process regional agricultural data for Karnataka farmers. The system structures district and village selection, farmer-entered soil NPK values, and water conditions to formulate practical crop and fertilizer recommendations with a focus on regional accessibility.",
      technologies: [
        "Python",
        "Data Analysis",
        "Agritech Modeling",
        "Kannada Accessibility"
      ],
      verifiedFeatures: [
        "District and village-level filtering engine tailored for Karnataka agricultural areas (e.g. Chamarajanagar)",
        "Workflow for farmer-entered soil NPK (Nitrogen, Phosphorus, Potassium) and nutrient parameters",
        "Water availability and localized environmental factor considerations",
        "Foundational crop recommendation and fertilizer advisory workflow",
        "Multilingual accessibility design with planned support for Kannada-speaking farmers"
      ],
      architecturalHighlights: [
        "Built with lightweight Python data structures for fast execution without heavy infrastructure requirements.",
        "Modular functional separation between geographic indexing, parameter evaluation, and advisory logic.",
        "Engineered for future integration with localized market prices and weather data feeds."
      ],
      status: "Core analytical engine and decision workflow designed and validated.",
      codeSnippet: `def evaluate_soil_health(district, village, npk_values, water_level):
    """
    Evaluates village-level nutrient parameters and matches suitable crop profiles.
    Regional scope: Karnataka agricultural regions.
    """
    soil_profile = fetch_village_data(district, village)
    suitability_score = calculate_crop_match(soil_profile, npk_values, water_level)
    return generate_recommendations(suitability_score, lang="kannada")`,
      repo: "https://github.com/mpeducation1527-arch"
    },
    {
      id: "boat-management",
      title: "Boat Management System",
      category: "Full-Stack Web & Relational Database",
      badge: "Fleet Logistics & Operations",
      accent: "blue",
      problemStatement: "Coastal boat operators and fleet administrators face operational complexities tracking vessel readiness, crew licensing, fuel monitoring, voyage logs, catch records, and fish sales across fragmented paperwork.",
      overview: "A comprehensive web-based vessel and operations management system designed for coastal fleet workflows. The application provides centralized monitoring of boat fleets, crew allocations, voyage records, catch logs, and maintenance schedules backed by a normalized MySQL relational database schema.",
      technologies: [
        "PHP",
        "MySQL / MariaDB",
        "HTML5 & CSS3",
        "JavaScript",
        "XAMPP"
      ],
      verifiedFeatures: [
        "Boat inventory registry tracking boat codes, vessel types (Trawler, Catamaran, etc.), engine status, and operational readiness",
        "Crew administration system managing personnel records, maritime roles (Skipper, Engineer, Deckhand), and vessel assignments",
        "Voyage tracking module logging trip codes, departure/return schedules, and zone allocations",
        "Catch documentation and fish sales transaction tracking with revenue records",
        "Vessel maintenance logs tracking servicing schedules, repairs, and fleet readiness",
        "Role-based session authentication and dashboard operational statistics"
      ],
      architecturalHighlights: [
        "Relational database structure featuring dedicated tables for boats, crew, trips, catch, sales, and maintenance.",
        "Full CRUD operations with InnoDB foreign keys preserving data integrity.",
        "Engineered for XAMPP / Apache / MariaDB local runtime environment with modular UI includes."
      ],
      status: "Implemented with full relational schema, authentication, and administrative modules.",
      codeSnippet: `CREATE TABLE IF NOT EXISTS \`boats\` (
  \`id\` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  \`boat_code\` VARCHAR(10) NOT NULL UNIQUE,
  \`name\` VARCHAR(100) NOT NULL,
  \`type\` ENUM('Trawler','Gillnetter','Longline','Catamaran','Other'),
  \`fuel_pct\` TINYINT UNSIGNED NOT NULL DEFAULT 100,
  \`status\` ENUM('active','sea','docked','repair') NOT NULL DEFAULT 'docked'
) ENGINE=InnoDB;`,
      repo: "https://github.com/mpeducation1527-arch"
    },
    {
      id: "recycling-detection",
      title: "Material Detection in Recycling Facilities",
      category: "Machine Learning & Computer Vision",
      badge: "ML & Computer Vision",
      accent: "violet",
      problemStatement: "Manual sorting in recycling facilities is hazardous, labor-intensive, and prone to sorting inconsistencies that lower recycling yields and hinder sustainability.",
      overview: "A machine-learning classification system designed to automate material detection and segregation in recycling facilities. The model identifies and categorizes recyclable materials using computer vision techniques to support more consistent, automated sorting pipelines.",
      technologies: [
        "Python",
        "Machine Learning",
        "Computer Vision",
        "Image Classification"
      ],
      verifiedFeatures: [
        "Machine learning-based material classification pipeline for recyclable waste categories",
        "Image processing workflows tailored for recycling facility sorting lines",
        "Automated classification intended to assist facility operators in reducing manual segregation burdens",
        "Applied computer vision modeling focused on environmental sustainability"
      ],
      architecturalHighlights: [
        "Computer vision preprocessing pipeline translating visual data into discrete material class predictions.",
        "Modular model architecture designed for ongoing dataset iteration and classification refinement.",
        "Targeted towards improving operational efficiency and consistency in recycling plants."
      ],
      status: "Machine learning model developed and evaluated for recyclable classification.",
      codeSnippet: `import cv2
import numpy as np

def classify_recyclable_material(image_frame, model):
    """Preprocess image frame and classify recyclable waste category."""
    preprocessed = cv2.resize(image_frame, (224, 224)) / 255.0
    predictions = model.predict(np.expand_dims(preprocessed, axis=0))
    return np.argmax(predictions)`,
      repo: "https://github.com/mpeducation1527-arch"
    }
  ],

  /**
   * Technical Skills
   * Confirmed strictly from resume.
   */
  skills: [
    {
      id: "languages",
      title: "Programming Languages",
      icon: "code",
      items: ["Java", "Python", "JavaScript"]
    },
    {
      id: "web",
      title: "Full-Stack & Web",
      icon: "server",
      items: ["HTML", "CSS", "Full-Stack Development", "REST APIs"]
    },
    {
      id: "database",
      title: "Database Systems",
      icon: "database",
      items: ["MySQL", "Relational Schema Design"]
    },
    {
      id: "design",
      title: "UI/UX Design",
      icon: "layout",
      items: ["UI/UX Design", "Wireframing", "User-Centric Architecture"]
    }
  ],

  /**
   * Education & Credentials
   * Strictly matches uploaded resume.
   * MCA CGPA is explicitly flagged for user confirmation.
   */
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Mangalore Institute of Technology and Engineering (MITE)",
      period: "2025 – 2027",
      cgpaNote: "CGPA: 6.86 (Resume) / 7.18 (Previous entry) — Awaiting Confirmation",
      cgpaAwaitingConfirmation: true,
      highlights: [
        "Postgraduate specialization in core computer applications and software engineering.",
        "Coursework in database systems, object-oriented software engineering, and web architectures."
      ]
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Hindustan College, Mysore",
      period: "2022 – 2025",
      percentage: "78%",
      highlights: [
        "Graduated with 78% aggregate across foundational computer science and software development modules.",
        "Core study in programming paradigms, data structures, and database principles."
      ]
    },
    {
      degree: "Pre-University Course (PUC)",
      institution: "Sree Vasavi Composite PU College, Kollegal",
      period: "2020 – 2022",
      percentage: "54%"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Sri Shiva Vidya Kendra (R), Kollegal",
      period: "2020",
      percentage: "72%"
    }
  ],

  /**
   * Verified Internships from Resume
   */
  internships: [
    {
      role: "Java Full Stack Intern",
      program: "Internship Program",
      year: "2024",
      accent: "blue",
      description: "Built and tested web application modules for the Secure Text Transferring in Cloud project, gaining hands-on experience with Java frameworks, REST APIs, and database integration."
    },
    {
      role: "UI/UX Development Intern",
      program: "Internship Program",
      year: "2024",
      accent: "violet",
      description: "Designed and iterated on user-friendly interfaces using modern UX principles, delivering responsive wireframes and prototypes that improved overall user experience."
    }
  ],

  /**
   * Verified Certifications from Resume
   */
  certifications: [
    "Java Full Stack Development",
    "Web Development"
  ],

  /**
   * Verified Languages from Resume
   */
  languages: [
    "English",
    "Kannada"
  ],

  /**
   * Algorithmic Problem Solving (LeetCode)
   */
  problemSolving: {
    leetcode: {
      profileUrl: "https://leetcode.com/u/mprasad1527/",
      username: "mprasad1527",
      headline: "Data Structures & Algorithmic Practice",
      description: "Practicing core computer science foundations, algorithm design, array and string manipulation, and time-space complexity optimization on LeetCode.",
      focusAreas: [
        "Foundational Data Structures",
        "Algorithmic Problem Solving",
        "Time & Space Complexity Optimization"
      ]
    }
  }
};

if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
