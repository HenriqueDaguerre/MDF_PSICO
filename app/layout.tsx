import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { GrainOverlay } from "@/components/visuals/GrainOverlay";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { CRP, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants";
import "./globals.css";

// Fontes oficiais da marca (kit de identidade visual): Cailyne para
// títulos/wordmark, Montserrat (variável) para o corpo do texto.
const cailyne = localFont({
  src: "../fonts/Cailyne.ttf",
  variable: "--font-cailyne",
  display: "swap",
});

const montserrat = localFont({
  src: "../fonts/Montserrat-Variable.ttf",
  variable: "--font-montserrat",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "psicóloga Porto Alegre",
    "psicoterapia",
    "terapia individual",
    "ansiedade",
    "depressão",
    "luto",
    "autoconhecimento",
    "Mônica Daguerre",
  ],
  authors: [{ name: "Mônica Daguerre" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#fffcec",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mônica Daguerre",
  jobTitle: "Psicóloga",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  worksFor: {
    "@type": "MedicalOrganization",
    name: "Clínica de Psicologia da Lomba do Pinheiro",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Porto Alegre",
      addressRegion: "RS",
      addressCountry: "BR",
    },
  },
  hasCredential: CRP,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cailyne.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GrainOverlay />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
