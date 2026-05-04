import { Metadata } from "next";
import AbogadosBogotaContent from "./AbogadosBogotaContent";

export const metadata: Metadata = {
  title:
    "Abogados en Bogotá: qué hacen, tipos y cómo elegir el mejor | Guía 2026",
  description:
    "Conoce qué hacen los abogados en Bogotá Colombia, sus funciones, especialidades y cómo elegir el mejor para tu caso legal.",
  keywords: [
    "abogados en Bogotá",
    "abogados Bogotá Colombia",
    "cómo elegir abogado Bogotá",
    "tipos de abogados Colombia",
    "firma de abogados Bogotá",
    "asesoría legal Bogotá",
  ],
  alternates: {
    canonical:
      "https://pravice-abogadoslaboralistas.vercel.app/blog/abogados-bogota",
  },
  openGraph: {
    title: "Abogados en Bogotá: funciones, tipos y cómo elegir el mejor",
    description:
      "Guía completa sobre abogados en Bogotá Colombia: funciones, especialidades y recomendaciones para elegir correctamente.",
    url: "https://pravice-abogadoslaboralistas.vercel.app/blog/abogados-bogota",
    siteName: "Abogados Laborales Colombia",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  return <AbogadosBogotaContent />;
}
