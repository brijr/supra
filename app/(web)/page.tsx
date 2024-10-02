import Link from "next/link";

import { Main, Section, Container } from "@/components/craft";
export default async function Index() {
  return (
    <main className="flex-1 flex flex-col gap-6 px-4">
      <h1>Welcome to the web page</h1>
      <Link href="/admin">Go to admin</Link>
    </main>
  );
}
