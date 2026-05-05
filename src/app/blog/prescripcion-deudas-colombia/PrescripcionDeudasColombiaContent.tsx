"use client";

import Link from "next/link";
import styles from "../../Blog.module.css";
import { motion } from "framer-motion";

export default function PrescripcionDeudasColombiaContent() {
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
            <span className={styles.badge}>Finanzas</span>
            <span className={styles.reading}>5 min lectura</span>
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            Cuándo prescribe una deuda en Colombia
          </motion.h1>

          <motion.p
            className={styles.heroDescription}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Conoce los plazos legales y qué significa que una deuda deje de ser
            exigible según la ley colombiana.
          </motion.p>
        </motion.section>

        {/* ================= CONTENIDO ================= */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className={styles.text}>
            La prescripción de deudas en Colombia es un concepto legal que
            indica el momento en el cual una obligación deja de ser exigible
            judicialmente debido al paso del tiempo. Esto ocurre cuando el
            acreedor no ejerce acciones legales dentro de un plazo determinado.
          </p>

          <p className={styles.text}>
            Este tema es clave tanto para deudores como para empresas,
            especialmente en ciudades como Bogotá donde el cobro de cartera es
            frecuente.
          </p>

          <h2 className={styles.subtitle}>
            ¿Qué es la prescripción de una deuda?
          </h2>

          <p className={styles.text}>
            Es la pérdida del derecho del acreedor para exigir el pago de una
            deuda a través de la vía judicial debido al transcurso del tiempo
            sin haber reclamado legalmente.
          </p>

          <p className={styles.text}>
            Sin embargo, esto no significa que la deuda desaparezca
            completamente, sino que ya no puede ser cobrada por medios
            judiciales.
          </p>

          <h2 className={styles.subtitle}>
            Plazos de prescripción en Colombia
          </h2>

          <p className={styles.text}>
            Los plazos pueden variar según el tipo de obligación:
          </p>

          <ul className={styles.list}>
            <li>Pagarés y letras de cambio: generalmente 3 años</li>
            <li>Obligaciones civiles: hasta 5 años</li>
            <li>
              Algunas obligaciones comerciales: pueden variar según el caso
            </li>
          </ul>

          <p className={styles.text}>
            Es importante revisar cada caso específico, ya que los plazos pueden
            cambiar según el tipo de documento.
          </p>

          <h2 className={styles.subtitle}>¿Qué interrumpe la prescripción?</h2>

          <p className={styles.text}>
            La prescripción puede interrumpirse cuando el acreedor realiza
            ciertas acciones legales:
          </p>

          <ul className={styles.list}>
            <li>Presentación de una demanda</li>
            <li>Reconocimiento de la deuda por parte del deudor</li>
            <li>Acuerdos de pago</li>
          </ul>

          <p className={styles.text}>
            Estas acciones reinician el conteo del tiempo de prescripción.
          </p>

          <h2 className={styles.subtitle}>¿Qué pasa si una deuda prescribe?</h2>

          <p className={styles.text}>
            Cuando una deuda prescribe, el acreedor pierde la posibilidad de
            exigir el pago mediante un proceso judicial. Sin embargo, en algunos
            casos, el cobro extrajudicial puede continuar.
          </p>

          <p className={styles.text}>
            Además, la deuda podría seguir apareciendo en reportes financieros
            dependiendo de la situación.
          </p>

          <h2 className={styles.subtitle}>Importancia de actuar a tiempo</h2>

          <p className={styles.text}>
            Para los acreedores, es fundamental iniciar acciones legales antes
            de que la deuda prescriba. Para los deudores, conocer estos plazos
            permite entender sus derechos.
          </p>

          <p className={styles.text}>
            La gestión oportuna de las deudas evita pérdidas económicas y
            problemas legales.
          </p>

          <h2 className={styles.subtitle}>Relación con el cobro de cartera</h2>

          <p className={styles.text}>
            La prescripción está directamente relacionada con el cobro de
            cartera. Si no se actúa a tiempo, la empresa puede perder la
            posibilidad de recuperar el dinero por vía judicial.
          </p>

          <p className={styles.text}>
            Por esta razón, muchas organizaciones implementan estrategias de
            cobro preventivo y jurídico.
          </p>

          <h2 className={styles.subtitle}>¿Dónde encontrar asesoría legal?</h2>

          <p className={styles.text}>
            Existen firmas legales en Colombia especializadas en recuperación de
            cartera y asesoría en prescripción de deudas.
          </p>

          <p className={styles.text}>
            Si estás evaluando opciones, puedes conocer una firma a
            continuación.
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
              Protege tus derechos frente a deudas
            </h2>

            <p className={styles.ctaText}>
              Recibe asesoría legal sobre prescripción de deudas y cobro de
              cartera en Colombia.
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
              headline: "Cuándo prescribe una deuda en Colombia",
              description:
                "Guía completa sobre prescripción de deudas en Colombia y plazos legales.",
              author: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              publisher: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              mainEntityOfPage:
                "https://guialegalcolombia.vercel.app/blog/prescripcion-deudas-colombia",
            }),
          }}
        />
      </main>
    </>
  );
}
