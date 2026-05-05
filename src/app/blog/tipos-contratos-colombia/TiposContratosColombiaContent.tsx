"use client";

import Link from "next/link";
import styles from "../../Blog.module.css";

export default function TiposContratosColombiaContent() {
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
            Tipos de contratos en Colombia y para qué sirve cada uno
          </h1>

          <p className={styles.heroDescription}>
            Conoce los principales tipos de contratos en Colombia y cuándo usar
            cada uno para proteger tus intereses legales.
          </p>
        </section>

        {/* ================= CONTENIDO ================= */}
        <section>
          <p className={styles.text}>
            En Colombia, los contratos son herramientas fundamentales para
            regular relaciones entre personas y empresas. Elegir el tipo de
            contrato adecuado permite establecer obligaciones claras, prevenir
            conflictos y garantizar seguridad jurídica.
          </p>

          <p className={styles.text}>
            Tanto en el ámbito personal como empresarial, conocer los diferentes
            tipos de contratos es clave para tomar decisiones informadas y
            evitar riesgos legales.
          </p>

          <h2 className={styles.subtitle}>¿Qué es un contrato en Colombia?</h2>

          <p className={styles.text}>
            Un contrato es un acuerdo de voluntades entre dos o más partes que
            crea obligaciones legales. En Colombia, estos acuerdos están
            regulados por el Código Civil y el Código de Comercio.
          </p>

          <p className={styles.text}>
            Su principal función es establecer condiciones claras sobre
            derechos, obligaciones, pagos y responsabilidades.
          </p>

          <h2 className={styles.subtitle}>
            Tipos de contratos más comunes en Colombia
          </h2>

          <h3 className={styles.subheading}>Contrato de compraventa</h3>
          <p className={styles.text}>
            Es uno de los contratos más utilizados. Se emplea cuando una parte
            se obliga a transferir la propiedad de un bien a otra a cambio de un
            precio.
          </p>

          <h3 className={styles.subheading}>
            Contrato de prestación de servicios
          </h3>
          <p className={styles.text}>
            Regula la relación entre una persona o empresa que presta un
            servicio y quien lo contrata. Es común en trabajos independientes.
          </p>

          <h3 className={styles.subheading}>Contrato de arrendamiento</h3>
          <p className={styles.text}>
            Se utiliza para ceder el uso de un bien, como un inmueble, a cambio
            de un pago periódico.
          </p>

          <h3 className={styles.subheading}>Contrato de trabajo</h3>
          <p className={styles.text}>
            Regula la relación laboral entre empleador y trabajador, incluyendo
            salario, funciones y condiciones laborales.
          </p>

          <h3 className={styles.subheading}>Contrato de suministro</h3>
          <p className={styles.text}>
            Se utiliza cuando una empresa se compromete a entregar bienes o
            servicios de forma continua a otra.
          </p>

          <h2 className={styles.subtitle}>
            Diferencia entre contratos civiles y comerciales
          </h2>

          <p className={styles.text}>
            En Colombia, los contratos pueden clasificarse como civiles o
            comerciales dependiendo de la naturaleza de la actividad.
          </p>

          <ul className={styles.list}>
            <li>
              Contratos civiles: relacionados con personas naturales y
              actividades no comerciales
            </li>
            <li>
              Contratos comerciales: vinculados a actividades empresariales o
              mercantiles
            </li>
          </ul>

          <p className={styles.text}>
            Identificar esta diferencia es importante porque determina la
            normativa aplicable y las obligaciones legales.
          </p>

          <h2 className={styles.subtitle}>
            Importancia de elegir el contrato adecuado
          </h2>

          <p className={styles.text}>
            Utilizar el contrato correcto permite proteger los intereses de las
            partes, evitar ambigüedades y reducir el riesgo de conflictos
            legales.
          </p>

          <p className={styles.text}>
            Un contrato mal estructurado puede generar problemas como
            incumplimientos, pérdidas económicas o incluso procesos judiciales.
          </p>

          <h2 className={styles.subtitle}>¿Cuándo necesitas asesoría legal?</h2>

          <p className={styles.text}>
            Es recomendable contar con asesoría legal en situaciones como:
          </p>

          <ul className={styles.list}>
            <li>Redacción de contratos importantes</li>
            <li>Negociaciones comerciales</li>
            <li>Revisión de acuerdos existentes</li>
            <li>Prevención de riesgos legales</li>
          </ul>

          <p className={styles.text}>
            Un abogado puede ayudarte a estructurar contratos adecuados según tu
            situación específica.
          </p>

          <h2 className={styles.subtitle}>
            ¿Dónde obtener asesoría en contratos en Colombia?
          </h2>

          <p className={styles.text}>
            En Colombia existen firmas legales especializadas en la elaboración
            y revisión de contratos. Es importante elegir profesionales con
            experiencia en derecho civil y comercial.
          </p>

          <p className={styles.text}>
            Si estás evaluando opciones, puedes conocer una firma que ofrece
            este tipo de asesoría a continuación.
          </p>
        </section>

        {/* ================= CTA ================= */}
        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Conoce una firma especializada en contratos
            </h2>

            <p className={styles.ctaText}>
              Explora una opción con experiencia en derecho comercial y
              elaboración de contratos en Colombia.
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
                "Tipos de contratos en Colombia y para qué sirve cada uno",
              description:
                "Guía completa sobre los tipos de contratos en Colombia y su uso en el ámbito legal y empresarial.",
              author: {
                "@type": "Organization",
                name: "Guía Legal Colombia",
              },
              publisher: {
                "@type": "Organization",
                name: "Guía Legal Colombia",
              },
              mainEntityOfPage:
                "https://guialegalcolombia.vercel.app/blog/tipos-contratos-colombia",
            }),
          }}
        />
      </main>
    </>
  );
}
