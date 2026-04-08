"use client";

import Link from "next/dist/client/link";
import styles from "../../Blog.module.css";

export default function CobroCarteraPage() {
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
            <span className={styles.badge}>Finanzas</span>
            <span className={styles.reading}>5 min lectura</span>
          </div>

          <h1 className={styles.heroTitle}>
            Cobro de cartera en Colombia: cómo recuperar deudas
          </h1>

          <p className={styles.heroDescription}>
            Descubre estrategias legales efectivas para recuperar cartera en
            Colombia y proteger tus finanzas.
          </p>
        </section>

        {/* ================= CONTENIDO ================= */}
        <section>
          <p className={styles.text}>
            El cobro de cartera en Colombia es un proceso fundamental para
            empresas y personas que necesitan recuperar dinero adeudado. En un
            entorno económico donde el incumplimiento de pagos es frecuente,
            contar con estrategias adecuadas puede marcar la diferencia entre
            recuperar o perder una obligación.
          </p>

          <p className={styles.text}>
            En ciudades como Bogotá, muchas empresas enfrentan problemas de
            flujo de caja debido a clientes morosos, lo que hace indispensable
            contar con mecanismos legales eficaces para gestionar la cartera.
          </p>

          <h2 className={styles.subtitle}>¿Qué es el cobro de cartera?</h2>

          <p className={styles.text}>
            El cobro de cartera es el conjunto de acciones que se realizan para
            recuperar deudas pendientes por parte de clientes o terceros. Estas
            acciones pueden ser extrajudiciales o judiciales, dependiendo del
            caso.
          </p>

          <p className={styles.text}>
            Su objetivo principal es lograr el pago de una obligación de forma
            efectiva, minimizando costos y tiempos.
          </p>

          <h2 className={styles.subtitle}>
            Tipos de cobro de cartera en Colombia
          </h2>

          <h3 className={styles.subheading}>Cobro persuasivo</h3>
          <p className={styles.text}>
            Es la primera etapa del proceso. Consiste en contactar al deudor
            mediante llamadas, correos o mensajes con el fin de llegar a un
            acuerdo de pago sin necesidad de acudir a instancias legales.
          </p>

          <h3 className={styles.subheading}>Cobro prejurídico</h3>
          <p className={styles.text}>
            En esta fase se intensifican las gestiones de cobro, advirtiendo
            sobre posibles acciones legales si no se cumple con la obligación.
          </p>

          <h3 className={styles.subheading}>Cobro jurídico</h3>
          <p className={styles.text}>
            Cuando no se logra un acuerdo, se inicia un proceso judicial para
            exigir el pago de la deuda, generalmente mediante procesos
            ejecutivos.
          </p>

          <h2 className={styles.subtitle}>
            Procesos ejecutivos: herramienta clave para recuperar deudas
          </h2>

          <p className={styles.text}>
            Los procesos ejecutivos en Colombia son mecanismos legales que
            permiten exigir el cumplimiento de una obligación contenida en un
            documento como pagarés, letras de cambio o contratos.
          </p>

          <p className={styles.text}>
            Estos procesos permiten solicitar medidas como el embargo de bienes
            o cuentas, lo que aumenta significativamente las probabilidades de
            recuperación.
          </p>

          <h2 className={styles.subtitle}>
            Importancia del cobro de cartera para empresas
          </h2>

          <p className={styles.text}>
            Una adecuada gestión de cartera es fundamental para la estabilidad
            financiera de cualquier empresa. La falta de pago puede afectar la
            liquidez, limitar el crecimiento y generar pérdidas económicas.
          </p>

          <p className={styles.text}>
            Por esta razón, muchas organizaciones en Colombia implementan
            estrategias de cobro desde etapas tempranas para evitar que las
            deudas se vuelvan incobrables.
          </p>

          <h2 className={styles.subtitle}>
            ¿Cuándo acudir a un abogado para cobro de cartera?
          </h2>

          <p className={styles.text}>
            Es recomendable buscar asesoría legal cuando:
          </p>

          <ul className={styles.list}>
            <li>El deudor no responde a los intentos de contacto</li>
            <li>La deuda supera un monto significativo</li>
            <li>Existen documentos legales que respaldan la obligación</li>
            <li>Se requiere iniciar un proceso judicial</li>
          </ul>

          <p className={styles.text}>
            Contar con asesoría profesional puede acelerar el proceso y aumentar
            las probabilidades de éxito.
          </p>

          <h2 className={styles.subtitle}>
            ¿Dónde encontrar servicios de cobro de cartera en Colombia?
          </h2>

          <p className={styles.text}>
            En Colombia existen firmas legales especializadas en recuperación de
            cartera que combinan estrategias jurídicas y persuasivas para lograr
            resultados efectivos.
          </p>

          <p className={styles.text}>
            Si estás buscando alternativas, puedes conocer una firma que ofrece
            este tipo de servicios a continuación.
          </p>
        </section>

        {/* ================= CTA ================= */}
        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Conoce una firma especializada en cobro de cartera
            </h2>

            <p className={styles.ctaText}>
              Explora una opción con experiencia en recuperación de cartera y
              procesos legales en Colombia.
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
              headline: "Cobro de cartera en Colombia: cómo recuperar deudas",
              description:
                "Guía completa sobre cobro de cartera en Colombia y estrategias legales para recuperar deudas.",
            }),
          }}
        />
      </main>
    </>
  );
}
