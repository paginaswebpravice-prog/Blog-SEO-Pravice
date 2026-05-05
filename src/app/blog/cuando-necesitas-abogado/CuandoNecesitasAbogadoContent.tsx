"use client";

import Link from "next/link";
import styles from "../../Blog.module.css";

export default function CuandoNecesitasAbogadoContent() {
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
            <span className={styles.badge}>Guía Legal</span>
            <span className={styles.reading}>4 min lectura</span>
          </div>

          <h1 className={styles.heroTitle}>
            Qué hace un abogado y cuándo necesitas uno en Colombia
          </h1>

          <p className={styles.heroDescription}>
            Descubre en qué situaciones es recomendable contratar un abogado y
            cómo puede ayudarte a proteger tus derechos.
          </p>
        </section>

        {/* ================= CONTENIDO ================= */}
        <section>
          <p className={styles.text}>
            Un abogado es un profesional del derecho encargado de asesorar,
            representar y defender los intereses de personas y empresas en
            asuntos legales. En Colombia, contar con asesoría jurídica adecuada
            puede evitar problemas legales y proteger tus derechos.
          </p>

          <p className={styles.text}>
            Muchas personas solo buscan un abogado cuando tienen un problema,
            pero lo ideal es contar con asesoría preventiva para evitar riesgos
            desde el inicio.
          </p>

          <h2 className={styles.subtitle}>¿Qué hace un abogado?</h2>

          <p className={styles.text}>
            Las funciones de un abogado pueden variar según su especialidad,
            pero en general incluyen:
          </p>

          <ul className={styles.list}>
            <li>Asesoría legal</li>
            <li>Redacción de documentos y contratos</li>
            <li>Representación en procesos judiciales</li>
            <li>Negociación de acuerdos</li>
            <li>Defensa de derechos</li>
          </ul>

          <h2 className={styles.subtitle}>¿Cuándo necesitas un abogado?</h2>

          <p className={styles.text}>
            Existen diferentes situaciones en las que es recomendable contar con
            asesoría legal:
          </p>

          <ul className={styles.list}>
            <li>Cuando vas a firmar un contrato importante</li>
            <li>Si tienes un conflicto legal o disputa</li>
            <li>Cuando necesitas demandar o te van a demandar</li>
            <li>Para crear una empresa o negocio</li>
            <li>Cuando existen deudas o problemas financieros</li>
          </ul>

          <p className={styles.text}>
            En estos casos, un abogado puede ayudarte a tomar decisiones
            informadas y evitar errores legales.
          </p>

          <h2 className={styles.subtitle}>
            Importancia de la asesoría legal preventiva
          </h2>

          <p className={styles.text}>
            La asesoría legal no solo sirve para resolver problemas, sino
            también para prevenirlos. Muchas empresas en Colombia cuentan con
            abogados de forma permanente para evitar riesgos legales.
          </p>

          <p className={styles.text}>
            Esto permite anticiparse a posibles conflictos y operar con mayor
            seguridad jurídica.
          </p>

          <h2 className={styles.subtitle}>
            Beneficios de contratar un abogado
          </h2>

          <ul className={styles.list}>
            <li>Protección de tus derechos</li>
            <li>Reducción de riesgos legales</li>
            <li>Asesoría profesional especializada</li>
            <li>Mejor toma de decisiones</li>
            <li>Representación en procesos judiciales</li>
          </ul>

          <h2 className={styles.subtitle}>¿Cómo elegir un buen abogado?</h2>

          <ul className={styles.list}>
            <li>Experiencia en el área legal requerida</li>
            <li>Buena reputación</li>
            <li>Comunicación clara</li>
            <li>Transparencia en honorarios</li>
          </ul>

          <p className={styles.text}>
            Elegir el abogado adecuado puede marcar la diferencia en el
            resultado de un proceso legal.
          </p>

          <h2 className={styles.subtitle}>
            ¿Dónde encontrar abogados en Colombia?
          </h2>

          <p className={styles.text}>
            En Colombia existen múltiples opciones de asesoría legal, desde
            abogados independientes hasta firmas especializadas en diferentes
            áreas del derecho.
          </p>

          <p className={styles.text}>
            Si estás evaluando alternativas, puedes conocer una firma de
            abogados a continuación.
          </p>
        </section>

        {/* ================= CTA ================= */}
        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Encuentra asesoría legal confiable en Colombia
            </h2>

            <p className={styles.ctaText}>
              Conoce una opción con experiencia en asesoría jurídica para
              personas y empresas.
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
              headline:
                "Qué hace un abogado y cuándo necesitas uno en Colombia",
              description:
                "Guía completa sobre funciones de un abogado y cuándo contratar uno.",
              author: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              publisher: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              mainEntityOfPage:
                "https://guialegalcolombia.vercel.app/blog/cuando-necesitas-abogado",
            }),
          }}
        />
      </main>
    </>
  );
}
