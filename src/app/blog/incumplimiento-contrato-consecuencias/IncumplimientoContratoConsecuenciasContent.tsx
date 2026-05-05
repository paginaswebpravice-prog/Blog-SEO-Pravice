"use client";

import Link from "next/link";
import styles from "../../Blog.module.css";

export default function IncumplimientoContratoConsecuenciasContent() {
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
            Qué pasa si incumples un contrato en Colombia
          </h1>

          <p className={styles.heroDescription}>
            Conoce las consecuencias legales del incumplimiento de contrato y
            qué acciones pueden tomar las partes afectadas.
          </p>
        </section>

        {/* ================= CONTENIDO ================= */}
        <section>
          <p className={styles.text}>
            El incumplimiento de un contrato en Colombia puede generar
            consecuencias legales importantes tanto para personas como para
            empresas. Cuando una de las partes no cumple con lo acordado, se
            activa la responsabilidad contractual, lo que puede derivar en
            sanciones, indemnizaciones y procesos judiciales.
          </p>

          <p className={styles.text}>
            En entornos empresariales como Bogotá, donde los contratos son la
            base de las relaciones comerciales, cumplir con las obligaciones es
            fundamental para evitar conflictos legales.
          </p>

          <h2 className={styles.subtitle}>
            ¿Qué es el incumplimiento de contrato?
          </h2>

          <p className={styles.text}>
            Se produce cuando una de las partes no cumple total o parcialmente
            con las obligaciones pactadas en un contrato.
          </p>

          <p className={styles.text}>
            Este incumplimiento puede ser por falta de pago, retrasos, entrega
            incompleta o cualquier violación de lo acordado.
          </p>

          <h2 className={styles.subtitle}>
            Consecuencias legales del incumplimiento
          </h2>

          <h3 className={styles.subheading}>1. Indemnización de perjuicios</h3>
          <p className={styles.text}>
            La parte afectada puede exigir una compensación económica por los
            daños causados.
          </p>

          <h3 className={styles.subheading}>2. Resolución del contrato</h3>
          <p className={styles.text}>
            El contrato puede darse por terminado si el incumplimiento es grave.
          </p>

          <h3 className={styles.subheading}>3. Ejecución del contrato</h3>
          <p className={styles.text}>
            En algunos casos, se puede exigir judicialmente el cumplimiento de
            la obligación.
          </p>

          <h3 className={styles.subheading}>4. Procesos judiciales</h3>
          <p className={styles.text}>
            El incumplimiento puede dar lugar a demandas civiles o procesos
            ejecutivos.
          </p>

          <h2 className={styles.subtitle}>Tipos de incumplimiento</h2>

          <ul className={styles.list}>
            <li>Incumplimiento total</li>
            <li>Incumplimiento parcial</li>
            <li>Incumplimiento tardío</li>
            <li>Cumplimiento defectuoso</li>
          </ul>

          <p className={styles.text}>
            Cada tipo de incumplimiento puede tener consecuencias diferentes
            dependiendo del caso.
          </p>

          <h2 className={styles.subtitle}>
            ¿Qué hacer ante un incumplimiento?
          </h2>

          <ul className={styles.list}>
            <li>Revisar el contrato firmado</li>
            <li>Intentar una conciliación</li>
            <li>Enviar requerimientos formales</li>
            <li>Buscar asesoría legal</li>
            <li>Iniciar acciones judiciales si es necesario</li>
          </ul>

          <p className={styles.text}>
            Actuar rápidamente puede evitar mayores pérdidas y facilitar la
            solución del conflicto.
          </p>

          <h2 className={styles.subtitle}>
            Importancia de los contratos bien redactados
          </h2>

          <p className={styles.text}>
            Un contrato claro y bien estructurado facilita la solución de
            conflictos y protege a las partes en caso de incumplimiento.
          </p>

          <p className={styles.text}>
            Por esta razón, es fundamental contar con asesoría legal al momento
            de redactar o firmar acuerdos.
          </p>

          <h2 className={styles.subtitle}>
            ¿Dónde encontrar asesoría legal en Colombia?
          </h2>

          <p className={styles.text}>
            Existen firmas legales especializadas en derecho civil y comercial
            que pueden ayudarte a manejar situaciones de incumplimiento
            contractual.
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
              ¿Tienes un problema por incumplimiento de contrato?
            </h2>

            <p className={styles.ctaText}>
              Recibe asesoría legal para proteger tus derechos y tomar acciones
              frente a incumplimientos contractuales.
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
