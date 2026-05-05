"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../../Blog.module.css";

export default function AsesoriaLegalPermanenteContent() {
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
            <span className={styles.badge}>Empresas</span>
            <span className={styles.reading}>4 min lectura</span>
          </div>

          <h1 className={styles.heroTitle}>
            Ventajas de contratar asesoría legal permanente en Colombia
          </h1>

          <p className={styles.heroDescription}>
            Descubre cómo la asesoría jurídica continua puede proteger tu
            empresa y ayudarte a tomar mejores decisiones en Colombia.
          </p>
        </motion.section>

        {/* ================= CONTENIDO ================= */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className={styles.text}>
            La asesoría legal permanente en Colombia se ha convertido en una
            herramienta clave para empresas que buscan operar de manera segura y
            evitar problemas jurídicos. Más allá de resolver conflictos, este
            servicio permite anticiparse a riesgos y tomar decisiones
            estratégicas con respaldo legal.
          </p>

          <p className={styles.text}>
            En ciudades como Bogotá, donde el entorno empresarial es dinámico,
            contar con apoyo jurídico constante puede marcar una gran diferencia
            en el crecimiento y estabilidad de un negocio.
          </p>

          <h2 className={styles.subtitle}>
            ¿Qué es la asesoría legal permanente?
          </h2>

          <p className={styles.text}>
            La asesoría legal permanente consiste en contar con el apoyo
            continuo de abogados que acompañan a una empresa en sus decisiones
            diarias, contratos, operaciones y cumplimiento normativo.
          </p>

          <p className={styles.text}>
            A diferencia de contratar un abogado solo en situaciones puntuales,
            este modelo busca prevenir problemas antes de que ocurran.
          </p>

          <h2 className={styles.subtitle}>
            Beneficios de la asesoría jurídica continua
          </h2>

          <ul className={styles.list}>
            <li>Prevención de riesgos legales</li>
            <li>Mejor toma de decisiones empresariales</li>
            <li>Reducción de costos por litigios</li>
            <li>Mayor seguridad jurídica</li>
            <li>Cumplimiento de normativas legales</li>
          </ul>

          <h2 className={styles.subtitle}>
            Diferencia entre asesoría permanente y abogado ocasional
          </h2>

          <p className={styles.text}>
            Mientras un abogado ocasional interviene cuando surge un problema,
            la asesoría permanente actúa de forma preventiva, evitando que los
            conflictos escalen a procesos legales.
          </p>

          <p className={styles.text}>
            Esto no solo reduce riesgos, sino que también optimiza la gestión
            interna de la empresa.
          </p>

          <h2 className={styles.subtitle}>
            ¿Qué incluye una asesoría legal permanente?
          </h2>

          <ul className={styles.list}>
            <li>Revisión y redacción de contratos</li>
            <li>Asesoría en decisiones estratégicas</li>
            <li>Apoyo en cumplimiento normativo</li>
            <li>Gestión de riesgos legales</li>
            <li>Acompañamiento en negociaciones</li>
          </ul>

          <h2 className={styles.subtitle}>
            ¿Qué tipo de empresas deberían tener este servicio?
          </h2>

          <p className={styles.text}>
            La asesoría legal permanente es ideal para:
          </p>

          <ul className={styles.list}>
            <li>Empresas en crecimiento</li>
            <li>Pymes con operaciones constantes</li>
            <li>Negocios con múltiples contratos</li>
            <li>Empresas que buscan prevenir conflictos legales</li>
          </ul>

          <p className={styles.text}>
            Incluso pequeños negocios pueden beneficiarse al evitar errores
            legales que pueden resultar costosos.
          </p>

          <h2 className={styles.subtitle}>
            Importancia en el entorno empresarial colombiano
          </h2>

          <p className={styles.text}>
            En Colombia, las normativas legales pueden ser complejas y cambiar
            con frecuencia. Contar con asesoría permanente permite a las
            empresas mantenerse actualizadas y cumplir con sus obligaciones.
          </p>

          <p className={styles.text}>
            Además, genera confianza en clientes, socios e inversionistas,
            fortaleciendo la reputación del negocio.
          </p>

          <h2 className={styles.subtitle}>
            ¿Dónde encontrar asesoría legal permanente en Colombia?
          </h2>

          <p className={styles.text}>
            Existen firmas legales especializadas en asesoría empresarial que
            ofrecen este servicio de manera integral. Es importante elegir
            opciones con experiencia y enfoque preventivo.
          </p>

          <p className={styles.text}>
            Si estás evaluando alternativas, puedes conocer una firma a
            continuación.
          </p>
        </motion.section>

        {/* ================= CTA ================= */}
        <motion.section
          className={styles.cta}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Protege tu empresa con asesoría legal permanente
            </h2>

            <p className={styles.ctaText}>
              Conoce una opción que ofrece acompañamiento jurídico continuo para
              empresas en Colombia.
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
                "Ventajas de contratar asesoría legal permanente en Colombia",
              description:
                "Guía sobre la importancia de la asesoría legal permanente para empresas en Colombia.",
              author: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              publisher: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              mainEntityOfPage:
                "https://guialegalcolombia.vercel.app/blog/asesoria-legal-permanente",
            }),
          }}
        />
      </main>
    </>
  );
}
