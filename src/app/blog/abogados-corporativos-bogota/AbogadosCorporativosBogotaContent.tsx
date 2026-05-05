"use client";

import Link from "next/link";
import styles from "../../Blog.module.css";
import { motion } from "framer-motion";

export default function AbogadosCorporativosBogotaContent() {
  return (
    <>
      {/* ================= BACK ================= */}
      <motion.div
        className={styles.backWrapper}
        initial={{ opacity: 0, y: 10 }}
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
            <span className={styles.reading}>5 min lectura</span>
          </div>

          <h1 className={styles.heroTitle}>
            Abogados corporativos en Bogotá: funciones y beneficios
          </h1>

          <p className={styles.heroDescription}>
            Conoce por qué los abogados corporativos son clave para proteger y
            hacer crecer tu empresa en Colombia.
          </p>
        </motion.section>

        {/* ================= CONTENIDO ================= */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className={styles.text}>
            Los abogados corporativos en Bogotá desempeñan un papel fundamental
            en el funcionamiento de las empresas, ya que se encargan de
            garantizar que todas las actividades se realicen dentro del marco
            legal.
          </p>

          <p className={styles.text}>
            En una ciudad con alta actividad empresarial como Bogotá, contar con
            asesoría jurídica especializada no solo es una ventaja competitiva,
            sino una necesidad para evitar riesgos legales y financieros.
          </p>

          <h2 className={styles.subtitle}>¿Qué es un abogado corporativo?</h2>

          <p className={styles.text}>
            Un abogado corporativo es un profesional del derecho especializado
            en asesorar empresas en temas legales relacionados con su operación,
            estructura y crecimiento.
          </p>

          <p className={styles.text}>
            Su enfoque principal es preventivo, buscando evitar conflictos y
            garantizar el cumplimiento de las normas legales.
          </p>

          <h2 className={styles.subtitle}>
            Funciones de los abogados corporativos
          </h2>

          <ul className={styles.list}>
            <li>Asesoría legal permanente para empresas</li>
            <li>Redacción y revisión de contratos</li>
            <li>Constitución y reorganización de sociedades</li>
            <li>Cumplimiento normativo (compliance)</li>
            <li>Prevención de riesgos legales</li>
          </ul>

          <p className={styles.text}>
            Estas funciones permiten que las empresas operen con mayor seguridad
            y estabilidad en el mercado.
          </p>

          <h2 className={styles.subtitle}>
            Beneficios de contar con abogados corporativos en Bogotá
          </h2>

          <p className={styles.text}>
            Tener un abogado corporativo puede marcar la diferencia en la
            gestión empresarial. Algunos beneficios clave incluyen:
          </p>

          <ul className={styles.list}>
            <li>Reducción de riesgos legales</li>
            <li>Mejor toma de decisiones estratégicas</li>
            <li>Prevención de conflictos con socios o clientes</li>
            <li>Optimización de procesos legales</li>
            <li>Mayor confianza en inversionistas</li>
          </ul>

          <h2 className={styles.subtitle}>
            Diferencia entre abogado corporativo y litigante
          </h2>

          <p className={styles.text}>
            A diferencia del abogado litigante, que actúa cuando ya existe un
            conflicto legal, el abogado corporativo trabaja en la prevención de
            problemas.
          </p>

          <p className={styles.text}>
            Ambos perfiles son importantes, pero el corporativo es clave para
            evitar que la empresa llegue a instancias judiciales.
          </p>

          <h2 className={styles.subtitle}>
            ¿Cuándo necesita una empresa un abogado corporativo?
          </h2>

          <ul className={styles.list}>
            <li>Al crear una empresa</li>
            <li>Al firmar contratos importantes</li>
            <li>Durante procesos de expansión</li>
            <li>En reorganizaciones internas</li>
            <li>Para cumplimiento legal constante</li>
          </ul>

          <p className={styles.text}>
            Incluso pequeñas y medianas empresas pueden beneficiarse de este
            tipo de asesoría.
          </p>

          <h2 className={styles.subtitle}>
            Abogados corporativos para pymes en Colombia
          </h2>

          <p className={styles.text}>
            Muchas pymes en Colombia no cuentan con asesoría legal permanente,
            lo que aumenta el riesgo de cometer errores que pueden resultar
            costosos.
          </p>

          <p className={styles.text}>
            Contar con apoyo jurídico permite a estas empresas crecer de forma
            organizada y segura.
          </p>

          <h2 className={styles.subtitle}>
            ¿Dónde encontrar abogados corporativos en Bogotá?
          </h2>

          <p className={styles.text}>
            En Bogotá existen diversas firmas legales especializadas en derecho
            corporativo. Es importante elegir opciones con experiencia en
            asesoría empresarial y conocimiento del entorno local.
          </p>

          <p className={styles.text}>
            Si estás evaluando alternativas, puedes conocer una firma
            especializada a continuación.
          </p>
        </motion.section>

        {/* ================= CTA ================= */}
        <motion.section
          className={styles.cta}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Conoce una firma de abogados corporativos en Bogotá
            </h2>

            <p className={styles.ctaText}>
              Explora una opción con experiencia en asesoría jurídica
              empresarial y derecho corporativo en Colombia.
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
                "Abogados corporativos en Bogotá: funciones y beneficios",
              description:
                "Guía completa sobre abogados corporativos en Bogotá y su importancia para empresas.",
              author: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              publisher: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              mainEntityOfPage:
                "https://guialegalcolombia.vercel.app/blog/abogados-corporativos-bogota",
            }),
          }}
        />
      </main>
    </>
  );
}
