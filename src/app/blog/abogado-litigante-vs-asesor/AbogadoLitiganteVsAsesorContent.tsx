"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../../Blog.module.css";

export default function AbogadoLitiganteVsAsesorContent() {
  return (
    <>
      {/* ================= BACK ================= */}
      <motion.div
        className={styles.backWrapper}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link href="/" className={styles.back}>
          <span className={styles.arrow}>←</span>
          Volver al blog
        </Link>
      </motion.div>

      {/* ================= HERO ================= */}
      <main className={styles.container}>
        <motion.section
          className={styles.hero}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.badges}>
            <span className={styles.badge}>Guía Legal</span>
            <span className={styles.reading}>4 min lectura</span>
          </div>

          <h1 className={styles.heroTitle}>
            Diferencia entre abogado litigante y asesor jurídico
          </h1>

          <p className={styles.heroDescription}>
            Conoce las diferencias clave entre estos profesionales y cuál
            necesitas según tu situación legal en Colombia.
          </p>
        </motion.section>

        {/* ================= CONTENIDO ================= */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className={styles.text}>
            En Colombia, es común escuchar términos como abogado litigante y
            asesor jurídico, pero muchas personas no tienen claridad sobre sus
            diferencias. Entender el rol de cada uno es fundamental para tomar
            decisiones acertadas cuando se necesita apoyo legal.
          </p>

          <p className={styles.text}>
            Ambos profesionales cumplen funciones importantes, pero su enfoque y
            momento de intervención dentro de un problema legal son distintos.
          </p>

          <h2 className={styles.subtitle}>¿Qué es un abogado litigante?</h2>

          <p className={styles.text}>
            El abogado litigante es aquel que representa a una persona o empresa
            en procesos judiciales. Su función principal es defender los
            intereses de su cliente ante jueces y tribunales.
          </p>

          <p className={styles.text}>
            Este tipo de abogado actúa cuando ya existe un conflicto legal que
            requiere intervención judicial.
          </p>

          <h3 className={styles.subheading}>
            Funciones de un abogado litigante
          </h3>

          <ul className={styles.list}>
            <li>Presentar demandas o contestarlas</li>
            <li>Representar clientes en audiencias</li>
            <li>Defender derechos ante jueces</li>
            <li>Gestionar procesos judiciales</li>
          </ul>

          <h2 className={styles.subtitle}>¿Qué es un asesor jurídico?</h2>

          <p className={styles.text}>
            El asesor jurídico se enfoca en prevenir problemas legales antes de
            que ocurran. Su trabajo consiste en orientar a personas o empresas
            en la toma de decisiones para evitar riesgos.
          </p>

          <p className={styles.text}>
            Es clave en entornos empresariales donde se requiere acompañamiento
            constante en contratos, operaciones y cumplimiento legal.
          </p>

          <h3 className={styles.subheading}>Funciones de un asesor jurídico</h3>

          <ul className={styles.list}>
            <li>Brindar asesoría legal preventiva</li>
            <li>Revisar y redactar contratos</li>
            <li>Identificar riesgos legales</li>
            <li>Acompañar decisiones empresariales</li>
          </ul>

          <h2 className={styles.subtitle}>
            Diferencias clave entre litigante y asesor jurídico
          </h2>

          <ul className={styles.list}>
            <li>El litigante actúa cuando hay conflicto; el asesor previene</li>
            <li>
              El litigante trabaja en juzgados; el asesor en estrategia legal
            </li>
            <li>El litigante responde problemas; el asesor los evita</li>
          </ul>

          <h2 className={styles.subtitle}>¿Cuál necesitas según tu caso?</h2>

          <p className={styles.text}>
            La elección depende de tu situación. Si enfrentas una demanda o un
            conflicto legal, necesitas un abogado litigante. En cambio, si
            buscas prevenir problemas o estructurar decisiones legales, un
            asesor jurídico es la mejor opción.
          </p>

          <p className={styles.text}>
            Muchas empresas en Colombia combinan ambos perfiles para lograr una
            gestión legal completa.
          </p>

          <h2 className={styles.subtitle}>
            Importancia de elegir correctamente
          </h2>

          <p className={styles.text}>
            Elegir el tipo de abogado adecuado puede ahorrarte tiempo, dinero y
            problemas legales. La asesoría preventiva suele ser más económica y
            eficiente que enfrentar un proceso judicial.
          </p>

          <p className={styles.text}>
            Sin embargo, cuando el conflicto ya existe, contar con un buen
            litigante es fundamental para defender tus intereses.
          </p>
        </motion.section>

        {/* ================= CTA ================= */}
        <motion.section
          className={styles.cta}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              ¿Necesitas asesoría legal para tu caso?
            </h2>

            <p className={styles.ctaText}>
              Conoce una firma que combina asesoría jurídica y representación
              legal para empresas y personas en Colombia.
            </p>

            <div className={styles.actions}>
              <a
                href="https://pravice.co/"
                className={styles.primary}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver firma de abogados
              </a>

              <a
                href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondary}
              >
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </motion.section>

        {/* ================= SCHEMA ================= */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Diferencia entre abogado litigante y asesor jurídico",
              description:
                "Guía sobre las diferencias entre abogado litigante y asesor jurídico en Colombia.",
              author: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              publisher: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              mainEntityOfPage:
                "https://pravice-abogadoslaboralistas.vercel.app/blog/abogado-litigante-vs-asesor",
            }),
          }}
        />
      </main>
    </>
  );
}
