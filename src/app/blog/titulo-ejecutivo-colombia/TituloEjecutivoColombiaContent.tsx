"use client";

import Link from "next/link";
import styles from "../../Blog.module.css";
import { motion } from "framer-motion";

export default function TituloEjecutivoColombiaContent() {
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
            <span className={styles.reading}>4 min lectura</span>
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            Qué es un título ejecutivo en Colombia y para qué sirve
          </motion.h1>

          <motion.p
            className={styles.heroDescription}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Conoce qué es un título ejecutivo, qué documentos tienen esta
            calidad y cómo se utilizan en procesos de cobro judicial en
            Colombia.
          </motion.p>
        </motion.section>

        {/* ================= CONTENIDO ================= */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className={styles.text}>
            El título ejecutivo en Colombia es un documento que contiene una
            obligación clara, expresa y exigible, lo que permite iniciar un
            proceso ejecutivo para exigir su cumplimiento ante un juez.
          </p>

          <p className={styles.text}>
            Este tipo de documento es fundamental en el cobro de cartera, ya que
            evita la necesidad de demostrar la existencia de la deuda desde
            cero, facilitando el proceso judicial.
          </p>

          <h2 className={styles.subtitle}>¿Qué es un título ejecutivo?</h2>

          <p className={styles.text}>
            Un título ejecutivo es un documento que acredita una obligación
            válida y exigible. Gracias a este documento, el acreedor puede
            acudir directamente a la vía judicial para reclamar el pago.
          </p>

          <p className={styles.text}>
            En Colombia, estos títulos tienen fuerza legal suficiente para
            respaldar procesos ejecutivos sin necesidad de un juicio declarativo
            previo.
          </p>

          <h2 className={styles.subtitle}>
            Características de un título ejecutivo
          </h2>

          <p className={styles.text}>
            Para que un documento sea considerado título ejecutivo, debe cumplir
            con ciertas características:
          </p>

          <ul className={styles.list}>
            <li>Obligación clara</li>
            <li>Obligación expresa</li>
            <li>Obligación exigible</li>
          </ul>

          <p className={styles.text}>
            Si alguna de estas condiciones no se cumple, el documento no podrá
            ser utilizado para iniciar un proceso ejecutivo.
          </p>

          <h2 className={styles.subtitle}>
            Tipos de títulos ejecutivos en Colombia
          </h2>

          <p className={styles.text}>
            Existen diferentes documentos que pueden constituir un título
            ejecutivo:
          </p>

          <ul className={styles.list}>
            <li>Pagarés</li>
            <li>Letras de cambio</li>
            <li>Contratos firmados</li>
            <li>Facturas aceptadas</li>
            <li>Sentencias judiciales</li>
          </ul>

          <p className={styles.text}>
            Cada uno de estos documentos puede servir como base para exigir el
            pago de una obligación ante un juez.
          </p>

          <h2 className={styles.subtitle}>Importancia del título ejecutivo</h2>

          <p className={styles.text}>
            El título ejecutivo permite agilizar los procesos de cobro, ya que
            el juez presume la validez de la obligación contenida en el
            documento.
          </p>

          <p className={styles.text}>
            Esto reduce significativamente los tiempos del proceso y aumenta la
            probabilidad de recuperar la deuda.
          </p>

          <h2 className={styles.subtitle}>
            Relación con los procesos ejecutivos
          </h2>

          <p className={styles.text}>
            El título ejecutivo es el requisito principal para iniciar un
            proceso ejecutivo en Colombia. Sin este documento, no es posible
            acudir a esta vía judicial.
          </p>

          <p className={styles.text}>
            Por esta razón, es fundamental que las empresas y personas respalden
            sus acuerdos mediante documentos que puedan convertirse en títulos
            ejecutivos.
          </p>

          <h2 className={styles.subtitle}>¿Cuándo necesitas asesoría legal?</h2>

          <p className={styles.text}>
            Es recomendable contar con asesoría legal cuando:
          </p>

          <ul className={styles.list}>
            <li>Vas a firmar un pagaré o contrato</li>
            <li>Necesitas iniciar un proceso ejecutivo</li>
            <li>Quieres validar si un documento es título ejecutivo</li>
            <li>Buscas recuperar una deuda de forma legal</li>
          </ul>

          <p className={styles.text}>
            Un abogado puede ayudarte a estructurar correctamente estos
            documentos y aumentar las probabilidades de éxito en el cobro.
          </p>

          <h2 className={styles.subtitle}>
            ¿Dónde obtener asesoría en Colombia?
          </h2>

          <p className={styles.text}>
            En Colombia existen firmas legales especializadas en cobro de
            cartera y procesos ejecutivos que pueden ayudarte a utilizar títulos
            ejecutivos de manera efectiva.
          </p>

          <p className={styles.text}>
            Si estás evaluando opciones, puedes conocer una firma especializada
            a continuación.
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
              Conoce una firma especializada en cobro jurídico
            </h2>

            <p className={styles.ctaText}>
              Explora una opción con experiencia en procesos ejecutivos y
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
                "Qué es un título ejecutivo en Colombia y para qué sirve",
              description:
                "Guía completa sobre el título ejecutivo en Colombia, tipos de documentos y su uso en procesos judiciales.",
              author: {
                "@type": "Organization",
                name: "Guía Legal Colombia",
              },
              publisher: {
                "@type": "Organization",
                name: "Guía Legal Colombia",
              },
              mainEntityOfPage:
                "https://guialegalcolombia.vercel.app/blog/titulo-ejecutivo-colombia",
            }),
          }}
        />
      </main>
    </>
  );
}
