import { profile } from "@/content/profile";
import { Container } from "@/components/ui";
import { ThemeToggle } from "@/components/ThemeToggle";

export function SiteFooter() {
  return (
    <footer className="pb-10">
      <Container>
        <div className="flex items-center justify-between gap-4 border-t border-line pt-8 text-sm text-muted">
          <p>
            {profile.name} ©{new Date().getFullYear()}
          </p>
          <ThemeToggle />
        </div>
      </Container>
    </footer>
  );
}
