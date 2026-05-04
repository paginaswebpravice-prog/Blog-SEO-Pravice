import { Metadata } from "next";
import ContratosComercialesContent from "./ContratosComercialesContent";

export const metadata: Metadata = {
  title: "Contratos comerciales en Colombia: aspectos clave para empresas",
  description:
    "Aprenda cómo funcionan los contratos comerciales en Colombia, sus elementos esenciales, tipos y cómo proteger su negocio legalmente.",
  keywords: [
    "contratos comerciales Colombia",
    "contrato comercial que es",
    "tipos de contratos comerciales",
    "contratos empresas Colombia",
    "derecho comercial Colombia",
    "redacción de contratos Colombia",
  ],
  alternates: {
    canonical:
      "https://pravice-abogadoslaboralistas.vercel.app/blog/contratos-comerciales-colombia",
  },
  openGraph: {
    title: "Contratos comerciales en Colombia: guía completa",
    description:
      "Descubra cómo estructurar contratos comerciales y proteger su empresa en Colombia.",
    url: "https://pravice-abogadoslaboralistas.vercel.app/blog/contratos-comerciales-colombia",
    siteName: "Abogados Laborales Colombia",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  return <ContratosComercialesContent />;
}
