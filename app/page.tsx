import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-neutral-100 font-sans relative overflow-x-hidden selection:bg-neutral-800">
      
      {/* FONDO DE REJILLA ESTILO ESPACIAL/GRID LINES */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1f29371e_1px,transparent_1px),linear-gradient(to_bottom,#1f29371e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* DESTELLO DE LUZ NEÓN DE FONDO */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="max-w-2xl mx-auto px-6 py-16 space-y-16 relative z-10">
        
        {/* HEADER */}
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Gustavo Angel Malo Bautista
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 font-medium">
            QA Automation Engineer & Web Developer
          </p>
          <p className="text-neutral-400 text-base max-w-2xl leading-relaxed">
            Ingeniero en Desarrollo de Software especializado en el Aseguramiento de Calidad (QA) con un perfil híbrido enfocado en automatización end-to-end y sólidas bases en desarrollo backend con Laravel y frontend moderno con Next.js.
          </p>
          
          {/* Enlaces de contacto */}
          <div className="flex flex-wrap gap-4 pt-2 text-sm text-neutral-400">
            <a href="mailto:gustavoangelmalob@gmail.com" className="hover:text-blue-400 transition flex items-center gap-1">
              📧 gustavoangelmalob@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/gustavo-angel-malo-bautista-650b67351" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition flex items-center gap-1">
              💼 LinkedIn (gustavo-angel-malo-bautista)
            </a>
            <a href="https://github.com/5v2x2sszk7-netizen" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition flex items-center gap-1">
              💻 GitHub (5v2x2sszk7-netizen)
            </a>
          </div>
        </header>

        <hr className="border-neutral-800/60" />

        {/* PROYECTOS DESTACADOS (ESTILO VIDEO REFERENCIA) */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-200">Proyectos Destacados</h2>
            <p className="text-sm text-neutral-500">Diseños interactivos enfocados en calidad y escalabilidad</p>
          </div>
          
          <div className="space-y-6">
            {/* Proyecto 01 */}
            <div className="p-6 bg-neutral-900/20 border border-neutral-800/80 rounded-2xl backdrop-blur-sm relative group hover:border-blue-500/30 transition-all duration-300">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-mono font-bold text-blue-400 tracking-widest uppercase">01 // AUTOMATION FRAMEWORK</span>
                  <h3 className="text-xl font-bold text-neutral-200 mt-1 group-hover:text-blue-400 transition-colors">Framework de Automatización Móvil</h3>
                </div>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed mt-3">
                Diseño e implementación de un marco de trabajo para pruebas automatizadas end-to-end orientadas a dispositivos Android, optimizando los ciclos de regresión críticos y reduciendo tiempos manuales.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-4">
                {['Katalon Studio', 'Groovy', 'Android', 'Jira'].map((tech) => (
                  <span key={tech} className="px-2.5 py-0.5 bg-neutral-900/60 text-[11px] font-mono rounded-md text-neutral-300 border border-neutral-800">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Proyecto 02 */}
            <div className="p-6 bg-neutral-900/20 border border-neutral-800/80 rounded-2xl backdrop-blur-sm relative group hover:border-purple-500/30 transition-all duration-300">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-mono font-bold text-purple-400 tracking-widest uppercase">02 // FULL STACK CORE</span>
                  <h3 className="text-xl font-bold text-neutral-200 mt-1 group-hover:text-purple-400 transition-colors">Portal de Recursos Humanos & Microservicios</h3>
                </div>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed mt-3">
                Desarrollo full-stack de una plataforma web interactiva conectada a microservicios independientes, garantizando alta disponibilidad, seguridad por tokens y consistencia transaccional de datos.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-4">
                {['Next.js', 'Laravel', 'APIs', 'MySQL', 'Tailwind CSS'].map((tech) => (
                  <span key={tech} className="px-2.5 py-0.5 bg-neutral-900/60 text-[11px] font-mono rounded-md text-neutral-300 border border-neutral-800">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <hr className="border-neutral-800/60" />

        {/* SECCIÓN: SKILLS */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-200">Competencias Técnicas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-6 bg-neutral-900/20 border border-neutral-800/80 rounded-2xl backdrop-blur-sm space-y-3">
              <h3 className="text-lg font-semibold text-blue-400">QA & Automatización</h3>
              <div className="flex flex-wrap gap-2">
                {['Katalon Studio', 'Pruebas Funcionales', 'Regresión', 'Caja Blanca / Negra', 'Monkey Testing', 'Casos de Prueba'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-neutral-800/50 text-xs font-medium rounded-full text-neutral-300 border border-neutral-700/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-neutral-900/20 border border-neutral-800/80 rounded-2xl backdrop-blur-sm space-y-3">
              <h3 className="text-lg font-semibold text-purple-400">Desarrollo Web & DB</h3>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'React', 'Laravel', 'PHP', 'JavaScript', 'Python', 'Java', 'MySQL', 'Oracle'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-neutral-800/50 text-xs font-medium rounded-full text-neutral-300 border border-neutral-700/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        <hr className="border-neutral-800/60" />

        {/* SECCIÓN: EXPERIENCIA LABORAL */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-200">Experiencia Profesional</h2>
          <div className="space-y-8 border-l border-neutral-800/80 pl-4 ml-2">
            
            <div className="relative space-y-2">
              <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-blue-500" />
              <div className="flex flex-wrap justify-between items-baseline gap-2">
                <h3 className="text-lg font-semibold text-neutral-200">Tester de Aplicaciones Móviles (Becario)</h3>
                <span className="text-sm text-neutral-500 font-medium">Abr 2025 - Sep 2025</span>
              </div>
              <p className="text-sm font-medium text-blue-400">CTIN Centro de Tecnología e Innovación (Grupo Carso)</p>
              <ul className="list-disc list-inside text-sm text-neutral-400 space-y-1.5 pl-1">
                <li>Desarrollo de pruebas automatizadas en Katalon para dispositivos móviles Android.</li>
                <li>Ejecución de pruebas manuales y Monkey Testing en flujos funcionales.</li>
                <li>Validación de requerimientos funcionales, registro de hallazgos y seguimiento de defectos.</li>
                <li>Diseño de casos de prueba para automatizar procesos internos.</li>
              </ul>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}