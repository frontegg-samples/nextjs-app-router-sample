import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { FronteggAppProvider } from "@frontegg/nextjs/app";
import Header from "@/components/Header";
import SignupBanner from "@/components/SignupBanner";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontegg - Next hosted login",
  description: "Frontegg - Sample app for Next hosted login",
};

const DEFAULT_SANDBOX_CONTEXT = {
  baseUrl: "https://sandbox.frontegg.com",
  clientId: "9af126b9-c35f-4e2d-a3f1-c261e22aaf4a",
  appId: "xxxx",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const authOptions = {
    keepSessionAlive: true, // Uncomment this in order to maintain the session alive
  };

  return (
    <html lang="en">
      <body className={`${manrope.className}`}>
        <FronteggAppProvider authOptions={authOptions}>
          <Header />
          {children}
          <SignupBanner
            isDefaultCredentials={
              process.env.FRONTEGG_BASE_URL ===
                DEFAULT_SANDBOX_CONTEXT.baseUrl &&
              process.env.FRONTEGG_CLIENT_ID ===
                DEFAULT_SANDBOX_CONTEXT.clientId
            }
          />
        </FronteggAppProvider>
      </body>
    </html>
  );
}
