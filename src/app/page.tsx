import Image from "next/image";
import {
  CommunityIcon,
  ConferenceIcon,
  NetworkIcon,
  WorkshopIcon,
} from "@/components/Icons";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { Newsletter } from "@/components/Newsletter";
import { links, partners, pillars, recurringEvents } from "@/lib/site";

const pillarIcons = [CommunityIcon, NetworkIcon, ConferenceIcon, WorkshopIcon];

export default function HomePage() {
  return (
    <>
      <section className="overflow-x-clip">
        <Container className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue">
              Associazione di promozione sociale
            </p>
            <h1 className="mt-4 text-4xl leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
              Il punto di riferimento dell&apos;ecosistema startup{" "}
              <span className="text-blue">a Savona</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              Una community di innovatori e imprenditori per condividere idee,
              esperienze e risorse. Entra anche tu nel mondo startup.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={links.join} external>
                Entra in Savona Startup
              </ButtonLink>
              <ButtonLink href="#eventi" variant="outline">
                Prossimi eventi
              </ButtonLink>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-3 border-t border-blue/10 pt-6">
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-blue">Dal</dt>
                <dd className="mt-1 text-lg font-bold text-ink">2024</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-blue">Soci</dt>
                <dd className="mt-1 text-lg font-bold text-ink">100+</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-blue">Forma</dt>
                <dd className="mt-1 text-lg font-bold text-ink">APS</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -bottom-4 -left-3 h-28 w-28 rounded-3xl bg-gold" aria-hidden />
            <div className="absolute -right-3 -top-4 h-20 w-20 rounded-full bg-ice" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_30px_70px_-36px_rgba(0,97,168,0.65)] sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/events/work-by-the-sea.jpg"
                alt="Persone al lavoro con il laptop su uno scoglio della costa ligure"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <p className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-ink">
                Savona
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ice" aria-labelledby="cosa-facciamo">
        <Container className="py-16 sm:py-24">
          <h2 id="cosa-facciamo" className="sr-only">
            Cosa facciamo
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, index) => {
              const Icon = pillarIcons[index];
              return (
                <li
                  key={pillar.title}
                  className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-[0_18px_40px_-32px_rgba(0,97,168,0.8)]"
                >
                  <span className="pointer-events-none absolute right-4 top-3 text-5xl font-bold text-gold/40" aria-hidden>
                    0{index + 1}
                  </span>
                  <Icon className="size-8 text-blue" />
                  <h3 className="mt-5 text-xl text-ink">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.text}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <section id="eventi" className="scroll-mt-36">
        <Container className="py-16 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue">Agenda</p>
            <h2 className="mt-3 text-3xl text-ink sm:text-4xl">Prossimi eventi</h2>
          </div>

          <article className="mt-10 overflow-hidden rounded-[2rem] bg-ice lg:grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-72">
              <Image
                src="/images/events/work-by-the-sea.jpg"
                alt="Scorcio di mare e scogli, location di Work by the sea"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue">17 – 18 aprile</p>
              <h3 className="mt-2 text-3xl text-ink">Work by the sea</h3>
              <p className="mt-3 text-lg font-bold leading-snug text-ink">
                Due giorni per lavorare, connettersi ed entrare nell&apos;ecosistema locale.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                In occasione dei nostri AperiFounder, apriamo le porte a chi vuole capire
                dall&apos;interno cosa significa costruire un ecosistema startup in un territorio
                come Savona — tra lavoro, natura e connessioni autentiche.
              </p>
              <ol className="mt-6 space-y-4">
                <li className="rounded-2xl bg-white p-4">
                  <h4 className="text-base text-blue">Venerdì 17</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    Porta il tuo laptop e lavora a due passi dal mare, insieme alla nostra
                    community. Un momento informale per conoscere founder, professionisti e
                    persone che stanno costruendo nuovi progetti.
                  </p>
                </li>
                <li className="rounded-2xl bg-white p-4">
                  <h4 className="text-base text-blue">Sabato 18</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    La giornata inizia all&apos;aria aperta — una corsa, un trekking o una
                    camminata tra mare e natura. Il modo migliore per conoscersi davvero. Si
                    conclude con il nostro AperiFounder: l&apos;evento mensile dedicato a startup,
                    founder e innovatori.
                  </p>
                </li>
              </ol>
              <p className="mt-5 text-sm font-bold text-ink">
                Posti limitati. Pernottamento offerto. Porta solo curiosità, voglia di conoscere
                — e magari un&apos;idea su cui stai lavorando.
              </p>
              <div className="mt-6">
                <ButtonLink href={links.applyEvent} external>
                  Candidati ora
                </ButtonLink>
              </div>
            </div>
          </article>

          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {recurringEvents.map((event) => (
              <li key={event.title}>
                <a
                  href={event.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] bg-white ring-1 ring-inset ring-blue/10 transition-shadow hover:shadow-[0_24px_50px_-30px_rgba(0,97,168,0.7)]"
                >
                  <div className="relative aspect-square bg-ice">
                    <Image
                      src={event.image}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 30vw, 100vw"
                      className="object-contain p-6"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue">
                      {event.cadence}
                    </p>
                    <h3 className="mt-2 text-xl text-ink">{event.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{event.text}</p>
                    <span className="mt-4 text-sm font-bold text-blue group-hover:underline">
                      {event.cta}
                      <span className="sr-only"> (si apre in una nuova scheda)</span>
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Newsletter />

      <section id="partner" className="scroll-mt-36 bg-ice">
        <Container className="py-16 sm:py-20">
          <h2 className="text-3xl text-ink sm:text-4xl">I nostri Partner</h2>
          <ul className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {partners.map((partner) => (
              <li
                key={partner.name}
                className="flex h-32 items-center justify-center rounded-3xl bg-white px-5 ring-1 ring-inset ring-blue/10"
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={280}
                  height={120}
                  className="max-h-16 w-auto object-contain"
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
