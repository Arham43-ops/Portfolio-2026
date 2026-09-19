'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  ArrowDown,
  BriefcaseBusiness,
  FileText,
  Globe,
  House,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Sun,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { portfolioData } from '@/data/portfolio';

function FocusProfile() {
  const { personal, experiences } = portfolioData;
  const { resolvedTheme, setTheme } = useTheme();
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Intl.DateTimeFormat('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(new Date())
      );
    };

    updateTime();
    const interval = window.setInterval(updateTime, 1000);
    return () => window.clearInterval(interval);
  }, []);

  const latestExperience = experiences?.[0];

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#111] selection:bg-black selection:text-white">
      <div className="mx-auto min-h-screen w-full max-w-[430px] border-x border-black/10 bg-[#fafaf8]">
        <div className="relative min-h-screen overflow-hidden px-6 pb-28 pt-12">
          {/* Subtle dotted background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                'radial-gradient(#b8b8b5 0.8px, transparent 0.8px)',
              backgroundSize: '6px 6px',
              maskImage:
                'linear-gradient(to bottom, black 0%, transparent 58%)',
              WebkitMaskImage:
                'linear-gradient(to bottom, black 0%, transparent 58%)',
            }}
          />

          <div className="relative z-10">
            {/* Profile image */}
            <div className="relative mb-7 flex items-start">
              <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-white bg-neutral-200 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute left-[70px] top-[74px] flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white shadow-md">
                <ArrowDown className="h-4 w-4 text-neutral-500" />
              </div>
            </div>

            {/* Identity */}
            <section>
              <div className="flex items-center gap-2">
                <h1 className="text-[28px] font-bold leading-tight tracking-[-0.045em]">
                  {personal.name}
                </h1>
                <span
                  aria-label="Verified profile"
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500 text-[12px] font-bold text-white"
                >
                  ✓
                </span>
              </div>

              <p className="mt-3 max-w-[355px] text-[16px] leading-6 text-neutral-500">
                {personal.title} | Scalable Applications | RESTful API
                Integrations | Performance Optimization
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-neutral-500">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Available for opportunity
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  {personal.location}
                </span>
              </div>

              <div className="mt-2 border-l border-neutral-300 pl-4 font-mono text-[12px] text-neutral-500">
                {time || '—'}
              </div>
            </section>

            {/* About */}
            <section className="mt-10">
              <h2 className="text-[20px] font-bold tracking-tight">About</h2>
              <p className="mt-4 text-[16px] leading-[1.65] text-neutral-500">
                {personal.bio}
              </p>
            </section>

            {/* Current focus */}
            <section className="mt-9">
              <h2 className="text-[20px] font-bold tracking-tight">
                Current Focus
              </h2>
              <div className="mt-4 rounded-2xl border border-black/10 bg-white/75 p-4 shadow-sm backdrop-blur">
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-black p-2 text-white">
                    <BriefcaseBusiness className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold">
                      {latestExperience?.position || 'Full Stack Web Development'}
                    </p>
                    <p className="mt-1 text-sm leading-5 text-neutral-500">
                      {latestExperience?.company ||
                        'Building scalable applications and intelligent digital systems.'}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Navigation hint */}
            <div className="mt-8 flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.22em] text-neutral-400">
              <span>Portfolio Focus View</span>
            </div>
          </div>

          {/* Floating bottom navigation */}
          <nav
            aria-label="Quick navigation"
            className="fixed bottom-4 left-1/2 z-50 flex w-[calc(100%-32px)] max-w-[398px] -translate-x-1/2 items-center justify-between rounded-full border border-black/10 bg-white/90 px-2 py-2 shadow-[0_12px_35px_rgba(0,0,0,0.12)] backdrop-blur-xl"
          >
            <Link
              href="/"
              aria-label="Home"
              className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-500 transition hover:bg-neutral-100 hover:text-black"
            >
              <House className="h-5 w-5" />
            </Link>

            <Link
              href="/resume"
              aria-label="Resume"
              className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-500 transition hover:bg-neutral-100 hover:text-black"
            >
              <FileText className="h-5 w-5" />
            </Link>

            <a
              href={personal.socialLinks.find((s) => s.platform === 'LinkedIn')?.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-500 transition hover:bg-neutral-100 hover:text-black"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <Link
              href="/experience"
              aria-label="Experience"
              className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-500 transition hover:bg-neutral-100 hover:text-black"
            >
              <BriefcaseBusiness className="h-5 w-5" />
            </Link>

            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-500 transition hover:bg-neutral-100 hover:text-black"
            >
              <Mail className="h-5 w-5" />
            </a>

            <Link
              href="/projects"
              aria-label="Projects"
              className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-500 transition hover:bg-neutral-100 hover:text-black"
            >
              <Globe className="h-5 w-5" />
            </Link>

            <button
              type="button"
              aria-label="Toggle theme"
              onClick={() =>
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
              }
              className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-500 transition hover:bg-neutral-100 hover:text-black"
            >
              {resolvedTheme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </nav>
        </div>
      </div>
    </main>
  );
}

export default function FocusPage() {
  return <FocusProfile />;
}
