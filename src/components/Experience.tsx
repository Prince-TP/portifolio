"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { portfolioData, ExperienceItem } from "@/data/portfolioData";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative bg-slate-950/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-sky-500/20 bg-sky-950/30 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience &amp; Impact
          </h2>
          <p className="mt-4 text-base text-slate-300">
            A history of solving technical challenges, scaling systems, and elevating software engineering teams.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-32 space-y-12">
          {experience.map((item: ExperienceItem, idx: number) => (
            <div key={idx} className="relative pl-8 sm:pl-10 group">
              
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-sky-500 flex items-center justify-center group-hover:scale-110 group-hover:border-sky-400 transition-all shadow-md shadow-sky-500/20">
                <Briefcase className="w-3.5 h-3.5 text-sky-400" />
              </div>

              {/* Date label (hidden on mobile, positioned on the left on desktop) */}
              <div className="sm:absolute sm:-left-36 sm:top-2 text-xs font-mono font-semibold text-sky-400 mb-2 sm:mb-0 sm:w-28 sm:text-right">
                {item.period}
              </div>

              {/* Card Container */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-sky-500/30 transition-all duration-200">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {item.role}
                    </h3>
                    <div className="text-sm font-semibold text-sky-400">
                      {item.company}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {item.location}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-medium">
                      {item.type}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 my-4">
                  {item.description.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
