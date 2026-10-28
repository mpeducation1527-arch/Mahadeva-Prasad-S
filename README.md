# Mahadevaprasad S — Personal Portfolio Website
### *The Developer's Digital Atelier*

A bespoke, production-grade personal portfolio website for **Mahadevaprasad S**, an MCA graduate targeting **Full-Stack Developer** and **Software Developer** roles.

Designed with an editorial-style, premium dark aesthetic—combining clean typography, software-inspired architectural details, and strict content integrity.

---

## 1. Verified Information & Content Policy

To maintain absolute credibility with technical recruiters and engineering managers, this portfolio uses **only verified information**:

- **Name:** Mahadevaprasad S
- **Education:** Master of Computer Applications (MCA)
- **CGPA:** 7.18
- **Target Roles:** Full-Stack Developer, Software Developer
- **Featured Projects:**
  1. **AI-Based Smart Agriculture Decision Support System for Karnataka Farmers** (Validated via Python CSV data analysis engine for Karnataka soil health datasets)
  2. **Boat Management System** (Validated via PHP/MySQL relational database schema and vessel/crew management interfaces)
  3. **Personal Portfolio Website** (Validated via bespoke semantic HTML5/CSS3/Vanilla JS atelier implementation)
- **Problem-Solving Profile:** [LeetCode Profile (mprasad1527)](https://leetcode.com/u/mprasad1527/)
- **Technical Training:** L&T Training (strictly labeled as professional technical training; no fabricated employment or certification claims)

> **Integrity Guarantee:** Any unverified details—such as college name, graduation year, arbitrary percentage skill bars, unconfirmed GitHub/LinkedIn profiles, personal phone numbers, or unverified project metrics—are either completely omitted from view or managed via an automated hiding mechanism in `js/portfolio-data.js`.

---

## 2. Technology Stack & Architectural Decisions

- **Markup:** Semantic HTML5 (`header`, `nav`, `main`, `section`, `article`, `dialog`, `footer`)
- **Styling:** Pure CSS3 Design System
  - CSS Custom Properties (`css/variables.css`)
  - Fluid typography (`clamp()`)
  - Accessible contrast ratios (WCAG 2.1 AA/AAA)
  - CSS Grid and Flexbox responsive layouts
  - `prefers-reduced-motion` compliance
- **Scripting:** Modern Vanilla JavaScript (ES6+)
  - Decoupled data model (`js/portfolio-data.js`)
  - Automated field suppression (`js/render.js`)
  - Accessible modal dialogs with focus trapping and keyboard dismissal (`js/app.js`)
  - Honest contact form validation and draft workflow (no deceptive fake backend promises)
  - Crisp offline SVG icon module (`js/icons.js`)
- **Runtime / Local Server:** Python 3 (`http.server` via `server.py`) with zero external package dependencies.

---

## 3. How to Run the Website Locally

You can run the portfolio locally using the included Python server or any static web server:

### Option A: Using the Custom Atelier Server (Recommended)
```powershell
python server.py
```
This starts the development server at:
```
http://localhost:8000
```
*(To automatically open in your default browser, pass `--open`: `python server.py --open`)*

### Option B: Using Python's Built-in HTTP Server
```powershell
python -m http.server 8000
```

### Option C: Direct File Opening
You can also open `index.html` directly in any modern web browser (Chrome, Edge, Firefox, Safari).

---

## 4. Project File Structure

```
d:\maha\
├── index.html               # Semantic HTML5 entry point
├── server.py                # Python 3 local development server
├── README.md                # Documentation & configuration guide
├── css\
│   ├── variables.css        # Design tokens: palette, typography, radii, transitions
│   ├── base.css             # HTML reset, body drafting grid, base typography
│   ├── layout.css           # Header, navigation, containers, grid layouts, footer
│   ├── components.css       # Cards, buttons, atelier console, modal dialog, form
│   └── utilities.css        # Animations, screen reader classes, layout helpers
├── js\
│   ├── portfolio-data.js    # Single source of truth: all verified profile data
│   ├── icons.js             # SVG vector symbols module
│   ├── render.js            # Dynamic DOM binder with automated unverified field omission
│   └── app.js               # Event handling, modal logic, contact form validation
└── assets\
    ├── icons\               # Local icon assets
    └── illustrations\       # Visual diagrams and blueprints
```

---

## 5. How to Update Personal Details Later

All profile information is centralized in **`js/portfolio-data.js`**. You do not need to rewrite the HTML layout to add verified data:

### A. Adding Verified Technical Skills
Open `js/portfolio-data.js` and locate `PORTFOLIO_DATA.skills.categories`. Add your verified technologies to the `items` array of any category:
```javascript
{
  id: "languages",
  title: "Programming Languages",
  icon: "code",
  items: ["Python", "PHP", "JavaScript", "SQL"] // Categories reveal automatically when items > 0
}
```

### B. Adding GitHub & LinkedIn Profiles
Locate `PORTFOLIO_DATA.social` and replace `null` with your profile URL:
```javascript
social: {
  leetcode: "https://leetcode.com/u/mprasad1527/",
  github: "https://github.com/your-username",       // Will show once provided
  linkedin: "https://linkedin.com/in/your-profile"   // Will show once provided
}
```

### C. Adding Your Contact Email
Locate `PORTFOLIO_DATA.personal.email`:
```javascript
email: "your.name@example.com", // Form will automatically target this address
```

### D. Adding a PDF Resume
1. Place your resume PDF in the `assets/` folder (e.g. `assets/Mahadevaprasad_S_Resume.pdf`).
2. Update `PORTFOLIO_DATA.personal.resumeUrl`:
```javascript
resumeUrl: "assets/Mahadevaprasad_S_Resume.pdf" // Header Resume button will appear automatically
```

### E. Adding College Name & Graduation Year
Locate `PORTFOLIO_DATA.education`:
```javascript
college: "Your Verified University or College Name",
graduationYear: "2026"
```

### F. Updating L&T Training Specifics
Locate `PORTFOLIO_DATA.training` and update `programName`, `dates`, `duration`, or `curriculum` once documentation is confirmed.

---

## 6. Recruiter & Accessibility Features

- **Keyboard Navigable:** Tab navigation, visible `:focus-visible` rings on all interactive elements, and `Escape` key dialog dismissal.
- **Respects Motion Preferences:** Includes `@media (prefers-reduced-motion: reduce)` disabling non-essential transitions.
- **Transparent Form Submission:** Does not deceive recruiters with false "Message sent" banners; instead prepares a clean email draft or copies the draft to clipboard.
- **Deep Architectural Inspection:** Each project includes an interactive deep-dive modal detailing verified problem statements, database schemas, and codebase structures.
