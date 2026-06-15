"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const CONTACT_EMAIL = "hello@yourdomain.com";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const projects = [
  {
    number: "01",
    title: "Beyond Invitation",
    category: "E-commerce · ERP integration",
    description:
      "A modern storefront for a heritage invitation brand, designed around rich product discovery and ERP-powered content.",
    tags: ["Next.js", "ERPNext", "SEO"],
    theme: "coral",
  },
  {
    number: "02",
    title: "Exam Learning Platform",
    category: "EdTech · Product design",
    description:
      "A focused learning experience that helps students discover lessons, track progress and prepare confidently for exams.",
    tags: ["React", "UX", "Content system"],
    theme: "violet",
  },
  {
    number: "03",
    title: "Operations Dashboard",
    category: "Business tools · Automation",
    description:
      "A clear operational workspace that transforms scattered workflows into useful metrics, actions and decisions.",
    tags: ["Dashboard", "Automation", "Analytics"],
    theme: "lime",
  },
] as const;

const services = [
  {
    number: "01",
    title: "Web development",
    description:
      "Fast, responsive websites and web applications built with modern React and Next.js architecture.",
    items: ["Frontend systems", "API integrations", "Performance"],
  },
  {
    number: "02",
    title: "Product experience",
    description:
      "Interfaces that remove friction, strengthen the brand and make complicated products feel simple.",
    items: ["UI direction", "UX thinking", "Design systems"],
  },
  {
    number: "03",
    title: "Digital growth",
    description:
      "Technical and creative improvements that help products get discovered, understood and converted.",
    items: ["Technical SEO", "Analytics", "Content systems"],
  },
] as const;

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "ERP integrations",
  "UI/UX",
  "Technical SEO",
  "Automation",
];

type IconProps = {
  className?: string;
};

function ArrowUpRight({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7 17 17 7M8 7h9v9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4 8h16M4 16h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="m6 6 12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MailIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <span
      className={`relative grid h-12 w-12 place-items-center rounded-full border text-sm font-black tracking-[-0.08em] transition duration-300 hover:-rotate-6 ${
        light
          ? "border-[#f3f0e8] hover:bg-[#f3f0e8] hover:text-[#171714]"
          : "border-[#171714] hover:bg-[#171714] hover:text-[#f3f0e8]"
      }`}
    >
      JD

      <span
        className={`absolute bottom-0.5 right-0.5 h-2.5 w-2.5 rounded-full border-2 bg-[#ff5d3b] ${
          light ? "border-[#171714]" : "border-[#f3f0e8]"
        }`}
      />
    </span>
  );
}

