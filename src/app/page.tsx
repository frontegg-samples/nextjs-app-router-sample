import Welcome from "@/components/Welcome";
import { getAppUserSession } from "@frontegg/nextjs/app";
import { redirect } from "next/navigation";

export default async function WelcomePage() {
  const userSession = await getAppUserSession();
  console.log('main', userSession)
  if (userSession) {
    redirect("/home");
  }

  const isHosted = process.env.FRONTEGG_HOSTED_LOGIN === "true";
  
  return (
    <main>
      <Welcome isHosted={isHosted} />
    </main>
  );
}
