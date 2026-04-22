import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Blog — CoderPush",
  description:
    "Engineering writing from CoderPush — production AI, cloud-native delivery, and embedded team practice.",
};

export default function BlogPage() {
  return (
    <ComingSoon
      eyebrow="Engineering writing"
      title="The blog is being wired up."
      body="Expect practical write-ups on production AI, eval pipelines, AWS patterns, and embedded team operations — written by the engineers doing the work."
    />
  );
}
