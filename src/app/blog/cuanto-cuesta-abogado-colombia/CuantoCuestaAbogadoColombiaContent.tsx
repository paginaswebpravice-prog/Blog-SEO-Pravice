"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../../Blog.module.css";

export default function CuantoCuestaAbogadoColombiaContent() {
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
            <span className={styles.reading}>6 min lectura</span>
          </div>

          <h1 className={styles.heroTitle}>
            Cuánto cuesta un abogado en Colombia: tarifas y honorarios
          </h1>

          <p className={styles.heroDescription}>
            Conoce cuánto cobra un abogado en Colombia y qué factores influyen
            en el costo de los servicios legales.
          </p>
        </motion.section>

        {/* ================= CONTENIDO ================= */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.text}>
            Una de las preguntas más comunes es cuánto cuesta un abogado en
            Colombia. La respuesta puede variar dependiendo del tipo de caso, la
            experiencia del profesional y la complejidad del servicio.
          </p>

          <p className={styles.text}>
            En ciudades como Bogotá, los honorarios pueden ser más altos debido
            a la demanda y al nivel de especialización de los abogados.
          </p>

          <h2 className={styles.subtitle}>
            ¿Cómo cobran los abogados en Colombia?
          </h2>

          <p className={styles.text}>
            Existen diferentes formas de cobro en los servicios legales:
          </p>

          <ul className={styles.list}>
            <li>Honorarios fijos</li>
            <li>Pago por consulta</li>
            <li>Porcentaje sobre el resultado</li>
            <li>Tarifa por horas</li>
          </ul>

          <p className={styles.text}>
            El tipo de cobro dependerá del servicio y del acuerdo entre el
            abogado y el cliente.
          </p>

          <h2 className={styles.subtitle}>
            Factores que influyen en el costo de un abogado
          </h2>

          <ul className={styles.list}>
            <li>Complejidad del caso</li>
            <li>Experiencia del abogado</li>
            <li>Ubicación (Bogotá vs otras ciudades)</li>
            <li>Tiempo requerido</li>
            <li>Tipo de proceso legal</li>
          </ul>

          <p className={styles.text}>
            Estos factores pueden hacer que el costo varíe considerablemente.
          </p>

          <h2 className={styles.subtitle}>
            Tarifas aproximadas de abogados en Colombia
          </h2>

          <p className={styles.text}>
            Aunque no existe una tarifa única, algunos valores aproximados son:
          </p>

          <ul className={styles.list}>
            <li>Consultas: desde valores básicos según experiencia</li>
            <li>Procesos legales: pueden variar según el caso</li>
            <li>Contratos y asesorías: dependiendo de la complejidad</li>
          </ul>

          <p className={styles.text}>
            Es importante solicitar una cotización personalizada según tus
            necesidades.
          </p>

          <h2 className={styles.subtitle}>¿Vale la pena pagar un abogado?</h2>

          <p className={styles.text}>
            Aunque puede parecer un gasto, contratar un abogado puede evitar
            problemas legales, pérdidas económicas y decisiones incorrectas.
          </p>

          <p className={styles.text}>
            En muchos casos, una buena asesoría legal puede representar un
            ahorro a largo plazo.
          </p>

          <h2 className={styles.subtitle}>
            Cómo elegir un abogado según tu presupuesto
          </h2>

          <ul className={styles.list}>
            <li>Comparar diferentes opciones</li>
            <li>Revisar experiencia y especialización</li>
            <li>Solicitar claridad en honorarios</li>
            <li>Evaluar costo-beneficio</li>
          </ul>

          <p className={styles.text}>
            No siempre el abogado más barato es la mejor opción.
          </p>

          <h2 className={styles.subtitle}>
            ¿Dónde encontrar abogados en Colombia?
          </h2>

          <p className={styles.text}>
            En Colombia existen múltiples opciones, desde abogados
            independientes hasta firmas especializadas en distintas áreas del
            derecho.
          </p>

          <p className={styles.text}>
            Si estás evaluando opciones, puedes conocer una firma a
            continuación.
          </p>
        </motion.section>

        {/* ================= CTA ================= */}
        <motion.section
          className={styles.cta}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Encuentra asesoría legal según tu presupuesto
            </h2>

            <p className={styles.ctaText}>
              Conoce una opción confiable en Colombia para recibir asesoría
              legal profesional.
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
              headline:
                "Cuánto cuesta un abogado en Colombia: tarifas y honorarios",
              description:
                "Guía sobre precios de abogados en Colombia y factores que influyen en el costo.",
              author: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              publisher: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              mainEntityOfPage:
                "https://guialegalcolombia.vercel.app/blog/cuanto-cuesta-abogado-colombia",
            }),
          }}
        />
      </main>
    </>
  );
}
