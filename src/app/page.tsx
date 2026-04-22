import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Users2,
  Cloud,
  ShieldCheck,
  Quote,
} from "lucide-react";
import { CTABanner } from "@/components/cta-banner";
import { AwsBadge } from "@/components/aws-badge";
import { FadeIn } from "@/components/fade-in";
import { caseStudies, clientLogos, services, testimonials } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

const serviceIcons: Record<string, React.ReactNode> = {
  ai: <Cpu className="h-5 w-5" />,
  teams: <Users2 className="h-5 w-5" />,
  cloud: <Cloud className="h-5 w-5" />,
  "on-prem": <ShieldCheck className="h-5 w-5" />,
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy pt-32 pb-24 md:pt-40 md:pb-32">
        <div
          aria-hidden
          className="absolute inset-0 bg-radial-indigo"
        />
        <div
          aria-hidden
          className="absolute inset-0 circuit-pattern opacity-40 noise-mask"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-indigo/20 blur-[120px]"
        />

        <div className="container-xl relative">
          <FadeIn>
            <div className="eyebrow">AI-era engineering consultancy</div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="heading-display mt-5 max-w-4xl text-4xl leading-[1.05] text-white sm:text-6xl md:text-[72px]">
              We build AI that ships to{" "}
              <span className="text-indigo-muted">production.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-2xl text-base text-slate-mist sm:text-lg md:text-xl">
              Embedded engineering teams, AWS-native delivery, and on-premise AI
              for enterprises that can&apos;t afford experiments.{" "}
              <span className="text-white">80 engineers. Vietnam-based. Globally delivered.</span>
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link href="/work" className="btn-primary px-6 py-4 text-base">
                See Our Work <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-outline px-6 py-4 text-base">
                Book a Technical Call <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="mt-14">
              <AwsBadge variant="full" theme="dark" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Logos bar */}
      <section className="border-y border-white/5 bg-navy-900 py-10">
        <div className="container-xl">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-warm">
              Trusted by teams at
            </p>
            <div className="grid w-full grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 md:w-auto md:grid-cols-6 md:gap-x-12">
              {clientLogos.map((name) => (
                <div
                  key={name}
                  className="font-display text-sm font-semibold tracking-wide text-slate-warm/80 md:text-base"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services strip */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-xl">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <SectionHeading
              theme="light"
              eyebrow="What we do"
              title="Engineering for the production AI era."
              description="Four practices, one operating model: senior engineers shipping measurable outcomes on AWS, GCP, and on-premise infrastructure."
            />
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-medium text-indigo-deep hover:text-indigo"
            >
              All services <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <FadeIn key={s.id} delay={i * 0.05}>
                <Link
                  href={`/services#${s.id}`}
                  className="group flex h-full flex-col justify-between rounded-xl border border-slate-900/10 bg-slate-50/60 p-6 transition hover:border-indigo/40 hover:bg-white hover:shadow-lg"
                >
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo/10 text-indigo-deep">
                      {serviceIcons[s.id]}
                    </div>
                    <h3 className="mt-5 font-display text-xl font-semibold text-slate-900">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-ink">
                      {s.short}
                    </p>
                  </div>
                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-indigo-deep">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="container-xl">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <SectionHeading
              theme="light"
              eyebrow="Selected work"
              title="Outcomes, not deliverables."
              description="Every engagement ends with a number a CFO can defend."
            />
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-sm font-medium text-indigo-deep hover:text-indigo"
            >
              All case studies <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {caseStudies.slice(0, 3).map((cs, i) => (
              <FadeIn key={cs.slug} delay={i * 0.06}>
                <Link
                  href={`/work/${cs.slug}`}
                  className="group flex h-full flex-col justify-between rounded-xl border border-slate-900/10 bg-white p-7 transition hover:-translate-y-1 hover:border-indigo/40 hover:shadow-xl"
                >
                  <div>
                    <span className="tag-light">{cs.industry}</span>
                    <div className="mt-8 font-display text-[56px] font-semibold leading-none text-slate-900">
                      {cs.metric}
                    </div>
                    <div className="mt-2 text-sm text-slate-ink">{cs.metricLabel}</div>
                    <p className="mt-6 text-base font-medium text-slate-900">
                      {cs.title}
                    </p>
                  </div>
                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-indigo-deep">
                    Read case study
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How we work teaser */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-xl">
          <SectionHeading
            theme="light"
            eyebrow="How we work"
            title="A predictable path from scope to scale."
            description="No mystery meat. Every engagement follows a clear shape, with checkpoints your team owns."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Scope & Technical Discovery",
                duration: "2 weeks",
                body:
                  "Architecture review, risk map, and a delivery plan your engineering leadership signs off on.",
              },
              {
                step: "02",
                title: "Embedded Team Deployment",
                duration: "Week 3 onwards",
                body:
                  "Senior engineers integrate into your sprint, repo, and standup. Same definition of done.",
              },
              {
                step: "03",
                title: "Ship, Measure, Iterate",
                duration: "Ongoing",
                body:
                  "Weekly release cadence with instrumented outcomes — not status reports.",
              },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.06}>
                <div className="relative rounded-xl border border-slate-900/10 bg-slate-50 p-7">
                  <div className="font-mono text-xs font-semibold tracking-widest text-indigo-deep">
                    {item.step} · {item.duration}
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-ink">
                    {item.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/how-we-work"
              className="group inline-flex items-center gap-2 text-sm font-medium text-indigo-deep hover:text-indigo"
            >
              See the full delivery model
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-navy py-24 md:py-32">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Signal from clients"
            title="Engineering leaders say it better than we do."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <figure className="relative h-full rounded-xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
                  <Quote className="absolute -top-4 left-6 h-10 w-10 rounded-md bg-indigo/20 p-2 text-indigo-muted" />
                  <blockquote className="font-display text-xl leading-snug text-white md:text-2xl">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 text-sm">
                    <div className="font-semibold text-white">{t.author}</div>
                    <div className="text-slate-warm">{t.role}</div>
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
