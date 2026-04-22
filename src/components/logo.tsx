import * as React from "react";

export function Logo({ className = "h-6 w-auto" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect x="1" y="1" width="26" height="26" rx="6" stroke="#4F46E5" strokeWidth="1.5" />
        <path
          d="M9 10.5L6 14L9 17.5"
          stroke="#fff"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 10.5L22 14L19 17.5"
          stroke="#4F46E5"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 8L12 20"
          stroke="#fff"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-display text-[17px] font-semibold tracking-tight text-white">
        CoderPush
      </span>
    </span>
  );
}
