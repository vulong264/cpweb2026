import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
  title?: string;
  subtitle?: string;
  cta?: { label: string; href: string };
};

export function CTABanner({
  title = "Ready to ship AI that works?",
  subtitle = "Skip the pilot purgatory. Get embedded engineers who ship production systems — not demos.",
  cta = { label: "Book a 30-min scoping call", href: "/contact" },
}: Props) {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 sm:py-24">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(79,70,229,0.28),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(79,70,229,0.15),transparent_55%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 circuit-pattern opacity-30"
      />
      <div className="container-xl relative">
        <div className="rounded-2xl border border-indigo/30 bg-gradient-to-br from-indigo-deep/40 via-navy-700/80 to-navy-900/80 p-8 md:p-14">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h2 className="heading-display text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
                {title}
              </h2>
              <p className="mt-4 text-base text-slate-mist md:text-lg">
                {subtitle}
              </p>
            </div>
            <Link href={cta.href} className="btn-primary whitespace-nowrap px-6 py-4 text-base">
              {cta.label} <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
