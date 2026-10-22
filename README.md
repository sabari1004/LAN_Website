# LAN Innovations — Enterprise SAP Mobility & Applied Enterprise AI

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Status: Production Ready](https://img.shields.io/badge/Status-Production%20Ready-emerald.svg)](#)
[![Stack: HTML5%20%7C%20TailwindCSS%20%7C%20Vanilla%20JS](https://img.shields.io/badge/Stack-HTML5%20%7C%20Tailwind%20%7C%20JS-0284c7.svg)](#)

A high-performance, dark-mode enterprise web portal and interactive architecture showcase for **LAN Innovations**.

LAN Innovations engineers mission-critical enterprise solutions across three core pillars:
1. **SAP Enterprise Mobility**: SAP Service & Asset Manager (SSAM), SAP Mobile Development Kit (MDK), and offline-first delta synchronization.
2. **SAP BTP Clean Core Extensions**: Side-by-side cloud extensibility, ABAP RESTful Application Programming Model (RAP), and S/4HANA core safeguarding.
3. **Applied Enterprise AI**: Deterministic agentic pipelines, autonomous telemetry supervision, and automated conflict self-healing.

---

## 🚀 Key Highlights & Features

- **Dark-Mode Enterprise Aesthetic**: Designed with custom slate tokens, ambient glowing gradients, and responsive glassmorphism.
- **Interactive Architecture Flowchart**: An end-to-end interactive node topology showing real-time mobile transaction flows from field edge devices through SAP BTP Mobile Services to on-premise S/4HANA systems.
- **Simulated Real-Time Telemetry Inspector**: Live telemetry log feed demonstrating agentic supervisor anomaly detection and offline queue reconciliation.
- **Cursor Spotlight Cards & Micro-interactions**: Dynamic light-tracking borders and interactive hover states.
- **Zero-Build Lightweight Stack**: Instant cold starts, zero dependency bloat, and maximum web performance. Fully compatible with any static web host or CDN.
- **Fully Responsive & Accessible**: Optimized for mobile touchscreens, tablets, high-DPI displays, and keyboard navigation.

---

## 📁 Repository Structure

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
│   └── main.js                    # Interactive controllers, telemetry, nav drawer
├── .gitattributes                 # Cross-platform line normalization
├── .gitignore                     # Git ignore rules for OS, IDE & environments
├── index.html                     # Primary enterprise landing page
├── LICENSE                        # MIT License
├── README.md                      # Project documentation
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
4. Future commits to `main` will automatically build and publish the site.

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
- **Interactions**: Vanilla ES6+ JavaScript (`IntersectionObserver`, DOM event listeners, RAF animations).

---

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

---

&copy; 2026 **LAN Innovations**. All rights reserved.
