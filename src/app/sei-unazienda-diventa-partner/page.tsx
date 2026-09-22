import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { links, partnerOpportunities, partnerWays } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sei un'azienda? Diventa Partner!",
  description:
    "Supporta Savona Startup APS con sponsorizzazioni, mentorship, logistica o promozione. Costruiamo una partnership su misura per la tua azienda.",
  alternates: { canonical: "/sei-unazienda-diventa-partner" },
};

export default function PartnerPage() {
  return (
    <>
      <PageHero
        kicker="Partnership"
        title="Sei un'azienda? Diventa Partner!"
        lead="Savona Startup APS cerca realtà locali e nazionali che vogliano supportare una community dedicata all'innovazione e all'imprenditorialità nel territorio savonese. Diventare partner significa investire nel futuro economico della provincia."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="text-3xl text-ink">Come la tua azienda può contribuire</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Ci sono diversi modi per supportare l&apos;associazione e iniziative come lo Startup
            Weekend Savona.
          </p>
          <div className="mt-8 space-y-4">
            {partnerWays.map((way, index) => (
              <article key={way.title} className="rounded-[1.8rem] bg-ice p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue">
                  0{index + 1}
                </p>
                <h3 className="mt-2 text-2xl text-ink">{way.title}</h3>
                <p className="mt-2 max-w-3xl leading-relaxed text-muted">{way.text}</p>
                {way.names.length > 0 ? (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {way.names.map((name) => (
                      <li
                        key={name}
                        className="rounded-full bg-white px-3 py-1.5 text-sm font-bold text-blue"
                      >
                        {name}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container>
          <h2 className="text-3xl text-ink">Opportunità per i partner</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {partnerOpportunities.map((item) => (
              <li key={item.title} className="rounded-3xl border border-blue/10 p-6">
                <h3 className="text-xl text-blue">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8 overflow-hidden rounded-[2rem] bg-blue px-5 py-8 text-center text-white sm:px-10 sm:py-10 lg:text-left">
            <div className="mx-auto flex w-full min-w-0 max-w-3xl flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="min-w-0">
                <h2 className="text-3xl text-balance">Diventa nostro partner</h2>
                <p className="mt-3 text-sm leading-relaxed text-ice">
                  Vuoi supportare l&apos;innovazione a Savona? Scrivici per costruire una partnership
                  su misura per la tua azienda.
                </p>
                <p className="mt-4 flex flex-col items-center gap-1 text-sm lg:items-start">
                  <a
                    className="break-all font-bold text-white underline underline-offset-2"
                    href={`mailto:${links.email}`}
                  >
                    {links.email}
                  </a>
                  <a
                    className="break-all font-bold text-white underline underline-offset-2"
                    href={`mailto:${links.emailAlt}`}
                  >
                    {links.emailAlt}
                  </a>
                </p>
              </div>
              <ButtonLink
                href={`mailto:${links.email}`}
                variant="gold"
                className="w-full max-w-xs shrink-0 lg:w-auto"
              >
                Contattaci
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
