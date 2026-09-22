type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  width: 24,
  height: 24,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function ArrowUpRight({ className = "size-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

export function ChevronDown({ className = "size-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function MenuIcon({ className = "size-6" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className = "size-6" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 6 18 18" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

export function InstagramIcon({ className = "size-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedInIcon({ className = "size-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M8 11v6" />
      <path d="M8 8h.01" />
      <path d="M12 17v-4.2a2 2 0 0 1 4 0V17" />
      <path d="M12 13.5V17" />
    </svg>
  );
}

export function CommunityIcon({ className = "size-7" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="9" cy="9" r="3" />
      <circle cx="16" cy="10" r="2.4" />
      <path d="M4.5 18.5c.6-2.4 2.5-3.8 4.5-3.8s3.9 1.4 4.5 3.8" />
      <path d="M14 14.8c1.3-.3 2.6.1 3.5 1.1 1 .9 1.5 2.1 1.7 2.6" />
    </svg>
  );
}

export function NetworkIcon({ className = "size-7" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="6" cy="7" r="2.2" />
      <circle cx="17.5" cy="6.5" r="2.2" />
      <circle cx="12" cy="17" r="2.2" />
      <path d="M8 8.2 10.6 15" />
      <path d="m15.6 8.2-2.2 6.6" />
      <path d="M8.2 7h7" />
    </svg>
  );
}

export function ConferenceIcon({ className = "size-7" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 4v8" />
      <rect x="9.2" y="3" width="5.6" height="8" rx="2.8" />
      <path d="M8 11a4 4 0 0 0 8 0" />
      <path d="M12 15v3" />
      <path d="M8.5 20h7" />
    </svg>
  );
}

export function WorkshopIcon({ className = "size-7" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 18.5 14.5 8" />
      <path d="m13 6.5 2.2-2.2a1.8 1.8 0 0 1 2.5 2.5L15.5 9" />
      <path d="m8.5 13.5-2 2" />
      <path d="M14 19H5" />
    </svg>
  );
}
