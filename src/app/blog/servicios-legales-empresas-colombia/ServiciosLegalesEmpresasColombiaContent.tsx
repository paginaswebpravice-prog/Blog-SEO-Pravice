"use client";

import Link from "next/link";
import styles from "../../Blog.module.css";

export default function ServiciosLegalesEmpresasColombiaContent() {
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
            <span className={styles.badge}>Empresas</span>
            <span className={styles.reading}>5 min lectura</span>
          </div>

          <h1 className={styles.heroTitle}>
            Servicios legales para empresas en Colombia: qué incluyen
          </h1>

          <p className={styles.heroDescription}>
            Conoce qué servicios jurídicos necesita una empresa en Colombia y
            cómo pueden ayudarte a prevenir riesgos y crecer de forma segura.
          </p>
        </section>

        {/* ================= CONTENIDO ================= */}
        <section>
          <p className={styles.text}>
            Los servicios legales para empresas en Colombia son fundamentales
            para garantizar que cualquier negocio opere dentro del marco legal y
            evite riesgos que puedan afectar su estabilidad. Desde pequeñas
            startups hasta grandes compañías, contar con asesoría jurídica es
            una inversión estratégica.
          </p>

          <p className={styles.text}>
            En ciudades como Bogotá, donde el entorno empresarial es altamente
            competitivo, las empresas requieren acompañamiento legal constante
            para tomar decisiones seguras y cumplir con sus obligaciones.
          </p>

          <h2 className={styles.subtitle}>
            ¿Qué son los servicios legales para empresas?
          </h2>

          <p className={styles.text}>
            Son un conjunto de asesorías y acciones jurídicas orientadas a
            proteger los intereses de una empresa, garantizar el cumplimiento de
            la ley y prevenir conflictos legales.
          </p>

          <p className={styles.text}>
            Estos servicios pueden ser prestados por abogados internos o por
            firmas externas especializadas en derecho empresarial.
          </p>

          <h2 className={styles.subtitle}>
            Principales servicios legales que necesita una empresa
          </h2>

          <ul className={styles.list}>
            <li>Constitución de empresas</li>
            <li>Redacción y revisión de contratos</li>
            <li>Asesoría en derecho laboral</li>
            <li>Cobro de cartera y recuperación de deudas</li>
            <li>Representación judicial</li>
          </ul>

          <p className={styles.text}>
            Estos servicios permiten a las empresas operar con seguridad y
            reducir riesgos legales en su actividad diaria.
          </p>

          <h2 className={styles.subtitle}>
            Importancia de la asesoría legal empresarial
          </h2>

          <p className={styles.text}>
            Contar con servicios legales adecuados permite prevenir problemas
            antes de que ocurran. Muchas empresas cometen errores por no contar
            con asesoría jurídica o por recurrir a soluciones improvisadas.
          </p>

          <p className={styles.text}>
            La asesoría legal no solo actúa cuando hay conflictos, sino que
            también es clave en la toma de decisiones estratégicas.
          </p>

          <h2 className={styles.subtitle}>
            Servicios legales preventivos vs correctivos
          </h2>

          <h3 className={styles.subheading}>Preventivos</h3>
          <p className={styles.text}>
            Buscan evitar problemas legales mediante contratos adecuados,
            cumplimiento normativo y asesoría constante.
          </p>

          <h3 className={styles.subheading}>Correctivos</h3>
          <p className={styles.text}>
            Se enfocan en resolver conflictos ya existentes, como demandas,
            incumplimientos o procesos judiciales.
          </p>

          <p className={styles.text}>
            Lo ideal es que las empresas prioricen la prevención para reducir
            costos y riesgos.
          </p>

          <h2 className={styles.subtitle}>
            ¿Cuándo necesita una empresa servicios legales?
          </h2>

          <ul className={styles.list}>
            <li>Al crear una empresa</li>
            <li>Al firmar contratos importantes</li>
            <li>Cuando existen conflictos legales</li>
            <li>En procesos de expansión o inversión</li>
            <li>Para cumplir obligaciones laborales y tributarias</li>
          </ul>

          <p className={styles.text}>
            En estos escenarios, el acompañamiento legal puede evitar errores
            costosos y proteger el negocio.
          </p>

          <h2 className={styles.subtitle}>
            ¿Dónde encontrar servicios legales para empresas en Colombia?
          </h2>

          <p className={styles.text}>
            En Colombia existen firmas legales especializadas en asesoría
            empresarial que ofrecen servicios adaptados a cada tipo de negocio.
          </p>

          <p className={styles.text}>
            Es importante elegir equipos con experiencia en derecho comercial,
            laboral y corporativo, que comprendan las necesidades del entorno
            empresarial.
          </p>
        </section>

        {/* ================= CTA ================= */}
        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Conoce una firma especializada en asesoría para empresas
            </h2>

            <p className={styles.ctaText}>
              Explora una opción con experiencia en servicios legales para
              empresas en Colombia y asesoría jurídica integral.
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
                "Servicios legales para empresas en Colombia: qué incluyen",
              description:
                "Guía sobre servicios legales para empresas en Colombia y su importancia para prevenir riesgos.",
              author: {
                "@type": "Organization",
                name: "Guía Legal Colombia",
              },
              publisher: {
                "@type": "Organization",
                name: "Guía Legal Colombia",
              },
              mainEntityOfPage:
                "https://guialegalcolombia.vercel.app/blog/servicios-legales-empresas-colombia",
            }),
          }}
        />
      </main>
    </>
  );
}
