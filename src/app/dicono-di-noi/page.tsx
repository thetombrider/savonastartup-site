import type { Metadata } from "next";
import { ArrowUpRight } from "@/components/Icons";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { pressArticles, pressQuotes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dicono di noi",
  description:
    "Rassegna stampa di Savona Startup APS: articoli de La Stampa, IVG, Savonanews, La Nuova Savona e altre testate sulla community, lo Startup Weekend e il coworking di via Paleocapa.",
  alternates: { canonical: "/dicono-di-noi" },
};

const dateFormatter = new Intl.DateTimeFormat("it-IT", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

function formatDate(iso: string) {
  return dateFormatter.format(new Date(`${iso}T12:00:00`));
}

const articlesByYear = pressArticles.reduce<Record<string, typeof pressArticles>>(
  (groups, article) => {
    const year = article.date.slice(0, 4);
    groups[year] ??= [];
    groups[year].push(article);
    return groups;
  },
  {},
);

const years = Object.keys(articlesByYear).sort((a, b) => Number(b) - Number(a));

export default function DiconoDiNoiPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Rassegna stampa Savona Startup",
    itemListElement: pressArticles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: article.href,
      name: article.title,
    })),
  };

  return (
    <>
      <PageHero
        kicker="Chi Siamo"
        title="Dicono di noi"
        lead="Dalla nascita dell'associazione allo Startup Weekend, da Savona Hack al coworking di via Paleocapa: ciò che hanno scritto di noi La Stampa, IVG, Savonanews e le altre testate del territorio."
      />

      <section className="border-b border-blue/10 bg-white">
        <Container className="py-12 sm:py-16">
          <ul className="grid gap-4 lg:grid-cols-3">
            {pressQuotes.map((item) => (
              <li
                key={item.quote}
                className="flex h-full flex-col rounded-[1.6rem] bg-ice p-6"
              >
                <p className="text-lg font-bold leading-snug text-ink">
                  «{item.quote}»
                </p>
                <p className="mt-4 text-sm font-bold text-blue">{item.attribution}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-muted">
                  {item.source}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <p className="text-sm leading-relaxed text-muted">
            {pressArticles.length} articoli di stampa, dal più recente. Ogni scheda apre
            l&apos;articolo originale sulla testata.
          </p>

          {years.map((year) => (
            <div key={year} className="mt-12 first:mt-8">
              <h2 className="text-3xl text-ink">{year}</h2>
              <ul className="mt-6 grid gap-4">
                {articlesByYear[year].map((article) => (
                  <li key={article.href}>
                    <a
                      href={article.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group grid gap-3 rounded-[1.6rem] border border-blue/10 p-5 transition-shadow hover:border-blue/20 hover:shadow-[0_24px_50px_-30px_rgba(0,97,168,0.7)] sm:grid-cols-[8.5rem_1fr_auto] sm:items-start sm:gap-8 sm:p-6"
                    >
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue">
                          {article.outlet}
                        </p>
                        <p className="mt-1 text-sm text-muted">{formatDate(article.date)}</p>
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-xl leading-snug text-ink group-hover:text-blue">
                          {article.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {article.summary}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1 text-sm font-bold text-blue sm:pt-1">
                        Leggi
                        <ArrowUpRight className="size-4" />
                        <span className="sr-only"> (si apre in una nuova scheda)</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Container>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
    </>
  );
}
