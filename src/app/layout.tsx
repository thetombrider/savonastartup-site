import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { defaultDescription, links, siteName, siteUrl } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} - Il punto di riferimento dell'ecosistema startup a Savona`,
    template: `%s · ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName,
    url: siteUrl,
    title: `${siteName} - Il punto di riferimento dell'ecosistema startup a Savona`,
    description: defaultDescription,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Savona Startup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: defaultDescription,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0061A8",
  colorScheme: "light",
};

const organization = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Savona Startup APS",
  url: siteUrl,
  email: links.email,
  taxID: "92120520090",
  vatID: "01921960090",
  foundingDate: "2024-06",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Savona",
    addressCountry: "IT",
  },
  sameAs: [links.instagram, links.linkedin],
  logo: `${siteUrl}/brand/logo.png`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="it" className={`${montserrat.variable} h-full`}>
      <body className={`${montserrat.className} flex min-h-full flex-col antialiased`}>
        <a
          href="#contenuto"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:font-bold focus:text-ink"
        >
          Vai al contenuto
        </a>
        <Header />
        <main id="contenuto" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
      </body>
    </html>
  );
}
