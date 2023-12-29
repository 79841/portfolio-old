import type { Metadata } from "next";
import { Noto_Sans_KR, Ubuntu } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme/theme-provider";
import { Header } from "@/app/_components/header";
import { Footer } from "./_components/footer";
import { siteMetadata } from "@/data";

const ubuntu = Ubuntu({
  display: "swap",
  subsets: ["latin"],
  weight: "400",
});

const noto_sans_korean = Noto_Sans_KR({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: siteMetadata.title,
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: siteMetadata.locale,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={siteMetadata.language} className="scroll-smooth">
      <body className={`${ubuntu.className} ${noto_sans_korean.className}`}>
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
