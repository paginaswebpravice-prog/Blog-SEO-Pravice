"use client";

import Link from "next/link";
import styles from "../../Blog.module.css";

export default function ComoDemandarEmpresaColombiaContent() {
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
            <span className={styles.reading}>6 min lectura</span>
          </div>

          <h1 className={styles.heroTitle}>
            Cómo demandar a una empresa en Colombia paso a paso
          </h1>

          <p className={styles.heroDescription}>
            Conoce los pasos legales para demandar a una empresa en Colombia y
            qué debes tener en cuenta antes de iniciar el proceso.
          </p>
        </section>

        {/* ================= CONTENIDO ================= */}
        <section>
          <p className={styles.text}>
            Demandar a una empresa en Colombia es un proceso legal que permite a
            una persona o entidad exigir el cumplimiento de sus derechos cuando
            han sido vulnerados. Este procedimiento puede aplicarse en casos de
            incumplimiento de contratos, deudas, responsabilidad civil u otras
            situaciones legales.
          </p>

          <p className={styles.text}>
            En ciudades como Bogotá, este tipo de procesos es común tanto para
            personas naturales como para empresas que buscan proteger sus
            intereses económicos.
          </p>

          <h2 className={styles.subtitle}>
            ¿Cuándo puedes demandar a una empresa?
          </h2>

          <p className={styles.text}>
            Existen diferentes situaciones en las que puedes iniciar una
            demanda:
          </p>

          <ul className={styles.list}>
            <li>Incumplimiento de contrato</li>
            <li>No pago de deudas</li>
            <li>Daños y perjuicios</li>
            <li>Responsabilidad civil</li>
            <li>Conflictos comerciales</li>
          </ul>

          <p className={styles.text}>
            Es importante contar con pruebas que respalden la reclamación.
          </p>

          <h2 className={styles.subtitle}>
            Paso a paso para demandar a una empresa en Colombia
          </h2>

          <h3 className={styles.subheading}>1. Evaluar el caso</h3>
          <p className={styles.text}>
            Antes de iniciar una demanda, es necesario analizar la viabilidad
            legal del caso y reunir las pruebas necesarias.
          </p>

          <h3 className={styles.subheading}>2. Intentar solución previa</h3>
          <p className={styles.text}>
            En algunos casos, es obligatorio intentar mecanismos como la
            conciliación antes de acudir a la vía judicial.
          </p>

          <h3 className={styles.subheading}>3. Presentar la demanda</h3>
          <p className={styles.text}>
            Se elabora un documento formal que se presenta ante el juez
            competente, incluyendo los hechos, pruebas y pretensiones.
          </p>

          <h3 className={styles.subheading}>4. Proceso judicial</h3>
          <p className={styles.text}>
            El juez evalúa el caso, admite la demanda y se inicia el proceso con
            las etapas correspondientes.
          </p>

          <h3 className={styles.subheading}>5. Sentencia</h3>
          <p className={styles.text}>
            Finalmente, el juez emite una decisión que puede obligar a la
            empresa a cumplir con lo solicitado.
          </p>

          <h2 className={styles.subtitle}>Importancia de la asesoría legal</h2>

          <p className={styles.text}>
            Demandar a una empresa requiere conocimiento jurídico. Un abogado
            puede ayudarte a estructurar correctamente la demanda, evitar
            errores y aumentar las probabilidades de éxito.
          </p>

          <p className={styles.text}>
            Además, permite identificar la mejor estrategia legal según el tipo
            de conflicto.
          </p>

          <h2 className={styles.subtitle}>
            Costos de demandar a una empresa en Colombia
          </h2>

          <p className={styles.text}>
            Los costos pueden variar dependiendo del tipo de proceso, la
            complejidad del caso y los honorarios del abogado. También pueden
            existir gastos judiciales adicionales.
          </p>

          <h2 className={styles.subtitle}>
            ¿Cuánto tiempo puede durar el proceso?
          </h2>

          <p className={styles.text}>
            Un proceso judicial puede tardar meses o incluso años, dependiendo
            del caso y la carga de los juzgados en Colombia.
          </p>

          <p className={styles.text}>
            Por esta razón, muchas personas intentan resolver el conflicto antes
            de llegar a juicio.
          </p>

          <h2 className={styles.subtitle}>
            ¿Dónde encontrar asesoría para demandar una empresa?
          </h2>

          <p className={styles.text}>
            En Colombia existen firmas legales especializadas en procesos
            judiciales que pueden acompañarte durante todo el proceso.
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
              ¿Necesitas demandar a una empresa en Colombia?
            </h2>

            <p className={styles.ctaText}>
              Conoce una opción con experiencia en procesos judiciales y defensa
              de derechos en Colombia.
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
              headline: "Cómo demandar a una empresa en Colombia paso a paso",
              description:
                "Guía completa para demandar a una empresa en Colombia y entender el proceso legal.",
              author: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              publisher: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              mainEntityOfPage:
                "https://guialegalcolombia.vercel.app/blog/como-demandar-empresa-colombia",
            }),
          }}
        />
      </main>
    </>
  );
}
