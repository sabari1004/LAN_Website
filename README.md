# LAN Innovations — Enterprise SAP Mobility & Applied Enterprise AI

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Status: Production Ready](https://img.shields.io/badge/Status-Production%20Ready-emerald.svg)](#)
[![Stack: HTML5%20%7C%20TailwindCSS%20%7C%20Vanilla%20JS](https://img.shields.io/badge/Stack-HTML5%20%7C%20Tailwind%20%7C%20JS-0284c7.svg)](#)

A high-performance, dark-mode multi-page enterprise web portal and interactive architecture showcase for **LAN Innovations**.

LAN Innovations engineers mission-critical enterprise solutions across two foundational pillars:
1. **Enterprise SAP Solutions**: SAP Service & Asset Manager (SSAM), SAP Mobile Development Kit (MDK), SAP BTP Clean Core extensions, and Cloud Application Programming (CAP & ABAP RAP).
2. **Modern Full-Stack & Applied AI**: High-performance cloud-native web apps, spec-driven vibe coding, native/cross-platform mobile apps, and deterministic agentic AI pipelines.

---

## 🚀 Key Highlights & Features

- **Multi-Page Enterprise Information Architecture**: Completely decoupled from monolithic single-page endless scrolls. Every strategic practice area, interactive architecture flowchart, and consultation workflow lives in a dedicated, bookmarkable, and SEO-optimized page.
- **Dark-Mode Enterprise Aesthetic**: Designed with custom slate tokens, ambient glowing gradients, and responsive glassmorphism inspired by modern developer infrastructure leaders.
- **Interactive Architecture Flowchart**: An end-to-end interactive node topology showing real-time mobile transaction flows from field edge devices through SAP BTP Mobile Services to on-premise S/4HANA systems (`architecture.html`).
- **Simulated Real-Time Telemetry Inspector**: Live telemetry log feed demonstrating agentic supervisor anomaly detection and offline queue reconciliation.
- **Applied Enterprise AI Showcase**: In-depth analysis of deterministic error remediation, operational intelligence, and Model Context Protocol (MCP) integrations (`enterprise-ai.html`).
- **Cursor Spotlight Cards & Micro-interactions**: Dynamic light-tracking borders and interactive hover states.
- **Zero-Build Lightweight Stack**: Instant cold starts, zero dependency bloat, and maximum web performance. Fully compatible with any static web host or CDN.
- **Fully Responsive & Accessible**: Optimized for mobile touchscreens, tablets, high-DPI displays, and keyboard navigation.

---

## 📁 Repository & Page Structure

```
LAN_New_Web/
├── .github/
│   └── workflows/
│       └── deploy-pages.yml       # Automated GitHub Pages CI/CD workflow
├── assets/
│   └── logo.svg                   # Vector brand identity & typography mark
├── components/
│   └── architecture-diagram.html  # Standalone, reusable architecture component
├── js/
│   └── main.js                    # Multi-page controllers, telemetry, nav drawer
├── services/                      # Dedicated Practice Deep-Dive Pages
│   ├── sap-mobility.html          # SSAM & Field Service Management (FSM)
│   ├── sap-btp.html               # SAP BTP & Clean Core Extensions
│   ├── sap-cap-rap.html           # Cloud Application Programming (CAP) & ABAP RAP
│   ├── sap-custom.html            # Custom SAP Apps, Fiori & MDK Modernization
│   ├── web-development.html       # Modern Web Applications (React.js / Next.js / Fastify)
│   ├── vibe-coding.html           # Vibe Coding & Accelerated AI Dev (Antigravity)
│   ├── mobile-apps.html           # Native iOS (Swift) & Android (Kotlin) Mobile
│   └── agentic-ai.html            # Agentic AI & Model Context Protocol (MCP)
├── .gitattributes                 # Cross-platform line normalization
├── .gitignore                     # Git ignore rules for OS, IDE & environments
├── about.html                     # Company background & 4 Engineering Tenets
├── architecture.html              # Dedicated Interactive Architecture Explorer
├── CNAME                          # Custom domain: test.laninnovations.com
├── contact.html                   # Architecture Review Booking & FAQ
├── enterprise-ai.html             # Applied Enterprise AI & Telemetry Supervision
├── index.html                     # Primary enterprise landing page (executive overview)
├── LICENSE                        # MIT License
├── README.md                      # Project documentation
├── services.html                  # Comprehensive Practice Areas Directory & Matrix
└── styles.css                     # Custom design tokens, ambient lighting & animations
```

---

## 🛠️ Quick Start & Local Preview

Because this project is built with standard web standards, no compilation or bundler installation is required.

### Option 1: Python HTTP Server (Built-in)
```bash
# Python 3
python3 -m http.server 8080
```
Then navigate to [http://localhost:8080](http://localhost:8080) in your browser.

### Option 2: Node.js `npx serve`
```bash
npx serve .
```

### Option 3: VS Code Live Server
Right-click on `index.html` in VS Code and select **"Open with Live Server"**.

---

## 🌐 Deployment

### GitHub Pages (Automated)
This repository includes a GitHub Actions workflow in [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml).
1. Push this repository to GitHub.
2. In your GitHub repository, navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, choose **GitHub Actions**.
4. Future commits to `main` will automatically build and publish the site to `test.laninnovations.com`.

### Vercel / Netlify / Cloudflare Pages
- **Framework Preset**: None / Other / Static
- **Root Directory**: `./`
- **Build Command**: *(leave empty)*
- **Output Directory**: `./`

---

## 🎨 Tech Stack & Design System

- **Markup**: Semantic HTML5 with complete OpenGraph metadata and structured headings.
- **Styling**: Tailwind CSS CDN coupled with custom CSS design tokens in `styles.css`.
- **Typography**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) & [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono).
- **Interactions**: Vanilla ES6+ JavaScript (`IntersectionObserver`, DOM event listeners, RAF animations, spotlight effects).

---

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

---

&copy; 2026 **LAN Innovations**. All rights reserved.
