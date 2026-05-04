import { Metadata } from "next";
import ProcesosEjecutivosContent from "./ProcesosEjecutivosContent";

export const metadata: Metadata = {
  title: "Procesos ejecutivos en Colombia: qué son y cómo funcionan",
  description:
    "Aprende qué son los procesos ejecutivos en Colombia, cómo funcionan y cómo utilizarlos para recuperar deudas mediante mecanismos legales.",
  keywords: [
    "procesos ejecutivos Colombia",
    "que es un proceso ejecutivo",
    "cobro judicial Colombia",
    "titulo ejecutivo Colombia",
    "embargo Colombia proceso ejecutivo",
    "abogados cobro de cartera Colombia",
  ],
  alternates: {
    canonical:
      "https://pravice-abogadoslaboralistas.vercel.app/blog/procesos-ejecutivos-colombia",
  },
  openGraph: {
    title: "Procesos ejecutivos en Colombia: guía completa",
    description:
      "Descubre cómo funcionan los procesos ejecutivos en Colombia y cómo recuperar deudas legalmente.",
    url: "https://pravice-abogadoslaboralistas.vercel.app/blog/procesos-ejecutivos-colombia",
    siteName: "Abogados Laborales Colombia",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  return <ProcesosEjecutivosContent />;
}
