"use client";

import React, { useState } from "react";
import { ExternalLink, Github, ArrowRight, Sparkles, CheckCircle2, Cpu, Layers } from "lucide-react";
import { portfolioData, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const { projects } = portfolioData;
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const mainProject = projects[0];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-sky-500/20 bg-sky-950/30 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            My Project
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Hostel Application System (Java)
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A software application developed to streamline student hostel applications, automate room allocation, and solve real-world accommodation challenges.
          </p>
        </div>

        {/* Featured Project Spotlight Card */}
        {mainProject && (
          <div className="max-w-5xl mx-auto glass-panel rounded-3xl overflow-hidden border border-slate-800/80 shadow-2xl hover:border-sky-500/40 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              {/* Image Column */}
              <div className="lg:col-span-5 relative aspect-video lg:aspect-auto overflow-hidden bg-slate-900 min-h-[280px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={mainProject.image}
                  alt={mainProject.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-950" />

                {/* Badges */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-slate-900/90 text-sky-400 border border-slate-700 backdrop-blur-md">
                    JAVA · OOP
                  </span>
                  <span className="flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Featured Software</span>
                  </span>
                </div>
              </div>

              {/* Information Column */}
              <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold mb-2">
                    <Cpu className="w-4 h-4" />
                    <span>Software Development &amp; System Design</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {mainProject.title}
                  </h3>

                  <p className="text-sm font-semibold text-sky-400 mt-1 mb-4">
                    {mainProject.tagline}
                  </p>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                    {mainProject.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2.5 mb-6">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Key Highlights &amp; Capabilities:
                    </div>
                    {mainProject.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {mainProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-900 text-sky-300 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                  <button
                    onClick={() => setActiveModalProject(mainProject)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 shadow-md shadow-sky-500/20 transition-all hover:gap-3"
                  >
                    <span>Architecture &amp; System Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={mainProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium border border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View on GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Modal Dialog for Project Deep Dive */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />

      </div>
    </section>
  );
}
