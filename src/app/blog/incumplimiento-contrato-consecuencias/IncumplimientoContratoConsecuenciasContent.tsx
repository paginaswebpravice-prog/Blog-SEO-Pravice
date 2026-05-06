"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../../Blog.module.css";

export default function IncumplimientoContratoConsecuenciasContent() {
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
            Qué pasa si incumples un contrato en Colombia
          </h1>

          <p className={styles.heroDescription}>
            Conoce las consecuencias legales del incumplimiento de contrato y
            qué acciones pueden tomar las partes afectadas.
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
            El incumplimiento de un contrato en Colombia puede generar
            consecuencias legales importantes tanto para personas como para
            empresas. Cuando una de las partes no cumple con lo acordado, se
            activa la responsabilidad contractual, lo que puede derivar en
            sanciones, indemnizaciones y procesos judiciales.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            En entornos empresariales como Bogotá, donde los contratos son la
            base de las relaciones comerciales, cumplir con las obligaciones es
            fundamental para evitar conflictos legales.
          </motion.p>

          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ¿Qué es el incumplimiento de contrato?
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Se produce cuando una de las partes no cumple total o parcialmente
            con las obligaciones pactadas en un contrato.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Este incumplimiento puede ser por falta de pago, retrasos, entrega
            incompleta o cualquier violación de lo acordado.
          </motion.p>

          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Consecuencias legales del incumplimiento
          </motion.h2>

          {[
            {
              title: "1. Indemnización de perjuicios",
              text: "La parte afectada puede exigir una compensación económica por los daños causados.",
            },
            {
              title: "2. Resolución del contrato",
              text: "El contrato puede darse por terminado si el incumplimiento es grave.",
            },
            {
              title: "3. Ejecución del contrato",
              text: "En algunos casos, se puede exigir judicialmente el cumplimiento de la obligación.",
            },
            {
              title: "4. Procesos judiciales",
              text: "El incumplimiento puede dar lugar a demandas civiles o procesos ejecutivos.",
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
            Tipos de incumplimiento
          </motion.h2>

          <motion.ul
            className={styles.list}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <li>Incumplimiento total</li>
            <li>Incumplimiento parcial</li>
            <li>Incumplimiento tardío</li>
            <li>Cumplimiento defectuoso</li>
          </motion.ul>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Cada tipo de incumplimiento puede tener consecuencias diferentes
            dependiendo del caso.
          </motion.p>

          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ¿Qué hacer ante un incumplimiento?
          </motion.h2>

          <motion.ul
            className={styles.list}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <li>Revisar el contrato firmado</li>
            <li>Intentar una conciliación</li>
            <li>Enviar requerimientos formales</li>
            <li>Buscar asesoría legal</li>
            <li>Iniciar acciones judiciales si es necesario</li>
          </motion.ul>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Actuar rápidamente puede evitar mayores pérdidas y facilitar la
            solución del conflicto.
          </motion.p>

          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Importancia de los contratos bien redactados
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Un contrato claro y bien estructurado facilita la solución de
            conflictos y protege a las partes en caso de incumplimiento.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Por esta razón, es fundamental contar con asesoría legal al momento
            de redactar o firmar acuerdos.
          </motion.p>

          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ¿Dónde encontrar asesoría legal en Colombia?
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Existen firmas legales especializadas en derecho civil y comercial
            que pueden ayudarte a manejar situaciones de incumplimiento
            contractual.
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
            <h2 className={styles.ctaTitle}>
              ¿Tienes un problema por incumplimiento de contrato?
            </h2>

            <p className={styles.ctaText}>
              Recibe asesoría legal para proteger tus derechos y tomar acciones
              frente a incumplimientos contractuales.
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
              headline: "Qué pasa si incumples un contrato en Colombia",
              description:
                "Guía sobre consecuencias legales del incumplimiento de contrato en Colombia.",
              author: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              publisher: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              mainEntityOfPage:
                "https://guialegalcolombia.vercel.app/blog/incumplimiento-contrato-consecuencias",
            }),
          }}
        />
      </main>
    </>
  );
}
