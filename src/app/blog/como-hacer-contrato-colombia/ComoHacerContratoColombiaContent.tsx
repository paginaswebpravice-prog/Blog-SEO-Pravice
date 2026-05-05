"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../../Blog.module.css";

export default function ComoHacerContratoColombiaContent() {
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
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.badges}>
            <span className={styles.badge}>Legal</span>
            <span className={styles.reading}>5 min lectura</span>
          </div>

          <h1 className={styles.heroTitle}>
            Cómo hacer un contrato en Colombia paso a paso
          </h1>

          <p className={styles.heroDescription}>
            Aprende a redactar contratos legales en Colombia de forma correcta y
            evita problemas legales.
          </p>
        </motion.section>

        {/* ================= CONTENIDO ================= */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.p
            className={styles.text}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Saber cómo hacer un contrato en Colombia es fundamental para
            garantizar acuerdos claros y evitar conflictos legales. Un contrato
            bien redactado protege los intereses de las partes y establece
            obligaciones precisas.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            En entornos empresariales como Bogotá, donde las relaciones
            comerciales son constantes, contar con contratos adecuados es clave
            para operar con seguridad jurídica.
          </motion.p>

          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            ¿Qué es un contrato?
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Un contrato es un acuerdo legal entre dos o más partes que genera
            derechos y obligaciones. En Colombia, los contratos están regulados
            por el Código Civil y el Código de Comercio.
          </motion.p>

          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Elementos esenciales de un contrato
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Para que un contrato sea válido, debe incluir:
          </motion.p>

          <motion.ul
            className={styles.list}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <li>Capacidad legal de las partes</li>
            <li>Consentimiento</li>
            <li>Objeto lícito</li>
            <li>Causa válida</li>
          </motion.ul>

          <motion.p
            className={styles.text}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Sin estos elementos, el contrato puede ser inválido o ineficaz.
          </motion.p>

          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Estructura básica de un contrato
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            Aunque puede variar según el tipo, un contrato generalmente incluye:
          </motion.p>

          <motion.ul
            className={styles.list}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <li>Identificación de las partes</li>
            <li>Objeto del contrato</li>
            <li>Obligaciones</li>
            <li>Condiciones de pago</li>
            <li>Plazos</li>
            <li>Cláusulas adicionales</li>
          </motion.ul>

          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            Tipos de contratos en Colombia
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            Algunos de los más comunes son:
          </motion.p>

          <motion.ul
            className={styles.list}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <li>Contrato de prestación de servicios</li>
            <li>Contrato de compraventa</li>
            <li>Contrato de arrendamiento</li>
            <li>Contrato laboral</li>
            <li>Contrato de suministro</li>
          </motion.ul>

          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            Recomendaciones para hacer un contrato correctamente
          </motion.h2>

          <motion.ul
            className={styles.list}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
          >
            <li>Redactar de forma clara y precisa</li>
            <li>Evitar ambigüedades</li>
            <li>Incluir cláusulas de incumplimiento</li>
            <li>Definir mecanismos de solución de conflictos</li>
            <li>Revisar el contrato antes de firmar</li>
          </motion.ul>

          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            Errores comunes al hacer contratos
          </motion.h2>

          <motion.ul
            className={styles.list}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9 }}
          >
            <li>Usar plantillas genéricas sin adaptar</li>
            <li>No definir obligaciones claramente</li>
            <li>Omitir condiciones importantes</li>
            <li>No prever incumplimientos</li>
          </motion.ul>

          <motion.p
            className={styles.text}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2 }}
          >
            Estos errores pueden generar conflictos legales o pérdidas
            económicas.
          </motion.p>

          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1 }}
          >
            ¿Cuándo necesitas un abogado para hacer un contrato?
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.2 }}
          >
            Es recomendable contar con asesoría legal cuando el contrato implica
            montos importantes, relaciones comerciales complejas o riesgos
            legales significativos.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.3 }}
          >
            Un abogado puede ayudarte a redactar cláusulas adecuadas y proteger
            tus intereses.
          </motion.p>

          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4 }}
          >
            ¿Dónde obtener asesoría para contratos en Colombia?
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            En Colombia existen firmas legales especializadas en derecho
            comercial que pueden ayudarte en la elaboración y revisión de
            contratos.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.6 }}
          >
            Si estás evaluando opciones, puedes conocer una firma a
            continuación.
          </motion.p>
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
              Protege tus acuerdos con contratos bien redactados
            </h2>

            <p className={styles.ctaText}>
              Conoce una opción con experiencia en elaboración y revisión de
              contratos en Colombia.
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
              headline: "Cómo hacer un contrato en Colombia paso a paso",
              description:
                "Guía completa para redactar contratos en Colombia correctamente.",
              author: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              publisher: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              mainEntityOfPage:
                "https://guialegalcolombia.vercel.app/blog/como-hacer-contrato-colombia",
            }),
          }}
        />
      </main>
    </>
  );
}
