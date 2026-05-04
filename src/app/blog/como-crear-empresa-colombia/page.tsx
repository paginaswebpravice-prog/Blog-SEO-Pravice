import { Metadata } from "next";
import CrearEmpresaContent from "./CrearEmpresaContent";

export const metadata: Metadata = {
  title: "Cómo crear una empresa en Colombia: guía completa paso a paso",
  description:
    "Aprenda cómo crear una empresa en Colombia. Conozca requisitos, costos, tipos de sociedad y proceso legal completo en Bogotá y todo el país.",
  keywords: [
    "crear empresa Colombia",
    "cómo crear empresa Colombia",
    "requisitos crear empresa Colombia",
    "crear empresa en Bogotá",
    "sociedad SAS Colombia",
    "registro Cámara de Comercio Colombia",
  ],
  alternates: {
    canonical:
      "https://pravice-abogadoslaboralistas.vercel.app/blog/crear-empresa-colombia",
  },
  openGraph: {
    title: "Cómo crear una empresa en Colombia: requisitos y pasos",
    description:
      "Guía completa para crear empresa en Colombia, desde la idea hasta la formalización legal.",
    url: "https://pravice-abogadoslaboralistas.vercel.app/blog/crear-empresa-colombia",
    siteName: "Abogados Laborales Colombia",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  return <CrearEmpresaContent />;
}
