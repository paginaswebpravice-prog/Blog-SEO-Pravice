import Link from "next/dist/client/link";
import styles from "../../Blog.module.css";

export default function ConstitucionEmpresasPage() {
  return (
    <>
      {/* ================= BACK ================= */}
      <div className={styles.backWrapper}>
        <Link href="/" className={styles.back}>
          <span className={styles.arrow}>←</span>
          Volver al blog
        </Link>
      </div>
      {/* HERO */}
      <main className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.badges}>
            <span className={styles.badge}>Emprendimiento</span>
            <span className={styles.reading}>6 min lectura</span>
          </div>

          <h1 className={styles.title}>
            Constitución de empresas en Colombia paso a paso
          </h1>

          <p className={styles.description}>
            Aprende cómo crear una empresa legalmente en Colombia, los
            requisitos, costos y pasos clave para formalizar tu negocio en
            Bogotá y el resto del país.
          </p>
        </section>

        {/* CONTENIDO */}
        <section>
          <p className={styles.text}>
            La constitución de empresas en Colombia es un proceso fundamental
            para cualquier emprendedor que quiera operar de manera legal y
            segura. En ciudades como Bogotá, donde el ecosistema empresarial es
            altamente competitivo, formalizar un negocio no solo es una
            obligación legal, sino una ventaja estratégica.
          </p>

          <p className={styles.text}>
            Crear una empresa correctamente desde el inicio evita problemas
            futuros, facilita el acceso a créditos y permite establecer
            relaciones comerciales formales con clientes y proveedores.
          </p>

          <h2 className={styles.subtitle}>
            ¿Qué significa constituir una empresa en Colombia?
          </h2>

          <p className={styles.text}>
            Constituir una empresa implica crear una persona jurídica diferente
            de sus socios, con derechos y obligaciones propias. Esto permite
            separar el patrimonio personal del empresarial y reducir riesgos
            legales.
          </p>

          <h2 className={styles.subtitle}>
            Tipos de empresas más comunes en Colombia
          </h2>

          <h3 className={styles.subheading}>
            Sociedad por Acciones Simplificada (SAS)
          </h3>
          <p className={styles.text}>
            Es el tipo de empresa más utilizado en Colombia debido a su
            flexibilidad, facilidad de constitución y beneficios para
            emprendedores.
          </p>

          <h3 className={styles.subheading}>Sociedad Limitada (LTDA)</h3>
          <p className={styles.text}>
            Requiere un número definido de socios y tiene una estructura más
            tradicional en comparación con la SAS.
          </p>

          <h3 className={styles.subheading}>Sociedad Anónima (SA)</h3>
          <p className={styles.text}>
            Está diseñada para grandes empresas que buscan captar inversión a
            través de acciones.
          </p>

          <h2 className={styles.subtitle}>
            Pasos para crear una empresa en Colombia
          </h2>

          <ol className={styles.list}>
            <li>Definir el tipo de empresa</li>
            <li>Verificar el nombre en Cámara de Comercio</li>
            <li>Redactar los estatutos</li>
            <li>Registrar la empresa en Cámara de Comercio</li>
            <li>Obtener el RUT en la DIAN</li>
            <li>Abrir cuenta bancaria empresarial</li>
          </ol>

          <p className={styles.text}>
            En Bogotá, estos trámites se pueden realizar de forma presencial o
            en línea, dependiendo del tipo de empresa y la Cámara de Comercio.
          </p>

          <h2 className={styles.subtitle}>
            Requisitos para constituir una empresa
          </h2>

          <ul className={styles.list}>
            <li>Documento de identidad de los socios</li>
            <li>Dirección del domicilio de la empresa</li>
            <li>Objeto social definido</li>
            <li>Capital inicial</li>
            <li>Estatutos de la sociedad</li>
          </ul>

          <h2 className={styles.subtitle}>
            Costos de crear una empresa en Colombia
          </h2>

          <p className={styles.text}>
            Los costos pueden variar dependiendo del tipo de sociedad y el
            capital registrado. Generalmente incluyen:
          </p>

          <ul className={styles.list}>
            <li>Derechos de registro en Cámara de Comercio</li>
            <li>Impuestos asociados</li>
            <li>Honorarios legales (si se cuenta con asesoría)</li>
          </ul>

          <h2 className={styles.subtitle}>Importancia de la asesoría legal</h2>

          <p className={styles.text}>
            Aunque es posible crear una empresa por cuenta propia, contar con
            asesoría jurídica permite evitar errores en la redacción de
            estatutos, elegir la estructura correcta y cumplir con todas las
            obligaciones legales desde el inicio.
          </p>

          <p className={styles.text}>
            En Colombia, muchas empresas enfrentan problemas por no haber sido
            constituidas correctamente, lo que puede generar sanciones o
            conflictos entre socios.
          </p>

          <h2 className={styles.subtitle}>
            ¿Dónde constituir una empresa en Bogotá?
          </h2>

          <p className={styles.text}>
            En Bogotá existen múltiples opciones para crear una empresa, desde
            procesos directos en Cámara de Comercio hasta el acompañamiento de
            firmas legales especializadas.
          </p>

          <p className={styles.text}>
            Si estás evaluando opciones, es recomendable considerar equipos con
            experiencia en derecho comercial y creación de empresas en Colombia.
          </p>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Conoce una firma que te puede ayudar a crear tu empresa
            </h2>

            <p className={styles.ctaText}>
              Si estás pensando en constituir una empresa en Colombia, contar
              con asesoría legal puede facilitar todo el proceso y evitar
              errores.
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

        {/* SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Constitución de empresas en Colombia paso a paso",
              description:
                "Guía completa para crear una empresa en Colombia, requisitos, costos y pasos legales.",
            }),
          }}
        />
      </main>
    </>
  );
}
