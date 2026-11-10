# Odisha-Cover-Studio

[![React](https://img.shields.io/badge/React-19.1-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.1-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![pnpm](https://img.shields.io/badge/pnpm-11-F69220?style=flat-square&logo=pnpm&logoColor=white)](https://pnpm.io/)

Official digital showroom and custom orders portal for **Odisha Cover Studio** — Western Odisha's premier destination for custom mobile phone covers, 9H tempered glass screen protectors, laser-cut back skin laminations, and wholesale accessories based in Jharsuguda, Odisha.

---

## ✨ Features & Highlights

- **Local High-Resolution Asset Library**: Replaced generic placeholders with 100% verified local product imagery and custom case samples.
- **Mobile-First Responsive Navigation**: Seamless slide-out drawer menu, quick category anchors, and 1-tap WhatsApp consultation.
- **Product Collections & Filtering**:
  - *Ultra-Armor Shockproof Cases*
  - *Matte Frost Minimalist Series*
  - *Full-Coverage Laser Skins & Holographic Laminations*
  - *Custom Photo UV Printed Covers*
  - *Luxury Leatherette & MagSafe Wallets*
- **Wholesale & Retail B2B Partnership Desk**: Inquiry system tailored for mobile retail stores across Sambalpur, Rourkela, Bargarh, and Jharsuguda.
- **SEO & Social Optimization**: Rich OpenGraph cards, schema markup, and metadata for local Google Search indexing.

---

## 📁 Monorepo Structure

```text
Odisha-Cover-Studio/
├── artifacts/
│   ├── ems-mobile-cover/  # Primary React 19 + Vite 7 frontend application
│   │   ├── public/images/ # Local high-res product galleries and skin samples
│   │   └── src/           # UI components, collections, drawer navigation
│   ├── api-server/        # Backend API service
│   └── mockup-sandbox/    # Component testing sandbox
├── lib/                   # Shared utilities, UI helpers, and types
├── pnpm-workspace.yaml    # Monorepo configuration & package catalog
└── package.json           # Workspace root
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v20+)
- pnpm (v10+)

### Installation
```bash
# Clone the repository
git clone https://github.com/Chintusa/Odisha-Cover-Studio.git
cd Odisha-Cover-Studio

# Install all workspace dependencies
pnpm install

# Start the Web Application
cd artifacts/ems-mobile-cover
pnpm run dev
```

The application will launch on `http://localhost:21321/`.

### Production Build
```bash
# Typecheck and build all workspace packages
pnpm run build
```
Production assets are generated in `artifacts/ems-mobile-cover/dist/public`.

---

## 📄 License
MIT License. © 2026 Odisha Cover Studio.