function CommerceMockup() {
  return (
    <div className="aspect-[1.24/1] w-full max-w-3xl overflow-hidden rounded-2xl border border-[#171714] bg-[#f4eee4] shadow-[18px_20px_0_#171714] transition duration-500 group-hover:-translate-y-2 group-hover:-rotate-1 group-hover:shadow-[24px_28px_0_#171714] max-sm:shadow-[10px_12px_0_#171714] max-sm:group-hover:translate-y-0 max-sm:group-hover:rotate-0 max-sm:group-hover:shadow-[10px_12px_0_#171714]">
      <div className="flex h-9 items-center gap-1.5 border-b border-black/10 bg-white px-3">
        <span className="h-2 w-2 rounded-full bg-[#ff6f5f]" />
        <span className="h-2 w-2 rounded-full bg-[#ffc85c]" />
        <span className="h-2 w-2 rounded-full bg-[#64c96b]" />

        <div className="mx-auto w-2/5 rounded-full bg-black/5 px-3 py-1 text-center text-[6px] text-black/40">
          beyond-invitation.com
        </div>
      </div>

      <div className="grid h-[64%] grid-cols-[0.8fr_1.2fr] items-center gap-4 px-[7%] py-[6%]">
        <div>
          <p className="mb-3 text-[7px] font-black tracking-[0.18em] text-[#9b6041]">
            NEW COLLECTION
          </p>

          <div className="mb-2 h-3 w-[92%] rounded-sm bg-[#3b2117]" />
          <div className="h-3 w-[68%] rounded-sm bg-[#3b2117]" />
          <div className="mt-5 h-4 w-14 rounded-full bg-[#9b6041]" />
        </div>

        <div className="relative h-full">
          <div className="absolute left-1/2 top-1/2 aspect-[0.72/1] w-[48%] -translate-x-[28%] -translate-y-[52%] rotate-[9deg] border border-black/30 bg-[#bd754e] shadow-xl" />

          <div className="absolute left-1/2 top-1/2 grid aspect-[0.72/1] w-[48%] -translate-x-[60%] -translate-y-[46%] -rotate-6 place-items-center border border-black/30 bg-[#f9ead5] text-[#73462f] shadow-xl">
            <span className="font-serif text-4xl sm:text-6xl">J</span>
            <span className="absolute inset-[18%] border border-[#bc8767]" />

            <span className="absolute bottom-[18%] text-[4px] tracking-[0.2em]">
              THE WEDDING
            </span>
          </div>
        </div>
      </div>

      <div className="grid h-[27%] grid-cols-3 gap-2 px-[7%] pb-[7%]">
        <div className="rounded-md bg-gradient-to-br from-[#e5c9aa] to-[#b87955]" />
        <div className="rounded-md bg-gradient-to-br from-[#d7afa3] to-[#9d5a4c]" />
        <div className="rounded-md bg-gradient-to-br from-[#e0d5b8] to-[#a89468]" />
      </div>
    </div>
  );
}

