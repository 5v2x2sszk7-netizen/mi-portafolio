export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 font-sans antialiased">
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        
        {/* PUNTO 1: HERO / SOBRE MÍ & CONTACTO */}
        <header className="space-y-4 pt-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Gustavo Angel Malo Bautista
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 font-medium">
            QA Automation Engineer & Web Developer
          </p>
          <p className="text-neutral-400 text-base max-w-2xl leading-relaxed">
            Ingeniero en Desarrollo de Software especializado en el Aseguramiento de Calidad (QA) con un perfil híbrido enfocado en automatización end-to-end y sólidas bases en desarrollo backend con Laravel y frontend moderno con Next.js.
          </p>
          
          {/* Enlaces de contacto limpios */}
          <div className="flex flex-wrap gap-4 pt-2 text-sm text-neutral-400">
            <a href="mailto:gustavoangelmalob@gmail.com" className="hover:text-blue-400 transition flex items-center gap-1">
              📧 gustavoangelmalob@gmail.com
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition flex items-center gap-1">
              💼 LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition flex items-center gap-1">
              💻 GitHub
            </a>
          </div>
        </header>

        <hr className="border-neutral-800" />

        {/* SECCIÓN: SKILLS */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-200">Competencias Técnicas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-2xl space-y-3">
              <h3 className="text-lg font-semibold text-blue-400">QA & Automatización</h3>
              <div className="flex flex-wrap gap-2">
                {['Katalon Studio', 'Pruebas Funcionales', 'Regresión', 'Caja Blanca / Negra', 'Monkey Testing', 'Casos de Prueba'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-neutral-800 text-xs font-medium rounded-full text-neutral-300 border border-neutral-700/50">{skill}</span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-2xl space-y-3">
              <h3 className="text-lg font-semibold text-purple-400">Desarrollo Web & DB</h3>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'React', 'Laravel', 'PHP', 'JavaScript', 'Python', 'Java', 'MySQL', 'Oracle'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-neutral-800 text-xs font-medium rounded-full text-neutral-300 border border-neutral-700/50">{skill}</span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* PUNTO 2: EXPERIENCIA LABORAL */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-200">Experiencia Profesional</h2>
          <div className="space-y-8 border-l border-neutral-800 pl-4 ml-2">
            
            <div className="relative space-y-2">
              <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-blue-500 border-2 border-neutral-950" />
              <div className="flex flex-wrap justify-between items-baseline gap-2">
                <h3 className="text-lg font-bold text-neutral-100">Tester de Aplicaciones Móviles (Becario)</h3>
                <span className="text-sm text-neutral-500 font-medium">Abr 2025 - Sep 2025</span>
              </div>
              <p className="text-sm text-blue-400 font-medium">CTIN Centro de Tecnología e Innovación (Grupo Carso)</p>
              <ul className="text-sm text-neutral-400 list-disc pl-4 space-y-1">
                <li>Desarrollo de pruebas automatizadas en Katalon para dispositivos móviles Android.</li>
                <li>Ejecución de pruebas manuales y Monkey Testing en flujos funcionales.</li>
                <li>Validación de requerimientos funcionales, registro de hallazgos y seguimiento de defectos.</li>
                <li>Diseño de casos de prueba para automatizar procesos internos.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* PUNTO 3: PROYECTOS PROPIOS */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-200">Proyectos de Desarrollo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Proyecto 1: SPASSSIO */}
            <div className="p-6 bg-neutral-900/40 border border-neutral-800 rounded-2xl hover:border-neutral-700 transition group flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-neutral-100 group-hover:text-blue-400 transition">
                  SPASSSIO Platform
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Migración arquitectónica integral de un sistema monolítico tradicional hacia una estructura desacoplada y escalable.
                </p>
                <p className="text-xs text-neutral-500">
                  Enfoque: Refactorización de código legado, diseño de APIs robustas y optimización de consultas a la base de datos.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2 py-0.5 bg-orange-950 text-orange-300 text-xs font-medium rounded border border-orange-800/60">Laravel 12</span>
                <span className="px-2 py-0.5 bg-neutral-800 text-neutral-300 text-xs font-medium rounded border border-neutral-700">Hexagonal</span>
                <span className="px-2 py-0.5 bg-blue-950 text-blue-300 text-xs font-medium rounded border border-blue-800/60">MySQL</span>
              </div>
            </div>

            {/* Proyecto 2: Perfumes Niche E-commerce */}
            <div className="p-6 bg-neutral-900/40 border border-neutral-800 rounded-2xl hover:border-neutral-700 transition group flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-neutral-100 group-hover:text-purple-400 transition">
                  E-commerce de Fragancias de Nicho
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Aplicación web de catálogo y gestión de inventario para el mercado de perfumería de alta gama con un diseño minimalista.
                </p>
                <p className="text-xs text-neutral-500">
                  Enfoque: Renderizado rápido del lado del servidor (SSR), Bento Grid layout y pasarela de simulación de pagos estable.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2 py-0.5 bg-blue-950 text-blue-300 text-xs font-medium rounded border border-blue-800/60">Next.js</span>
                <span className="px-2 py-0.5 bg-neutral-800 text-neutral-300 text-xs font-medium rounded border border-neutral-700">TailwindCSS</span>
                <span className="px-2 py-0.5 bg-purple-950 text-purple-300 text-xs font-medium rounded border border-purple-800/60">Node.js</span>
              </div>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}