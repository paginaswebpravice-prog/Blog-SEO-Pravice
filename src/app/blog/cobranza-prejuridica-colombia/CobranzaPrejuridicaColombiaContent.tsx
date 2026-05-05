"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../../Blog.module.css";

export default function CobranzaPrejuridicaColombiaContent() {
  return (
    <>
      {/* ================= BACK ================= */}
      <motion.div
        className={styles.backWrapper}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
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
            <span className={styles.badge}>Finanzas</span>
            <span className={styles.reading}>5 min lectura</span>
          </div>

          <h1 className={styles.heroTitle}>
            Cobranza prejurídica en Colombia: qué es y cómo funciona
          </h1>

          <p className={styles.heroDescription}>
            Descubre cómo recuperar deudas en Colombia sin necesidad de iniciar
            un proceso judicial.
          </p>
        </motion.section>

        {/* ================= CONTENIDO ================= */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className={styles.text}>
            La cobranza prejurídica en Colombia es una etapa clave dentro del
            proceso de recuperación de cartera. Se trata de todas las acciones
            realizadas para lograr el pago de una deuda antes de acudir a la vía
            judicial.
          </p>

          <p className={styles.text}>
            Este tipo de cobranza es ampliamente utilizado por empresas en
            ciudades como Bogotá, ya que permite recuperar dinero de manera más
            rápida, económica y sin necesidad de iniciar un proceso legal.
          </p>

          <h2 className={styles.subtitle}>¿Qué es la cobranza prejurídica?</h2>

          <p className={styles.text}>
            La cobranza prejurídica es el conjunto de gestiones extrajudiciales
            que buscan persuadir al deudor para que cumpla con su obligación de
            pago sin necesidad de demandar.
          </p>

          <p className={styles.text}>
            Estas acciones pueden incluir llamadas, correos electrónicos,
            mensajes formales y acuerdos de pago.
          </p>

          <h2 className={styles.subtitle}>
            ¿Cómo funciona la cobranza prejurídica en Colombia?
          </h2>

          <p className={styles.text}>
            Este proceso suele desarrollarse en varias etapas:
          </p>

          <ul className={styles.list}>
            <li>Contacto inicial con el deudor</li>
            <li>Recordatorios de pago</li>
            <li>Negociación de acuerdos</li>
            <li>Establecimiento de compromisos de pago</li>
            <li>Seguimiento de los acuerdos</li>
          </ul>

          <p className={styles.text}>
            El objetivo es lograr el pago sin necesidad de acudir a un juez.
          </p>

          <h2 className={styles.subtitle}>
            Ventajas de la cobranza prejurídica
          </h2>

          <ul className={styles.list}>
            <li>Menor costo en comparación con procesos judiciales</li>
            <li>Recuperación más rápida de la deuda</li>
            <li>Menor desgaste legal y administrativo</li>
            <li>Posibilidad de mantener la relación comercial</li>
            <li>Mayor flexibilidad en acuerdos de pago</li>
          </ul>

          <h2 className={styles.subtitle}>¿Cuándo pasar a cobro jurídico?</h2>

          <p className={styles.text}>
            Si el deudor no responde a las gestiones prejurídicas o incumple los
            acuerdos de pago, puede ser necesario iniciar un proceso judicial
            como un proceso ejecutivo.
          </p>

          <p className={styles.text}>
            En este punto, contar con asesoría legal es fundamental para
            garantizar una recuperación efectiva.
          </p>

          <h2 className={styles.subtitle}>Relación con el cobro de cartera</h2>

          <p className={styles.text}>
            La cobranza prejurídica es la primera etapa dentro del cobro de
            cartera en Colombia. Una gestión adecuada en esta fase puede evitar
            procesos judiciales y mejorar la liquidez de las empresas.
          </p>

          <p className={styles.text}>
            Muchas organizaciones priorizan esta etapa debido a su eficiencia y
            menor impacto financiero.
          </p>

          <h2 className={styles.subtitle}>
            ¿Quién puede realizar cobranza prejurídica?
          </h2>

          <p className={styles.text}>
            Esta gestión puede ser realizada por equipos internos de la empresa
            o por firmas especializadas en recuperación de cartera.
          </p>

          <p className={styles.text}>
            En muchos casos, contar con apoyo profesional aumenta las
            probabilidades de éxito.
          </p>

          <h2 className={styles.subtitle}>
            ¿Dónde encontrar apoyo para cobranza prejurídica en Colombia?
          </h2>

          <p className={styles.text}>
            Existen firmas legales y empresas especializadas que ofrecen
            servicios de cobranza prejurídica con estrategias efectivas de
            negociación.
          </p>

          <p className={styles.text}>
            Si estás evaluando opciones, puedes conocer una alternativa a
            continuación.
          </p>
        </motion.section>

        {/* ================= CTA ================= */}
        <motion.section
          className={styles.cta}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Recupera tu cartera sin procesos judiciales
            </h2>

            <p className={styles.ctaText}>
              Conoce una opción especializada en cobranza prejurídica y
              recuperación de deudas en Colombia.
            </p>

            <div className={styles.actions}>
              <a href="https://pravice.co/" className={styles.primary}>
                Ver firma de abogados
              </a>

              <a
                href="https://api.whatsapp.com"
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
              headline:
                "Cobranza prejurídica en Colombia: qué es y cómo funciona",
              description:
                "Guía completa sobre cobranza prejurídica en Colombia para recuperar deudas sin demanda.",
              author: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              publisher: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              mainEntityOfPage:
                "https://guialegalcolombia.vercel.app/blog/cobranza-prejuridica-colombia",
            }),
          }}
        />
      </main>
    </>
  );
}
