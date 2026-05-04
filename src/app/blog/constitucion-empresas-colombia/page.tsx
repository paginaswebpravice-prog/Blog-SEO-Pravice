import { Metadata } from "next";
import ConstitucionEmpresasContent from "./ConstitucionEmpresasContent";

export const metadata: Metadata = {
  title: "Constitución de empresas en Colombia paso a paso | Guía completa",
  description:
    "Aprenda cómo constituir una empresa en Colombia. Conozca tipos de sociedad, requisitos, costos y proceso legal en Bogotá y todo el país.",
  keywords: [
    "constitución de empresas Colombia",
    "crear empresa Colombia",
    "tipos de empresas Colombia",
    "sociedad SAS Colombia",
    "requisitos crear empresa Colombia",
    "crear empresa en Bogotá",
  ],
  alternates: {
    canonical:
      "https://pravice-abogadoslaboralistas.vercel.app/blog/constitucion-empresas-colombia",
  },
  openGraph: {
    title: "Constitución de empresas en Colombia paso a paso",
    description:
      "Guía completa sobre cómo crear una empresa en Colombia, requisitos, costos y pasos legales.",
    url: "https://pravice-abogadoslaboralistas.vercel.app/blog/constitucion-empresas-colombia",
    siteName: "Abogados Laborales Colombia",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  return <ConstitucionEmpresasContent />;
}
