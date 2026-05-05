"use client";

import Link from "next/link";
import styles from "../../Blog.module.css";

export default function ErroresLegalesEmpresasContent() {
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
            Errores legales que cometen las empresas en Colombia
          </h1>

          <p className={styles.heroDescription}>
            Evita los errores más comunes que pueden generar sanciones, pérdidas
            económicas y conflictos legales en tu empresa.
          </p>
        </section>

        {/* ================= CONTENIDO ================= */}
        <section>
          <p className={styles.text}>
            Muchas empresas en Colombia enfrentan problemas legales que podrían
            haberse evitado con una adecuada asesoría jurídica. Desde errores en
            contratos hasta incumplimientos laborales, estos fallos pueden
            generar sanciones, demandas y pérdidas económicas importantes.
          </p>

          <p className={styles.text}>
            En ciudades como Bogotá, donde la competencia empresarial es alta,
            cumplir con la normativa legal no solo es obligatorio, sino una
            ventaja estratégica.
          </p>

          <h2 className={styles.subtitle}>
            ¿Por qué ocurren los errores legales en las empresas?
          </h2>

          <p className={styles.text}>
            Los errores legales suelen surgir por desconocimiento de la ley,
            falta de asesoría o decisiones tomadas sin análisis jurídico previo.
          </p>

          <p className={styles.text}>
            Muchas empresas buscan reducir costos evitando contratar abogados,
            pero esto puede resultar mucho más costoso a largo plazo.
          </p>

          <h2 className={styles.subtitle}>
            Errores legales más comunes en empresas en Colombia
          </h2>

          <h3 className={styles.subheading}>
            1. No formalizar la empresa correctamente
          </h3>
          <p className={styles.text}>
            Operar sin registro o con errores en la constitución puede generar
            sanciones y limitar el crecimiento del negocio.
          </p>

          <h3 className={styles.subheading}>2. Contratos mal redactados</h3>
          <p className={styles.text}>
            Utilizar contratos genéricos o mal estructurados puede provocar
            conflictos y dificultar la defensa legal en caso de incumplimiento.
          </p>

          <h3 className={styles.subheading}>
            3. Incumplimiento de normas laborales
          </h3>
          <p className={styles.text}>
            No pagar prestaciones, no afiliar a seguridad social o incumplir la
            jornada laboral puede generar demandas laborales.
          </p>

          <h3 className={styles.subheading}>
            4. No gestionar adecuadamente el cobro de cartera
          </h3>
          <p className={styles.text}>
            La falta de control en el cobro de deudas afecta el flujo de caja y
            puede llevar a problemas financieros graves.
          </p>

          <h3 className={styles.subheading}>
            5. No cumplir obligaciones tributarias
          </h3>
          <p className={styles.text}>
            Errores en impuestos o incumplimientos ante la DIAN pueden generar
            multas y sanciones económicas.
          </p>

          <h3 className={styles.subheading}>
            6. Falta de asesoría legal preventiva
          </h3>
          <p className={styles.text}>
            Muchas empresas solo buscan ayuda legal cuando ya existe un
            problema, lo que reduce las posibilidades de solución favorable.
          </p>

          <h2 className={styles.subtitle}>Consecuencias de estos errores</h2>

          <ul className={styles.list}>
            <li>Demandas judiciales</li>
            <li>Sanciones económicas</li>
            <li>Pérdida de reputación</li>
            <li>Conflictos internos</li>
            <li>Riesgos financieros</li>
          </ul>

          <p className={styles.text}>
            Estos problemas pueden afectar seriamente la estabilidad y
            crecimiento de la empresa.
          </p>

          <h2 className={styles.subtitle}>
            ¿Cómo evitar errores legales en tu empresa?
          </h2>

          <ul className={styles.list}>
            <li>Contar con asesoría jurídica constante</li>
            <li>Revisar contratos antes de firmarlos</li>
            <li>Cumplir con obligaciones laborales y tributarias</li>
            <li>Implementar buenas prácticas legales</li>
            <li>Capacitar al equipo en temas básicos legales</li>
          </ul>

          <p className={styles.text}>
            La prevención es la mejor estrategia para evitar problemas legales.
          </p>

          <h2 className={styles.subtitle}>
            Importancia de la asesoría legal empresarial
          </h2>

          <p className={styles.text}>
            Contar con un equipo legal permite anticiparse a los riesgos, tomar
            decisiones seguras y proteger el negocio en todas sus áreas.
          </p>

          <p className={styles.text}>
            En Colombia, cada vez más empresas optan por asesoría legal
            permanente para garantizar su cumplimiento normativo.
          </p>

          <h2 className={styles.subtitle}>
            ¿Dónde encontrar asesoría legal para empresas?
          </h2>

          <p className={styles.text}>
            Existen firmas legales especializadas en derecho empresarial que
            ofrecen acompañamiento integral para prevenir riesgos legales.
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
              Protege tu empresa con asesoría legal
            </h2>

            <p className={styles.ctaText}>
              Evita errores legales y toma decisiones seguras con el respaldo de
              profesionales en derecho empresarial.
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
              headline: "Errores legales que cometen las empresas en Colombia",
              description:
                "Guía sobre los errores legales más comunes en empresas y cómo evitarlos.",
              author: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              publisher: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              mainEntityOfPage:
                "https://guialegalcolombia.vercel.app/blog/errores-legales-empresas",
            }),
          }}
        />
      </main>
    </>
  );
}
