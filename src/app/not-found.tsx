import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="py-24">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue">404</p>
      <h1 className="mt-3 text-4xl text-ink">Pagina non trovata</h1>
      <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted">
        Il contenuto che cerchi non è qui. Torna alla home per scoprire community, eventi e come
        entrare in Savona Startup.
      </p>
      <div className="mt-8">
        <ButtonLink href="/" variant="blue">
          Torna alla home
        </ButtonLink>
      </div>
    </Container>
  );
}
