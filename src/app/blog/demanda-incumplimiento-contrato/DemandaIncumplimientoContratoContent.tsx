"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../../Blog.module.css";

export default function DemandaIncumplimientoContratoContent() {
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
            <span className={styles.badge}>Legal</span>
            <span className={styles.reading}>6 min lectura</span>
          </div>

          <h1 className={styles.heroTitle}>
            Demanda por incumplimiento de contrato en Colombia
          </h1>

          <p className={styles.heroDescription}>
            Qué hacer cuando una persona o empresa incumple un contrato y cómo
            iniciar una demanda en Colombia.
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
            El incumplimiento de contrato en Colombia es una situación común en
            relaciones comerciales y personales. Cuando una de las partes no
            cumple con lo pactado, la otra puede iniciar acciones legales para
            exigir el cumplimiento o reclamar perjuicios.
          </p>

          <p className={styles.text}>
            En ciudades como Bogotá, este tipo de conflictos suele resolverse a
            través de procesos judiciales o mecanismos alternativos como la
            conciliación.
          </p>

          <h2 className={styles.subtitle}>
            ¿Qué es el incumplimiento de contrato?
          </h2>

          <p className={styles.text}>
            Se presenta cuando una de las partes no cumple total o parcialmente
            con las obligaciones establecidas en un contrato.
          </p>

          <p className={styles.text}>
            Este incumplimiento puede generar consecuencias legales como
            indemnizaciones o la terminación del contrato.
          </p>

          <h2 className={styles.subtitle}>
            Tipos de incumplimiento contractual
          </h2>

          <ul className={styles.list}>
            <li>Incumplimiento total</li>
            <li>Incumplimiento parcial</li>
            <li>Retraso en el cumplimiento</li>
            <li>Cumplimiento defectuoso</li>
          </ul>

          <p className={styles.text}>
            Cada tipo de incumplimiento puede dar lugar a diferentes acciones
            legales.
          </p>

          <h2 className={styles.subtitle}>
            ¿Qué hacer ante un incumplimiento de contrato?
          </h2>

          <ul className={styles.list}>
            <li>Revisar el contrato firmado</li>
            <li>Intentar una solución directa</li>
            <li>Acudir a conciliación</li>
            <li>Buscar asesoría legal</li>
            <li>Iniciar una demanda si es necesario</li>
          </ul>

          <p className={styles.text}>
            En muchos casos, la conciliación es un paso previo antes de acudir a
            un juez.
          </p>

          <h2 className={styles.subtitle}>
            ¿Cómo demandar por incumplimiento de contrato en Colombia?
          </h2>

          <p className={styles.text}>
            Para iniciar una demanda es necesario contar con un contrato válido
            y pruebas del incumplimiento.
          </p>

          <ul className={styles.list}>
            <li>Redacción de la demanda</li>
            <li>Presentación ante el juez competente</li>
            <li>Notificación a la parte demandada</li>
            <li>Proceso judicial</li>
            <li>Sentencia</li>
          </ul>

          <p className={styles.text}>
            El proceso puede variar dependiendo del caso y la complejidad del
            conflicto.
          </p>

          <h2 className={styles.subtitle}>
            ¿Qué puedes reclamar en una demanda?
          </h2>

          <ul className={styles.list}>
            <li>Cumplimiento del contrato</li>
            <li>Indemnización por perjuicios</li>
            <li>Pago de obligaciones pendientes</li>
            <li>Terminación del contrato</li>
          </ul>

          <p className={styles.text}>
            Las pretensiones dependerán de la situación específica.
          </p>

          <h2 className={styles.subtitle}>Importancia de la asesoría legal</h2>

          <p className={styles.text}>
            Contar con un abogado es fundamental para estructurar correctamente
            la demanda y aumentar las probabilidades de éxito en el proceso.
          </p>

          <p className={styles.text}>
            Una mala estrategia legal puede retrasar el proceso o afectar el
            resultado.
          </p>

          <h2 className={styles.subtitle}>
            ¿Dónde encontrar asesoría en Colombia?
          </h2>

          <p className={styles.text}>
            Existen firmas legales especializadas en derecho civil y comercial
            que pueden ayudarte en casos de incumplimiento de contrato.
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
              Recibe asesoría para demandas por incumplimiento de contrato
            </h2>

            <p className={styles.ctaText}>
              Consulta con un equipo legal que puede ayudarte a proteger tus
              derechos y recuperar lo que te corresponde.
            </p>

            <div className={styles.actions}>
              <a
                href="https://pravice-abogadoslaboralistas.vercel.app/"
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
              headline: "Demanda por incumplimiento de contrato en Colombia",
              description:
                "Guía completa para demandar por incumplimiento de contrato en Colombia.",
              author: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              publisher: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              mainEntityOfPage:
                "https://guialegalcolombia.vercel.app/blog/demanda-incumplimiento-contrato",
            }),
          }}
        />
      </main>
    </>
  );
}
