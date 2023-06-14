import { Inter, Fjalla_One } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import "tailwindcss/tailwind.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "hellob.art",
    template: "%s | hellob.art",
  },
  description: "a simple portfolio made by bart van der braak",
  metadataBase: new URL("https://hellob.art"),
  openGraph: {
    title: "hellob.art",
    description: "a simple portfolio made by bart van der braak",
    url: "https://hellob.art",
    siteName: "hellob.art",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "hellob.art",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fjallaOne = Fjalla_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fjalla-one",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html
        lang="en"
        suppressHydrationWarning
        className={[inter.variable, fjallaOne.variable].join(" ")}
      >
        <head />
        <body className="min-h-screen antialiased">
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
