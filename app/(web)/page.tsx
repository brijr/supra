import Link from "next/link";

import { Main, Section, Container } from "@/components/craft";

export default async function Index() {
  return (
    <Main>
      <Section>
        <Container>
          <h1>Welcome to the web page</h1>
          <Link href="/admin">Go to admin</Link>
        </Container>
      </Section>
    </Main>
  );
}
