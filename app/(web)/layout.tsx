import { EnvVarWarning } from "@/components/env-var-warning";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { supra } from "@/supra.config";

import { Container } from "@/components/craft";

import HeaderAuth from "@/components/header-auth";
import Link from "next/link";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: supra.name,
  description: supra.description,
};

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

const Nav = () => {
  return (
    <nav>
      <Container className="flex justify-between items-center gap-4">
        <Link className="hover:text-muted-foreground transition-all" href={"/"}>
          {supra.name}
        </Link>
        {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
      </Container>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer>
      <Container className="flex justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {supra.name}
        </p>
        <ThemeSwitcher />
      </Container>
    </footer>
  );
};
