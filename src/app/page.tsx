import Welcome from "@/components/Welcome";
import { getAppUserSession } from "@frontegg/nextjs/app";
import { redirect } from "next/navigation";

export default async function Home() {
  const userSession = await getAppUserSession();

  if (userSession) {
    redirect("/account");
  }

  const isHosted = process.env.FRONTEGG_HOSTED_LOGIN === "true";
  
  return (
    <main>
      <Welcome isHosted={isHosted} />
    </main>
  );
}
