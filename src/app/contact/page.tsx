import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { AwsBadge } from "@/components/aws-badge";

export const metadata: Metadata = {
  title: "Contact — CoderPush",
  description:
    "Book a 30-minute technical call with CoderPush engineering leadership.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-navy pt-32 pb-28 md:pt-40 md:pb-36">
      <div aria-hidden className="absolute inset-0 bg-radial-indigo" />
      <div aria-hidden className="absolute inset-0 circuit-pattern opacity-40 noise-mask" />
      <div className="container-xl relative grid gap-14 md:grid-cols-12">
        <div className="md:col-span-7">
          <FadeIn>
            <div className="eyebrow">Contact</div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="heading-display mt-4 text-4xl leading-[1.05] text-white sm:text-5xl md:text-[64px]">
              Book a 30-min technical call.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-xl text-base text-slate-mist md:text-lg">
              Tell us what you&apos;re shipping, what&apos;s in the way, and
              what you&apos;d measure success by. You&apos;ll talk to an
              engineer, not a sales rep.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="mailto:hello@coderpush.com"
                className="btn-primary px-6 py-4 text-base"
              >
                <Mail className="h-4 w-4" /> hello@coderpush.com
              </a>
              <Link href="/work" className="btn-outline px-6 py-4 text-base">
                See our work <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </div>

        <div className="md:col-span-5">
          <FadeIn delay={0.2}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 md:p-8">
              <h2 className="font-display text-xl font-semibold text-white">
                What to expect
              </h2>
              <ul className="mt-5 space-y-3 text-sm text-slate-mist">
                <li>• 30 minutes, scoped to your problem</li>
                <li>• Engineer on the call — not an account manager</li>
                <li>• Written follow-up within 48 hours</li>
                <li>• No pitch deck</li>
              </ul>

              <div className="mt-8 border-t border-white/10 pt-6">
                <AwsBadge variant="compact" />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
