"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Copy,
  Check,
  Sparkles,
  Server,
  Layers,
  Terminal,
  Cpu,
  GraduationCap,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const { personal } = portfolioData;

  const copyCode = () => {
    const snippet = `// Hostel Application System - Java OOP
public class HostelApplication {
    private String studentId;
    private RoomType preference;

    public AllocationResult allocateRoom(Student student) {
        Room room = hostelManager.findAvailable(preference);
        if (room != null && !room.isFull()) {
            room.assignResident(student);
            return new AllocationResult("ALLOCATED", room.getNumber());
        }
        return new AllocationResult("WAITLIST", null);
    }
}`;
    navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Pill & Avatar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/prince-tuyizere.png"
                alt="Prince Tuyizere"
                className="w-10 h-10 rounded-full object-cover border-2 border-sky-400 shadow-md shadow-sky-500/25"
              />
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-950/40 text-sky-300 text-xs sm:text-sm font-medium shadow-sm shadow-sky-900/20 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
                <span>{personal.status}</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Hi, I&apos;m{" "}
              <span className="text-gradient font-black">
                {personal.name}
              </span>
              .
              <br />
              <span className="text-slate-100 text-2xl sm:text-3xl lg:text-4xl font-bold">
                Information Technology Student &amp;{" "}
                <span className="text-sky-400 underline decoration-sky-500/40 decoration-wavy decoration-2">Software Developer</span>.
              </span>
            </h1>

            {/* Tagline / Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Studying at <strong className="text-white">Rwanda Polytechnic (RP-Kigali College)</strong>. Passionate about <span className="text-emerald-400 font-semibold">Java (OOP)</span>, Web Design (<span className="text-sky-400 font-semibold">HTML, CSS, PHP</span>), and building real-world solutions like the <strong className="text-white">Hostel Application System</strong>, while exploring full-stack engineering with <span className="text-sky-300 font-medium">Next.js &amp; Node.js</span>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-sky-500 via-sky-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all active:scale-95 group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 border border-slate-700 bg-slate-900/60 hover:bg-slate-800/80 hover:text-white hover:border-slate-600 transition-all active:scale-95"
              >
                <span>Get In Touch</span>
                <Mail className="w-4 h-4 text-sky-400" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-slate-400 hover:text-white transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>About &amp; Goals</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 border-t border-slate-800/80">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                GitHub &amp; Contact:
              </span>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/80 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/80 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <span className="text-xs text-sky-400 font-mono">
                {personal.email}
              </span>
            </div>
          </div>

          {/* Right Hero Column: Java & System Code Terminal */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Decorative Floating Badges */}
              <div className="absolute -top-5 -left-4 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-emerald-500/30 bg-slate-900/90 shadow-xl backdrop-blur-md animate-float">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-semibold text-slate-200">Java OOP System</span>
              </div>

              <div className="absolute -bottom-6 -right-4 z-20 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-sky-500/30 bg-slate-900/90 shadow-xl backdrop-blur-md animate-float" style={{ animationDelay: "1.5s" }}>
                <Layers className="w-4 h-4 text-sky-400" />
                <span className="text-xs font-semibold text-slate-200">Next.js &amp; Node.js</span>
              </div>

              {/* Code Window */}
              <div className="glass-panel rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950/90">
                {/* Window Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/80 bg-slate-900/80">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                    <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                      HostelApplication.java
                    </span>
                  </div>

                  <button
                    onClick={copyCode}
                    className="flex items-center gap-1 px-2.5 py-1 text-xs text-slate-400 hover:text-white rounded border border-slate-800 bg-slate-900/60 hover:bg-slate-800 transition-colors"
                    title="Copy code"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-mono">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="font-mono">Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Code Content */}
                <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-slate-300">
                  <div className="text-slate-500">// Project: Hostel Application System (Java)</div>
                  <div>
                    <span className="text-indigo-400">public class </span>
                    <span className="text-yellow-300">HostelApplication</span>
                    <span className="text-slate-200"> &#123;</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-indigo-400">private </span>
                    <span className="text-sky-300">HostelManager </span>
                    <span className="text-slate-200">manager;</span>
                  </div>
                  <div className="pl-4 pt-1">
                    <span className="text-indigo-400">public </span>
                    <span className="text-emerald-400">AllocationResult </span>
                    <span className="text-yellow-300">apply</span>
                    <span className="text-slate-200">(Student s) &#123;</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-sky-300">Room </span>
                    <span className="text-slate-200">room = manager.findAvailable();</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-indigo-400">if </span>
                    <span className="text-slate-200">(room != </span>
                    <span className="text-purple-400">null</span>
                    <span className="text-slate-200"> &amp;&amp; !room.isFull()) &#123;</span>
                  </div>
                  <div className="pl-12 text-slate-200">
                    room.assignResident(s);
                  </div>
                  <div className="pl-12">
                    <span className="text-indigo-400">return new </span>
                    <span className="text-emerald-400">AllocationResult</span>
                    <span className="text-slate-200">(</span>
                    <span className="text-amber-300">&quot;CONFIRMED&quot;</span>
                    <span className="text-slate-200">);</span>
                  </div>
                  <div className="pl-8 text-slate-200">&#125;</div>
                  <div className="pl-8">
                    <span className="text-indigo-400">return new </span>
                    <span className="text-emerald-400">AllocationResult</span>
                    <span className="text-slate-200">(</span>
                    <span className="text-amber-300">&quot;WAITLIST&quot;</span>
                    <span className="text-slate-200">);</span>
                  </div>
                  <div className="pl-4 text-slate-200">&#125;</div>
                  <div className="text-slate-200">&#125;</div>
                </div>

                {/* Terminal status bar */}
                <div className="flex items-center justify-between px-4 py-2 border-t border-slate-800/80 bg-slate-900/50 text-[11px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Java OOP &amp; System Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Cpu className="w-3 h-3 text-sky-400" />
                    <span>RP-Kigali College</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Ribbon */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="glass-panel p-5 rounded-xl border border-slate-800/80 hover:border-sky-500/30 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-white text-gradient">
              RP-Kigali
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Rwanda Polytechnic</div>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-slate-800/80 hover:border-sky-500/30 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-white text-gradient">
              Java OOP
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Hostel App System</div>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-slate-800/80 hover:border-sky-500/30 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-white text-gradient">
              Web Design
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">HTML · CSS · PHP</div>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-slate-800/80 hover:border-sky-500/30 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-white text-gradient">
              Goal
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Professional Developer</div>
          </div>
        </div>

      </div>
    </section>
  );
}
