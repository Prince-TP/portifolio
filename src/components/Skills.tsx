"use client";

import React, { useState } from "react";
import {
  Globe,
  Code,
  FileCode,
  Palette,
  Layers,
  Terminal,
  Server,
  Database,
  HardDrive,
  Cpu,
  GitBranch,
  Box,
  Cloud,
  CheckCircle,
} from "lucide-react";
import { portfolioData, SkillItem } from "@/data/portfolioData";

export default function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const iconMap: Record<string, React.ReactNode> = {
    Globe: <Globe className="w-5 h-5 text-sky-400" />,
    Code: <Code className="w-5 h-5 text-blue-400" />,
    FileCode: <FileCode className="w-5 h-5 text-indigo-400" />,
    Palette: <Palette className="w-5 h-5 text-cyan-400" />,
    Layers: <Layers className="w-5 h-5 text-violet-400" />,
    Terminal: <Terminal className="w-5 h-5 text-emerald-400" />,
    Server: <Server className="w-5 h-5 text-green-400" />,
    Database: <Database className="w-5 h-5 text-teal-400" />,
    HardDrive: <HardDrive className="w-5 h-5 text-amber-400" />,
    Cpu: <Cpu className="w-5 h-5 text-rose-400" />,
    GitBranch: <GitBranch className="w-5 h-5 text-orange-400" />,
    Box: <Box className="w-5 h-5 text-blue-400" />,
    Cloud: <Cloud className="w-5 h-5 text-sky-400" />,
    CheckCircle: <CheckCircle className="w-5 h-5 text-emerald-400" />,
  };

  const techBadges = [
    "Java (OOP)", "HTML5 (Semantic)", "CSS3 (Responsive)", "PHP", "MySQL",
    "Next.js 14", "Node.js", "JavaScript", "System Design", "Git & GitHub",
    "Hostel Application System", "Web Design", "Database Connectivity", "Problem Solving"
  ];

  return (
    <section id="skills" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-sky-500/20 bg-sky-950/30 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Technical Proficiency
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tools &amp; Technologies I Master
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A battle-tested tech stack tailored for high performance, maintainability, and seamless scalability.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {skills.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(idx)}
              className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                activeCategory === idx
                  ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25 scale-105"
                  : "bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Active Category Description */}
        <div className="text-center text-sm text-slate-400 mb-8 font-mono">
          // {skills[activeCategory].description}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills[activeCategory].skills.map((skill: SkillItem) => (
            <div
              key={skill.name}
              className="glass-panel p-5 rounded-2xl border border-slate-800/80 hover:border-sky-500/40 transition-all hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {iconMap[skill.icon] || <Code className="w-5 h-5 text-sky-400" />}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base group-hover:text-sky-300 transition-colors">
                      {skill.name}
                    </h4>
                  </div>
                </div>
                <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-md bg-sky-950/80 text-sky-400 border border-sky-800/50">
                  {skill.level}%
                </span>
              </div>

              <p className="text-xs text-slate-400 mb-4 line-clamp-2">
                {skill.description}
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
                <div
                  className="bg-gradient-to-r from-sky-500 to-indigo-500 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Chip Cloud */}
        <div className="glass-panel p-8 rounded-2xl border border-slate-800/80 text-center">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-6">
            Ecosystem &amp; Frameworks in Continuous Use
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {techBadges.map((badge) => (
              <span
                key={badge}
                className="px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-sky-500/40 hover:text-sky-300 transition-all cursor-default"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
