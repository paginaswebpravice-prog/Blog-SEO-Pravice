"use client";

import Link from "next/link";
import styles from "../../Blog.module.css";
import { motion } from "framer-motion";

export default function AbogadoCobroCarteraBogotaContent() {
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
            <span className={styles.badge}>Finanzas</span>
            <span className={styles.reading}>5 min lectura</span>
          </div>

          <h1 className={styles.heroTitle}>
            Abogado para cobro de cartera en Bogotá: cuándo contratar uno
          </h1>

          <p className={styles.heroDescription}>
            Descubre en qué casos necesitas un abogado para recuperar deudas en
            Bogotá y cómo hacerlo de forma legal y efectiva.
          </p>
        </motion.section>

        {/* ================= CONTENIDO ================= */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className={styles.text}>
            El cobro de cartera es una de las principales preocupaciones para
            empresas y emprendedores en Bogotá. Cuando un cliente no paga, no
            solo se afecta la liquidez del negocio, sino también su estabilidad
            financiera. En estos casos, contar con un abogado especializado en
            cobro de cartera puede marcar una gran diferencia.
          </p>

          <p className={styles.text}>
            Aunque muchas deudas pueden resolverse de manera directa, existen
            situaciones en las que es necesario acudir a mecanismos legales para
            garantizar el pago.
          </p>

          <h2 className={styles.subtitle}>
            ¿Qué hace un abogado de cobro de cartera?
          </h2>

          <p className={styles.text}>
            Un abogado especializado en cobro de cartera se encarga de recuperar
            deudas mediante estrategias legales, tanto en etapas extrajudiciales
            como judiciales.
          </p>

          <ul className={styles.list}>
            <li>Gestión de cobro persuasivo</li>
            <li>Negociación de acuerdos de pago</li>
            <li>Asesoría jurídica preventiva</li>
            <li>Inicio de procesos ejecutivos</li>
            <li>Representación ante jueces</li>
          </ul>

          <h2 className={styles.subtitle}>
            ¿Cuándo necesitas un abogado para cobro de cartera?
          </h2>

          <p className={styles.text}>
            No siempre es necesario acudir inmediatamente a un abogado. Sin
            embargo, hay señales claras de que es momento de buscar asesoría
            profesional:
          </p>

          <ul className={styles.list}>
            <li>El deudor deja de responder llamadas o mensajes</li>
            <li>La deuda supera un monto significativo</li>
            <li>Se incumplen acuerdos de pago previos</li>
            <li>Existen documentos como pagarés o contratos</li>
            <li>El tiempo de mora sigue aumentando</li>
          </ul>

          <h2 className={styles.subtitle}>
            Etapas del cobro de cartera en Bogotá
          </h2>

          <h3 className={styles.subheading}>Cobro persuasivo</h3>
          <p className={styles.text}>
            Es la primera fase, donde se busca recuperar la deuda mediante
            comunicación directa con el deudor, sin acudir a instancias legales.
          </p>

          <h3 className={styles.subheading}>Cobro prejurídico</h3>
          <p className={styles.text}>
            En esta etapa se formalizan los requerimientos de pago y se advierte
            sobre posibles acciones legales.
          </p>

          <h3 className={styles.subheading}>Cobro jurídico</h3>
          <p className={styles.text}>
            Cuando no hay respuesta, el abogado inicia un proceso judicial para
            exigir el pago de la obligación.
          </p>

          <h2 className={styles.subtitle}>
            Procesos ejecutivos: la vía legal más efectiva
          </h2>

          <p className={styles.text}>
            En Colombia, los procesos ejecutivos permiten exigir el pago de una
            deuda cuando existe un título ejecutivo como un pagaré o contrato.
          </p>

          <p className={styles.text}>
            Estos procesos permiten solicitar medidas como embargos de cuentas o
            bienes, aumentando las probabilidades de recuperación.
          </p>

          <h2 className={styles.subtitle}>
            Beneficios de contratar un abogado de cartera
          </h2>

          <ul className={styles.list}>
            <li>Mayor probabilidad de recuperar la deuda</li>
            <li>Reducción de tiempos de cobro</li>
            <li>Estrategias legales efectivas</li>
            <li>Evita errores jurídicos</li>
            <li>Protección de los intereses del negocio</li>
          </ul>

          <h2 className={styles.subtitle}>
            ¿Dónde encontrar abogados de cobro de cartera en Bogotá?
          </h2>

          <p className={styles.text}>
            En Bogotá existen firmas especializadas en recuperación de cartera
            que combinan estrategias legales y comerciales para obtener
            resultados efectivos.
          </p>

          <p className={styles.text}>
            Si estás evaluando opciones, es recomendable elegir una firma con
            experiencia en procesos ejecutivos y cobro jurídico.
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
              ¿Necesitas ayuda para recuperar una deuda?
            </h2>

            <p className={styles.ctaText}>
              Conoce una firma especializada en cobro de cartera en Bogotá y
              recibe asesoría para recuperar tus obligaciones pendientes.
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
                "Abogado para cobro de cartera en Bogotá: cuándo contratar uno",
              description:
                "Guía sobre cuándo contratar un abogado para cobro de cartera en Bogotá y cómo recuperar deudas legalmente.",
              author: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              publisher: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              mainEntityOfPage:
                "https://pravice-abogadoslaboralistas.vercel.app/blog/abogado-cobro-cartera-bogota",
            }),
          }}
        />
      </main>
    </>
  );
}
