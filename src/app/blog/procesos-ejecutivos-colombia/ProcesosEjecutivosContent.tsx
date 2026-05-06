"use client";

import Link from "next/link";
import styles from "../../Blog.module.css";
import { motion } from "framer-motion";

export default function ProcesosEjecutivosContent() {
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
          <motion.div
            className={styles.badges}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className={styles.badge}>Legal</span>
            <span className={styles.reading}>5 min lectura</span>
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            Procesos ejecutivos en Colombia: qué son y cómo funcionan
          </motion.h1>

          <motion.p
            className={styles.heroDescription}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Todo sobre los procesos ejecutivos en Colombia y cómo utilizarlos
            para exigir el pago de obligaciones legales.
          </motion.p>
        </motion.section>

        {/* ================= CONTENIDO ================= */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className={styles.text}>
            Los procesos ejecutivos en Colombia son mecanismos legales diseñados
            para exigir el cumplimiento de obligaciones claras, expresas y
            exigibles. Este tipo de proceso es ampliamente utilizado para el
            cobro de deudas cuando existe un documento que respalda la
            obligación.
          </p>

          <p className={styles.text}>
            En ciudades como Bogotá, estos procesos son comunes en el ámbito
            empresarial y financiero, especialmente cuando se busca recuperar
            cartera de manera efectiva mediante la vía judicial.
          </p>

          <h2 className={styles.subtitle}>¿Qué es un proceso ejecutivo?</h2>

          <p className={styles.text}>
            Un proceso ejecutivo es un procedimiento judicial que permite a un
            acreedor exigir el pago de una deuda basada en un título ejecutivo,
            como un pagaré, una letra de cambio o un contrato firmado.
          </p>

          <p className={styles.text}>
            A diferencia de otros procesos, en este caso no es necesario
            demostrar la existencia de la obligación, ya que esta se presume
            válida gracias al documento presentado.
          </p>

          <h2 className={styles.subtitle}>¿Qué es un título ejecutivo?</h2>

          <p className={styles.text}>
            El título ejecutivo es el documento que contiene una obligación
            clara, expresa y exigible. Es el requisito fundamental para iniciar
            un proceso ejecutivo en Colombia.
          </p>

          <ul className={styles.list}>
            <li>Pagarés</li>
            <li>Letras de cambio</li>
            <li>Contratos firmados</li>
            <li>Facturas aceptadas</li>
          </ul>

          <p className={styles.text}>
            Sin este tipo de documento, no es posible iniciar este tipo de
            proceso.
          </p>

          <h2 className={styles.subtitle}>
            ¿Cómo funciona un proceso ejecutivo en Colombia?
          </h2>

          <p className={styles.text}>
            El proceso ejecutivo sigue una serie de etapas que buscan garantizar
            el pago de la obligación:
          </p>

          <ul className={styles.list}>
            <li>Presentación de la demanda ejecutiva</li>
            <li>Admisión por parte del juez</li>
            <li>Orden de pago al deudor</li>
            <li>Medidas cautelares como embargo de bienes</li>
            <li>Pago o remate de bienes para cubrir la deuda</li>
          </ul>

          <p className={styles.text}>
            Estas etapas pueden variar dependiendo del caso, pero su objetivo es
            garantizar el cumplimiento de la obligación.
          </p>

          <h2 className={styles.subtitle}>Embargos y medidas cautelares</h2>

          <p className={styles.text}>
            Una de las principales ventajas del proceso ejecutivo es la
            posibilidad de solicitar medidas cautelares como el embargo de
            cuentas bancarias, bienes muebles o inmuebles.
          </p>

          <p className={styles.text}>
            Estas medidas permiten asegurar el pago de la deuda y aumentan la
            efectividad del proceso.
          </p>

          <h2 className={styles.subtitle}>Relación con el cobro de cartera</h2>

          <p className={styles.text}>
            Los procesos ejecutivos son una herramienta fundamental dentro del
            cobro de cartera en Colombia. Cuando las gestiones extrajudiciales
            no funcionan, este proceso permite exigir el pago por vía judicial.
          </p>

          <p className={styles.text}>
            Por esta razón, muchas empresas recurren a este mecanismo cuando
            necesitan recuperar obligaciones pendientes de forma efectiva.
          </p>

          <h2 className={styles.subtitle}>
            ¿Cuándo iniciar un proceso ejecutivo?
          </h2>

          <p className={styles.text}>
            Es recomendable iniciar un proceso ejecutivo cuando:
          </p>

          <ul className={styles.list}>
            <li>Existe un título ejecutivo válido</li>
            <li>El deudor incumple la obligación</li>
            <li>No se logra acuerdo de pago</li>
            <li>La deuda representa un riesgo financiero</li>
          </ul>

          <p className={styles.text}>
            Contar con asesoría legal en esta etapa es clave para garantizar el
            éxito del proceso.
          </p>

          <h2 className={styles.subtitle}>
            ¿Dónde encontrar asesoría para procesos ejecutivos en Colombia?
          </h2>

          <p className={styles.text}>
            En Colombia existen firmas legales especializadas en procesos
            ejecutivos y recuperación de cartera. Es importante elegir opciones
            con experiencia en este tipo de procedimientos.
          </p>

          <p className={styles.text}>
            Si estás evaluando alternativas, puedes conocer una firma que ofrece
            este tipo de servicios a continuación.
          </p>
        </motion.section>

        {/* ================= CTA ================= */}
        <motion.section
          className={styles.cta}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Conoce una firma especializada en procesos ejecutivos
            </h2>

            <p className={styles.ctaText}>
              Explora una opción con experiencia en cobro jurídico y
              recuperación de cartera en Colombia.
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
                "Procesos ejecutivos en Colombia: qué son y cómo funcionan",
              description:
                "Guía completa sobre procesos ejecutivos en Colombia para el cobro de obligaciones legales.",
              author: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              publisher: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              mainEntityOfPage:
                "https://pravice-abogadoslaboralistas.vercel.app/blog/procesos-ejecutivos-colombia",
            }),
          }}
        />
      </main>
    </>
  );
}
