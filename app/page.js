import actividades from "@/data/actividades";
import ActivityCard from "@/components/ActivityCard";

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white min-h-[90vh] flex flex-col justify-center items-center text-center px-6">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="uppercase tracking-widest text-blue-200 text-sm mb-3">
            Docente de Lenguaje
          </p>
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Mónica María Bolívar
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-xl mx-auto">
            Bienvenidos a mi espacio educativo digital. Aquí encontrarás
            actividades, recursos y materiales para aprender juntos.
          </p>

          <a href="#actividades" className="bg-white text-blue-800 font-semibold px-8 py-3 rounded-full hover:bg-blue-50 transition">Ver actividades</a>
        </div>
      </section>

      {/* VIDEO + PRESENTACIÓN */}
      <section className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden shadow-xl aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/TU_VIDEO_ID"
            title="Saludo de bienvenida"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            ¡Hola, estudiantes!
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-4">
            Soy <strong>Mónica María Bolívar</strong>, docente de Lenguaje.
            Este espacio está diseñado para acompañar tu proceso de aprendizaje
            con actividades interactivas y materiales de calidad.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed">
            Explora cada actividad con curiosidad. ¡Seguramente este recorrido
            será muy provechoso! 📚
          </p>
        </div>
      </section>

      {/* ACTIVIDADES */}
      <section id="actividades" className="bg-blue-950 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-3">
            Actividades
          </h2>
          <p className="text-blue-200 text-center mb-12">
            Selecciona una actividad para comenzar
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {actividades.map((act) => (
              <ActivityCard key={act.id} actividad={act} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-slate-400 text-sm">
        © {new Date().getFullYear()} Mónica María Bolívar · Docente de Lenguaje
      </footer>

    </main>
  );
}