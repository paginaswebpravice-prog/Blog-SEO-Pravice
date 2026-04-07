import Link from "next/link";
import styles from "./page.module.css";

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
];

export default function Home() {
  return (
    <main className={styles.container}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Blog legal en Colombia: guías y asesoría jurídica
        </h1>
        <p className={styles.subtitle}>
          Encuentra información sobre abogados en Bogotá, derecho comercial,
          cobro de cartera y más temas legales en Colombia.
        </p>
      </section>

      {/* GRID */}
      <section className={styles.grid}>
        {articles.map((article, index) => (
          <Link key={index} href={article.href} className={styles.card}>
            <div className={styles.meta}>
              <span className={styles.category}>{article.category}</span>
              <span className={styles.reading}>{article.readingTime}</span>
            </div>

            <h2 className={styles.cardTitle}>{article.title}</h2>
            <p className={styles.cardText}>{article.description}</p>

            <span className={styles.link}>Leer más →</span>
          </Link>
        ))}
      </section>
    </main>
  );
}
