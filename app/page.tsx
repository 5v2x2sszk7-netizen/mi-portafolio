import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-neutral-100 font-sans selection:bg-neutral-800">
      <div className="max-w-2xl mx-auto px-6 py-16 space-y-16">
        
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
          
          {/* Enlaces de contacto limpios */}
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

        <hr className="border-neutral-800" />

        {/* SECCIÓN: SKILLS */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-200">Competencias Técnicas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-2xl space-y-3">
              <h3 className="text-lg font-semibold text-blue-400">QA & Automatización</h3>
              <div className="flex flex-wrap gap-2">
                {['Katalon Studio', 'Pruebas Funcionales', 'Regresión', 'Caja Blanca / Negra', 'Monkey Testing', 'Casos de Prueba'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-neutral-800 text-xs font-medium rounded-full text-neutral-300 border border-neutral-700/50">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-2xl space-y-3">
              <h3 className="text-lg font-semibold text-purple-400">Desarrollo Web & DB</h3>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'React', 'Laravel', 'PHP', 'JavaScript', 'Python', 'Java', 'MySQL', 'Oracle'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-neutral-800 text-xs font-medium rounded-full text-neutral-300 border border-neutral-700/50">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* SECCIÓN: EXPERIENCIA LABORAL */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-200">Experiencia Profesional</h2>
          <div className="space-y-8 border-l border-neutral-800 pl-4 ml-2">
            
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