# 🚀 Modern Full-Stack Portfolio (Next.js & Node.js)

A portfolio website crafted with **Next.js 14 (App Router)**, **Node.js API routes**, **TypeScript**, and **Tailwind CSS**.

---

## ✨ Features

- **⚡ Next.js 14 App Router**: Server-side rendering (SSR), high-performance static page generation, and responsive client hydration.
- **🟢 Node.js API Route (`/api/contact`)**: Server-side contact form handler with payload validation, input sanitization, and structured responses.
- **🎨 Modern Dark & Light Mode**: Sleek dark-mode aesthetic with neon glowing highlights and instant toggle.
- **📱 Fully Responsive**: Fluid navigation drawer, responsive grids, and mobile-first design.
- **💼 Interactive Projects Showcase**: Filterable portfolio projects (All, Full-Stack, Next.js / Frontend, Node.js / Backend) with a deep-dive architecture modal.
- **📊 Technical Skills & Proficiency Matrix**: Categorized tech stack with animated progress bars and technology chip cloud.
- **📜 Career Journey Timeline**: Visual work experience roadmap with accomplishments and tech badges.
- **💬 Testimonials Section**: Client and peer reviews with 5-star rating visualizer.
- **🎉 Confetti Feedback**: Celebratory particle burst upon successful contact form submission.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (v14.2+)
- **Runtime**: [Node.js](https://nodejs.org/) (v22 LTS)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Effects**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)

---

## 🚀 Quick Start

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
```

### 3. Run Production Server
```bash
npm start
```

---

## ✏️ How to Customize Your Portfolio

All personal information, social links, project details, skills, and work experience can be edited in a single file:

📁 **[`src/data/portfolioData.ts`](./src/data/portfolioData.ts)**

- **Personal Info**: Update `name`, `title`, `bio`, `location`, `email`, and social links.
- **Projects**: Add, remove, or modify project titles, descriptions, tags, screenshots, and live demo / GitHub links.
- **Skills**: Adjust skill names, proficiency percentages, and categories.
- **Experience**: Edit your previous companies, roles, dates, and achievements.
- **Testimonials**: Update quotes and recommendations.

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Import the repository into [Vercel](https://vercel.com).
3. Vercel automatically detects Next.js and deploys your site with global edge caching and zero configuration!

### Deploy with Docker or Node.js Server
Run standard Node.js server:
```bash
npm run build
npm start
```
Or containerize with Docker using standard Node 20/22 alpine images.
