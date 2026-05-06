import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://guialegalcolombia.vercel.app";

  const articles = [
    "abogados-bogota",
    "derecho-comercial-colombia",
    "cobro-cartera-colombia",
    "asesoria-juridica-empresas",
    "procesos-ejecutivos-colombia",
    "contratos-comerciales-colombia",
    "constitucion-empresas-colombia",
    "como-crear-empresa-colombia",
    "conciliacion-extrajudicial-colombia",
    "abogado-cobro-cartera-bogota",
    "servicios-legales-empresas-colombia",
    "abogados-corporativos-bogota",
    "cuanto-cuesta-abogado-colombia",
    "demanda-incumplimiento-contrato",
    "tipos-contratos-colombia",
    "no-me-pagan-deuda-colombia",
    "como-demandar-empresa-colombia",
    "derecho-laboral-colombia",
    "sas-colombia",
    "errores-legales-empresas",
    "proteger-negocio-colombia",
    "cuando-necesitas-abogado",
    "abogado-litigante-vs-asesor",
    "como-hacer-contrato-colombia",
    "incumplimiento-contrato-consecuencias",
    "cobranza-prejuridica-colombia",
    "titulo-ejecutivo-colombia",
    "prescripcion-deudas-colombia",
    "evitar-problemas-legales-empresa",
    "asesoria-legal-permanente",
  ];

  const blogUrls = articles.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogUrls,
  ];
}
