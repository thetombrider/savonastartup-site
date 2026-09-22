import type { Metadata } from "next";
import Image from "next/image";
import { LinkedInIcon } from "@/components/Icons";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { board, coreTeam, type Person } from "@/lib/site";

export const metadata: Metadata = {
  title: "Organigramma",
  description:
    "Direttivo e core team di Savona Startup APS. Mandato triennale in corso fino al 15 giugno 2027. L'associazione conta più di 100 membri.",
  alternates: { canonical: "/organigramma" },
};

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function LinkedIn({ person }: { person: Person }) {
  if (!person.linkedin) return null;
  return (
    <a
      href={person.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm font-bold text-blue hover:underline"
    >
      <LinkedInIcon className="size-4" />
      LinkedIn
      <span className="sr-only"> di {person.name} (si apre in una nuova scheda)</span>
    </a>
  );
}

export default function OrganigrammaPage() {
  return (
    <>
      <PageHero
        kicker="Chi Siamo"
        title="Organigramma"
        lead="Le attività dell'associazione sono gestite da team indipendenti, coordinati dal Direttivo. Qui trovi le persone più attive e stabili: l'associazione conta più di 100 membri."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-3xl text-ink">Direttivo</h2>
            <p className="max-w-md text-sm leading-relaxed text-muted">
              Il Direttivo ha un mandato triennale. Il mandato in corso scade il 15 giugno 2027.
            </p>
          </div>
          <ul className="mt-8 grid gap-4 lg:grid-cols-3">
            {board.map((person) => (
              <li key={person.name} className="rounded-[1.8rem] bg-ice p-6">
                {person.image ? (
                  <Image
                    src={person.image}
                    alt=""
                    width={144}
                    height={144}
                    className="size-32 rounded-full object-cover ring-4 ring-white"
                  />
                ) : null}
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-blue">
                  {person.role}
                </p>
                <h3 className="mt-1 text-2xl text-ink">{person.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{person.bio}</p>
                <div className="mt-4">
                  <LinkedIn person={person} />
                </div>
              </li>
            ))}
          </ul>

          <h2 className="mt-16 text-3xl text-ink">Core team</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreTeam.map((person) => (
              <li key={person.name} className="rounded-3xl border border-blue/10 p-5">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-blue text-sm font-bold text-white"
                  >
                    {initials(person.name)}
                  </span>
                  <div>
                    <h3 className="text-lg text-ink">{person.name}</h3>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue">
                      {person.role}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">{person.bio}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
