import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prince Tuyizere | IT Student & Software Developer (RP-Kigali)",
  description: "Portfolio of Prince Tuyizere, Information Technology student at Rwanda Polytechnic (RP-Kigali College) passionate about Java, Web Design (HTML, CSS, PHP), Next.js, and Node.js.",
  keywords: [
    "Prince Tuyizere",
    "Rwanda Polytechnic",
    "RP-Kigali College",
    "Java",
    "Hostel Application System",
    "HTML",
    "CSS",
    "PHP",
    "Next.js",
    "Node.js",
    "Software Developer",
    "Kigali Rwanda"
  ],
  authors: [{ name: "Prince Tuyizere" }],
  openGraph: {
    title: "Prince Tuyizere | IT Student & Software Developer",
    description: "Information Technology student at Rwanda Polytechnic (RP-Kigali College). Developing real-world solutions in Java, Web Design, Next.js & Node.js.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="theme-color" content="#090d16" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚡</text></svg>" />
      </head>
      <body className="min-h-screen antialiased bg-[#090d16] text-slate-100 selection:bg-sky-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
