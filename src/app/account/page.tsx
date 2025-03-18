import AccountInfo from "@/components/AccountInfo";
import { getAppUserSession } from "@frontegg/nextjs/app";
import { redirect } from "next/navigation";

const AccountPage = async () => {
  const userSession = await getAppUserSession();

  if (!userSession) {
    redirect("/");
  }

  return (
    <main>
      <section className="section-screen">
        <AccountInfo />
      </section>
    </main>
  );
};

export default AccountPage;
