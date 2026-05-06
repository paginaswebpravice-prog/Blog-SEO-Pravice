"use client";

import Link from "next/link";
import styles from "../../Blog.module.css";
import { motion } from "framer-motion";

export default function SasColombiaContent() {
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className={styles.badges}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className={styles.badge}>Empresas</span>
            <span className={styles.reading}>5 min lectura</span>
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            Qué es una SAS en Colombia y cómo funciona
          </motion.h1>

          <motion.p
            className={styles.heroDescription}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Conoce qué es una Sociedad por Acciones Simplificada (SAS), sus
            ventajas y por qué es el tipo de empresa más utilizado en Colombia.
          </motion.p>
        </motion.section>

        {/* ================= CONTENIDO ================= */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className={styles.text}>
            La Sociedad por Acciones Simplificada (SAS) es el tipo de empresa
            más común en Colombia debido a su flexibilidad y facilidad de
            constitución. Este modelo permite a emprendedores y empresas operar
            de manera formal con menos requisitos que otros tipos de sociedad.
          </p>

          <p className={styles.text}>
            En ciudades como Bogotá, la SAS es ampliamente utilizada por
            startups, pequeñas y medianas empresas, ya que facilita la creación
            de negocios y reduce la complejidad legal.
          </p>

          <h2 className={styles.subtitle}>¿Qué es una SAS en Colombia?</h2>

          <p className={styles.text}>
            La SAS es una persona jurídica que se constituye mediante un
            documento privado y permite a uno o varios socios crear una empresa
            con responsabilidad limitada.
          </p>

          <p className={styles.text}>
            Esto significa que los socios responden únicamente hasta el monto de
            sus aportes, protegiendo su patrimonio personal.
          </p>

          <h2 className={styles.subtitle}>
            Características principales de una SAS
          </h2>

          <ul className={styles.list}>
            <li>Puede constituirse con un solo socio</li>
            <li>Responsabilidad limitada</li>
            <li>Flexibilidad en su administración</li>
            <li>No requiere junta directiva obligatoria</li>
            <li>Se crea mediante documento privado</li>
          </ul>

          <h2 className={styles.subtitle}>
            Ventajas de crear una SAS en Colombia
          </h2>

          <p className={styles.text}>
            Este tipo de empresa ofrece múltiples beneficios frente a otras
            estructuras societarias:
          </p>

          <ul className={styles.list}>
            <li>Proceso de creación rápido y sencillo</li>
            <li>Menos costos de constitución</li>
            <li>Mayor flexibilidad en la toma de decisiones</li>
            <li>Adaptabilidad a diferentes modelos de negocio</li>
            <li>Protección del patrimonio personal</li>
          </ul>

          <h2 className={styles.subtitle}>¿Cómo crear una SAS en Colombia?</h2>

          <p className={styles.text}>
            El proceso para crear una SAS es relativamente sencillo:
          </p>

          <ol className={styles.list}>
            <li>Definir el nombre de la empresa</li>
            <li>Redactar los estatutos</li>
            <li>Registrar la empresa en Cámara de Comercio</li>
            <li>Obtener el RUT en la DIAN</li>
            <li>Abrir cuenta bancaria empresarial</li>
          </ol>

          <p className={styles.text}>
            En Bogotá, estos trámites pueden realizarse de manera presencial o
            en línea, facilitando aún más el proceso.
          </p>

          <h2 className={styles.subtitle}>
            Diferencia entre SAS y otros tipos de empresa
          </h2>

          <p className={styles.text}>
            A diferencia de la Sociedad Limitada o la Sociedad Anónima, la SAS
            ofrece mayor flexibilidad en su estructura y menos requisitos
            formales, lo que la hace ideal para emprendedores.
          </p>

          <h2 className={styles.subtitle}>¿Cuándo conviene crear una SAS?</h2>

          <p className={styles.text}>
            Este tipo de empresa es recomendable cuando:
          </p>

          <ul className={styles.list}>
            <li>
              Quieres iniciar un negocio con pocos socios o de forma individual
            </li>
            <li>Buscas limitar la responsabilidad personal</li>
            <li>Necesitas una estructura flexible</li>
            <li>Quieres formalizar tu emprendimiento</li>
          </ul>

          <h2 className={styles.subtitle}>Importancia de la asesoría legal</h2>

          <p className={styles.text}>
            Aunque la SAS es fácil de crear, es importante contar con asesoría
            legal para redactar correctamente los estatutos y evitar errores que
            puedan generar conflictos en el futuro.
          </p>

          <p className={styles.text}>
            Una buena constitución es clave para garantizar el crecimiento y la
            estabilidad de la empresa.
          </p>
        </motion.section>

        {/* ================= CTA ================= */}
        <motion.section
          className={styles.cta}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              ¿Quieres crear una SAS en Colombia?
            </h2>

            <p className={styles.ctaText}>
              Contar con asesoría legal puede facilitar el proceso de creación
              de tu empresa y evitar errores desde el inicio.
            </p>

            <div className={styles.actions}>
              <a
                href="https://marcas-y-patentes.vercel.app/"
                className={styles.primary}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver firma de abogados
              </a>

              <a
                href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
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
              headline: "Qué es una SAS en Colombia y cómo funciona",
              description:
                "Guía completa sobre la Sociedad por Acciones Simplificada en Colombia, sus ventajas y cómo crearla.",
              author: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              publisher: {
                "@type": "Organization",
                name: "PRAVICE Abogados Laboralistas",
              },
              mainEntityOfPage:
                "https://guialegalcolombia.vercel.app/blog/sas-colombia",
            }),
          }}
        />
      </main>
    </>
  );
}
