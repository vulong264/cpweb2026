import type { Metadata } from "next";
import {
  Compass,
  Layers,
  Hammer,
  Rocket,
  TrendingUp,
  Check,
} from "lucide-react";
import { CTABanner } from "@/components/cta-banner";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "How We Work — CoderPush",
  description:
    "Our five-phase engagement model: discovery, architecture, build, deploy, scale.",
};

const phases = [
  {
    id: "discovery",
    step: "01",
    title: "Discovery",
    duration: "2 weeks",
    icon: <Compass className="h-5 w-5" />,
    description:
      "We walk the code, the runbooks, and the roadmap. We surface the risks your team already suspects and the ones no one has looked at yet. By day 10, you have a plan your engineering leadership can sign off on.",
    deliverables: [
      "Architecture review and dependency map",
      "Risk register with mitigations",
      "Scoped delivery plan with milestones and staffing",
      "Executive readout for your leadership",
    ],
  },
  {
    id: "architecture",
    step: "02",
    title: "Architecture",
    duration: "1–3 weeks",
    icon: <Layers className="h-5 w-5" />,
    description:
      "We design the system to survive production on day 90, not day 7. Data model, interfaces, failure modes, cost envelope — all documented and reviewed alongside your principals.",
    deliverables: [
      "Component and data flow diagrams",
      "Interface contracts and failure-mode analysis",
      "Cost model and capacity plan",
      "ADRs for the decisions that matter",
    ],
  },
  {
    id: "build",
    step: "03",
    title: "Build",
    duration: "Ongoing, weekly cadence",
    icon: <Hammer className="h-5 w-5" />,
    description:
      "Engineers embed in your sprint, your repo, and your review process. Weekly demos over status reports. Evaluation, tests, and observability are part of the definition of done — not a Q4 cleanup ticket.",
    deliverables: [
      "Production-grade code reviewed in your workflow",
      "Automated tests and eval suites in CI",
      "Feature flags and staged rollouts",
      "Weekly demo + written engineering update",
    ],
  },
  {
    id: "deploy",
    step: "04",
    title: "Deploy",
    duration: "Continuous",
    icon: <Rocket className="h-5 w-5" />,
    description:
      "Ship behind flags, measure behind dashboards. We own the rollout: canary, ramp, rollback. Your on-call team gets a system it trusts, not a handoff document and a prayer.",
    deliverables: [
      "Canary and progressive rollout playbooks",
      "SLO definitions with alerting wired to your on-call",
      "Runbooks for the top 10 failure modes",
      "Production readiness review",
    ],
  },
  {
    id: "scale",
    step: "05",
    title: "Scale",
    duration: "Ongoing",
    icon: <TrendingUp className="h-5 w-5" />,
    description:
      "Once it&apos;s stable, we make it cheaper, faster, and boring. We transition ownership to your team on a schedule we agree up front — no dependency traps.",
    deliverables: [
      "Cost and latency optimization passes",
      "Capacity forecasting and autoscaling tuning",
      "Structured handover with training and documentation",
      "Optional retained SRE or on-call coverage",
    ],
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy pt-32 pb-20 md:pt-40 md:pb-28">
        <div aria-hidden className="absolute inset-0 bg-radial-indigo" />
        <div aria-hidden className="absolute inset-0 circuit-pattern opacity-40 noise-mask" />
        <div className="container-xl relative">
          <FadeIn>
            <div className="eyebrow">How we work</div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="heading-display mt-4 max-w-4xl text-4xl leading-[1.05] text-white sm:text-6xl md:text-[68px]">
              A delivery model that looks boring on paper and works in production.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-2xl text-base text-slate-mist sm:text-lg md:text-xl">
              Five phases. Clear deliverables. Checkpoints your leadership owns.
              No vanity Gantt charts, no opaque status decks — just code, docs,
              and numbers you can defend.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-xl">
          <div className="relative">
            {/* vertical line */}
            <div
              aria-hidden
              className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-indigo/50 via-slate-900/15 to-transparent md:left-[31px]"
            />

            <div className="space-y-14 md:space-y-20">
              {phases.map((p, i) => (
                <FadeIn key={p.id} delay={i * 0.04}>
                  <article
                    id={p.id}
                    className="scroll-mt-24 grid gap-6 md:grid-cols-12 md:gap-10"
                  >
                    <div className="md:col-span-4">
                      <div className="flex items-start gap-4">
                        <div className="relative z-10 flex h-14 w-14 flex-none items-center justify-center rounded-xl border border-indigo/30 bg-white text-indigo-deep shadow-sm">
                          {p.icon}
                        </div>
                        <div>
                          <div className="font-mono text-xs font-semibold tracking-widest text-indigo-deep">
                            PHASE {p.step} · {p.duration}
                          </div>
                          <h2 className="heading-display mt-1 text-2xl font-semibold text-slate-900 md:text-3xl">
                            {p.title}
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-8 md:pl-0">
                      <div className="rounded-2xl border border-slate-900/10 bg-slate-50 p-7 md:p-9">
                        <p className="text-base leading-relaxed text-slate-ink md:text-lg">
                          {p.description}
                        </p>
                        <div className="mt-6 border-t border-slate-900/10 pt-6">
                          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-ink">
                            Deliverables
                          </h3>
                          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                            {p.deliverables.map((d) => (
                              <li
                                key={d}
                                className="flex items-start gap-3 text-slate-900"
                              >
                                <Check className="mt-1 h-4 w-4 flex-none text-indigo-deep" />
                                <span className="text-sm leading-relaxed">{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="container-xl">
          <div className="max-w-2xl">
            <div className="eyebrow">Principles</div>
            <h2 className="heading-display mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
              The rules that keep us honest.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Ship weekly, or say why not.",
                body: "If we haven't shipped in a week, that's a problem worth naming. No hiding behind frameworks.",
              },
              {
                title: "Instrument before you optimize.",
                body: "We measure before we change. Every performance or cost claim has a dashboard behind it.",
              },
              {
                title: "Senior engineers on call.",
                body: "The people who wrote the code are the people who get paged. No junior-only delivery teams.",
              },
              {
                title: "Evaluation in CI, always.",
                body: "For AI systems, evals gate deploys like tests do. Quality regressions are build breaks.",
              },
              {
                title: "Handover is a feature.",
                body: "We plan for you to own the system from day one. No lock-in, no indispensable heroes.",
              },
              {
                title: "Security is not Q4 work.",
                body: "Encryption, least privilege, and audit trails are default. We don't bolt them on.",
              },
            ].map((pr) => (
              <div
                key={pr.title}
                className="rounded-xl border border-slate-900/10 bg-white p-7"
              >
                <h3 className="font-display text-lg font-semibold text-slate-900">
                  {pr.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-ink">
                  {pr.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
