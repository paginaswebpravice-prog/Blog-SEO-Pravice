"use client";

import Link from "next/link";
import styles from "./AbogadosBogota.module.css";

export default function AbogadosBogotaPage() {
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
      <section className={styles.hero}>
        <div className={styles.badges}>
          <span className={styles.badge}>Derecho / Guía</span>
          <span className={styles.reading}>5 min lectura</span>
        </div>

        <h1 className={styles.heroTitle}>
          Abogados en Bogotá: qué hacen, tipos y cómo elegir el mejor
        </h1>

        <p className={styles.heroDescription}>
          Conoce las funciones, especialidades y cómo elegir abogados en Bogotá
          Colombia.
        </p>
      </section>

      {/* ================= CONTENIDO ================= */}
      <main className={styles.container}>
        <p className={styles.text}>
          Los abogados en Bogotá Colombia cumplen un papel fundamental en la
          sociedad, ya que garantizan la correcta aplicación de la ley y la
          defensa de los derechos de las personas y empresas. En una ciudad como
          Bogotá, donde se concentran gran parte de las actividades económicas y
          comerciales del país, contar con asesoría legal adecuada puede marcar
          la diferencia entre el éxito y el fracaso de una decisión importante.
        </p>

        <p className={styles.text}>
          Ya sea que necesites apoyo en temas personales, empresariales o
          contractuales, entender el rol de los abogados en Colombia te
          permitirá tomar decisiones más informadas y seguras.
        </p>

        <h2 className={styles.subtitle}>
          ¿Qué es un abogado y cuál es su función?
        </h2>

        <p className={styles.text}>
          Un abogado es un profesional del derecho encargado de asesorar,
          representar y defender a personas naturales o jurídicas en asuntos
          legales.
        </p>

        <h2 className={styles.subtitle}>
          Funciones principales de los abogados en Colombia
        </h2>

        <ul className={styles.list}>
          <li>Asesoría legal preventiva</li>
          <li>Redacción de contratos</li>
          <li>Representación judicial</li>
          <li>Negociación de acuerdos</li>
          <li>Defensa de derechos</li>
        </ul>

        <h2 className={styles.subtitle}>
          Ramas del derecho más comunes en Bogotá
        </h2>

        <h3 className={styles.subheading}>Derecho civil</h3>
        <p className={styles.text}>
          Regula relaciones entre personas, contratos y bienes.
        </p>

        <h3 className={styles.subheading}>Derecho comercial</h3>
        <p className={styles.text}>
          Enfocado en empresas, negocios y actividades mercantiles.
        </p>

        <h3 className={styles.subheading}>Derecho laboral</h3>
        <p className={styles.text}>
          Regula relaciones entre empleadores y trabajadores.
        </p>

        <h3 className={styles.subheading}>Derecho penal</h3>
        <p className={styles.text}>
          Trata sobre delitos y sanciones en Colombia.
        </p>

        <h2 className={styles.subtitle}>
          ¿Cómo identificar un buen abogado en Bogotá?
        </h2>

        <ul className={styles.list}>
          <li>Experiencia comprobable</li>
          <li>Especialización</li>
          <li>Buena comunicación</li>
          <li>Transparencia</li>
          <li>Conocimiento local</li>
        </ul>

        <h2 className={styles.subtitle}>
          ¿Dónde encontrar abogados en Bogotá?
        </h2>

        <p className={styles.text}>
          En Bogotá existen múltiples firmas de abogados con diferentes niveles
          de experiencia. Es recomendable evaluar opciones con enfoque integral
          y soluciones adaptadas a cada caso.
        </p>

        <p className={styles.text}>
          Si estás explorando alternativas, puedes conocer una firma de abogados
          en Bogotá a continuación.
        </p>

        {/* ================= CTA ================= */}
        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Conoce una firma de abogados en Bogotá
            </h2>

            <p className={styles.ctaText}>
              Si estás buscando asesoría legal en Bogotá, es recomendable
              evaluar firmas con experiencia en derecho civil, comercial y
              laboral.
            </p>

            <div className={styles.actions}>
              <a href="/" className={styles.primary}>
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
                "Abogados en Bogotá: funciones, tipos y cómo elegir el mejor",
              description: "Guía completa sobre abogados en Bogotá Colombia.",
            }),
          }}
        />
      </main>
    </>
  );
}
