"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  CloseIcon,
  InstagramIcon,
  LinkedInIcon,
  MenuIcon,
} from "@/components/Icons";
import { links, navigation, type NavItem } from "@/lib/site";

function isCurrent(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function itemIsCurrent(item: NavItem, pathname: string) {
  if (isCurrent(item.href, pathname)) return true;
  return item.children?.some((child) => isCurrent(child.href, pathname)) ?? false;
}

export function Header() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const setOpen = (value: boolean) => setOpenPath(value ? pathname : null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenPath(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur ${
        scrolled ? "shadow-[0_10px_30px_-24px_rgba(12,35,64,0.7)]" : ""
      }`}
    >
      <div className="h-1 bg-gold" />
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <div className="flex h-16 items-center gap-4">
          <Link href="/" className="shrink-0">
            <Image
              src="/brand/logo.png"
              alt="Savona Startup"
              width={186}
              height={96}
              priority
              className="h-11 w-auto sm:h-12"
            />
          </Link>

          <div className="ml-auto hidden xl:block">
            <Socials />
          </div>

          <button
            type="button"
            className="ml-auto inline-flex size-11 items-center justify-center rounded-full text-ink ring-1 ring-inset ring-blue/15 xl:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen(!open)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
            <span className="sr-only">{open ? "Chiudi menu" : "Apri menu"}</span>
          </button>
        </div>

        <nav
          className="hidden items-center justify-center gap-1 border-t border-blue/10 py-1.5 xl:flex"
          aria-label="Principale"
        >
          {navigation.map((item) => (
            <DesktopItem key={item.label} item={item} pathname={pathname} />
          ))}
        </nav>
      </div>

      {open ? (
        <nav
          id="menu-mobile"
          aria-label="Principale"
          className="max-h-[calc(100vh-4.75rem)] overflow-y-auto border-t border-blue/10 bg-white xl:hidden"
        >
          <ul className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-4 sm:px-6">
            {navigation.map((item) => (
              <li key={item.label}>
                <MobileLink item={item} pathname={pathname} />
                {item.children ? (
                  <ul className="mt-1 mb-2 ml-3 border-l border-blue/15 pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          aria-current={isCurrent(child.href, pathname) ? "page" : undefined}
                          className="block rounded-xl px-3 py-2.5 text-sm font-bold text-ink hover:bg-ice hover:text-blue"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
            <li className="mt-2 flex gap-2 px-1">
              <Socials />
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

function DesktopItem({ item, pathname }: { item: NavItem; pathname: string }) {
  const active = itemIsCurrent(item, pathname);
  const join = item.href === "/vantaggi-socio";
  const className = join
    ? "ml-1 inline-flex min-h-10 items-center whitespace-nowrap rounded-full bg-gold px-3.5 text-[13px] font-bold text-ink hover:bg-gold-dark"
    : `inline-flex min-h-10 items-center gap-1 whitespace-nowrap rounded-full px-2.5 text-[13px] font-bold ${
        active ? "text-blue" : "text-ink hover:text-blue"
      }`;

  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
        {item.label}
        <ArrowUpRight className="size-3.5" />
        <span className="sr-only"> (si apre in una nuova scheda)</span>
      </a>
    );
  }

  if (item.children) {
    return (
      <div className="nav-group relative">
        <Link
          href={item.href}
          aria-current={isCurrent(item.href, pathname) ? "page" : undefined}
          className={className}
        >
          {item.label}
          <ChevronDown className="nav-chevron size-3.5" />
        </Link>
        <div className="nav-panel pointer-events-none invisible absolute left-0 top-full z-50 pt-2 opacity-0">
          <ul className="min-w-56 rounded-2xl border border-blue/10 bg-white p-2 shadow-[0_24px_50px_-28px_rgba(0,97,168,0.55)]">
            {item.children.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  aria-current={isCurrent(child.href, pathname) ? "page" : undefined}
                  className={`block rounded-xl px-3 py-2.5 text-sm font-bold hover:bg-ice ${
                    isCurrent(child.href, pathname) ? "text-blue" : "text-ink"
                  }`}
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      className={className}
    >
      {item.label}
    </Link>
  );
}

function MobileLink({ item, pathname }: { item: NavItem; pathname: string }) {
  const active = itemIsCurrent(item, pathname);
  const className = `flex min-h-11 items-center justify-between rounded-xl px-3 text-base font-bold ${
    active ? "bg-ice text-blue" : "text-ink hover:bg-ice"
  }`;

  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
        {item.label}
        <ArrowUpRight />
        <span className="sr-only"> (si apre in una nuova scheda)</span>
      </a>
    );
  }

  return (
    <Link href={item.href} aria-current={isCurrent(item.href, pathname) ? "page" : undefined} className={className}>
      {item.label}
    </Link>
  );
}

function Socials() {
  const itemClass =
    "inline-flex size-10 items-center justify-center rounded-full text-blue ring-1 ring-inset ring-blue/15 hover:bg-ice";
  return (
    <div className="flex items-center gap-2 xl:ml-1">
      <a href={links.instagram} target="_blank" rel="noopener noreferrer" className={itemClass} aria-label="Instagram di Savona Startup (si apre in una nuova scheda)">
        <InstagramIcon />
      </a>
      <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className={itemClass} aria-label="LinkedIn di Savona Startup (si apre in una nuova scheda)">
        <LinkedInIcon />
      </a>
    </div>
  );
}
