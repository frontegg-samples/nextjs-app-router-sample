import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { FronteggAppProvider } from "@frontegg/nextjs/app";
import Header from "@/components/Header";
import SignupBanner from "@/components/SignupBanner";
import AppLoader from "@/components/AppLoader";

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
  hostedAppId: "da398ff8-c069-428e-974a-afcded8c0c04",
  embeddedAppId: "ad6012f5-905f-430e-ad0d-64e85f0ba6c7",
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
        <FronteggAppProvider authOptions={authOptions} customLoader={true}>
          <Header />
          {children}
          <SignupBanner
            isDefaultCredentials={
              process.env.FRONTEGG_BASE_URL ===
                DEFAULT_SANDBOX_CONTEXT.baseUrl &&
              (process.env.FRONTEGG_APP_ID ===
                DEFAULT_SANDBOX_CONTEXT.hostedAppId ||
                process.env.FRONTEGG_APP_ID ===
                  DEFAULT_SANDBOX_CONTEXT.embeddedAppId)
            }
          />
          <AppLoader />
        </FronteggAppProvider>
      </body>
    </html>
  );
}
