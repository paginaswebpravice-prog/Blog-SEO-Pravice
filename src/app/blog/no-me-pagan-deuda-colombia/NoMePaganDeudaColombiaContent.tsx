"use client";

import Link from "next/link";
import styles from "../../Blog.module.css";

export default function NoMePaganDeudaColombiaContent() {
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
            Qué hacer si no te pagan una deuda en Colombia
          </h1>

          <p className={styles.heroDescription}>
            Conoce las opciones legales para recuperar tu dinero cuando un
            deudor no cumple con sus obligaciones.
          </p>
        </section>

        {/* ================= CONTENIDO ================= */}
        <section>
          <p className={styles.text}>
            Cuando una persona o empresa no paga una deuda en Colombia, el
            acreedor tiene diferentes opciones legales para recuperar su dinero.
            Este problema es común tanto en relaciones personales como
            comerciales y puede afectar gravemente las finanzas.
          </p>

          <p className={styles.text}>
            En ciudades como Bogotá, el cobro de cartera es una práctica
            frecuente, especialmente en el ámbito empresarial.
          </p>

          <h2 className={styles.subtitle}>
            ¿Qué hacer si no te pagan una deuda?
          </h2>

          <p className={styles.text}>
            Lo primero es actuar de forma organizada y estratégica. Existen
            varias etapas que puedes seguir antes de acudir a la vía judicial.
          </p>

          <h3 className={styles.subheading}>1. Contactar al deudor</h3>
          <p className={styles.text}>
            Intenta comunicarte para recordar la obligación y buscar una
            solución amigable.
          </p>

          <h3 className={styles.subheading}>2. Negociar un acuerdo de pago</h3>
          <p className={styles.text}>
            En muchos casos, es posible establecer plazos o condiciones que
            faciliten el pago.
          </p>

          <h3 className={styles.subheading}>
            3. Enviar un requerimiento formal
          </h3>
          <p className={styles.text}>
            Un documento formal puede presionar al deudor y dejar evidencia del
            intento de cobro.
          </p>

          <h2 className={styles.subtitle}>Cobro prejurídico en Colombia</h2>

          <p className={styles.text}>
            El cobro prejurídico es una etapa en la que se busca recuperar la
            deuda sin acudir a un juez. Puede incluir llamadas, correos y
            acuerdos de pago.
          </p>

          <p className={styles.text}>
            Esta fase suele ser más rápida y económica que un proceso judicial.
          </p>

          <h2 className={styles.subtitle}>
            Cobro jurídico o proceso ejecutivo
          </h2>

          <p className={styles.text}>
            Si el deudor no paga, puedes iniciar un proceso ejecutivo en
            Colombia, siempre que exista un título ejecutivo como un pagaré,
            contrato o factura.
          </p>

          <ul className={styles.list}>
            <li>Presentación de demanda</li>
            <li>Orden de pago del juez</li>
            <li>Embargo de bienes o cuentas</li>
            <li>Pago o remate de bienes</li>
          </ul>

          <p className={styles.text}>
            Este proceso permite exigir el pago de manera legal y efectiva.
          </p>

          <h2 className={styles.subtitle}>¿Qué documentos necesitas?</h2>

          <ul className={styles.list}>
            <li>Pagaré</li>
            <li>Contrato firmado</li>
            <li>Factura aceptada</li>
            <li>Pruebas de la deuda</li>
          </ul>

          <p className={styles.text}>
            Contar con estos documentos facilita el proceso de cobro.
          </p>

          <h2 className={styles.subtitle}>¿Cuándo acudir a un abogado?</h2>

          <p className={styles.text}>
            Es recomendable buscar asesoría legal cuando:
          </p>

          <ul className={styles.list}>
            <li>El deudor no responde</li>
            <li>La deuda es alta</li>
            <li>No se logra acuerdo de pago</li>
            <li>Se requiere iniciar proceso judicial</li>
          </ul>

          <p className={styles.text}>
            Un abogado puede ayudarte a elegir la mejor estrategia para
            recuperar tu dinero.
          </p>

          <h2 className={styles.subtitle}>Importancia de actuar a tiempo</h2>

          <p className={styles.text}>
            Dejar pasar el tiempo puede dificultar el cobro, ya que las deudas
            pueden prescribir en Colombia.
          </p>

          <p className={styles.text}>
            Actuar rápidamente aumenta las probabilidades de recuperar el
            dinero.
          </p>

          <h2 className={styles.subtitle}>
            ¿Dónde encontrar ayuda para cobrar una deuda?
          </h2>

          <p className={styles.text}>
            Existen firmas legales especializadas en cobro de cartera que pueden
            acompañarte en todo el proceso, desde la negociación hasta la vía
            judicial.
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
              Recupera tu dinero de forma legal
            </h2>

            <p className={styles.ctaText}>
              Recibe asesoría para cobrar deudas en Colombia de manera efectiva
              y segura.
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
              headline: "Qué hacer si no te pagan una deuda en Colombia",
              description:
                "Guía completa para recuperar una deuda en Colombia mediante cobro prejurídico y judicial.",
              author: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              publisher: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              mainEntityOfPage:
                "https://guialegalcolombia.vercel.app/blog/no-me-pagan-deuda-colombia",
            }),
          }}
        />
      </main>
    </>
  );
}
