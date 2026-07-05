import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NAV_ITEMS, FOOTER } from "@/content/site";
import { CRP_PLACEHOLDER, WHATSAPP_LINK } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-canvas-soft">
      <Container className="flex flex-col gap-10 py-16 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <div className="flex items-center gap-2.5 text-ink">
            <Logo className="text-olive-deep" />
            <span className="font-display text-lg">Mônica Daguerre</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {FOOTER.signature}
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.14em] text-muted">
            {CRP_PLACEHOLDER}
          </p>
        </div>

        <nav className="flex flex-col gap-3 text-sm">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col items-start gap-4 text-sm">
          <Button asChild size="md" variant="primary">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Agendar uma conversa
            </a>
          </Button>
          <span className="text-muted">Porto Alegre, RS</span>
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-border py-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
        <span>© {year} Mônica Daguerre. Todos os direitos reservados.</span>
        <span>Atendimento psicológico ético e humanizado.</span>
      </Container>
    </footer>
  );
}
