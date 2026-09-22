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

const facts = [
  { label: "Costituita", value: "Giugno 2024" },
  { label: "Sede", value: "Savona" },
  { label: "Forma", value: "APS" },
  { label: "Registrazione", value: "Agenzia delle Entrate" },
];

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
          <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label} className="rounded-3xl bg-ice px-5 py-5">
                <dt className="text-xs font-bold uppercase tracking-[0.14em] text-blue">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-lg font-bold text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-blue px-6 py-8 text-white sm:flex-row sm:items-center sm:px-10">
            <div>
              <h2 className="text-2xl">Per associarti, o semplicemente saperne di più</h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-ice">
                Compila la richiesta di adesione. Se preferisci scriverci, siamo su{" "}
                <a className="font-bold text-white underline underline-offset-2" href={`mailto:${links.email}`}>
                  {links.email}
                </a>
                .
              </p>
            </div>
            <ButtonLink href={links.join} external variant="gold">
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
                  <ButtonLink href={doc.href} external variant="outline">
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
