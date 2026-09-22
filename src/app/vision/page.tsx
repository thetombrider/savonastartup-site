import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { timeline } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vision & Mission",
  description:
    "Savona Startup nasce per riunire le energie imprenditoriali del territorio: dalla fondazione nel 2024 allo Startup Weekend, fino al coworking di via Paleocapa.",
  alternates: { canonical: "/vision" },
};

export default function VisionPage() {
  return (
    <>
      <PageHero
        kicker="Chi Siamo"
        title="Vision & Mission"
        lead="Savona Startup nasce per riunire le migliori energie imprenditoriali del nostro territorio."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-2xl font-bold leading-snug text-ink sm:text-3xl">
              Promuoviamo innovazione e impresa unendo startupper, studenti, designer,
              professionisti e imprenditori.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Un network in cui possano nascere opportunità e collaborazioni di valore.
            </p>
          </div>

          <ol>
            {timeline.map((item) => (
              <li
                key={`${item.date}-${item.title}`}
                className="grid gap-2 border-l-2 border-blue/15 py-5 pl-6 md:grid-cols-[8.5rem_1fr] md:gap-8 md:border-l-0 md:pl-0"
              >
                <div className="relative">
                  <span className="absolute -left-[1.95rem] top-1.5 size-3 rounded-full bg-gold ring-4 ring-white md:hidden" />
                  <p className="text-sm font-bold text-blue">{item.date}</p>
                </div>
                <div className="relative md:border-l-2 md:border-blue/15 md:pl-8">
                  <span className="absolute -left-[7px] top-1.5 hidden size-3 rounded-full bg-gold ring-4 ring-white md:block" />
                  <h2 className="text-xl text-ink">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
