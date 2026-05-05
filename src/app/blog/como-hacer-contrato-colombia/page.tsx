import { Metadata } from "next";
import ComoHacerContratoColombiaContent from "./ComoHacerContratoColombiaContent";

export const metadata: Metadata = {
  title: "Cómo hacer un contrato en Colombia paso a paso",
  description:
    "Aprende cómo hacer un contrato en Colombia, sus elementos legales, tipos y recomendaciones para redactarlo correctamente.",
  keywords: [
    "cómo hacer un contrato Colombia",
    "redactar contrato Colombia",
    "tipos de contratos Colombia",
    "contrato legal Colombia ejemplo",
    "contratos comerciales Colombia",
  ],

  authors: [{ name: "PRAVICE Abogados Laboralistas" }],
  creator: "PRAVICE Abogados Laboralistas",
  publisher: "PRAVICE Abogados Laboralistas",

  metadataBase: new URL("https://guialegalcolombia.vercel.app"),

  alternates: {
    canonical: "/blog/como-hacer-contrato-colombia",
  },

  openGraph: {
    title: "Cómo hacer un contrato en Colombia paso a paso",
    description:
      "Guía completa para redactar contratos legales en Colombia correctamente.",
    url: "/blog/como-hacer-contrato-colombia",
    siteName: "Guía Legal Colombia",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "/og/como-hacer-contrato-colombia.jpg",
        width: 1200,
        height: 630,
        alt: "Cómo hacer un contrato en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cómo hacer un contrato en Colombia paso a paso",
    description:
      "Aprende a redactar contratos legales en Colombia de forma correcta.",
    images: ["/og/como-hacer-contrato-colombia.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Legal",
};

export default function Page() {
  return <ComoHacerContratoColombiaContent />;
}
