import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "About — CoderPush",
  description:
    "CoderPush is an AI-era engineering consultancy based in Vietnam, serving US, EU, and APAC enterprises.",
};

export default function AboutPage() {
  return (
    <ComingSoon
      eyebrow="About"
      title="80 engineers. One operating model. Globally delivered."
      body="Founded and led by Long Vu, CoderPush is a Vietnam-headquartered engineering consultancy serving enterprise clients across the US, EU, and APAC. The full team page is on its way. If you need it before then, reach out."
    />
  );
}
