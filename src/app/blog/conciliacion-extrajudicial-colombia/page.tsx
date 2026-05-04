import { Metadata } from "next";
import ConciliacionExtrajudicialContent from "./ConciliacionExtrajudicialContent";

export const metadata: Metadata = {
  title: "Conciliación extrajudicial en Colombia: qué es y cómo funciona",
  description:
    "Aprenda cómo funciona la conciliación extrajudicial en Colombia, sus beneficios, requisitos y cuándo es obligatoria antes de acudir a un proceso judicial.",
  keywords: [
    "conciliación extrajudicial Colombia",
    "qué es conciliación Colombia",
    "proceso de conciliación Colombia",
    "conciliación obligatoria Colombia",
    "centros de conciliación Bogotá",
    "resolver conflictos sin juicio Colombia",
  ],
  alternates: {
    canonical:
      "https://pravice-abogadoslaboralistas.vercel.app/blog/conciliacion-extrajudicial",
  },
  openGraph: {
    title: "Conciliación extrajudicial en Colombia: guía completa",
    description:
      "Descubra cómo resolver conflictos legales sin juicio mediante conciliación extrajudicial en Colombia.",
    url: "https://pravice-abogadoslaboralistas.vercel.app/blog/conciliacion-extrajudicial",
    siteName: "Abogados Laborales Colombia",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  return <ConciliacionExtrajudicialContent />;
}
