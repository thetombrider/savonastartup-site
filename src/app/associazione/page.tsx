import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { documents, links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chi Siamo",
  description:
    "Savona Startup è un'associazione di promozione sociale costituita a giugno 2024 e registrata a Savona. Statuto, atto costitutivo e bilanci.",
  alternates: { canonical: "/associazione" },
};

export default function AssociazionePage() {
  return (
    <>
      <PageHero
        kicker="L'associazione"
        title="Chi Siamo"
        lead="Savona Startup è un'associazione di promozione sociale, costituita a giugno 2024 e registrata a Savona presso l'Agenzia delle Entrate."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-center gap-6 rounded-[2rem] bg-blue px-5 py-8 text-center text-white sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <div className="min-w-0">
              <h2 className="text-2xl text-balance">Per associarti, o semplicemente saperne di più</h2>
              <p className="mt-2 text-sm leading-relaxed text-ice">
                Compila la richiesta di adesione. Se preferisci scriverci, siamo su{" "}
                <a className="break-all font-bold text-white underline underline-offset-2" href={`mailto:${links.email}`}>
                  {links.email}
                </a>
                .
              </p>
            </div>
            <ButtonLink href={links.join} external variant="gold" className="w-full max-w-xs shrink-0 lg:w-auto">
              Diventa Socio!
            </ButtonLink>
          </div>

          <h2 className="mt-14 text-3xl text-ink">Documenti</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {documents.map((doc) => (
              <li key={doc.title} className="flex flex-col rounded-3xl border border-blue/10 p-6">
                <h3 className="text-xl text-ink">{doc.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{doc.text}</p>
                <div className="mt-5">
                  <ButtonLink href={doc.href} external variant="outline" className="w-full sm:w-auto">
                    Download
                  </ButtonLink>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
