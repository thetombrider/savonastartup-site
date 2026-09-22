import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { links } from "@/lib/site";

export function Newsletter() {
  return (
    <section id="newsletter" className="scroll-mt-36 bg-blue text-white">
      <Container className="grid items-center gap-8 py-14 md:grid-cols-[1.4fr_auto] md:py-16">
        <div>
          <h2 className="text-3xl leading-tight sm:text-4xl">
            Vuoi rimanere aggiornato sui prossimi eventi?
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-ice">
            Promesso: niente spam, solo eventi e appuntamenti da non perdere.
          </p>
        </div>
        <ButtonLink href={links.newsletter} external variant="gold">
          Iscriviti alla newsletter
        </ButtonLink>
      </Container>
    </section>
  );
}
