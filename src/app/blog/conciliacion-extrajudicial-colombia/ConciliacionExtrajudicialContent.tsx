"use client";

import Link from "next/dist/client/link";
import styles from "../../Blog.module.css";
import { motion } from "framer-motion";

export default function ConciliacionExtrajudicialContent() {
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

      {/* HERO */}
      <main className={styles.container}>
        <motion.section
          className={styles.hero}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className={styles.badges}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className={styles.badge}>Legal</span>
            <span className={styles.reading}>5 min lectura</span>
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Conciliación extrajudicial en Colombia: qué es y cómo funciona
          </motion.h1>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Conoce cómo la conciliación extrajudicial permite resolver
            conflictos legales en Colombia sin necesidad de acudir a un proceso
            judicial.
          </motion.p>
        </motion.section>

        {/* CONTENIDO */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {[
            <>
              <p className={styles.text}>
                La conciliación extrajudicial en Colombia es un mecanismo
                alternativo de resolución de conflictos que permite a las partes
                llegar a un acuerdo sin necesidad de iniciar un proceso
                judicial. Este mecanismo es cada vez más utilizado en ciudades
                como Bogotá debido a su rapidez, eficiencia y menor costo.
              </p>

              <p className={styles.text}>
                En muchos casos, la conciliación no solo es una opción, sino un
                requisito obligatorio antes de acudir a la vía judicial,
                especialmente en temas civiles y comerciales.
              </p>
            </>,
            <>
              <h2 className={styles.subtitle}>
                ¿Qué es la conciliación extrajudicial?
              </h2>

              <p className={styles.text}>
                Es un procedimiento mediante el cual dos o más partes en
                conflicto buscan resolver sus diferencias con la ayuda de un
                conciliador neutral, quien facilita el diálogo y propone
                soluciones.
              </p>

              <p className={styles.text}>
                El acuerdo alcanzado tiene efectos legales y puede ser exigible
                ante la ley, lo que lo convierte en una herramienta eficaz para
                evitar procesos largos.
              </p>
            </>,
            <>
              <h2 className={styles.subtitle}>
                ¿En qué casos aplica la conciliación en Colombia?
              </h2>

              <ul className={styles.list}>
                <li>Conflictos civiles</li>
                <li>Problemas contractuales</li>
                <li>Deudas y cobro de cartera</li>
                <li>Responsabilidad civil</li>
                <li>Algunos temas familiares</li>
              </ul>

              <p className={styles.text}>
                No todos los conflictos pueden resolverse por esta vía, pero en
                muchos casos es el primer paso antes de acudir a un juez.
              </p>
            </>,
            <>
              <h2 className={styles.subtitle}>
                ¿Cómo funciona el proceso de conciliación?
              </h2>

              <h3 className={styles.subheading}>1. Solicitud</h3>
              <p className={styles.text}>
                Una de las partes presenta una solicitud ante un centro de
                conciliación autorizado.
              </p>

              <h3 className={styles.subheading}>2. Citación</h3>
              <p className={styles.text}>
                Se convoca a la otra parte para asistir a una audiencia de
                conciliación.
              </p>

              <h3 className={styles.subheading}>3. Audiencia</h3>
              <p className={styles.text}>
                Las partes exponen su situación y el conciliador facilita el
                diálogo para llegar a un acuerdo.
              </p>

              <h3 className={styles.subheading}>4. Acuerdo</h3>
              <p className={styles.text}>
                Si se logra un acuerdo, este queda registrado y tiene validez
                legal.
              </p>
            </>,
            <>
              <h2 className={styles.subtitle}>
                Beneficios de la conciliación extrajudicial
              </h2>

              <ul className={styles.list}>
                <li>Menor tiempo en comparación con un proceso judicial</li>
                <li>Reducción de costos legales</li>
                <li>Soluciones más rápidas y prácticas</li>
                <li>Menor desgaste emocional</li>
                <li>Evita procesos largos en juzgados</li>
              </ul>
            </>,
            <>
              <h2 className={styles.subtitle}>
                ¿Es obligatoria la conciliación en Colombia?
              </h2>

              <p className={styles.text}>
                En algunos casos, sí. La ley colombiana establece que ciertos
                procesos requieren intentar una conciliación antes de acudir a
                la vía judicial, especialmente en temas civiles y comerciales.
              </p>
            </>,
            <>
              <h2 className={styles.subtitle}>Conciliación en Bogotá</h2>

              <p className={styles.text}>
                En Bogotá existen múltiples centros de conciliación autorizados
                donde puedes iniciar este proceso. Además, muchas firmas legales
                ofrecen acompañamiento para aumentar las probabilidades de éxito
                en la negociación.
              </p>

              <p className={styles.text}>
                Contar con asesoría jurídica puede marcar la diferencia entre
                lograr un acuerdo favorable o no alcanzar una solución.
              </p>
            </>,
          ].map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {block}
            </motion.div>
          ))}
        </motion.section>

        {/* CTA */}
        <motion.section
          className={styles.cta}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              ¿Necesitas ayuda con una conciliación?
            </h2>

            <p className={styles.ctaText}>
              Existen equipos legales que pueden acompañarte en procesos de
              conciliación para ayudarte a lograr acuerdos favorables sin acudir
              a juicio.
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

        {/* SCHEMA (sin tocar) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline:
                "Conciliación extrajudicial en Colombia: qué es y cómo funciona",
              description:
                "Guía sobre conciliación extrajudicial en Colombia, proceso, beneficios y requisitos.",
              author: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              publisher: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              mainEntityOfPage:
                "https://guialegalcolombia.vercel.app/blog/conciliacion-extrajudicial",
            }),
          }}
        />
      </main>
    </>
  );
}
