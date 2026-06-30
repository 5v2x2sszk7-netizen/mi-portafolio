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
  "Automatizacion de pruebas funcionales y de regresion con Katalon Studio.",
  "Desarrollo web con Laravel, Next.js y React.",
  "Validacion de requerimientos, seguimiento de defectos y mejora continua.",
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
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-stone-100 selection:bg-stone-200 selection:text-stone-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_32%),radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.04),transparent_24%)]" />
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
              Stack
            </a>
            <a href="#contacto" className="transition hover:text-stone-100">
              Contacto
            </a>
          </nav>
        </header>

        <section className="grid gap-12 border-b border-white/10 py-24 lg:grid-cols-[minmax(0,1.15fr)_360px] lg:items-start">
          <div className="space-y-10">
            <div className="space-y-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-stone-500">
                Portafolio / QA automation / desarrollo web
              </p>
              <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-stone-50 sm:text-6xl lg:text-7xl">
                Gustavo
                <br />
                Angel Malo
                <br />
                Bautista
              </h1>
              <div className="space-y-2 text-lg text-stone-300 sm:text-xl">
                <p>QA Automation · Desarrollo Web · Mejora Continua</p>
                <p className="max-w-3xl text-base leading-8 text-stone-400 sm:text-lg">
                  Ingeniero en Desarrollo y Gestion de Software con enfoque en
                  aseguramiento de calidad, automatizacion de pruebas y
                  productos web mejor ejecutados.
                </p>
              </div>
            </div>

            <div className="max-w-3xl space-y-5">
              <p className="text-base leading-8 text-stone-300 sm:text-lg">
                Perfil hibrido con experiencia en validacion funcional,
                automatizacion con Katalon Studio y desarrollo con Laravel,
                Next.js y React. Busco aportar claridad, control y seguimiento
                tecnico sobre procesos que necesitan mayor confiabilidad.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#proyectos"
                  className="rounded-full bg-stone-100 px-6 py-3 text-sm font-medium text-stone-950 transition duration-300 hover:-translate-y-0.5 hover:bg-stone-200"
                >
                  Ver proyectos
                </a>
                <a
                  href="#contacto"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-stone-100 transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/5"
                >
                  Disponible para colaborar
                </a>
              </div>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <div className="space-y-6">
              <div className="space-y-3">
                <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  Disponible
                </span>
                <div className="space-y-1">
                  <p className="text-2xl font-medium text-stone-100">
                    QA Tester Jr.
                  </p>
                  <p className="text-sm text-stone-400">
                    QA automation y desarrollo web
                  </p>
                </div>
              </div>

              <div className="space-y-4 border-t border-white/10 pt-6">
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

              <div className="border-t border-white/10 pt-6">
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
          className="grid gap-10 border-b border-white/10 py-20 lg:grid-cols-[240px_minmax(0,1fr)]"
        >
          <div className="space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-stone-500">
              Proyectos
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-stone-100">
              Proyectos destacados
            </h2>
            <p className="max-w-[190px] text-sm leading-6 text-stone-400">
              Casos seleccionados que muestran trabajo real y experiencia
              tecnica aplicada.
            </p>
          </div>
          <div className="space-y-6">
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.035]"
              >
                <div className="grid gap-8 lg:grid-cols-[100px_minmax(0,1fr)]">
                  <div className="space-y-2">
                    <p className="text-4xl font-semibold tracking-tight text-stone-100">
                      {project.id}
                    </p>
                    <p className="text-xs uppercase tracking-[0.18em] text-stone-500">
                      {project.label}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-3xl font-medium tracking-tight text-stone-100">
                        {project.title}
                      </h3>
                      <p className="max-w-3xl text-base leading-8 text-stone-300">
                        {project.summary}
                      </p>
                    </div>

                    <p className="max-w-2xl text-sm leading-7 text-stone-400">
                      {project.impact}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-stone-300 transition duration-300 group-hover:border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.previewTitle ? (
                  <div className="mt-8 overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0d0d0d]">
                    <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
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
                      <div className="space-y-3 rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-5">
                        {project.previewMeta?.map((item) => (
                          <div
                            key={item}
                            className="rounded-full border border-white/10 px-3 py-2 text-xs uppercase tracking-[0.16em] text-stone-300"
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
                      className="inline-flex rounded-full border border-white/15 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-stone-200 transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/5"
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
          className="grid gap-10 border-b border-white/10 py-20 lg:grid-cols-[240px_minmax(0,1fr)]"
        >
          <div className="space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-stone-500">
              Tecnologias y stack
            </p>
            <p className="max-w-[190px] text-sm leading-6 text-stone-400">
              Base tecnica resumida para entender rapido en que puedo aportar.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div className="rounded-[2rem] border border-white/10 p-8">
              <div className="space-y-4">
                {techStack.map((item) => (
                  <div
                    key={item}
                    className="border-b border-white/10 pb-4 text-base text-stone-300 last:border-b-0 last:pb-0"
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
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.02] p-7"
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

        <section className="grid gap-10 border-b border-white/10 py-20 lg:grid-cols-[240px_minmax(0,1fr)]">
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
            <div className="rounded-[2rem] border border-white/10 p-8 sm:p-10">
              <p className="max-w-3xl text-3xl font-medium leading-11 tracking-tight text-stone-100">
                Si te interesa colaborar o conocer mejor mi trabajo, no dudes
                en ponerte en contacto conmigo.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="mailto:gustavoangelmalob@gmail.com"
                  className="rounded-full bg-stone-100 px-6 py-3 text-sm font-medium text-stone-950 transition hover:bg-stone-200"
                >
                  Escribirme
                </a>
                <a
                  href="https://www.linkedin.com/in/gustavo-angel-malo-bautista-650b67351"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-stone-100 transition hover:border-white/30 hover:bg-white/5"
                >
                  Ver LinkedIn
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-8">
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
