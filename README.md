# Mahadeva Prasad S — Personal Portfolio
### *Technology with Purpose*

A distinctive, modern, and production-grade personal portfolio website for **Mahadeva Prasad S**, an MCA student and aspiring **Full-Stack Developer** / **Software Developer**.

Designed with a deep navy and charcoal foundation, electric-blue, violet, and subtle teal accents, asymmetric editorial cards, and an honest data-driven architecture.

---

## 1. Core Website Concept: "Technology with Purpose"

The portfolio communicates three interconnected long-term ambitions presented as genuine aspirations:

1. **Practical Software Development:** Become a skilled full-stack developer who designs dependable, maintainable, and user-centric web applications and relational databases.
2. **Public Service & UPSC Civil Services:** Work towards a long-term dream of the UPSC Civil Services Examination, preparing to serve society through ethical governance and public administration.
3. **Agritech & Rural Empowerment Startup:** Explore a future purpose-driven startup creating useful, affordable digital tools for farmers and rural communities—including regional decision-support platforms accessible to Kannada-speaking users.

---

## 2. Verified Information & Integrity Policy

To maintain absolute credibility with technical recruiters and engineering managers, this portfolio displays **only verified information** drawn directly from academic records and resume documentation:

- **Name:** Mahadeva Prasad S
- **Education:**
  - **Master of Computer Applications (MCA):** Mangalore Institute of Technology and Engineering (2025–2027).
    > **Note on CGPA:** Flagged for confirmation (Resume lists 6.86; previous entry stated 7.18). Displayed neutrally pending user verification.
  - **Bachelor of Computer Applications (BCA):** Hindustan College, Mysore (2022–2025) — 78%.
  - **Pre-University Course (PUC):** Sree Vasavi Composite PU College, Kollegal (2020–2022) — 54%.
  - **SSLC:** Sri Shiva Vidya Kendra (R), Kollegal (2020) — 72%.
- **Technical Skills:**
  - *Languages:* Java, Python, JavaScript
  - *Web & Full-Stack:* HTML, CSS, Full-Stack Development, REST APIs
  - *Database:* MySQL, Relational Schema Design
  - *Design:* UI/UX Design, Wireframing, User-Centric Architecture
- **Internships (2024):**
  - *Java Full Stack Intern:* Built and tested web modules for the Secure Text Transferring in Cloud project, gaining hands-on experience with Java frameworks, REST APIs, and database integration.
  - *UI/UX Development Intern:* Designed user-friendly interfaces using modern UX principles, delivering responsive wireframes and prototypes.
- **Certifications:** Java Full Stack Development, Web Development.
- **Languages:** English, Kannada.
- **Featured Projects:**
  1. **AI-Based Smart Agriculture Decision Support System for Karnataka Farmers** (Python, Data Processing, Agritech Modeling, Kannada Accessibility).
  2. **Boat Management System** (PHP, MySQL, HTML5/CSS3, JavaScript, XAMPP).
  3. **Material Detection in Recycling Facilities** (Python, Machine Learning, Computer Vision).
- **Verified Profiles:**
  - LinkedIn: [linkedin.com/in/mahadevaprasad-s](https://www.linkedin.com/in/mahadevaprasad-s/)
  - GitHub: [github.com/mpeducation1527-arch](https://github.com/mpeducation1527-arch)
  - LeetCode: [leetcode.com/u/mprasad1527/](https://leetcode.com/u/mprasad1527/)
- **Contact:**
  - Email: `mahadevaprasads84@gmail.com`
  - Location: Kollegal, Karnataka, India
- **Resume:** Real PDF file linked at `assets/Mahadeva_Prasad_S_Resume.pdf`.

---

## 3. Technology Stack & Architectural Principles

- **Semantic HTML5:** Native landmark elements (`header`, `nav`, `main`, `section`, `article`, `dialog`, `footer`) with full ARIA semantics.
- **Pure CSS3 Design System:**
  - CSS Custom Properties (`css/variables.css`)
  - Deep Navy foundation with Electric Blue (`#3b82f6`), Violet (`#8b5cf6`), and Subtle Teal (`#14b8a6`) accents.
  - Glassmorphic card surfaces with subtle backdrop blur.
  - Responsive CSS Grid and Flexbox layouts (tested on mobile, tablet, and wide desktop).
  - Full `@media (prefers-reduced-motion: reduce)` compliance.
- **Vanilla JavaScript (ES6+):**
  - Centralized data layer (`js/portfolio-data.js`).
  - Dynamic DOM rendering (`js/render.js`).
  - Accessible modal dialogs with focus trapping and keyboard dismissal (`js/app.js`).
  - Transparent email draft workflow with one-click clipboard copying (no fake backend promises).
  - Standalone SVG icons module (`js/icons.js`).
- **Zero Third-Party Bundler Dependencies:** Instant load times, high performance, and simple maintenance.

---

## 4. How to Run the Website Locally

You can launch the portfolio locally using any static web server:

### Option A: Using the Included Windows Batch Launcher
Double-click `start-portfolio.bat` or run:
```powershell
.\start-portfolio.bat
```

### Option B: Using the Python Server Directly
```powershell
python server.py
```
Or to automatically open your default browser:
```powershell
python server.py --open
```
The server will run at:
```
http://localhost:8000
```

### Option C: Direct File Opening
You can also open `index.html` directly in any modern browser (Edge, Chrome, Firefox, Safari).

---

## 5. File & Folder Structure

```
D:\Mahadeva-Prasad-S\
├── index.html               # Main semantic HTML5 document
├── server.py                # Lightweight Python 3 local development server
├── start-portfolio.bat      # One-click Windows development launcher
├── README.md                # Project documentation & configuration guide
├── css\
│   ├── variables.css        # Palette, typography, and spacing tokens
│   ├── base.css             # HTML reset, dark ambient foundation, typography
│   ├── layout.css           # Header, navigation, containers, and responsive grids
│   ├── components.css       # Cards, buttons, vision panels, modals, form
│   └── utilities.css        # Animation helpers and accessibility rules
├── js\
│   ├── portfolio-data.js    # Single source of truth: all verified profile data
│   ├── icons.js             # SVG icon definitions
│   ├── render.js            # DOM renderer
│   └── app.js               # Application logic, modals, contact workflow
└── assets\
    ├── Mahadeva_Prasad_S_Resume.pdf  # Verified resume PDF
    ├── icons\               # Local icon assets
    └── illustrations\       # Visual diagrams and graphics
```
