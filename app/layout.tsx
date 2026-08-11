import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://alvaro24barragan.github.io/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Álvaro Barragán Codesal | AI & Data Portfolio",
  description:
    "Personal portfolio — AI & Data experience, projects, education and continuous learning.",
  applicationName: "Álvaro Barragán Codesal | AI & Data Portfolio",
  authors: [{ name: "Álvaro Barragán Codesal", url: siteUrl }],
  creator: "Álvaro Barragán Codesal",
  publisher: "Álvaro Barragán Codesal",
  category: "technology",
  keywords: [
    "Álvaro Barragán Codesal",
    "AI Consultant",
    "Data Consultant",
    "Machine Learning",
    "Generative AI",
    "LLMs",
    "RAG",
    "NLP",
    "Python",
    "MLOps",
    "Madrid",
  ],
  alternates: { canonical: siteUrl },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Álvaro Barragán Codesal | AI & Data Portfolio",
    description:
      "Personal portfolio — AI & Data experience, projects, education and continuous learning.",
    url: siteUrl,
    siteName: "Álvaro Barragán Codesal",
    images: [{ url: "/og.png", width: 1792, height: 896 }],
    locale: "en_US",
    alternateLocale: ["es_ES", "de_DE"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Álvaro Barragán Codesal | AI & Data Portfolio",
    description: "AI & Data portfolio: Python, Machine Learning, LLMs and RAG.",
    images: ["/og.png"],
  },
};

const structuredProfile = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Álvaro Barragán Codesal",
  url: siteUrl,
  jobTitle: "Data & AI Consultant",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Madrid",
    addressCountry: "ES",
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Universidad de Alcalá" },
    { "@type": "CollegeOrUniversity", name: "Universidad Alfonso X El Sabio" },
  ],
  sameAs: [
    "https://github.com/alvaro24barragan",
    "https://linkedin.com/in/barragan-alvaro",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Natural Language Processing",
    "Large Language Models",
    "Retrieval-Augmented Generation",
    "Data Engineering",
    "Python",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredProfile) }}
        />
        {children}
      </body>
    </html>
  );
}
