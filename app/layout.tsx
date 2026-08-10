import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://alvaro24barragan.github.io/profile-preview-a7/"),
  title: "Álvaro Barragán Codesal | AI & Data Portfolio",
  description:
    "AI and Data professional focused on Machine Learning, LLMs, RAG systems, automation and business-oriented data solutions.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title: "Álvaro Barragán Codesal | AI & Data Portfolio",
    description:
      "Experience, projects, education and verified continuous learning in AI and Data.",
    url: "https://alvaro24barragan.github.io/profile-preview-a7/",
    siteName: "Álvaro Barragán Codesal",
    images: [{ url: "/profile-preview-a7/og.png", width: 1792, height: 896 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Álvaro Barragán Codesal | AI & Data Portfolio",
    description: "AI & Data portfolio: Python, Machine Learning, LLMs and RAG.",
    images: ["/profile-preview-a7/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
