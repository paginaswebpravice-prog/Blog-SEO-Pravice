import { Metadata } from "next";
import DerechoComercialContent from "./DerechoComercialContent";

export const metadata: Metadata = {
  title: "Derecho comercial en Colombia: guía para empresas y negocios",
  description:
    "Conozca cómo funciona el derecho comercial en Colombia, qué regula y por qué es clave para empresas, contratos y decisiones empresariales.",
  keywords: [
    "derecho comercial Colombia",
    "que es derecho comercial",
    "derecho mercantil Colombia",
    "contratos comerciales Colombia",
    "asesoria legal empresas Colombia",
    "abogados derecho comercial",
  ],
  alternates: {
    canonical:
      "https://pravice-abogadoslaboralistas.vercel.app/blog/derecho-comercial-colombia",
  },
  openGraph: {
    title: "Derecho comercial en Colombia: guía completa para empresas",
    description:
      "Aprenda cómo el derecho comercial regula empresas, contratos y relaciones comerciales en Colombia.",
    url: "https://pravice-abogadoslaboralistas.vercel.app/blog/derecho-comercial-colombia",
    siteName: "Abogados Laborales Colombia",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  return <DerechoComercialContent />;
}
