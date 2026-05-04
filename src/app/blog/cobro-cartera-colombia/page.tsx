import { Metadata } from "next";
import CobroCarteraContent from "./CobroCarteraContent";

export const metadata: Metadata = {
  title: "Cobro de cartera en Colombia: cómo recuperar deudas | Guía legal",
  description:
    "Aprenda cómo recuperar deudas con estrategias de cobro de cartera en Colombia. Conozca procesos legales, cobro jurídico y recuperación efectiva.",
  keywords: [
    "cobro de cartera Colombia",
    "recuperar deudas Colombia",
    "cobro jurídico Colombia",
    "procesos ejecutivos Colombia",
    "abogados cobro de cartera",
    "gestión de cartera empresas",
  ],
  alternates: {
    canonical:
      "https://pravice-abogadoslaboralistas.vercel.app/blog/cobro-cartera-colombia",
  },
  openGraph: {
    title: "Cobro de cartera en Colombia: estrategias para recuperar deudas",
    description:
      "Descubra cómo recuperar cartera en Colombia mediante cobro persuasivo, prejurídico y procesos judiciales.",
    url: "https://pravice-abogadoslaboralistas.vercel.app/blog/cobro-cartera-colombia",
    siteName: "Abogados Laborales Colombia",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  return <CobroCarteraContent />;
}
