import { Metadata } from "next";
import AbogadosCorporativosBogotaContent from "./AbogadosCorporativosBogotaContent";

export const metadata: Metadata = {
  title: "Abogados corporativos en Bogotá: funciones y beneficios",
  description:
    "Descubre qué hacen los abogados corporativos en Bogotá, sus funciones y por qué son clave para el crecimiento y protección de las empresas en Colombia.",
  keywords: [
    "abogados corporativos Bogotá",
    "abogado empresarial Colombia",
    "asesoría jurídica empresas Bogotá",
    "derecho corporativo Colombia",
    "abogados para empresas Bogotá",
  ],

  authors: [{ name: "PRAVICE Abogados Laboralistas" }],
  creator: "PRAVICE Abogados Laboralistas",
  publisher: "PRAVICE Abogados Laboralistas",

  metadataBase: new URL("https://guialegalcolombia.vercel.app/"),

  alternates: {
    canonical:
      "https://guialegalcolombia.vercel.app/blog/abogados-corporativos-bogota",
  },

  openGraph: {
    title: "Abogados corporativos en Bogotá: funciones y beneficios",
    description:
      "Conoce por qué tu empresa necesita abogados corporativos en Bogotá y cómo pueden ayudarte.",
    url: "/blog/abogados-corporativos-bogota",
    siteName: "PRAVICE Abogados",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "/og/abogados-corporativos-bogota.jpg",
        width: 1200,
        height: 630,
        alt: "Abogados corporativos en Bogotá",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Abogados corporativos en Bogotá: funciones y beneficios",
    description: "Todo sobre asesoría jurídica empresarial en Colombia.",
    images: ["/og/abogados-corporativos-bogota.jpg"],
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

  category: "Empresas",
};

export default function Page() {
  return <AbogadosCorporativosBogotaContent />;
}
