import Link from "next/link";
import { ArrowUpRight } from "@/components/Icons";

const variants = {
  gold: "bg-gold text-ink hover:bg-gold-dark",
  blue: "bg-blue text-white hover:bg-blue-dark",
  outline: "bg-white text-blue ring-1 ring-inset ring-blue/20 hover:bg-ice",
  white: "bg-white text-blue hover:bg-ice",
} as const;

type Variant = keyof typeof variants;

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "gold",
  external = false,
  className = "",
}: Props) {
  const classes = `inline-flex max-w-full min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-center text-sm font-bold transition-colors ${variants[variant]} ${className}`;

  if (external || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
        {external ? <ArrowUpRight /> : null}
        {external ? <span className="sr-only"> (si apre in una nuova scheda)</span> : null}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
