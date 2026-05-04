import { Metadata } from "next";
import AsesoriaJuridicaEmpresasContent from "./AsesoriaJuridicaEmpresasContent";

export const metadata: Metadata = {
  title: "Asesoría jurídica para empresas en Colombia | Abogados empresariales",
  description:
    "Descubra la importancia de la asesoría jurídica para empresas en Colombia. Prevenga riesgos legales y tome decisiones seguras con respaldo legal.",
  keywords: [
    "asesoría jurídica empresas Colombia",
    "abogados empresariales Colombia",
    "asesoría legal empresas Bogotá",
    "derecho comercial Colombia",
    "servicios legales empresas",
    "abogados para negocios Colombia",
  ],
  alternates: {
    canonical:
      "https://pravice-abogadoslaboralistas.vercel.app/blog/asesoria-juridica-empresas",
  },
  openGraph: {
    title: "Asesoría jurídica para empresas en Colombia | Guía completa",
    description:
      "Conozca cómo la asesoría jurídica empresarial ayuda a prevenir riesgos, optimizar decisiones y proteger su negocio en Colombia.",
    url: "https://pravice-abogadoslaboralistas.vercel.app/blog/asesoria-juridica-empresas",
    siteName: "Abogados Laborales Colombia",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  return <AsesoriaJuridicaEmpresasContent />;
}
