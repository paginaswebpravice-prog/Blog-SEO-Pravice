"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../../Blog.module.css";

export default function EvitarProblemasLegalesEmpresaContent() {
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
            <span className={styles.badge}>Empresas</span>
            <span className={styles.reading}>5 min lectura</span>
          </div>

          <h1 className={styles.heroTitle}>
            Cómo evitar problemas legales en tu empresa en Colombia
          </h1>

          <p className={styles.heroDescription}>
            Estrategias prácticas para prevenir riesgos legales, proteger tu
            negocio y operar con seguridad jurídica.
          </p>
        </motion.section>

        {/* ================= CONTENIDO ================= */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p
            className={styles.text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Evitar problemas legales en una empresa en Colombia es fundamental
            para garantizar su estabilidad, crecimiento y sostenibilidad en el
            tiempo. Muchos negocios enfrentan sanciones, demandas o pérdidas
            económicas por no cumplir adecuadamente con la normativa legal.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            En ciudades como Bogotá, donde la actividad empresarial es intensa,
            prevenir riesgos legales no solo es una obligación, sino una ventaja
            competitiva.
          </motion.p>

          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ¿Por qué es importante prevenir problemas legales?
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            La prevención legal permite evitar conflictos antes de que ocurran.
            Esto reduce costos, mejora la toma de decisiones y protege la
            reputación de la empresa.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Muchas empresas reaccionan cuando ya existe un problema, pero lo
            ideal es anticiparse a los riesgos.
          </motion.p>

          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Principales causas de problemas legales en empresas
          </motion.h2>

          <motion.ul
            className={styles.list}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <li>Falta de asesoría jurídica</li>
            <li>Contratos mal redactados</li>
            <li>Incumplimiento de normas laborales</li>
            <li>Errores tributarios</li>
            <li>Falta de control en el cobro de cartera</li>
          </motion.ul>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Identificar estas causas es el primer paso para prevenir riesgos.
          </motion.p>

          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Estrategias para evitar problemas legales
          </motion.h2>

          {[
            {
              title: "1. Contar con asesoría legal permanente",
              text: "Tener acompañamiento jurídico constante permite tomar decisiones seguras y cumplir con la ley en todo momento.",
            },
            {
              title: "2. Redactar contratos correctamente",
              text: "Los contratos deben ser claros, completos y adaptados a cada situación para evitar conflictos futuros.",
            },
            {
              title: "3. Cumplir con obligaciones laborales",
              text: "Es fundamental respetar los derechos de los trabajadores y cumplir con la normativa laboral vigente.",
            },
            {
              title: "4. Mantener al día obligaciones tributarias",
              text: "Cumplir con impuestos y obligaciones fiscales evita sanciones y problemas con entidades como la DIAN.",
            },
            {
              title: "5. Gestionar adecuadamente el cobro de cartera",
              text: "Tener políticas claras de cobro permite mantener un flujo de caja saludable y evitar pérdidas financieras.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <h3 className={styles.subheading}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
            </motion.div>
          ))}

          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Beneficios de prevenir riesgos legales
          </motion.h2>

          <motion.ul
            className={styles.list}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <li>Reducción de costos legales</li>
            <li>Mayor seguridad jurídica</li>
            <li>Mejor reputación empresarial</li>
            <li>Decisiones más informadas</li>
            <li>Mayor estabilidad del negocio</li>
          </motion.ul>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            La prevención siempre será más económica y efectiva que la solución
            de conflictos.
          </motion.p>

          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Importancia de la cultura legal en la empresa
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Implementar una cultura legal dentro de la organización ayuda a que
            todos los miembros comprendan la importancia del cumplimiento
            normativo.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Esto reduce errores y mejora la gestión empresarial en general.
          </motion.p>

          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ¿Dónde encontrar asesoría para tu empresa?
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            En Colombia existen firmas legales especializadas en derecho
            empresarial que ofrecen acompañamiento para prevenir riesgos y
            proteger tu negocio.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Si estás evaluando opciones, puedes conocer una firma a
            continuación.
          </motion.p>
        </motion.section>

        {/* ================= CTA ================= */}
        <motion.section
          className={styles.cta}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Protege tu empresa desde hoy</h2>

            <p className={styles.ctaText}>
              Evita problemas legales y toma decisiones seguras con asesoría
              jurídica especializada.
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
                "Cómo evitar problemas legales en tu empresa en Colombia",
              description:
                "Guía práctica para prevenir riesgos legales empresariales en Colombia.",
              author: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              publisher: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              mainEntityOfPage:
                "https://guialegalcolombia.vercel.app/blog/evitar-problemas-legales-empresa",
            }),
          }}
        />
      </main>
    </>
  );
}