function LearningMockup() {
  return (
    <div className="grid aspect-[1.24/1] w-full max-w-3xl grid-cols-[14%_86%] overflow-hidden rounded-2xl border border-[#171714] bg-[#f5f3ff] shadow-[18px_20px_0_#171714] transition duration-500 group-hover:-translate-y-2 group-hover:-rotate-1 group-hover:shadow-[24px_28px_0_#171714] max-sm:shadow-[10px_12px_0_#171714] max-sm:group-hover:translate-y-0 max-sm:group-hover:rotate-0 max-sm:group-hover:shadow-[10px_12px_0_#171714]">
      <aside className="flex flex-col items-center gap-3 bg-[#211a47] pt-[18%]">
        <span className="mb-3 grid h-7 w-7 place-items-center rounded-lg bg-[#d9ff6a] text-[10px] font-black text-[#211a47]">
          L
        </span>

        {[0, 1, 2, 3].map((item) => (
          <span
            key={item}
            className={`aspect-square w-[28%] rounded ${
              item === 0
                ? "bg-[#7c62ff] shadow-[0_0_0_5px_rgba(124,98,255,0.2)]"
                : "bg-white/20"
            }`}
          />
        ))}
      </aside>

      <div className="p-[7%]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[6px] font-black tracking-[0.12em] text-[#8d89a1]">
              GOOD MORNING
            </p>

            <p className="mt-1 text-sm font-black text-[#2a224d] sm:text-xl">
              Keep learning.
            </p>
          </div>

          <span className="h-7 w-7 rounded-full bg-gradient-to-br from-[#ffb090] to-[#704dff]" />
        </div>

        <div className="mt-[7%] flex h-[44%] items-center justify-between rounded-xl bg-gradient-to-br from-[#7657ff] to-[#a784ff] p-[7%] text-white">
          <div>
            <p className="text-[6px] font-black tracking-[0.12em] text-white/60">
              WEEKLY PROGRESS
            </p>

            <p className="mt-2 text-3xl font-black tracking-[-0.07em] sm:text-6xl">
              78%
            </p>
          </div>

          <div className="grid aspect-square w-[30%] max-w-24 rotate-[32deg] place-items-center rounded-full border-[7px] border-white/20 border-t-[#d9ff6a]">
            <span className="-rotate-[32deg] text-[8px] font-black">4/5</span>
          </div>
        </div>

        <div className="mt-[7%] grid h-[28%] grid-cols-2 gap-2">
          {["Biology", "Reasoning"].map((item, index) => (
            <div
              key={item}
              className="relative overflow-hidden rounded-xl border border-[#ded9f7] bg-white p-[10%] text-[8px] font-black text-[#2a224d]"
            >
              {item}

              <span
                className={`absolute -bottom-[40%] -right-[12%] aspect-square w-[70%] rounded-full ${
                  index === 0 ? "bg-[#ffdba7]" : "bg-[#bdf0dc]"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="aspect-[1.24/1] w-full max-w-3xl overflow-hidden rounded-2xl border border-[#171714] bg-[#f6f7ef] text-[#182216] shadow-[18px_20px_0_#171714] transition duration-500 group-hover:-translate-y-2 group-hover:-rotate-1 group-hover:shadow-[24px_28px_0_#171714] max-sm:shadow-[10px_12px_0_#171714] max-sm:group-hover:translate-y-0 max-sm:group-hover:rotate-0 max-sm:group-hover:shadow-[10px_12px_0_#171714]">
      <div className="flex h-[14%] items-center gap-[8%] border-b border-black/10 bg-white px-[5%]">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-[#1c2619] text-[8px] font-black text-[#d9ff6a]">
          OS
        </span>

        <span className="h-[25%] w-[42%] rounded-full bg-[#edf0e9]" />
        <span className="ml-auto h-7 w-7 rounded-full bg-[#e3a878]" />
      </div>

      <div className="grid h-[86%] grid-cols-2 grid-rows-[35%_1fr] gap-[5%] p-[5%]">
        {[
          ["REVENUE", "₹4.8L", "+18.4%"],
          ["ORDERS", "1,284", "+12.1%"],
        ].map(([label, value, growth]) => (
          <div
            key={label}
            className="grid content-center rounded-xl border border-[#dfe5d9] bg-white p-[10%]"
          >
            <span className="text-[5px] font-black tracking-[0.14em] text-[#7e897a]">
              {label}
            </span>

            <strong className="my-1 text-xl tracking-[-0.06em] sm:text-4xl">
              {value}
            </strong>

            <span className="text-[6px] font-black text-[#4c9c50]">
              {growth}
            </span>
          </div>
        ))}

        <div className="col-span-2 rounded-xl border border-[#dfe5d9] bg-white px-[5%] pb-[2%] pt-[4%] text-[#5f9f39]">
          <div className="flex items-center justify-between text-[#182216]">
            <div>
              <p className="text-[5px] font-black tracking-[0.14em] text-[#7e897a]">
                PERFORMANCE
              </p>

              <p className="mt-1 text-xs font-black sm:text-lg">Overview</p>
            </div>

            <span className="rounded-full border border-[#dfe5d9] px-2 py-1 text-[5px] text-[#7e897a]">
              30 days
            </span>
          </div>

          <svg
            className="mt-[4%] h-[64%] w-full overflow-visible"
            viewBox="0 0 420 130"
            preserveAspectRatio="none"
          >
            <path
              d="M0 105 C40 92 54 100 82 74 C112 46 132 72 162 55 C195 35 210 61 242 35 C270 13 300 40 330 18 C358 -2 382 10 420 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
            />

            <path
              d="M0 105 C40 92 54 100 82 74 C112 46 132 72 162 55 C195 35 210 61 242 35 C270 13 300 40 330 18 C358 -2 382 10 420 0 L420 130 L0 130Z"
              fill="currentColor"
              opacity="0.08"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ProjectVisual({
  theme,
}: {
  theme: (typeof projects)[number]["theme"];
}) {
  if (theme === "coral") {
    return <CommerceMockup />;
  }

  if (theme === "violet") {
    return <LearningMockup />;
  }

  return <DashboardMockup />;
}

const projectBackgrounds = {
  coral: "bg-[#ff5d3b]",
  violet: "bg-[#7c62ff]",
  lime: "bg-[#d9ff6a]",
};

export default function HomePage() {
  const pageRef = useRef<HTMLElement>(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({
            defaults: {
              ease: "power3.out",
            },
          })
          .from(".hero-item", {
            y: 42,
            opacity: 0,
            duration: 0.85,
            stagger: 0.09,
          })
          .from(
            ".hero-art",
            {
              scale: 0.94,
              rotate: 2,
              opacity: 0,
              duration: 1,
            },
            "-=0.7",
          )
          .from(
            ".floating-card",
            {
              y: 18,
              opacity: 0,
              duration: 0.55,
              stagger: 0.1,
            },
            "-=0.55",
          );
      });

      return () => media.revert();
    },
    {
      scope: pageRef,
    },
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <main
      ref={pageRef}
      className="min-h-screen overflow-x-clip bg-[#f3f0e8] text-[#171714]"
    >
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[200] -translate-y-24 rounded-full bg-[#171714] px-4 py-3 text-sm font-bold text-white transition focus:translate-y-0"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 grid h-20 grid-cols-[1fr_auto_1fr] items-center px-5 transition-all duration-300 md:px-10 xl:px-16 ${
          scrolled
            ? "h-[70px] border-b border-black/10 bg-[#f3f0e8]/85 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <a
          href="#top"
          aria-label="Aritra Debnath homepage"
          className="justify-self-start"
        >
          <BrandMark />
        </a>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative py-2 text-[13px] font-bold tracking-[0.03em]"
            >
              {item.label}

              <span className="absolute inset-x-0 bottom-1 h-px origin-right scale-x-0 bg-current transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="hidden items-center gap-2 justify-self-end rounded-full border border-[#171714] px-4 py-3 text-[13px] font-extrabold transition duration-300 hover:-translate-y-0.5 hover:bg-[#ff5d3b] md:inline-flex"
        >
          Let&apos;s talk

          <ArrowUpRight className="h-4 w-4" />
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
          className="grid h-11 w-11 place-items-center justify-self-end rounded-full border border-[#171714] md:hidden"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </header>

      <div
        className={`fixed inset-0 z-40 flex flex-col justify-between bg-[#171714] px-6 pb-10 pt-28 text-[#f3f0e8] transition duration-300 md:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <nav className="grid" aria-label="Mobile navigation">
          {navigation.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-baseline gap-5 border-b border-white/15 py-4 text-[clamp(42px,13vw,68px)] font-bold leading-none tracking-[-0.07em]"
            >
              <span className="text-[10px] tracking-[0.15em] text-white/50">
                0{index + 1}
              </span>

              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-6 text-sm font-bold">
          <a
            href="https://github.com/JasonDebnath001"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a href={`mailto:${CONTACT_EMAIL}`}>Email</a>
        </div>
      </div>

      <section
        id="top"
        className="relative grid min-h-[100svh] items-center gap-14 border-b border-black/10 px-5 pb-16 pt-32 md:px-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(380px,0.92fr)] lg:gap-10 xl:gap-20 xl:px-16"
      >
        <div id="main-content" className="relative z-10 max-w-4xl">
          <div className="hero-item mb-8 inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-white/35 px-3.5 py-2.5 text-[10px] font-black uppercase tracking-[0.12em] sm:text-[11px]">
            <span className="relative h-2 w-2 rounded-full bg-[#54bb57] shadow-[0_0_0_4px_rgba(84,187,87,0.14)]">
              <span className="absolute -inset-1.5 animate-ping rounded-full border border-[#54bb57]" />
            </span>

            Available for selected projects
          </div>

          <h1 className="hero-item max-w-[960px] text-[clamp(58px,10.5vw,128px)] font-bold leading-[0.84] tracking-[-0.08em] lg:text-[clamp(68px,7.35vw,128px)]">
            I build digital

            <span className="block font-serif font-normal italic text-[#ff5d3b]">
              experiences
            </span>

            <span className="relative block w-max">
              that <em className="font-serif font-normal">work.</em>

              <svg
                aria-hidden="true"
                viewBox="0 0 220 34"
                preserveAspectRatio="none"
                className="absolute -bottom-3 right-0 h-6 w-[45%] overflow-visible"
              >
                <path
                  d="M3 24C55 5 114 7 217 19"
                  fill="none"
                  stroke="#ff5d3b"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="hero-item mt-10 max-w-2xl text-base leading-7 text-[#6e6b63] sm:text-lg lg:text-xl lg:leading-8">
            I&apos;m{" "}
            <strong className="font-black text-[#171714]">
              Aritra Debnath
            </strong>
            , a creative developer combining thoughtful design, modern
            engineering and practical business thinking into memorable digital
            products.
          </p>

          <div className="hero-item mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#work"
              className="group inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full border border-[#171714] bg-[#171714] px-5 text-sm font-black text-[#f3f0e8] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ff5d3b] hover:text-[#171714]"
            >
              Explore my work

              <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full border border-[#171714] bg-white/20 px-5 text-sm font-black transition duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              <MailIcon />
              Start a project
            </a>
          </div>

          <div className="hero-item mt-10 grid max-w-2xl grid-cols-2 gap-5 border-t border-black/10 pt-6 sm:flex sm:gap-16">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#6e6b63]">
                Based in
              </p>

              <p className="mt-2 text-xs font-black sm:text-sm">
                Kolkata, India
              </p>
            </div>

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#6e6b63]">
                Focus
              </p>

              <p className="mt-2 text-xs font-black sm:text-sm">
                Web · Product · Growth
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto aspect-[0.9/1] w-full max-w-[620px] lg:justify-self-end">
          <div className="hero-art absolute inset-[5%_2%_4%_7%] overflow-hidden rounded-[36px] border border-black/25 bg-[#7c62ff] shadow-[0_35px_85px_rgba(56,40,142,0.23)] sm:rounded-[54px]">
            <div className="absolute -left-[18%] -top-[22%] aspect-square w-[70%] rounded-full bg-[#d9ff6a]" />

            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.22) 1px, transparent 1px)",
                backgroundSize: "42px 42px",
                maskImage: "linear-gradient(to bottom, black, transparent 86%)",
              }}
            />

            <div
              className="absolute -bottom-[8%] right-[7%] flex h-[76%] w-[73%] items-center justify-center border border-white/45 bg-gradient-to-br from-white/20 to-[#130e3d]/25 shadow-[inset_0_0_80px_rgba(255,255,255,.16),0_22px_50px_rgba(36,25,96,.3)] backdrop-blur-sm"
              style={{
                borderRadius: "48% 48% 16% 16% / 39% 39% 10% 10%",
              }}
            >
              <span className="relative z-10 text-[clamp(78px,10vw,145px)] font-black tracking-[-0.12em] text-white/90 drop-shadow-2xl">
                AD
              </span>

              <span className="absolute top-[13%] aspect-square w-[43%] rounded-full border border-white/25" />

              <span className="absolute -bottom-[12%] h-[58%] w-[92%] rounded-[50%_50%_14%_14%] border border-white/25" />

              <span className="absolute bottom-[17%] right-[7%] z-20 grid text-right text-[9px] font-black tracking-[0.18em] text-white sm:text-[10px]">
                <span>CREATIVE</span>
                <span>DEVELOPER</span>
              </span>
            </div>

            <span className="absolute right-[7%] top-[12%] aspect-square w-[52%] rotate-[18deg] rounded-full border border-white/40">
              <span className="absolute right-[-1%] top-[21%] h-3 w-3 rounded-full border-2 border-[#7c62ff] bg-[#d9ff6a]" />
            </span>

            <span className="absolute bottom-[7%] left-[4%] aspect-square w-[78%] -rotate-[15deg] rounded-full border border-white/40">
              <span className="absolute bottom-[10%] left-[9%] h-3 w-3 rounded-full border-2 border-[#7c62ff] bg-[#ff5d3b]" />
            </span>
          </div>

          <div className="floating-card absolute left-0 top-[2%] flex -rotate-3 items-center gap-3 border border-[#171714] bg-[#fffdf7] p-3 shadow-[7px_8px_0_#171714] sm:p-4">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#171714] text-[10px] font-black text-[#d9ff6a] sm:h-10 sm:w-10">
              &lt;/&gt;
            </span>

            <span>
              <small className="block text-[7px] font-black tracking-[0.13em] text-[#6e6b63] sm:text-[8px]">
                BUILDING WITH
              </small>

              <strong className="text-[10px] sm:text-xs">
                Next.js + React
              </strong>
            </span>
          </div>

          <div className="floating-card absolute right-0 top-[44%] rotate-3 border border-[#171714] bg-[#fffdf7] p-3 shadow-[7px_8px_0_#171714] sm:px-5 sm:py-4">
            <div className="mb-2 flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#ff5d3b]" />
              <span className="h-2 w-2 rounded-full bg-[#7c62ff]" />
              <span className="h-2 w-2 rounded-full border border-[#171714] bg-[#d9ff6a]" />
            </div>

            <strong className="text-[10px] sm:text-xs">Details matter.</strong>
          </div>

          <div className="floating-card absolute bottom-0 right-[7%] flex -rotate-2 items-center gap-3 border border-[#171714] bg-[#fffdf7] p-3 shadow-[7px_8px_0_#171714] sm:px-5 sm:py-4">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-[#171714] sm:h-9 sm:w-9">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5d3b]" />
            </span>

            <span>
              <small className="block text-[7px] font-black tracking-[0.13em] text-[#6e6b63] sm:text-[8px]">
                CURRENT STATUS
              </small>

              <strong className="text-[10px] sm:text-xs">
                Making ideas real
              </strong>
            </span>
          </div>
        </div>
      </section>

      <section
        className="overflow-hidden border-b border-[#171714] bg-[#171714] text-[#f3f0e8]"
        aria-label="Skills"
      >
        <div className="marquee-track flex w-max">
          {[...skills, ...skills].map((skill, index) => (
            <span
              key={`${skill}-${index}`}
              className="flex items-center gap-8 whitespace-nowrap py-5 pr-8 text-[13px] font-bold"
            >
              {skill}

              <span className="text-[#d9ff6a]">✦</span>
            </span>
          ))}
        </div>
      </section>

      <section
        id="work"
        className="px-5 py-24 md:px-10 md:py-32 xl:px-16 xl:py-40"
      >
        <div className="mb-14 grid items-end gap-8 lg:mb-24 lg:grid-cols-[1.45fr_0.55fr] lg:gap-14">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em]">
              01 / Selected work
            </p>

            <h2 className="mt-5 max-w-4xl text-[clamp(46px,7vw,96px)] font-bold leading-[0.95] tracking-[-0.07em]">
              Projects built with purpose.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-[#6e6b63] lg:pb-2 lg:text-lg">
            A selection of digital experiences where strategy, interface and
            engineering work together.
          </p>
        </div>

        <div className="grid gap-7">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group grid overflow-hidden rounded-[26px] border border-[#171714] bg-[#fffdf7] lg:min-h-[620px] lg:grid-cols-[0.43fr_0.57fr]"
            >
              <div className="flex min-h-[460px] flex-col p-7 md:p-12 xl:p-14">
                <span className="w-max rounded-full border border-black/10 px-3 py-2 text-[10px] font-black tracking-[0.14em] text-[#6e6b63]">
                  {project.number}
                </span>

                <div className="my-auto py-12">
                  <p className="mb-4 text-[10px] font-black uppercase tracking-[0.15em] text-[#6e6b63]">
                    {project.category}
                  </p>

                  <h3 className="text-[clamp(42px,5vw,72px)] font-bold leading-[0.95] tracking-[-0.065em]">
                    {project.title}
                  </h3>

                  <p className="mt-6 max-w-lg text-[15px] leading-7 text-[#6e6b63] md:text-base">
                    {project.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-black/10 px-3 py-2 text-[10px] font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="group/link inline-flex w-max items-center gap-2 border-b border-[#171714] pb-1 text-[13px] font-black"
                >
                  View project

                  <ArrowUpRight className="h-4 w-4 transition group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>

              <div
                className={`flex min-h-[360px] items-center justify-center p-6 sm:p-10 lg:min-h-0 lg:p-12 xl:p-20 ${
                  projectBackgrounds[project.theme]
                }`}
              >
                <ProjectVisual theme={project.theme} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="services"
        className="bg-[#171714] px-5 py-24 text-[#f3f0e8] md:px-10 md:py-32 xl:px-16 xl:py-40"
      >
        <div className="mb-14 grid items-end gap-8 lg:mb-24 lg:grid-cols-[1.45fr_0.55fr] lg:gap-14">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em]">
              02 / What I do
            </p>

            <h2 className="mt-5 max-w-4xl text-[clamp(46px,7vw,96px)] font-bold leading-[0.95] tracking-[-0.07em]">
              From rough idea to useful product.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-white/55 lg:pb-2 lg:text-lg">
            I connect creative direction with technical execution, so the final
            result feels coherent from every angle.
          </p>
        </div>

        <div className="grid border-t border-white/20 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group min-h-[360px] border-b border-white/20 px-1 py-8 transition duration-300 hover:bg-[#d9ff6a] hover:px-8 hover:text-[#171714] lg:min-h-[470px] lg:border-b-0 lg:border-r lg:px-10 lg:py-12 lg:first:border-l xl:px-12"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black tracking-[0.14em]">
                  {service.number}
                </span>

                <ArrowUpRight className="h-7 w-7" />
              </div>

              <h3 className="mt-20 text-[clamp(34px,3.2vw,50px)] font-bold leading-none tracking-[-0.06em] lg:mt-32">
                {service.title}
              </h3>

              <p className="mt-6 max-w-sm text-[15px] leading-7 text-white/55 transition group-hover:text-black/65">
                {service.description}
              </p>

              <ul className="mt-8 flex flex-wrap gap-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/25 px-3 py-2 text-[9px] font-bold transition group-hover:border-black/25"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="bg-[#ebe6da] px-5 py-24 md:px-10 md:py-32 xl:px-16 xl:py-40"
      >
        <div className="mb-16 grid gap-8 lg:mb-28 lg:grid-cols-[0.3fr_1.7fr]">
          <p className="text-[10px] font-black uppercase tracking-[0.16em]">
            03 / About
          </p>

          <p className="max-w-6xl text-[clamp(42px,7vw,96px)] font-semibold leading-[0.99] tracking-[-0.07em]">
            Good digital work is not just visually impressive. It should be

            <em className="font-serif font-normal text-[#ff5d3b]">
              {" "}
              clear, fast, useful
            </em>{" "}
            and built around a real goal.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <article className="grid overflow-hidden rounded-3xl border border-[#171714] bg-[#fffdf7] md:min-h-[560px] md:grid-cols-[0.8fr_1.2fr]">
            <div className="relative grid min-h-[360px] place-items-center overflow-hidden bg-[#ff5d3b]">
              <span className="absolute aspect-square w-[75%] rounded-full border border-black/35" />
              <span className="absolute aspect-square w-[110%] rounded-full border border-black/35" />

              <span className="relative z-10 text-[clamp(110px,16vw,220px)] font-black tracking-[-0.16em]">
                AD
              </span>
            </div>

            <div className="flex flex-col justify-end p-7 md:p-12 xl:p-14">
              <h3 className="max-w-xl text-[clamp(38px,4.5vw,64px)] font-bold leading-none tracking-[-0.065em]">
                Design-minded. Technically grounded.
              </h3>

              <p className="mt-8 max-w-xl text-[15px] leading-7 text-[#6e6b63]">
                I enjoy solving the messy middle between an ambitious idea and a
                dependable final product. My approach combines visual judgment,
                clean frontend engineering and a practical understanding of how
                businesses operate.
              </p>

              <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#6e6b63]">
                That means asking better questions, removing unnecessary
                complexity and caring about the details users notice—even when
                they cannot explain why.
              </p>
            </div>
          </article>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <article className="flex min-h-[270px] flex-col justify-between rounded-3xl border border-[#171714] bg-[#7c62ff] p-7 text-white md:p-10">
              <span className="font-serif text-7xl leading-none">“</span>

              <p className="text-[clamp(28px,3vw,42px)] font-bold leading-[1.03] tracking-[-0.055em]">
                Make it clear.
                <br />
                Make it useful.
                <br />
                Then make it memorable.
              </p>
            </article>

            <article className="min-h-[270px] rounded-3xl border border-[#171714] bg-[#d9ff6a] p-7 md:p-10">
              <p className="text-[9px] font-black uppercase tracking-[0.16em]">
                Current toolkit
              </p>

              <div className="mt-10 flex flex-wrap gap-2">
                {skills.slice(0, 6).map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-black/35 px-3 py-2 text-[10px] font-bold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>

        <div className="mt-16 grid border-y border-[#171714] sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {[
            "Think before decorating.",
            "Build for real people.",
            "Keep complexity backstage.",
            "Polish the final 10%.",
          ].map((principle, index) => (
            <div
              key={principle}
              className="flex min-h-36 flex-col justify-between border-b border-[#171714] p-6 last:border-b-0 sm:border-r sm:[&:nth-child(2)]:border-r-0 sm:[&:nth-child(3)]:border-b-0 lg:border-b-0 lg:[&:nth-child(2)]:border-r lg:last:border-r-0"
            >
              <span className="text-[9px] font-black tracking-[0.15em]">
                0{index + 1}
              </span>

              <strong className="max-w-[210px] text-lg leading-tight">
                {principle}
              </strong>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="relative grid min-h-[780px] place-items-center overflow-hidden bg-[#ff5d3b] px-5 py-28 text-center"
      >
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(rgba(23,23,20,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(23,23,20,.35) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
            maskImage:
              "radial-gradient(circle at center, black, transparent 72%)",
          }}
        />

        <span className="absolute -left-[12%] top-[4%] aspect-square w-[47vw] max-w-[700px] rounded-full border border-[#171714]" />

        <span className="absolute -bottom-[35%] -right-[15%] aspect-square w-[58vw] max-w-[850px] rounded-full border border-[#171714]" />

        <div className="relative z-10 max-w-6xl">
          <p className="text-[10px] font-black uppercase tracking-[0.16em]">
            04 / Let&apos;s work together
          </p>

          <h2 className="mt-8 text-[clamp(62px,11vw,150px)] font-bold leading-[0.84] tracking-[-0.085em]">
            Have something worth building?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 md:text-xl md:leading-8">
            Tell me what you are working on, where it is stuck and what a great
            outcome would look like.
          </p>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="group mt-12 inline-flex max-w-full items-center gap-3 border-b-2 border-[#171714] px-1 pb-3 text-[clamp(17px,2.2vw,30px)] font-black"
          >
            <span className="truncate">{CONTACT_EMAIL}</span>

            <ArrowUpRight className="h-7 w-7 shrink-0 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </section>

      <footer className="grid gap-14 bg-[#171714] px-5 pb-8 pt-20 text-[#f3f0e8] md:grid-cols-2 md:px-10 xl:px-16 xl:pt-28">
        <div>
          <a href="#top" aria-label="Back to top" className="inline-block">
            <BrandMark light />
          </a>

          <p className="mt-6 max-w-xs text-[15px] leading-7 text-white/50">
            Creative development for ambitious digital ideas.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="grid content-start gap-3">
            <p className="mb-2 text-[9px] font-black uppercase tracking-[0.16em] text-white/40">
              Navigation
            </p>

            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="w-max text-sm font-bold hover:text-[#d9ff6a]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="grid content-start gap-3">
            <p className="mb-2 text-[9px] font-black uppercase tracking-[0.16em] text-white/40">
              Connect
            </p>

            <a
              href="https://github.com/JasonDebnath001"
              target="_blank"
              rel="noreferrer"
              className="w-max text-sm font-bold hover:text-[#d9ff6a]"
            >
              GitHub
            </a>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="w-max text-sm font-bold hover:text-[#d9ff6a]"
            >
              Email
            </a>
          </div>
        </div>

        <div className="col-span-full mt-6 flex flex-col gap-5 border-t border-white/15 pt-6 text-[11px] font-semibold text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
            Aritra Debnath
          </p>

          <a href="#top" className="w-max hover:text-white">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}