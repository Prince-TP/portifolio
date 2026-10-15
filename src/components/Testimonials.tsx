"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { portfolioData, Testimonial } from "@/data/portfolioData";

export default function Testimonials() {
  const { testimonials } = portfolioData;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-sky-500/20 bg-sky-950/30 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Social Proof
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What Leaders Say
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Endorsements from engineering managers, founders, and peers I&apos;ve collaborated with.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t: Testimonial, idx: number) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-2xl border border-slate-800/80 hover:border-sky-500/30 transition-all flex flex-col justify-between relative group"
            >
              <Quote className="w-10 h-10 text-slate-800 absolute top-6 right-6 -z-10 group-hover:text-sky-500/10 transition-colors" />

              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-800/80">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border border-slate-700"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-slate-400">
                    {t.role} · <span className="text-sky-400">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
