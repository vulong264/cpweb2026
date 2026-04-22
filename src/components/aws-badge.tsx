import { Cloud, Sparkles } from "lucide-react";

type Props = {
  variant?: "full" | "compact";
  theme?: "dark" | "light";
};

export function AwsBadge({ variant = "full", theme = "dark" }: Props) {
  const dark = theme === "dark";
  const border = dark ? "border-white/10" : "border-slate-900/10";
  const subText = dark ? "text-slate-warm" : "text-slate-ink";
  const title = dark ? "text-white" : "text-slate-900";
  const bg = dark ? "bg-white/[0.03]" : "bg-white";

  if (variant === "compact") {
    return (
      <div className={`inline-flex items-center gap-3 rounded-lg border ${border} ${bg} px-3 py-2`}>
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#FF9900]/15 text-[#FF9900]">
          <Cloud className="h-4 w-4" />
        </div>
        <div className="leading-tight">
          <div className={`text-[11px] font-semibold uppercase tracking-wider ${title}`}>
            AWS Partner
          </div>
          <div className={`text-[10px] ${subText}`}>Generative AI Competency</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-stretch gap-3">
      <div className={`flex items-center gap-3 rounded-xl border ${border} ${bg} px-4 py-3`}>
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#FF9900]/15 text-[#FF9900]">
          <Cloud className="h-5 w-5" />
        </div>
        <div>
          <div className={`text-xs font-semibold uppercase tracking-wider ${title}`}>
            AWS Partner Network
          </div>
          <div className={`text-xs ${subText}`}>Advanced Tier Services Partner</div>
        </div>
      </div>
      <div className={`flex items-center gap-3 rounded-xl border ${border} ${bg} px-4 py-3`}>
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-indigo/15 text-indigo-muted">
          <Sparkles className="h-5 w-5" />
        </div>
        <div>
          <div className={`text-xs font-semibold uppercase tracking-wider ${title}`}>
            Generative AI Competency
          </div>
          <div className={`text-xs ${subText}`}>Validated by AWS</div>
        </div>
      </div>
    </div>
  );
}
