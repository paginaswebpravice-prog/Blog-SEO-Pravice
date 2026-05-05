"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../../Blog.module.css";

export default function NoMePaganDeudaColombiaContent() {
  return (
    <>
      {/* ================= BACK ================= */}
      <motion.div
        className={styles.backWrapper}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link href="/" className={styles.back}>
          <span className={styles.arrow}>←</span>
          Volver al blog
        </Link>
      </motion.div>

      {/* ================= HERO ================= */}
      <main className={styles.container}>
        <motion.section
          className={styles.hero}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
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
        </motion.section>

        {/* ================= CONTENIDO ================= */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/** PÁRRAFOS INICIALES */}
          {[0, 1].map((i) => (
            <motion.p
              key={i}
              className={styles.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {i === 0
                ? "Cuando una persona o empresa no paga una deuda en Colombia, el acreedor tiene diferentes opciones legales para recuperar su dinero. Este problema es común tanto en relaciones personales como comerciales y puede afectar gravemente las finanzas."
                : "En ciudades como Bogotá, el cobro de cartera es una práctica frecuente, especialmente en el ámbito empresarial."}
            </motion.p>
          ))}

          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ¿Qué hacer si no te pagan una deuda?
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Lo primero es actuar de forma organizada y estratégica. Existen
            varias etapas que puedes seguir antes de acudir a la vía judicial.
          </motion.p>

          {[
            {
              title: "1. Contactar al deudor",
              text: "Intenta comunicarte para recordar la obligación y buscar una solución amigable.",
            },
            {
              title: "2. Negociar un acuerdo de pago",
              text: "En muchos casos, es posible establecer plazos o condiciones que faciliten el pago.",
            },
            {
              title: "3. Enviar un requerimiento formal",
              text: "Un documento formal puede presionar al deudor y dejar evidencia del intento de cobro.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <h3 className={styles.subheading}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
            </motion.div>
          ))}

          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Cobro prejurídico en Colombia
          </motion.h2>

          {[
            "El cobro prejurídico es una etapa en la que se busca recuperar la deuda sin acudir a un juez. Puede incluir llamadas, correos y acuerdos de pago.",
            "Esta fase suele ser más rápida y económica que un proceso judicial.",
          ].map((text, i) => (
            <motion.p
              key={i}
              className={styles.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {text}
            </motion.p>
          ))}

          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Cobro jurídico o proceso ejecutivo
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Si el deudor no paga, puedes iniciar un proceso ejecutivo en
            Colombia, siempre que exista un título ejecutivo como un pagaré,
            contrato o factura.
          </motion.p>

          <motion.ul
            className={styles.list}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <li>Presentación de demanda</li>
            <li>Orden de pago del juez</li>
            <li>Embargo de bienes o cuentas</li>
            <li>Pago o remate de bienes</li>
          </motion.ul>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Este proceso permite exigir el pago de manera legal y efectiva.
          </motion.p>

          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ¿Qué documentos necesitas?
          </motion.h2>

          <motion.ul
            className={styles.list}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <li>Pagaré</li>
            <li>Contrato firmado</li>
            <li>Factura aceptada</li>
            <li>Pruebas de la deuda</li>
          </motion.ul>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contar con estos documentos facilita el proceso de cobro.
          </motion.p>

          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ¿Cuándo acudir a un abogado?
          </motion.h2>

          <motion.ul
            className={styles.list}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <li>El deudor no responde</li>
            <li>La deuda es alta</li>
            <li>No se logra acuerdo de pago</li>
            <li>Se requiere iniciar proceso judicial</li>
          </motion.ul>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Un abogado puede ayudarte a elegir la mejor estrategia para
            recuperar tu dinero.
          </motion.p>

          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Importancia de actuar a tiempo
          </motion.h2>

          {[
            "Dejar pasar el tiempo puede dificultar el cobro, ya que las deudas pueden prescribir en Colombia.",
            "Actuar rápidamente aumenta las probabilidades de recuperar el dinero.",
          ].map((text, i) => (
            <motion.p
              key={i}
              className={styles.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {text}
            </motion.p>
          ))}

          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ¿Dónde encontrar ayuda para cobrar una deuda?
          </motion.h2>

          {[
            "Existen firmas legales especializadas en cobro de cartera que pueden acompañarte en todo el proceso, desde la negociación hasta la vía judicial.",
            "Si estás evaluando opciones, puedes conocer una firma a continuación.",
          ].map((text, i) => (
            <motion.p
              key={i}
              className={styles.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {text}
            </motion.p>
          ))}
        </motion.section>

        {/* ================= CTA ================= */}
        <motion.section
          className={styles.cta}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
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
        </motion.section>

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
