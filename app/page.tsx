const featuredProjects = [
  {
    id: "01",
    label: "Automatizacion QA",
    title: "Automatizacion de pruebas para Android",
    summary:
      "Trabaje en la automatizacion de pruebas para dispositivos Android con Katalon Studio, enfocandome en flujos funcionales y escenarios de regresion donde la confiabilidad de cada validacion era clave.",
    impact:
      "Mayor consistencia en la validacion de procesos criticos y mejor soporte para ciclos de prueba mas ordenados.",
    stack: ["Katalon Studio", "Groovy", "Android", "Jira"],
  },
  {
    id: "02",
    label: "Proyecto Real",
    title: "MALO Fragances",
    summary:
      "Sitio para una perfumeria de nicho con seleccion curada, enfocado en presentar catalogo, disponibilidad, precios claros y una experiencia de compra asistida con cierre por WhatsApp.",
    impact:
      "Una presencia digital mas clara para la marca, con catalogo visible, lenguaje sobrio y un proceso de compra mas directo y confiable.",
    stack: ["E-commerce", "Catalogo", "WhatsApp", "UX", "Branding"],
    href: "https://www.malofragances.mx",
  },
];

const principles = [
  {
    title: "Claridad tecnica",
    description:
      "Trabajo con criterios de aceptacion claros, cobertura util y decisiones tecnicas que se sostienen mas alla de una sola entrega.",
  },
  {
    title: "Entrega confiable",
    description:
      "Priorizo estabilidad, trazabilidad y una validacion que reduzca incertidumbre antes de cada release.",
  },
  {
    title: "Escala sobria",
    description:
      "Busco arquitectura e integraciones que permitan crecer sin perder orden, legibilidad ni calidad operativa.",
  },
];

const capabilities = [
  {
    title: "QA automation",
    description:
      "Estructuro pruebas funcionales, de regresion y validacion end-to-end para reducir riesgo, fortalecer cobertura y volver mas confiables los despliegues.",
    items: ["Katalon Studio", "Pruebas funcionales", "Regresion", "Casos de prueba"],
  },
  {
    title: "Desarrollo full-stack",
    description:
      "Desarrollo interfaces y servicios web con una base clara de arquitectura, integracion y mantenibilidad, cuidando tanto la experiencia como la solidez tecnica.",
    items: ["Next.js", "React", "Laravel", "PHP", "MySQL", "APIs"],
  },
  {
    title: "Calidad operativa",
    description:
      "Documento hallazgos, acompano seguimiento de defectos y colaboro con equipos para convertir incidencias en mejoras sostenibles.",
    items: ["Jira", "Validacion funcional", "Seguimiento de defectos", "Documentacion"],
  },
];

const profileDetails = [
  {
    label: "Ubicacion",
    value: "Estado de Mexico",
  },
  {
    label: "Telefono",
    value: "5548902156",
    href: "tel:+525548902156",
  },
  {
    label: "Ingles",
    value: "Intermedio B1",
  },
];

const education = [
  {
    title: "Ingenieria en Desarrollo de Software Multiplataforma",
    institution: "Universidad Tecnologica de Nezahualcoyotl",
    description:
      "Formacion orientada a desarrollo de software, bases multiplataforma y trabajo tecnico con enfoque practico.",
  },
];

const certifications = [
  {
    title: "Taller de Inteligencia Artificial (IA)",
    institution: "HITSS - Centro de Innovacion",
    meta: "Ago 2025 - Oct 2025 | 128 horas",
    description:
      "Fundamentos de inteligencia artificial y aplicaciones en entornos tecnologicos.",
  },
];

