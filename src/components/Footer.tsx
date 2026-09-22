import Image from "next/image";
import Link from "next/link";
import { InstagramIcon, LinkedInIcon } from "@/components/Icons";
import { links, navigation } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-ink text-white">
      <div className="mx-auto grid w-full min-w-0 max-w-6xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="inline-flex rounded-2xl bg-white px-4 py-3">
            <Image
              src="/brand/logo.png"
              alt="Savona Startup"
              width={186}
              height={96}
              className="h-12 w-auto"
            />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ice/90">
            Il punto di riferimento dell&apos;ecosistema startup a Savona.
            Associazione di promozione sociale.
          </p>
          <div className="mt-5 flex gap-2">
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram di Savona Startup (si apre in una nuova scheda)"
              className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <InstagramIcon />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn di Savona Startup (si apre in una nuova scheda)"
              className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm tracking-normal text-gold">Navigazione</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navigation.map((item) => (
              <li key={item.label}>
                {item.external ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                    {item.label}
                    <span className="sr-only"> (si apre in una nuova scheda)</span>
                  </a>
                ) : (
                  <Link href={item.href} className="hover:text-gold">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link href="/vision" className="hover:text-gold">
                Vision & Mission
              </Link>
            </li>
            <li>
              <Link href="/organigramma" className="hover:text-gold">
                Organigramma
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm tracking-normal text-gold">Contatti</h2>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ice/90">
            <li>Savona Startup APS</li>
            <li>C.F. 92120520090</li>
            <li>P.IVA 01921960090</li>
            <li>
              <a className="font-bold text-white hover:text-gold" href={`mailto:${links.email}`}>
                {links.email}
              </a>
            </li>
          </ul>
          <ul className="mt-5 space-y-2 text-sm">
            <li>
              <a href={links.privacy} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                Privacy Policy
                <span className="sr-only"> (si apre in una nuova scheda)</span>
              </a>
            </li>
            <li>
              <a href={links.cookies} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                Cookie Policy
                <span className="sr-only"> (si apre in una nuova scheda)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto w-full max-w-6xl break-words px-5 py-4 text-xs leading-relaxed text-white/70 sm:px-6">
          Savona Startup APS · C.F. 92120520090 · P.IVA 01921960090 · {links.email}
        </p>
      </div>
    </footer>
  );
}
