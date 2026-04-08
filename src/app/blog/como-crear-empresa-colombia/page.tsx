import Link from "next/dist/client/link";
import styles from "../../Blog.module.css";

export default function CrearEmpresaPage() {
  return (
    <>
      {/* ================= BACK ================= */}
      <div className={styles.backWrapper}>
        <Link href="/" className={styles.back}>
          <span className={styles.arrow}>←</span>
          Volver al blog
        </Link>
      </div>
      <main className={styles.container}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.badges}>
            <span className={styles.badge}>Emprendimiento</span>
            <span className={styles.reading}>6 min lectura</span>
          </div>

          <h1 className={styles.title}>
            Cómo crear una empresa en Colombia: guía completa
          </h1>

          <p className={styles.description}>
            Descubre los pasos clave para crear una empresa en Colombia, desde
            la idea inicial hasta su formalización legal en Bogotá y el resto
            del país.
          </p>
        </section>

        {/* CONTENIDO */}
        <section>
          <p className={styles.text}>
            Crear una empresa en Colombia es una de las decisiones más
            importantes para cualquier emprendedor. Más allá de tener una buena
            idea de negocio, es fundamental cumplir con los requisitos legales
            para operar de manera segura y evitar problemas en el futuro.
          </p>

          <p className={styles.text}>
            En ciudades como Bogotá, donde existe un entorno empresarial
            dinámico, formalizar tu empresa te permite acceder a oportunidades
            de crecimiento, alianzas comerciales y financiamiento.
          </p>

          <h2 className={styles.subtitle}>
            ¿Qué necesitas para crear una empresa en Colombia?
          </h2>

          <p className={styles.text}>
            Antes de iniciar el proceso, es importante tener claridad sobre
            algunos aspectos básicos:
          </p>

          <ul className={styles.list}>
            <li>Definir la idea de negocio</li>
            <li>Elegir el tipo de empresa</li>
            <li>Contar con socios (si aplica)</li>
            <li>Establecer un capital inicial</li>
            <li>Definir el objeto social</li>
          </ul>

          <h2 className={styles.subtitle}>
            Paso a paso para crear una empresa en Colombia
          </h2>

          <h3 className={styles.subheading}>1. Elegir el tipo de empresa</h3>
          <p className={styles.text}>
            En Colombia, la opción más común es la Sociedad por Acciones
            Simplificada (SAS), ya que ofrece flexibilidad y facilidad de
            creación.
          </p>

          <h3 className={styles.subheading}>2. Verificar el nombre</h3>
          <p className={styles.text}>
            Debes consultar en la Cámara de Comercio que el nombre de tu empresa
            esté disponible y no esté registrado por otra organización.
          </p>

          <h3 className={styles.subheading}>3. Redactar los estatutos</h3>
          <p className={styles.text}>
            Este documento define las reglas internas de la empresa, incluyendo
            socios, participación y funcionamiento.
          </p>

          <h3 className={styles.subheading}>
            4. Registro en Cámara de Comercio
          </h3>
          <p className={styles.text}>
            Aquí se formaliza la empresa legalmente. En Bogotá, este proceso
            puede hacerse de forma presencial o virtual.
          </p>

          <h3 className={styles.subheading}>5. Obtener el RUT</h3>
          <p className={styles.text}>
            Es el registro ante la DIAN que permite identificar tu empresa para
            efectos tributarios.
          </p>

          <h3 className={styles.subheading}>6. Abrir cuenta bancaria</h3>
          <p className={styles.text}>
            Es necesario para manejar las finanzas de la empresa de forma
            separada del patrimonio personal.
          </p>

          <h2 className={styles.subtitle}>
            Errores comunes al crear una empresa
          </h2>

          <ul className={styles.list}>
            <li>No definir correctamente el objeto social</li>
            <li>Elegir mal el tipo de sociedad</li>
            <li>No contar con asesoría legal</li>
            <li>Errores en los estatutos</li>
            <li>No planificar aspectos tributarios</li>
          </ul>

          <p className={styles.text}>
            Estos errores pueden generar problemas legales o financieros en el
            futuro, por lo que es importante hacer el proceso correctamente
            desde el inicio.
          </p>

          <h2 className={styles.subtitle}>
            ¿Cuánto cuesta crear una empresa en Colombia?
          </h2>

          <p className={styles.text}>
            El costo depende del tipo de empresa y del capital registrado.
            Incluye principalmente derechos de registro en Cámara de Comercio,
            impuestos y posibles honorarios legales.
          </p>

          <h2 className={styles.subtitle}>
            Importancia de hacerlo correctamente
          </h2>

          <p className={styles.text}>
            Crear una empresa no es solo un trámite, es la base legal de tu
            negocio. Una constitución correcta permite operar con seguridad,
            evitar sanciones y generar confianza en clientes e inversionistas.
          </p>

          <h2 className={styles.subtitle}>Crear empresa en Bogotá</h2>

          <p className={styles.text}>
            Bogotá es uno de los principales centros empresariales de Colombia,
            por lo que crear una empresa en esta ciudad ofrece múltiples
            ventajas en términos de mercado, talento y oportunidades.
          </p>

          <p className={styles.text}>
            Sin embargo, también implica cumplir con normativas específicas y
            procesos que pueden ser más exigentes que en otras regiones.
          </p>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              ¿Buscas ayuda para crear tu empresa en Colombia?
            </h2>

            <p className={styles.ctaText}>
              Existen firmas legales que pueden acompañarte en todo el proceso
              de creación de empresa, desde la constitución hasta la asesoría
              estratégica.
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

        {/* SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Cómo crear una empresa en Colombia: guía completa",
              description:
                "Guía paso a paso para crear una empresa en Colombia, requisitos y costos.",
            }),
          }}
        />
      </main>
    </>
  );
}
