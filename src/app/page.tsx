"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { motion } from "framer-motion";

const articles = [
  {
    title: "Abogados en Bogotá: qué hacen y cómo elegir el mejor",
    description:
      "Conoce el rol de los abogados en Bogotá, sus funciones y cómo elegir el más adecuado.",
    href: "/blog/abogados-bogota",
    category: "Guía Legal",
    readingTime: "5 min",
  },
  {
    title: "Derecho comercial en Colombia: guía para empresas",
    description:
      "Aprende cómo funciona el derecho comercial y su importancia en los negocios.",
    href: "/blog/derecho-comercial-colombia",
    category: "Empresas",
    readingTime: "6 min",
  },
  {
    title: "Cobro de cartera en Colombia: cómo recuperar deudas",
    description:
      "Descubre estrategias legales efectivas para recuperar cartera en Colombia.",
    href: "/blog/cobro-cartera-colombia",
    category: "Finanzas",
    readingTime: "5 min",
  },
  {
    title: "Asesoría jurídica para empresas en Colombia",
    description:
      "La importancia de contar con respaldo legal para proteger tu empresa.",
    href: "/blog/asesoria-juridica-empresas",
    category: "Empresas",
    readingTime: "4 min",
  },
  {
    title: "Procesos ejecutivos en Colombia: qué son y cómo funcionan",
    description:
      "Todo sobre procesos ejecutivos para el cobro de obligaciones legales.",
    href: "/blog/procesos-ejecutivos-colombia",
    category: "Legal",
    readingTime: "5 min",
  },
  {
    title: "Contratos comerciales en Colombia: aspectos clave",
    description:
      "Conoce cómo funcionan los contratos comerciales y cómo proteger tu negocio.",
    href: "/blog/contratos-comerciales-colombia",
    category: "Empresas",
    readingTime: "5 min",
  },
  {
    title: "Constitución de empresas en Colombia paso a paso",
    description: "Guía completa para crear una empresa legalmente en Colombia.",
    href: "/blog/constitucion-empresas-colombia",
    category: "Emprendimiento",
    readingTime: "6 min",
  },
  {
    title: "Cómo crear una empresa en Colombia: guía completa",
    description: "Aprende los pasos clave para iniciar tu negocio en Colombia.",
    href: "/blog/como-crear-empresa-colombia",
    category: "Emprendimiento",
    readingTime: "6 min",
  },
  {
    title: "Conciliación extrajudicial en Colombia: qué es y cómo funciona",
    description:
      "Todo sobre la conciliación como mecanismo para resolver conflictos sin juicio.",
    href: "/blog/conciliacion-extrajudicial-colombia",
    category: "Legal",
    readingTime: "5 min",
  },
  {
    title: "Abogado para cobro de cartera en Bogotá: cuándo contratar uno",
    description:
      "Descubre en qué casos necesitas un abogado para recuperar deudas en Bogotá.",
    href: "/blog/abogado-cobro-cartera-bogota",
    category: "Finanzas",
    readingTime: "5 min",
  },
  {
    title: "Servicios legales para empresas en Colombia: qué incluyen",
    description:
      "Conoce qué servicios jurídicos necesita una empresa para operar legalmente.",
    href: "/blog/servicios-legales-empresas-colombia",
    category: "Empresas",
    readingTime: "5 min",
  },
  {
    title: "Abogados corporativos en Bogotá: funciones y beneficios",
    description:
      "Por qué tu empresa necesita un abogado corporativo en Bogotá.",
    href: "/blog/abogados-corporativos-bogota",
    category: "Empresas",
    readingTime: "5 min",
  },
  {
    title: "Cuánto cuesta un abogado en Colombia: tarifas y honorarios",
    description: "Guía sobre precios de servicios legales en Colombia.",
    href: "/blog/cuanto-cuesta-abogado-colombia",
    category: "Guía Legal",
    readingTime: "6 min",
  },
  {
    title: "Demanda por incumplimiento de contrato en Colombia",
    description: "Qué hacer cuando una empresa o persona incumple un contrato.",
    href: "/blog/demanda-incumplimiento-contrato",
    category: "Legal",
    readingTime: "6 min",
  },
  {
    title: "Tipos de contratos en Colombia y para qué sirve cada uno",
    description:
      "Conoce los diferentes contratos legales y cuándo utilizarlos.",
    href: "/blog/tipos-contratos-colombia",
    category: "Legal",
    readingTime: "6 min",
  },
  {
    title: "Qué hacer si no te pagan una deuda en Colombia",
    description: "Opciones legales para recuperar dinero de clientes morosos.",
    href: "/blog/no-me-pagan-deuda-colombia",
    category: "Finanzas",
    readingTime: "5 min",
  },
  {
    title: "Cómo demandar a una empresa en Colombia paso a paso",
    description:
      "Guía completa para iniciar acciones legales contra una empresa.",
    href: "/blog/como-demandar-empresa-colombia",
    category: "Legal",
    readingTime: "6 min",
  },
  {
    title: "Derecho laboral en Colombia: derechos y obligaciones",
    description:
      "Todo lo que debes saber sobre relaciones laborales en Colombia.",
    href: "/blog/derecho-laboral-colombia",
    category: "Legal",
    readingTime: "6 min",
  },
  {
    title: "Qué es una SAS en Colombia y cómo funciona",
    description:
      "Explicación completa del tipo de empresa más común en Colombia.",
    href: "/blog/sas-colombia",
    category: "Empresas",
    readingTime: "5 min",
  },
  {
    title: "Errores legales que cometen las empresas en Colombia",
    description:
      "Evita los errores más comunes que afectan legalmente a las empresas.",
    href: "/blog/errores-legales-empresas",
    category: "Empresas",
    readingTime: "5 min",
  },
  {
    title: "Cómo proteger legalmente tu negocio en Colombia",
    description: "Estrategias legales para evitar riesgos empresariales.",
    href: "/blog/proteger-negocio-colombia",
    category: "Empresas",
    readingTime: "5 min",
  },
  {
    title: "Qué hace un abogado y cuándo necesitas uno",
    description:
      "Funciones de un abogado y situaciones en las que debes contratarlo.",
    href: "/blog/cuando-necesitas-abogado",
    category: "Guía Legal",
    readingTime: "4 min",
  },
  {
    title: "Diferencia entre abogado litigante y asesor jurídico",
    description: "Conoce las diferencias clave entre estos profesionales.",
    href: "/blog/abogado-litigante-vs-asesor",
    category: "Guía Legal",
    readingTime: "4 min",
  },
  {
    title: "Cómo hacer un contrato en Colombia paso a paso",
    description: "Aprende a redactar contratos básicos de forma correcta.",
    href: "/blog/como-hacer-contrato-colombia",
    category: "Legal",
    readingTime: "5 min",
  },
  {
    title: "Qué pasa si incumplo un contrato en Colombia",
    description: "Consecuencias legales del incumplimiento contractual.",
    href: "/blog/incumplimiento-contrato-consecuencias",
    category: "Legal",
    readingTime: "5 min",
  },
  {
    title: "Cobranza prejurídica en Colombia: qué es y cómo funciona",
    description:
      "Antes de demandar, conoce esta etapa clave de recuperación de cartera.",
    href: "/blog/cobranza-prejuridica-colombia",
    category: "Finanzas",
    readingTime: "5 min",
  },
  {
    title: "Qué es un título ejecutivo en Colombia",
    description: "Documento clave para iniciar procesos de cobro judicial.",
    href: "/blog/titulo-ejecutivo-colombia",
    category: "Legal",
    readingTime: "4 min",
  },
  {
    title: "Cuándo una deuda prescribe en Colombia",
    description: "Conoce los tiempos legales de prescripción de deudas.",
    href: "/blog/prescripcion-deudas-colombia",
    category: "Finanzas",
    readingTime: "5 min",
  },
  {
    title: "Cómo evitar problemas legales en tu empresa",
    description: "Buenas prácticas jurídicas para empresarios.",
    href: "/blog/evitar-problemas-legales-empresa",
    category: "Empresas",
    readingTime: "5 min",
  },
  {
    title: "Ventajas de contratar asesoría legal permanente",
    description: "Por qué tener un abogado fijo puede ahorrarte dinero.",
    href: "/blog/asesoria-legal-permanente",
    category: "Empresas",
    readingTime: "4 min",
  },
];

export default function Home() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <main className={styles.container}>
      {/* HERO */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.title}>Blog legal en Colombia</h1>
        <p className={styles.subtitle}>
          Guías prácticas sobre derecho, empresas y asesoría jurídica.
        </p>
      </motion.section>

      {/* FEATURED */}
      <motion.section
        className={styles.featured}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Link href={featured.href} className={styles.featuredLink}>
          <span className={styles.category}>{featured.category}</span>

          <h2 className={styles.featuredTitle}>{featured.title}</h2>

          <p className={styles.featuredText}>{featured.description}</p>

          <div className={styles.meta}>
            <span>{featured.readingTime}</span>
          </div>
        </Link>
      </motion.section>

      {/* LISTA COMPLETA */}
      <section className={styles.wrapper}>
        <div className={styles.list}>
          {rest.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
            >
              <Link href={article.href} className={styles.item}>
                <div className={styles.itemTop}>
                  <span className={styles.category}>{article.category}</span>
                  <span className={styles.reading}>{article.readingTime}</span>
                </div>

                <h3 className={styles.itemTitle}>{article.title}</h3>
                <p className={styles.itemText}>{article.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
