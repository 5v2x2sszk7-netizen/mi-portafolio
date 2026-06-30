import SpaceBackground from "./space-background";

const featuredProjects = [
  {
    id: "01",
    label: "Automatizacion QA",
    title: "Automatizacion de pruebas para Android",
    summary:
      "Participe en la automatizacion de pruebas para dispositivos Android con Katalon Studio, cubriendo flujos funcionales y escenarios de regresion donde la estabilidad de cada validacion era clave para el seguimiento del producto.",
    impact:
      "Mayor consistencia en la validacion de procesos criticos, mejor seguimiento de hallazgos y una base mas ordenada para ciclos de prueba recurrentes.",
    stack: ["Katalon Studio", "Groovy", "Android", "Jira"],
  },
  {
    id: "02",
    label: "Proyecto real",
    title: "MALO Fragances",
    summary:
      "Sitio para una perfumeria de nicho con seleccion curada, enfocado en presentar catalogo, disponibilidad, precios claros y una experiencia de compra asistida con cierre por WhatsApp.",
    impact:
      "Una presencia digital mas clara para la marca, con catalogo visible, lenguaje sobrio y un proceso de compra mas directo y confiable.",
    stack: ["E-commerce", "Catalogo", "WhatsApp", "UX", "Branding"],
    href: "https://www.malofragances.mx",
    previewTitle: "MALO Fragances",
    previewEyebrow: "Perfumeria de nicho",
    previewMeta: ["Catalogo curado", "WhatsApp", "Stock real"],
  },
];

const currentFocus = [
  "Automatizacion funcional y de regresion con Katalon Studio.",
  "Desarrollo web con Laravel, Next.js y React.",
  "Seguimiento de defectos y mejora continua.",
];

const capabilities = [
  {
    title: "QA automation",
    description:
      "Estructuro pruebas funcionales, de regresion y validacion end-to-end para reducir riesgo, fortalecer cobertura y volver mas confiables los despliegues.",
  },
  {
    title: "Desarrollo full-stack",
    description:
      "Desarrollo interfaces y servicios web con una base clara de arquitectura, integracion y mantenibilidad, cuidando tanto la experiencia como la solidez tecnica.",
  },
  {
    title: "Calidad operativa",
    description:
      "Documento hallazgos, acompano seguimiento de defectos y colaboro con equipos para convertir incidencias en mejoras sostenibles.",
  },
];

