type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "dark" | "light";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "dark",
}: Props) {
  const isDark = theme === "dark";
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}
    >
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2
        className={`heading-display mt-3 text-3xl leading-tight sm:text-4xl md:text-[44px] ${
          isDark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base md:text-lg ${
            isDark ? "text-slate-mist" : "text-slate-ink"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