const contactLinks = [
  {
    href: "mailto:gustavoangelmalob@gmail.com",
    label: "Correo",
    value: "gustavoangelmalob@gmail.com",
  },
  {
    href: "https://www.linkedin.com/in/gustavo-angel-malo-bautista-650b67351",
    label: "LinkedIn",
    value: "gustavo-angel-malo-bautista",
  },
  {
    href: "https://github.com/5v2x2sszk7-netizen",
    label: "GitHub",
    value: "5v2x2sszk7-netizen",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-stone-100 selection:bg-stone-200 selection:text-stone-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.09),transparent_32%),radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.04),transparent_24%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-6 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between border-b border-white/10 py-5">
          <div className="space-y-1">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-stone-500">
              Gustavo Angel Malo Bautista
            </p>
            <p className="text-sm text-stone-400">
              QA automation y desarrollo web
            </p>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-stone-400 md:flex">
            <a href="#proyectos" className="transition hover:text-stone-100">
              Proyectos
            </a>
            <a href="#capacidades" className="transition hover:text-stone-100">
              Capacidades
            </a>
            <a href="#contacto" className="transition hover:text-stone-100">
              Contacto
            </a>
          </nav>
        </header>

        <section className="grid gap-16 border-b border-white/10 py-24 lg:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)] lg:gap-10">
          <div className="max-w-4xl space-y-10">
            <div className="space-y-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-stone-500">
                Portafolio selectivo / calidad, producto y ejecucion
              </p>
              <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-stone-50 sm:text-6xl lg:text-[5.5rem]">
                Aporto claridad, control y criterio tecnico a procesos de
                calidad y desarrollo web.
              </h1>
            </div>

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.85fr)]">
              <p className="max-w-2xl text-lg leading-8 text-stone-300 sm:text-[1.35rem] sm:leading-9">
                Ingeniero en Desarrollo y Gestion de Software con perfil
                hibrido enfocado en aseguramiento de calidad, automatizacion de
                pruebas y desarrollo web con Laravel y Next.js.
              </p>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-stone-500">
                  Propuesta de valor
                </p>
                <p className="mt-4 text-base leading-7 text-stone-300">
                  Combino validacion funcional, automatizacion y base de
                  desarrollo para aportar mas confiabilidad, estabilidad y
                  mejora continua al producto.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#proyectos"
                className="rounded-full bg-stone-100 px-6 py-3 text-sm font-medium text-stone-950 transition hover:bg-stone-200"
              >
                Ver proyectos
              </a>
              <a
                href="#contacto"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-stone-100 transition hover:border-white/30 hover:bg-white/5"
              >
                Contactar
              </a>
            </div>
          </div>

          <aside className="flex flex-col justify-between gap-8 rounded-[2.25rem] border border-white/10 bg-white/[0.03] p-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-stone-500">
                  Perfil
                </p>
                <p className="text-3xl font-medium tracking-tight text-stone-100">
                  Calidad, criterio tecnico y una ejecucion sobria.
                </p>
              </div>
              <p className="text-base leading-7 text-stone-400">
                Busco desarrollarme como QA Tester Jr., aportando una mirada
                tecnica orientada a calidad, seguimiento de hallazgos y mejora
                continua del producto.
              </p>
            </div>

            <div className="grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-3 lg:grid-cols-1">
              {profileDetails.map((detail) => (
                <div key={detail.label}>
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-stone-500">
                    {detail.label}
                  </p>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="mt-2 block text-sm leading-6 text-stone-300 transition hover:text-stone-100"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-sm leading-6 text-stone-300">
                      {detail.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="grid gap-10 border-b border-white/10 py-20 lg:grid-cols-[240px_minmax(0,1fr)]">
          <div className="space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-stone-500">
              Enfoque
            </p>
            <p className="max-w-[180px] text-sm leading-6 text-stone-400">
              Una forma de trabajo centrada en precision, estabilidad y criterio
              de largo plazo.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-8">
              <p className="max-w-3xl text-2xl font-medium leading-10 tracking-tight text-stone-100">
                La calidad no aparece al final del proceso. Se define desde el
                flujo, la arquitectura y la forma en que cada entrega se
                valida.
              </p>
            </div>
            <div className="grid gap-4">
              {principles.map((principle) => (
                <article
                  key={principle.title}
                  className="rounded-[1.5rem] border border-white/10 p-6"
                >
                  <h3 className="text-lg font-medium text-stone-100">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-stone-400">
                    {principle.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="proyectos"
          className="grid gap-10 border-b border-white/10 py-20 lg:grid-cols-[240px_minmax(0,1fr)]"
        >
          <div className="space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-stone-500">
              Selected work
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-stone-100">
              Proyectos destacados
            </h2>
          </div>
          <div className="space-y-6">
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className="rounded-[2.25rem] border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:border-white/20 hover:bg-white/[0.035]"
              >
                <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
                  <div className="max-w-2xl space-y-5">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-stone-500">
                          {project.id}
                        </span>
                        <span className="h-px w-10 bg-white/10" />
                        <span className="text-sm text-stone-400">{project.label}</span>
                      </div>
                      <h3 className="text-3xl font-medium tracking-tight text-stone-100">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-base leading-8 text-stone-300">
                      {project.summary}
                    </p>
                  </div>

                  <div className="max-w-sm rounded-[1.6rem] border border-white/10 bg-black/20 p-6">
                    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-stone-500">
                      Resultado
                    </p>
                    <p className="mt-4 text-sm leading-7 text-stone-300">
                      {project.impact}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-stone-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.href ? (
                  <div className="mt-6">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-full border border-white/15 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-stone-200 transition hover:border-white/30 hover:bg-white/5"
                    >
                      Ver sitio
                    </a>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 border-b border-white/10 py-20 lg:grid-cols-[240px_minmax(0,1fr)]">
          <div className="space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-stone-500">
              Formacion
            </p>
            <p className="max-w-[190px] text-sm leading-6 text-stone-400">
              Base academica, formacion complementaria e interes por seguir
              creciendo.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div className="space-y-6">
              {education.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[2rem] border border-white/10 p-8"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-stone-500">
                    Formacion academica
                  </p>
                  <h3 className="mt-4 text-2xl font-medium tracking-tight text-stone-100">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-400">{item.institution}</p>
                  <p className="mt-4 text-sm leading-7 text-stone-300">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
            <div className="space-y-6">
              {certifications.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-8"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-stone-500">
                    Curso y certificacion
                  </p>
                  <h3 className="mt-4 text-2xl font-medium tracking-tight text-stone-100">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-400">{item.institution}</p>
                  <p className="mt-2 text-sm text-stone-500">{item.meta}</p>
                  <p className="mt-4 text-sm leading-7 text-stone-300">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="capacidades"
          className="grid gap-10 border-b border-white/10 py-20 lg:grid-cols-[240px_minmax(0,1fr)]"
        >
          <div className="space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-stone-500">
              Capacidades
            </p>
            <p className="max-w-[190px] text-sm leading-6 text-stone-400">
              Herramientas, criterio y experiencia convertidos en capacidad de
              ejecucion.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="rounded-[1.9rem] border border-white/10 p-7"
              >
                <h3 className="text-2xl font-medium tracking-tight text-stone-100">
                  {capability.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-stone-400">
                  {capability.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {capability.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white/[0.04] px-3 py-1 text-xs text-stone-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
            <article className="rounded-[1.9rem] border border-white/10 bg-white/[0.02] p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-stone-500">
                Forma de colaborar
              </p>
              <p className="mt-4 text-xl font-medium leading-9 tracking-tight text-stone-100">
                Aporto mejor en equipos que valoran orden, seguimiento claro y
                una ejecucion tecnica cuidada.
              </p>
              <p className="mt-4 text-sm leading-7 text-stone-400">
                Priorizo comunicacion util, documentacion entendible y una
                relacion cercana entre desarrollo, testing y objetivos de
                producto.
              </p>
            </article>
          </div>
        </section>

        <section className="grid gap-10 border-b border-white/10 py-20 lg:grid-cols-[240px_minmax(0,1fr)]">
          <div className="space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-stone-500">
              Experiencia
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <article className="rounded-[2rem] border border-white/10 p-8">
              <div className="flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-stone-500">
                    CTIN Centro de Tecnologia e Innovacion
                  </p>
                  <h3 className="mt-3 text-3xl font-medium tracking-tight text-stone-100">
                    Tester de aplicaciones moviles (Becario)
                  </h3>
                </div>
                <p className="text-sm text-stone-400">Abr 2025 - Sep 2025</p>
              </div>
              <div className="grid gap-8 pt-6 md:grid-cols-2">
                <ul className="space-y-4 text-sm leading-7 text-stone-300">
                  <li>
                    Desarrollo de pruebas automatizadas en Katalon para
                    dispositivos moviles Android.
                  </li>
                  <li>
                    Ejecucion de pruebas manuales y Monkey Testing en flujos
                    funcionales.
                  </li>
                </ul>
                <ul className="space-y-4 text-sm leading-7 text-stone-400">
                  <li>
                    Validacion de requerimientos funcionales, registro de
                    hallazgos y seguimiento de defectos.
                  </li>
                  <li>
                    Diseno de casos de prueba para automatizar procesos
                    internos.
                  </li>
                </ul>
              </div>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-stone-500">
                Sintesis del perfil
              </p>
              <div className="mt-5 space-y-5 text-sm leading-7 text-stone-300">
                <p>Experiencia en QA funcional, regresion y caja blanca / caja negra.</p>
                <p>Base tecnica en Java, JavaScript, Python, PHP y C++.</p>
                <p>Conocimiento de herramientas como Git, GitHub, Scrum y Google Cloud.</p>
              </div>
            </article>
          </div>
        </section>

        <section
          id="contacto"
          className="grid gap-10 py-20 lg:grid-cols-[240px_minmax(0,1fr)]"
        >
          <div className="space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-stone-500">
              Contacto
            </p>
            <p className="max-w-[180px] text-sm leading-6 text-stone-400">
              Disponible para colaborar en equipos y proyectos donde la calidad
              importe de verdad.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_320px]">
            <div className="rounded-[2.25rem] border border-white/10 p-8 sm:p-10">
              <p className="max-w-3xl text-3xl font-medium leading-11 tracking-tight text-stone-100">
                Si buscas a alguien que combine automatizacion, desarrollo web y
                criterio de calidad en una misma ejecucion, podemos conversar.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="mailto:gustavoangelmalob@gmail.com"
                  className="rounded-full bg-stone-100 px-6 py-3 text-sm font-medium text-stone-950 transition hover:bg-stone-200"
                >
                  Escribirme
                </a>
                <a
                  href="https://github.com/5v2x2sszk7-netizen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-stone-100 transition hover:border-white/30 hover:bg-white/5"
                >
                  Ver GitHub
                </a>
              </div>
            </div>

            <div className="rounded-[2.25rem] border border-white/10 bg-white/[0.02] p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-stone-500">
                Contacto directo
              </p>
              <div className="mt-6 space-y-5">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="block border-b border-white/10 pb-4 transition hover:text-stone-100"
                  >
                    <p className="text-sm text-stone-500">{link.label}</p>
                    <p className="mt-1 text-sm text-stone-300">{link.value}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
