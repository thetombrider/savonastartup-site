import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { links, memberBenefits } from "@/lib/site";

export const metadata: Metadata = {
  title: "Diventa Socio!",
  description:
    "Entra in Savona Startup APS: networking, formazione, eventi e partecipazione alla governance. Quota associativa 10 euro all'anno.",
  alternates: { canonical: "/vantaggi-socio" },
};

export default function DiventaSocioPage() {
  return (
    <>
      <PageHero
        kicker="Community"
        title="Diventa Socio!"
        lead="Entrare a far parte di Savona Startup APS significa diventare protagonisti del cambiamento economico e sociale del territorio savonese. L'associazione agisce come un catalizzatore di innovazione."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="text-3xl text-ink">I vantaggi per i soci</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Associandoti, accedi a un ecosistema pensato per supportare la tua crescita
            professionale e personale.
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {memberBenefits.map((benefit) => (
              <li key={benefit.title} className="min-w-0 rounded-3xl bg-ice p-6">
                <h3 className="text-xl text-ink">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{benefit.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-white pb-16 sm:pb-24">
        <Container className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="min-w-0 rounded-[2rem] border border-blue/10 p-6 sm:p-10">
            <h2 className="text-3xl text-ink">Perché abbiamo bisogno di te</h2>
            <p className="mt-4 leading-relaxed text-muted">
              La nostra missione è promuovere la cultura dell&apos;innovazione e colmare il
              divario di competenze digitali nel territorio di Savona e provincia. Associandoti,
              contribuisci a:
            </p>
            <ul className="mt-6 space-y-3">
              <li className="rounded-2xl bg-ice px-4 py-3 text-sm leading-relaxed text-ink">
                Diffondere la cultura d&apos;impresa e le conoscenze necessarie alla creazione di
                nuove attività innovative.
              </li>
              <li className="rounded-2xl bg-ice px-4 py-3 text-sm leading-relaxed text-ink">
                Promuovere l&apos;innovazione e lo sviluppo economico territoriale.
              </li>
            </ul>
            <h3 className="mt-10 text-2xl text-ink">Come associarsi</h3>
            <p className="mt-3 leading-relaxed text-muted">
              L&apos;associazione è aperta alle persone fisiche e alle associazioni di promozione
              sociale che condividono i nostri obiettivi e principi statutari. La procedura è
              semplice: compila il form e versa la quota. Ogni richiesta viene valutata per
              costruire un gruppo coeso, pronto a dare il massimo per lo sviluppo del territorio.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Puoi scriverci a{" "}
              <a className="break-all font-bold text-blue underline underline-offset-2" href={`mailto:${links.email}`}>
                {links.email}
              </a>{" "}
              o{" "}
              <a className="break-all font-bold text-blue underline underline-offset-2" href={`mailto:${links.emailAlt}`}>
                {links.emailAlt}
              </a>
              .
            </p>
          </div>

          <aside className="h-fit min-w-0 rounded-[2rem] bg-blue p-6 text-center text-white sm:p-8 lg:sticky lg:top-36 lg:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-ice">Quota associativa</p>
            <p className="mt-3 text-5xl text-gold">10€</p>
            <p className="mt-1 text-sm text-ice">all&apos;anno, stabilita dall&apos;Assemblea</p>
            <p className="mt-6 text-lg font-bold leading-snug text-balance">
              Sii il cambiamento che vuoi vedere a Savona.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ice">
              Diventa socio di Savona Startup APS e aiutaci a trasformare il territorio in un polo
              per l&apos;imprenditorialità e l&apos;innovazione.
            </p>
            <div className="mt-6 flex justify-center lg:justify-start">
              <ButtonLink href={links.join} external variant="gold" className="w-full max-w-xs">
                Diventa Socio!
              </ButtonLink>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
