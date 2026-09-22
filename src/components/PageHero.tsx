import { Container } from "@/components/Container";

export function PageHero({
  kicker,
  title,
  lead,
}: {
  kicker: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="border-b border-blue/10 bg-ice">
      <Container className="py-14 sm:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue">
          {kicker}
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl leading-[1.08] text-ink sm:text-5xl">
          {title}
        </h1>
        {lead ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {lead}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
