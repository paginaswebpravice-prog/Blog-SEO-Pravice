"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../../Blog.module.css";

export default function DerechoLaboralColombiaContent() {
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
            Derecho laboral en Colombia: derechos y obligaciones
          </h1>

          <p className={styles.heroDescription}>
            Todo lo que debes saber sobre relaciones laborales en Colombia,
            derechos del trabajador y obligaciones del empleador.
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
            El derecho laboral en Colombia es la rama del derecho encargada de
            regular las relaciones entre empleadores y trabajadores. Su objetivo
            es garantizar condiciones justas de trabajo, proteger los derechos
            del empleado y establecer obligaciones claras para las empresas.
          </p>

          <p className={styles.text}>
            En ciudades como Bogotá, donde existe una alta actividad
            empresarial, el cumplimiento de la normativa laboral es fundamental
            para evitar sanciones y conflictos legales.
          </p>

          <h2 className={styles.subtitle}>¿Qué es el derecho laboral?</h2>

          <p className={styles.text}>
            El derecho laboral es el conjunto de normas que regulan el trabajo
            humano, estableciendo derechos, deberes y garantías tanto para
            trabajadores como empleadores.
          </p>

          <p className={styles.text}>
            En Colombia, estas normas están principalmente contenidas en el
            Código Sustantivo del Trabajo.
          </p>

          <h2 className={styles.subtitle}>
            Derechos de los trabajadores en Colombia
          </h2>

          <ul className={styles.list}>
            <li>Salario justo y oportuno</li>
            <li>Prestaciones sociales</li>
            <li>Afiliación a seguridad social</li>
            <li>Jornada laboral regulada</li>
            <li>Vacaciones y descansos</li>
          </ul>

          <p className={styles.text}>
            Estos derechos son fundamentales y deben ser respetados por todos
            los empleadores.
          </p>

          <h2 className={styles.subtitle}>Obligaciones de los empleadores</h2>

          <ul className={styles.list}>
            <li>Pagar salarios y prestaciones</li>
            <li>Afiliar a seguridad social</li>
            <li>Cumplir con normas de seguridad laboral</li>
            <li>Respetar la jornada laboral</li>
            <li>Garantizar condiciones dignas de trabajo</li>
          </ul>

          <p className={styles.text}>
            El incumplimiento de estas obligaciones puede generar sanciones
            legales.
          </p>

          <h2 className={styles.subtitle}>
            Tipos de contrato laboral en Colombia
          </h2>

          <ul className={styles.list}>
            <li>Contrato a término indefinido</li>
            <li>Contrato a término fijo</li>
            <li>Contrato por obra o labor</li>
            <li>Contrato de prestación de servicios</li>
          </ul>

          <p className={styles.text}>
            Cada tipo de contrato tiene características específicas que deben
            ser analizadas según el caso.
          </p>

          <h2 className={styles.subtitle}>Conflictos laborales más comunes</h2>

          <ul className={styles.list}>
            <li>Despidos sin justa causa</li>
            <li>Incumplimiento de pagos</li>
            <li>Acoso laboral</li>
            <li>Liquidaciones incorrectas</li>
          </ul>

          <p className={styles.text}>
            Estos conflictos pueden resolverse mediante conciliación o procesos
            judiciales.
          </p>

          <h2 className={styles.subtitle}>
            Importancia de la asesoría laboral
          </h2>

          <p className={styles.text}>
            Tanto empresas como trabajadores pueden beneficiarse de contar con
            asesoría en derecho laboral. Esto permite prevenir conflictos,
            cumplir la ley y tomar decisiones informadas.
          </p>

          <p className={styles.text}>
            En Colombia, muchas empresas recurren a abogados laboralistas para
            evitar riesgos legales.
          </p>

          <h2 className={styles.subtitle}>
            ¿Dónde encontrar asesoría laboral en Colombia?
          </h2>

          <p className={styles.text}>
            Existen firmas legales especializadas en derecho laboral que ofrecen
            asesoría tanto a trabajadores como a empresas.
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
              Conoce una firma especializada en derecho laboral
            </h2>

            <p className={styles.ctaText}>
              Recibe asesoría jurídica en temas laborales y protege tus derechos
              o tu empresa.
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
              headline: "Derecho laboral en Colombia: derechos y obligaciones",
              description:
                "Guía completa sobre derecho laboral en Colombia para trabajadores y empresas.",
              author: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              publisher: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              mainEntityOfPage:
                "https://guialegalcolombia.vercel.app/blog/derecho-laboral-colombia",
            }),
          }}
        />
      </main>
    </>
  );
}
