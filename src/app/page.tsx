import Welcome from "@/components/Welcome";
import { getAppUserSession } from "@frontegg/nextjs/app";
import { redirect } from "next/navigation";

export default async function Home() {
  const userSession = await getAppUserSession();

  if (userSession) {
    redirect("/account");
  }
  return (
    <main>
      <Welcome />
    </main>
  );
}
