import Link from "next/link";
import { Logo } from "./logo";
import { Github, Linkedin } from "lucide-react";
import { AwsBadge } from "./aws-badge";

const footerLinks = {
  Company: [
    { href: "/about", label: "About" },
    { href: "/how-we-work", label: "How We Work" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  Services: [
    { href: "/services#ai", label: "AI Development" },
    { href: "/services#teams", label: "Embedded Teams" },
    { href: "/services#cloud", label: "Cloud-Native (AWS/GCP)" },
    { href: "/services#on-prem", label: "On-Premise AI" },
  ],
  Work: [
    { href: "/work", label: "All case studies" },
    { href: "/work/marketplace-gmv", label: "B2B Marketplace" },
    { href: "/work/production-ai", label: "Production AI" },
    { href: "/work/cloud-migration", label: "Cloud Migration" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-900 text-slate-mist">
      <div className="container-xl py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-slate-warm">
              Production AI, engineered for scale. Embedded engineering teams.
              AWS-native delivery. On-premise AI for enterprises that can&apos;t
              afford experiments.
            </p>
            <div className="mt-6">
              <AwsBadge variant="compact" />
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/coderpush/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-md border border-white/10 p-2 text-slate-mist transition hover:border-white/30 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/coderpush"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-md border border-white/10 p-2 text-slate-mist transition hover:border-white/30 hover:text-white"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-8 md:grid-cols-3">
            {Object.entries(footerLinks).map(([title, items]) => (
              <div key={title}>
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  {title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {items.map((i) => (
                    <li key={i.href}>
                      <Link
                        href={i.href}
                        className="text-sm text-slate-warm transition hover:text-white"
                      >
                        {i.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 text-xs text-slate-warm md:flex-row md:items-center">
          <span>© CoderPush {new Date().getFullYear()}. All rights reserved.</span>
          <span>Offices: Ho Chi Minh City, Vietnam · Singapore</span>
        </div>
      </div>
    </footer>
  );
}
