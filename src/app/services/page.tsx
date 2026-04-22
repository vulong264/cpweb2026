import Link from "next/link";
import { ArrowRight, Cpu, Users2, Cloud, ShieldCheck, Check } from "lucide-react";
import type { Metadata } from "next";
import { services } from "@/lib/content";
import { CTABanner } from "@/components/cta-banner";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Services — CoderPush",
  description:
    "AI development, embedded engineering teams, cloud-native delivery on AWS and GCP, and on-premise AI deployment.",
};

const serviceIcons: Record<string, React.ReactNode> = {
  ai: <Cpu className="h-6 w-6" />,
  teams: <Users2 className="h-6 w-6" />,
  cloud: <Cloud className="h-6 w-6" />,
  "on-prem": <ShieldCheck className="h-6 w-6" />,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy pt-32 pb-20 md:pt-40 md:pb-28">
        <div aria-hidden className="absolute inset-0 bg-radial-indigo" />
        <div aria-hidden className="absolute inset-0 circuit-pattern opacity-40 noise-mask" />
        <div className="container-xl relative">
          <FadeIn>
            <div className="eyebrow">Services</div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="heading-display mt-4 max-w-4xl text-4xl leading-[1.05] text-white sm:text-6xl md:text-[68px]">
              What we build — and how we build it.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-2xl text-base text-slate-mist sm:text-lg md:text-xl">
              Four practices, run by senior engineers who&apos;ve shipped
              production systems at scale. Pick the one you need, or combine
              them — they&apos;re designed to compound.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-10 flex flex-wrap gap-2">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-mist transition hover:border-indigo/40 hover:text-white"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Service sections */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-xl space-y-20 md:space-y-28">
          {services.map((s, idx) => (
            <article
              key={s.id}
              id={s.id}
              className="scroll-mt-24 grid gap-10 md:grid-cols-12 md:gap-14"
            >
              <div className="md:col-span-5">
                <FadeIn>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo/10 text-indigo-deep">
                    {serviceIcons[s.id]}
                  </div>
                  <div className="mt-4 font-mono text-xs font-semibold tracking-widest text-indigo-deep">
                    0{idx + 1} · Practice
                  </div>
                  <h2 className="heading-display mt-3 text-3xl font-semibold leading-tight text-slate-900 md:text-[40px]">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-base text-slate-ink md:text-lg">
                    {s.description}
                  </p>
                  {s.caseStudy && (
                    <Link
                      href={`/work/${s.caseStudy.slug}`}
                      className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-indigo-deep hover:text-indigo"
                    >
                      Relevant case study: {s.caseStudy.label}
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </Link>
                  )}
                </FadeIn>
              </div>

              <div className="md:col-span-7">
                <FadeIn delay={0.08}>
                  <div className="rounded-2xl border border-slate-900/10 bg-slate-50 p-7 md:p-9">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-ink">
                      Capabilities
                    </h3>
                    <ul className="mt-5 space-y-3">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-slate-900">
                          <Check className="mt-1 h-4 w-4 flex-none text-indigo-deep" />
                          <span className="text-sm leading-relaxed md:text-base">
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 border-t border-slate-900/10 pt-6">
                      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-ink">
                        Typical stack
                      </h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {s.stack.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-slate-900/10 bg-white px-3 py-1.5 font-mono text-xs text-slate-ink"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* How it fits together */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="container-xl">
          <SectionHeading
            theme="light"
            align="center"
            eyebrow="Operating model"
            title="One team. One repo. One definition of done."
            description="Our practices share the same delivery discipline: evaluation in CI, incident-aware rollouts, and senior engineers on call. You get a consultancy, not a vendor."
          />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
