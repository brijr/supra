import Link from "next/link";

import { Main, Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

export default async function Index() {
  return (
    <Main>
      <Section>
        <Container>
          <h1>
            <Balancer>
              Welcome to the{" "}
              <a
                className="not-prose rounded-md font-normal px-2 bg-yellow-300 hover:bg-yellow-200"
                href="https://github.com/brijr/supra"
              >
                brijr/supra
              </a>
              , a Next.js and Supabase Starter Kit
            </Balancer>
          </h1>
          <div className="flex gap-2">
            <Link href="/admin">Admin</Link>
          </div>
        </Container>
      </Section>
    </Main>
  );
}