const techStack = [
  "Katalon Studio / QA funcional",
  "Next.js / React",
  "Laravel / PHP",
  "JavaScript / Python / Java / C++",
  "MySQL / Oracle / SQL Server",
  "Git / GitHub / Scrum / Google Cloud",
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
    <main className="space-scene relative min-h-screen overflow-hidden text-stone-100 selection:bg-stone-200 selection:text-stone-900">
      <SpaceBackground />
      <div className="space-glow" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:8rem_8rem] [mask-image:radial-gradient(ellipse_at_center,black_46%,transparent_100%)] opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 py-6 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between border-b border-white/8 py-5">
          <div className="space-y-1">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-stone-500">
              Gustavo Angel Malo Bautista
            </p>
            <p className="text-sm text-stone-400">QA automation y desarrollo web</p>
          </div>
          <nav className="hidden items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-3 py-2 text-sm text-stone-400 backdrop-blur md:flex">
            <a
              href="#proyectos"
              className="rounded-full px-4 py-2 transition hover:bg-white/[0.05] hover:text-stone-100"
            >
              Proyectos
            </a>
            <a
              href="#capacidades"
              className="rounded-full px-4 py-2 transition hover:bg-white/[0.05] hover:text-stone-100"
            >
              Capacidades
            </a>
            <a
              href="#contacto"
              className="rounded-full px-4 py-2 transition hover:bg-white/[0.05] hover:text-stone-100"
            >
              Contacto
            </a>
          </nav>
        </header>

        <section className="grid gap-12 border-b border-white/8 py-22 lg:grid-cols-[minmax(0,1.2fr)_340px] lg:items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-stone-500">
                Portafolio / QA / desarrollo web
              </p>
              <div className="space-y-4">
                <p className="max-w-2xl text-sm uppercase tracking-[0.24em] text-stone-400">
                  QA Automation Engineer Jr.
                </p>
                <h1 className="max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] text-stone-50 sm:text-6xl lg:text-[5.5rem]">
                  Gustavo
                  <br />
                  Angel Malo
                  <br />
                  Bautista
                </h1>
              </div>
              <div className="max-w-3xl space-y-4">
                <p className="text-lg leading-8 text-stone-200 sm:text-[1.35rem] sm:leading-9">
                  Aseguro calidad, automatizo validaciones y construyo productos
                  web con mas claridad y confiabilidad.
                </p>
                <p className="max-w-2xl text-base leading-7 text-stone-400">
                  Perfil hibrido con experiencia en QA funcional, automatizacion
                  con Katalon Studio y desarrollo con Laravel, Next.js y React.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#proyectos"
                className="rounded-full bg-stone-100 px-6 py-3 text-sm font-medium text-stone-950 transition duration-300 hover:-translate-y-0.5 hover:bg-stone-200"
              >
                Ver trabajo seleccionado
              </a>
              <a
                href="#contacto"
                className="text-sm font-medium text-stone-300 underline decoration-white/20 underline-offset-6 transition hover:text-stone-100 hover:decoration-white/40"
              >
                Disponible para colaborar
              </a>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-[1.35rem] bg-white/[0.025] px-5 py-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone-500">
                  Enfoque
                </p>
                <p className="mt-3 text-sm leading-6 text-stone-300">
                  QA funcional, regresion y automatizacion sobre procesos
                  criticos.
                </p>
              </div>
              <div className="rounded-[1.35rem] bg-white/[0.025] px-5 py-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone-500">
                  Stack
                </p>
                <p className="mt-3 text-sm leading-6 text-stone-300">
                  Katalon, Laravel, Next.js, React y bases SQL.
                </p>
              </div>
              <div className="rounded-[1.35rem] bg-white/[0.025] px-5 py-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone-500">
                  Valor
                </p>
                <p className="mt-3 text-sm leading-6 text-stone-300">
                  Claridad tecnica, seguimiento y experiencia mas solida.
                </p>
              </div>
            </div>
          </div>

          <aside className="ambient-card rounded-[2.25rem] border border-white/8 bg-white/[0.035] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
            <div className="space-y-6">
              <div className="space-y-4">
                <span className="inline-flex rounded-full border border-emerald-500/18 bg-emerald-500/8 px-3 py-1 text-xs font-medium text-emerald-300">
                  Disponible
                </span>
                <div className="space-y-2">
                  <p className="text-2xl font-medium tracking-tight text-stone-100">
                    QA Tester Jr.
                  </p>
                  <p className="text-sm leading-6 text-stone-400">
                    Enfoque en QA automation, validacion funcional y desarrollo
                    web.
                  </p>
                </div>
              </div>

              <div className="space-y-4 border-t border-white/8 pt-6">
                {profileDetails.map((detail) => (
                  <div key={detail.label}>
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-stone-500">
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

              <div className="border-t border-white/8 pt-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-stone-500">
                  En que estoy enfocado
                </p>
                <div className="mt-4 space-y-3 text-sm leading-7 text-stone-300">
                  {currentFocus.map((item) => (
                    <p key={item}>- {item}</p>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section
          id="proyectos"
          className="section-ambient section-ambient-proyectos grid gap-10 border-b border-white/8 py-24 lg:grid-cols-[240px_minmax(0,1fr)]"
        >
          <div className="space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-stone-500">
              Selected work
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-stone-100">
              Proyectos destacados
            </h2>
            <p className="max-w-[205px] text-sm leading-6 text-stone-400">
              Una seleccion breve de trabajo real, automatizacion y criterio de
              producto.
            </p>
          </div>
          <div className="space-y-6">
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className="ambient-card group rounded-[2.3rem] border border-white/7 bg-white/[0.025] p-8 transition duration-300 hover:-translate-y-1 hover:border-white/12 hover:bg-white/[0.04]"
              >
                <div className="grid gap-8 lg:grid-cols-[100px_minmax(0,1fr)]">
                  <div className="space-y-3">
                    <p className="text-5xl font-semibold tracking-[-0.04em] text-stone-100">
                      {project.id}
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-stone-500">
                      {project.label}
                    </p>
                  </div>

                  <div className="space-y-7">
                    <div className="space-y-3">
                      <h3 className="text-3xl font-medium tracking-tight text-stone-100 sm:text-[2.2rem]">
                        {project.title}
                      </h3>
                      <p className="max-w-3xl text-base leading-8 text-stone-300">
                        {project.summary}
                      </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_220px]">
                      <p className="max-w-2xl text-sm leading-7 text-stone-400">
                        {project.impact}
                      </p>
                      <div className="rounded-[1.4rem] bg-white/[0.028] px-5 py-4">
                        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone-500">
                          Lectura del caso
                        </p>
                        <p className="mt-3 text-sm leading-6 text-stone-300">
                          {project.id === "01"
                            ? "Automatizacion, seguimiento y ciclos de validacion mas ordenados."
                            : "Marca, catalogo y conversion asistida con una presencia mas clara."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/8 bg-white/[0.025] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-stone-300 transition duration-300 group-hover:border-white/14"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.previewTitle ? (
                  <div className="ambient-card mt-8 overflow-hidden rounded-[1.8rem] border border-white/8 bg-[#0d0d0d]">
                    <div className="flex items-center gap-2 border-b border-white/8 px-5 py-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-stone-600" />
                      <span className="h-2.5 w-2.5 rounded-full bg-stone-700" />
                      <span className="h-2.5 w-2.5 rounded-full bg-stone-800" />
                      <span className="ml-3 text-[11px] uppercase tracking-[0.18em] text-stone-500">
                        Vista del proyecto
                      </span>
                    </div>
                    <div className="grid gap-8 px-6 py-7 lg:grid-cols-[minmax(0,1fr)_220px]">
                      <div className="space-y-4">
                        <p className="text-[11px] uppercase tracking-[0.22em] text-stone-500">
                          {project.previewEyebrow}
                        </p>
                        <h4 className="text-3xl font-medium tracking-tight text-stone-100">
                          {project.previewTitle}
                        </h4>
                        <p className="max-w-xl text-sm leading-7 text-stone-400">
                          Menos catalogo infinito. Mas curaduria. Una experiencia
                          breve, clara y personal con disponibilidad visible,
                          precios nitidos y cierre por WhatsApp.
                        </p>
                      </div>
                      <div className="space-y-3 rounded-[1.45rem] bg-white/[0.035] p-5">
                        {project.previewMeta?.map((item) => (
                          <div
                            key={item}
                            className="rounded-full border border-white/8 px-3 py-2 text-xs uppercase tracking-[0.16em] text-stone-300"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}

                {project.href ? (
                  <div className="mt-6">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-full border border-white/12 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-stone-200 transition duration-300 hover:-translate-y-0.5 hover:border-white/22 hover:bg-white/6"
                    >
                      Ver sitio
                    </a>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section
          id="capacidades"
          className="section-ambient section-ambient-capacidades grid gap-10 border-b border-white/8 py-24 lg:grid-cols-[240px_minmax(0,1fr)]"
        >
          <div className="space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-stone-500">
              Capacidades
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-stone-100">
              Base tecnica curada
            </h2>
            <p className="max-w-[210px] text-sm leading-6 text-stone-400">
              Herramientas y fortalezas agrupadas por criterio, no solo por
              listado.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div className="ambient-card rounded-[2.1rem] bg-white/[0.02] p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-stone-500">
                Stack principal
              </p>
              <div className="space-y-4">
                {techStack.map((item) => (
                  <div
                    key={item}
                    className="border-b border-white/8 pb-4 pt-4 text-base text-stone-300 first:pt-5 last:border-b-0 last:pb-0"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6">
              {capabilities.map((capability) => (
                <article
                  key={capability.title}
                  className="ambient-card rounded-[1.55rem] bg-white/[0.028] p-7"
                >
                  <h3 className="text-xl font-medium tracking-tight text-stone-100">
                    {capability.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-stone-400">
                    {capability.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-ambient section-ambient-experiencia grid gap-10 border-b border-white/8 py-24 lg:grid-cols-[240px_minmax(0,1fr)]">
          <div className="space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-stone-500">
              Experiencia
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <article className="ambient-card rounded-[2.2rem] bg-white/[0.02] p-8">
              <div className="flex flex-col gap-4 border-b border-white/8 pb-6 md:flex-row md:items-end md:justify-between">
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

            <article className="ambient-card rounded-[2rem] bg-white/[0.028] p-8">
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

        <section className="section-ambient section-ambient-formacion grid gap-10 border-b border-white/8 py-24 lg:grid-cols-[240px_minmax(0,1fr)]">
          <div className="space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-stone-500">
              Formacion
            </p>
            <p className="max-w-[190px] text-sm leading-6 text-stone-400">
              Base academica y formacion complementaria relevante.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div className="space-y-6">
              {education.map((item) => (
                <article
                  key={item.title}
                  className="ambient-card rounded-[2.05rem] bg-white/[0.018] p-8"
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
                  className="ambient-card rounded-[1.85rem] bg-white/[0.03] p-8"
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
          id="contacto"
          className="section-ambient section-ambient-contacto grid gap-10 py-24 lg:grid-cols-[240px_minmax(0,1fr)]"
        >
          <div className="space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-stone-500">
              Contacto
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-stone-100">
              Cierre
            </h2>
            <p className="max-w-[210px] text-sm leading-6 text-stone-400">
              Disponible para colaborar en equipos y proyectos donde la calidad
              importe de verdad y el producto necesite mas claridad.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_320px]">
            <div className="ambient-card rounded-[2.4rem] bg-white/[0.03] p-8 sm:p-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-stone-500">
                Disponible para nuevos proyectos
              </p>
              <p className="mt-5 max-w-3xl text-3xl font-medium leading-11 tracking-tight text-stone-100">
                Si te interesa sumar QA, automatizacion o una ejecucion web mas
                cuidada, conversemos.
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-stone-400">
                Abierto a colaborar en equipos, practicas profesionales y
                proyectos donde la confiabilidad del producto sea una prioridad.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="mailto:gustavoangelmalob@gmail.com"
                  className="rounded-full bg-stone-100 px-6 py-3 text-sm font-medium text-stone-950 transition hover:-translate-y-0.5 hover:bg-stone-200"
                >
                  Escribirme
                </a>
                <a
                  href="https://www.linkedin.com/in/gustavo-angel-malo-bautista-650b67351"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/12 px-6 py-3 text-sm font-medium text-stone-100 transition hover:-translate-y-0.5 hover:border-white/24 hover:bg-white/6"
                >
                  Ver LinkedIn
                </a>
              </div>
              <p className="mt-16 text-4xl font-semibold tracking-[-0.06em] text-stone-100/90 sm:text-5xl">
                Gustavo Angel
                <br />
                Malo Bautista
              </p>
            </div>

            <div className="ambient-card rounded-[1.9rem] bg-white/[0.028] p-8">
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
                    className="block border-b border-white/8 pb-4 transition hover:text-stone-100"
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
