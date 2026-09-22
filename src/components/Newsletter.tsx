import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { links } from "@/lib/site";

export function Newsletter() {
  return (
    <section id="newsletter" className="scroll-mt-36 bg-blue text-white">
      <Container className="flex flex-col items-center gap-6 py-14 text-center md:flex-row md:items-center md:justify-between md:py-16 md:text-left">
        <div className="min-w-0">
          <h2 className="text-3xl leading-tight text-balance sm:text-4xl">
            Vuoi rimanere aggiornato sui prossimi eventi?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ice md:max-w-xl">
            Promesso: niente spam, solo eventi e appuntamenti da non perdere.
          </p>
        </div>
        <ButtonLink href={links.newsletter} external variant="gold" className="w-full max-w-xs shrink-0 sm:w-auto">
          Iscriviti alla newsletter
        </ButtonLink>
      </Container>
    </section>
  );
}
