"use client";

import React from "react";
import { Layout, Server, Cloud, Zap, CheckCircle2, Target, GraduationCap, MapPin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function About() {
  const { about, personal } = portfolioData;

  const iconMap: Record<string, React.ReactNode> = {
    Layout: <Layout className="w-6 h-6 text-sky-400" />,
    Server: <Server className="w-6 h-6 text-emerald-400" />,
    Cloud: <Cloud className="w-6 h-6 text-indigo-400" />,
    Zap: <Zap className="w-6 h-6 text-amber-400" />,
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-sky-500/20 bg-sky-950/30 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Information Technology &amp; Software Development
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {about.heading}
          </p>
        </div>

        {/* Bio Overview with Prince's Photo */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800/80 mb-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Prince's Photo Column */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group w-full max-w-sm">
                
                {/* Glow ring behind image */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-sky-500 via-indigo-500 to-emerald-500 rounded-2xl blur-md opacity-40 group-hover:opacity-75 transition duration-500" />
                
                {/* Main Image Container */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700/80 bg-slate-900 shadow-2xl aspect-[3/4]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/prince-tuyizere.png"
                    alt="Prince Tuyizere"
                    className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                  
                  {/* Bottom Vignette with Name Badge */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
                    <div className="text-white font-bold text-lg">
                      Prince Tuyizere
                    </div>
                    <div className="text-xs text-sky-400 font-medium flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>RP-Kigali College · Rwanda</span>
                    </div>
                  </div>
                </div>

                {/* Floating pill badge */}
                <div className="absolute -bottom-3 -right-3 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/95 border border-emerald-500/40 text-emerald-300 text-xs font-semibold shadow-lg backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Software Developer</span>
                </div>
              </div>
            </div>

            {/* Bio Details Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-sky-950/80 text-sky-400 border border-sky-800/50 mb-3">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Information Technology Student</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  My Journey &amp; Passion
                </h3>
              </div>
              
              <p className="text-slate-200 leading-relaxed text-base sm:text-lg">
                Hello! My name is <strong className="text-white font-bold">{personal.name}</strong>, and I am an Information Technology student at <strong className="text-sky-300 font-semibold">Rwanda Polytechnic, RP-Kigali College</strong>, in Rwanda.
              </p>
              
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I am passionate about software development, web design, and technology. I enjoy learning new programming skills and developing systems that solve real-world problems—such as my <span className="text-emerald-400 font-semibold">Hostel Application System</span> engineered in Java.
              </p>

              {/* Competencies Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Java:</strong> Developing applications using object-oriented programming.</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>HTML:</strong> Creating the structure of web pages.</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>CSS:</strong> Designing attractive and responsive websites.</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>PHP:</strong> Developing server-side applications &amp; databases.</span>
                </div>
              </div>

              {/* Quick Info Bar */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium">Institution:</span>
                  <span className="text-white font-semibold">RP-Kigali College</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Location:</span>
                  <span className="text-white font-semibold">Kigali, Rwanda</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-slate-400 block font-medium">Email:</span>
                  <a href={`mailto:${personal.email}`} className="text-sky-400 font-semibold hover:underline truncate block">
                    {personal.email}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold transition-all shadow-md shadow-sky-500/20"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact Prince</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Dedicated Career Goal Callout Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-sky-950/70 via-indigo-950/60 to-purple-950/70 border border-sky-500/30 mb-16 relative overflow-hidden shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center shrink-0">
              <Target className="w-6 h-6 text-sky-400" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-sky-400 uppercase tracking-widest">
                My Career Goal
              </h4>
              <p className="text-slate-100 text-base sm:text-lg font-medium leading-relaxed">
                &ldquo;My goal is to become a professional software developer, improve my programming skills, and create innovative technology solutions that help people and communities.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {about.highlights.map((pillar) => (
            <div
              key={pillar.title}
              className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-sky-500/40 hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-sky-500/30 transition-all">
                {iconMap[pillar.icon]}
              </div>
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                {pillar.title}
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
