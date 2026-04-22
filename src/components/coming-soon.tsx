import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "./fade-in";

type Props = {
  eyebrow: string;
  title: string;
  body: string;
};

export function ComingSoon({ eyebrow, title, body }: Props) {
  return (
    <section className="relative overflow-hidden bg-navy pt-32 pb-32 md:pt-40 md:pb-40">
      <div aria-hidden className="absolute inset-0 bg-radial-indigo" />
      <div aria-hidden className="absolute inset-0 circuit-pattern opacity-40 noise-mask" />
      <div className="container-xl relative max-w-3xl">
        <FadeIn>
          <div className="eyebrow">{eyebrow}</div>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h1 className="heading-display mt-4 text-4xl leading-[1.05] text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-6 text-base text-slate-mist md:text-lg">{body}</p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Talk to us <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/work" className="btn-outline">
              See our work
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
