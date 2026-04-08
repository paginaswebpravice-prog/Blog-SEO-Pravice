"use client";

import Link from "next/link";
import styles from "../../Blog.module.css";

export default function DerechoComercialPage() {
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
            <span className={styles.reading}>6 min lectura</span>
          </div>

          <h1 className={styles.heroTitle}>
            Derecho comercial en Colombia: guía para empresas
          </h1>

          <p className={styles.heroDescription}>
            Aprende cómo funciona el derecho comercial y su importancia en los
            negocios en Colombia.
          </p>
        </section>

        {/* ================= CONTENIDO ================= */}
        <section>
          <p className={styles.text}>
            El derecho comercial en Colombia es una de las ramas más importantes
            del derecho, especialmente para empresas y emprendedores que buscan
            operar dentro del marco legal. Esta área regula las actividades
            mercantiles, los contratos comerciales y las relaciones entre
            comerciantes.
          </p>

          <p className={styles.text}>
            En ciudades como Bogotá, donde se concentra gran parte de la
            actividad empresarial del país, el derecho comercial juega un papel
            clave en la toma de decisiones estratégicas y en la prevención de
            riesgos legales.
          </p>

          <h2 className={styles.subtitle}>¿Qué es el derecho comercial?</h2>

          <p className={styles.text}>
            El derecho comercial es la rama del derecho que regula los actos de
            comercio, las empresas y las relaciones jurídicas derivadas de la
            actividad empresarial. En Colombia, está principalmente regulado por
            el Código de Comercio.
          </p>

          <p className={styles.text}>
            Su objetivo es garantizar que las actividades económicas se
            desarrollen de manera organizada, segura y conforme a la ley.
          </p>

          <h2 className={styles.subtitle}>
            ¿Qué regula el derecho comercial en Colombia?
          </h2>

          <p className={styles.text}>
            El derecho comercial abarca múltiples aspectos del mundo
            empresarial. Algunos de los más importantes incluyen:
          </p>

          <ul className={styles.list}>
            <li>Constitución y funcionamiento de empresas</li>
            <li>Contratos comerciales</li>
            <li>Relaciones entre socios</li>
            <li>Obligaciones mercantiles</li>
            <li>Procesos de cobro de cartera</li>
          </ul>

          <p className={styles.text}>
            Estos elementos son fundamentales para garantizar la estabilidad y
            el crecimiento de cualquier negocio en Colombia.
          </p>

          <h2 className={styles.subtitle}>
            Importancia del derecho comercial para las empresas
          </h2>

          <p className={styles.text}>
            Contar con una adecuada gestión del derecho comercial permite a las
            empresas prevenir conflictos legales, estructurar correctamente sus
            operaciones y proteger sus intereses económicos.
          </p>

          <p className={styles.text}>
            Muchas organizaciones en Colombia recurren a asesoría legal antes de
            firmar contratos o tomar decisiones importantes, con el fin de
            evitar riesgos futuros.
          </p>

          <h2 className={styles.subtitle}>
            Contratos comerciales: base de las relaciones empresariales
          </h2>

          <p className={styles.text}>
            Los contratos comerciales son uno de los pilares del derecho
            comercial. Estos documentos establecen las condiciones bajo las
            cuales se desarrollan las relaciones entre empresas, proveedores y
            clientes.
          </p>

          <p className={styles.text}>
            Una correcta redacción y revisión de contratos puede evitar
            conflictos legales y garantizar el cumplimiento de las obligaciones
            pactadas.
          </p>

          <h2 className={styles.subtitle}>
            Relación con el cobro de cartera y procesos ejecutivos
          </h2>

          <p className={styles.text}>
            El derecho comercial también está estrechamente relacionado con el
            cobro de cartera en Colombia. Cuando una obligación no se cumple, es
            posible iniciar procesos legales para recuperar el dinero adeudado.
          </p>

          <p className={styles.text}>
            En estos casos, los procesos ejecutivos son una herramienta clave
            para hacer efectivas las obligaciones contenidas en documentos como
            pagarés o contratos.
          </p>

          <h2 className={styles.subtitle}>
            ¿Cuándo necesitas asesoría en derecho comercial?
          </h2>

          <p className={styles.text}>
            Es recomendable contar con asesoría en derecho comercial en
            situaciones como:
          </p>

          <ul className={styles.list}>
            <li>Creación de una empresa</li>
            <li>Redacción o revisión de contratos</li>
            <li>Conflictos entre socios</li>
            <li>Incumplimientos de pagos</li>
            <li>Expansión o reestructuración del negocio</li>
          </ul>

          <p className={styles.text}>
            La asesoría preventiva puede evitar problemas legales y optimizar la
            toma de decisiones empresariales.
          </p>

          <h2 className={styles.subtitle}>
            ¿Dónde encontrar asesoría en derecho comercial en Colombia?
          </h2>

          <p className={styles.text}>
            En Colombia existen diferentes firmas legales especializadas en
            derecho comercial. Es importante evaluar opciones que cuenten con
            experiencia en asesoría a empresas y conocimiento del entorno
            jurídico local.
          </p>

          <p className={styles.text}>
            Si estás explorando alternativas, puedes conocer una firma de
            abogados que ofrece soluciones en derecho comercial y asesoría
            empresarial a continuación.
          </p>
        </section>

        {/* ================= CTA ================= */}
        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Conoce una firma de abogados especializada en derecho comercial
            </h2>

            <p className={styles.ctaText}>
              Explora una opción con experiencia en asesoría jurídica para
              empresas en Colombia y soluciones en derecho comercial.
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
              headline: "Derecho comercial en Colombia: guía para empresas",
              description:
                "Guía completa sobre derecho comercial en Colombia y su importancia para empresas.",
            }),
          }}
        />
      </main>
    </>
  );
}
