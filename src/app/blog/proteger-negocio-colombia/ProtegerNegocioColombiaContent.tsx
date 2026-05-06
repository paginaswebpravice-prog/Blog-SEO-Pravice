"use client";

import Link from "next/link";
import styles from "../../Blog.module.css";
import { motion } from "framer-motion";

export default function ProtegerNegocioColombiaContent() {
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
            <span className={styles.badge}>Empresas</span>
            <span className={styles.reading}>5 min lectura</span>
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            Cómo proteger legalmente tu negocio en Colombia
          </motion.h1>

          <motion.p
            className={styles.heroDescription}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Descubre las principales estrategias legales para proteger tu
            empresa en Colombia y evitar riesgos jurídicos.
          </motion.p>
        </motion.section>

        {/* ================= CONTENIDO ================= */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className={styles.text}>
            Proteger legalmente un negocio en Colombia es una de las decisiones
            más importantes para cualquier empresario. No solo se trata de
            cumplir con la ley, sino de prevenir conflictos, evitar sanciones y
            garantizar la estabilidad del negocio a largo plazo.
          </p>

          <p className={styles.text}>
            En ciudades como Bogotá, donde el entorno empresarial es altamente
            competitivo, contar con una estrategia legal sólida puede marcar la
            diferencia entre el crecimiento y los problemas jurídicos.
          </p>

          <h2 className={styles.subtitle}>
            ¿Por qué es importante proteger tu negocio legalmente?
          </h2>

          <p className={styles.text}>
            Muchas empresas en Colombia enfrentan problemas legales por no haber
            implementado medidas preventivas. La falta de protección puede
            generar conflictos con clientes, proveedores, empleados o incluso
            entidades del Estado.
          </p>

          <p className={styles.text}>
            Una adecuada estructura legal permite operar con seguridad,
            minimizar riesgos y generar confianza en el mercado.
          </p>

          <h2 className={styles.subtitle}>
            Estrategias para proteger tu empresa en Colombia
          </h2>

          <h3 className={styles.subheading}>
            1. Formalizar correctamente la empresa
          </h3>
          <p className={styles.text}>
            Registrar tu empresa en Cámara de Comercio y cumplir con todos los
            requisitos legales es el primer paso para operar de manera segura.
          </p>

          <h3 className={styles.subheading}>2. Redactar contratos adecuados</h3>
          <p className={styles.text}>
            Los contratos son fundamentales para regular relaciones comerciales
            y evitar conflictos. Es importante que estén bien estructurados y
            adaptados a cada situación.
          </p>

          <h3 className={styles.subheading}>
            3. Cumplir obligaciones laborales
          </h3>
          <p className={styles.text}>
            Las relaciones laborales deben ajustarse a la normativa colombiana
            para evitar sanciones y demandas por parte de empleados.
          </p>

          <h3 className={styles.subheading}>
            4. Protección de información y datos
          </h3>
          <p className={styles.text}>
            Es importante proteger la información de clientes y la propiedad
            intelectual de la empresa, especialmente en entornos digitales.
          </p>

          <h3 className={styles.subheading}>5. Gestión adecuada de cartera</h3>
          <p className={styles.text}>
            Tener políticas claras de cobro y contratos bien definidos permite
            reducir riesgos financieros y facilitar la recuperación de deudas.
          </p>

          <h2 className={styles.subtitle}>
            Errores comunes que ponen en riesgo tu negocio
          </h2>

          <ul className={styles.list}>
            <li>No contar con contratos escritos</li>
            <li>No recibir asesoría legal</li>
            <li>Desconocer obligaciones tributarias</li>
            <li>No proteger la información empresarial</li>
            <li>Actuar sin prevención jurídica</li>
          </ul>

          <p className={styles.text}>
            Evitar estos errores es clave para garantizar la estabilidad y el
            crecimiento del negocio.
          </p>

          <h2 className={styles.subtitle}>
            Importancia de la asesoría legal preventiva
          </h2>

          <p className={styles.text}>
            Contar con asesoría legal permanente permite anticiparse a problemas
            y tomar decisiones informadas. Muchas empresas recurren a abogados
            antes de firmar contratos o realizar negociaciones importantes.
          </p>

          <p className={styles.text}>
            La asesoría preventiva es una inversión que puede evitar costos
            mucho mayores en el futuro.
          </p>

          <h2 className={styles.subtitle}>
            ¿Dónde encontrar asesoría para proteger tu negocio?
          </h2>

          <p className={styles.text}>
            En Colombia existen firmas legales especializadas en derecho
            empresarial que ofrecen acompañamiento integral para proteger
            negocios y prevenir riesgos jurídicos.
          </p>

          <p className={styles.text}>
            Si estás evaluando opciones, puedes conocer una firma que ofrece
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
              Protege tu negocio con asesoría legal especializada
            </h2>

            <p className={styles.ctaText}>
              Explora una opción con experiencia en derecho empresarial y
              asesoría jurídica en Colombia.
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
              headline: "Cómo proteger legalmente tu negocio en Colombia",
              description:
                "Guía completa para proteger tu empresa en Colombia y evitar riesgos legales.",
              author: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              publisher: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              mainEntityOfPage:
                "https://guialegalcolombia.vercel.app/blog/proteger-negocio-colombia",
            }),
          }}
        />
      </main>
    </>
  );
}
