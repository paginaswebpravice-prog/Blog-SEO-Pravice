"use client";

import Link from "next/link";
import styles from "../../Blog.module.css";

export default function ComoHacerContratoColombiaContent() {
  return (
    <>
      {/* ================= BACK ================= */}
      <div className={styles.backWrapper}>
        <Link href="/" className={styles.back}>
          <span className={styles.arrow}>←</span>
          Volver al blog
        </Link>
      </div>

      {/* ================= HERO ================= */}
      <main className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.badges}>
            <span className={styles.badge}>Legal</span>
            <span className={styles.reading}>5 min lectura</span>
          </div>

          <h1 className={styles.heroTitle}>
            Cómo hacer un contrato en Colombia paso a paso
          </h1>

          <p className={styles.heroDescription}>
            Aprende a redactar contratos legales en Colombia de forma correcta y
            evita problemas legales.
          </p>
        </section>

        {/* ================= CONTENIDO ================= */}
        <section>
          <p className={styles.text}>
            Saber cómo hacer un contrato en Colombia es fundamental para
            garantizar acuerdos claros y evitar conflictos legales. Un contrato
            bien redactado protege los intereses de las partes y establece
            obligaciones precisas.
          </p>

          <p className={styles.text}>
            En entornos empresariales como Bogotá, donde las relaciones
            comerciales son constantes, contar con contratos adecuados es clave
            para operar con seguridad jurídica.
          </p>

          <h2 className={styles.subtitle}>¿Qué es un contrato?</h2>

          <p className={styles.text}>
            Un contrato es un acuerdo legal entre dos o más partes que genera
            derechos y obligaciones. En Colombia, los contratos están regulados
            por el Código Civil y el Código de Comercio.
          </p>

          <h2 className={styles.subtitle}>
            Elementos esenciales de un contrato
          </h2>

          <p className={styles.text}>
            Para que un contrato sea válido, debe incluir:
          </p>

          <ul className={styles.list}>
            <li>Capacidad legal de las partes</li>
            <li>Consentimiento</li>
            <li>Objeto lícito</li>
            <li>Causa válida</li>
          </ul>

          <p className={styles.text}>
            Sin estos elementos, el contrato puede ser inválido o ineficaz.
          </p>

          <h2 className={styles.subtitle}>Estructura básica de un contrato</h2>

          <p className={styles.text}>
            Aunque puede variar según el tipo, un contrato generalmente incluye:
          </p>

          <ul className={styles.list}>
            <li>Identificación de las partes</li>
            <li>Objeto del contrato</li>
            <li>Obligaciones</li>
            <li>Condiciones de pago</li>
            <li>Plazos</li>
            <li>Cláusulas adicionales</li>
          </ul>

          <h2 className={styles.subtitle}>Tipos de contratos en Colombia</h2>

          <p className={styles.text}>Algunos de los más comunes son:</p>

          <ul className={styles.list}>
            <li>Contrato de prestación de servicios</li>
            <li>Contrato de compraventa</li>
            <li>Contrato de arrendamiento</li>
            <li>Contrato laboral</li>
            <li>Contrato de suministro</li>
          </ul>

          <h2 className={styles.subtitle}>
            Recomendaciones para hacer un contrato correctamente
          </h2>

          <ul className={styles.list}>
            <li>Redactar de forma clara y precisa</li>
            <li>Evitar ambigüedades</li>
            <li>Incluir cláusulas de incumplimiento</li>
            <li>Definir mecanismos de solución de conflictos</li>
            <li>Revisar el contrato antes de firmar</li>
          </ul>

          <h2 className={styles.subtitle}>
            Errores comunes al hacer contratos
          </h2>

          <ul className={styles.list}>
            <li>Usar plantillas genéricas sin adaptar</li>
            <li>No definir obligaciones claramente</li>
            <li>Omitir condiciones importantes</li>
            <li>No prever incumplimientos</li>
          </ul>

          <p className={styles.text}>
            Estos errores pueden generar conflictos legales o pérdidas
            económicas.
          </p>

          <h2 className={styles.subtitle}>
            ¿Cuándo necesitas un abogado para hacer un contrato?
          </h2>

          <p className={styles.text}>
            Es recomendable contar con asesoría legal cuando el contrato implica
            montos importantes, relaciones comerciales complejas o riesgos
            legales significativos.
          </p>

          <p className={styles.text}>
            Un abogado puede ayudarte a redactar cláusulas adecuadas y proteger
            tus intereses.
          </p>

          <h2 className={styles.subtitle}>
            ¿Dónde obtener asesoría para contratos en Colombia?
          </h2>

          <p className={styles.text}>
            En Colombia existen firmas legales especializadas en derecho
            comercial que pueden ayudarte en la elaboración y revisión de
            contratos.
          </p>

          <p className={styles.text}>
            Si estás evaluando opciones, puedes conocer una firma a
            continuación.
          </p>
        </section>

        {/* ================= CTA ================= */}
        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Protege tus acuerdos con contratos bien redactados
            </h2>

            <p className={styles.ctaText}>
              Conoce una opción con experiencia en elaboración y revisión de
              contratos en Colombia.
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
        </section>

        {/* ================= SCHEMA ================= */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Cómo hacer un contrato en Colombia paso a paso",
              description:
                "Guía completa para redactar contratos en Colombia correctamente.",
              author: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              publisher: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              mainEntityOfPage:
                "https://guialegalcolombia.vercel.app/blog/como-hacer-contrato-colombia",
            }),
          }}
        />
      </main>
    </>
  );
}
