import actividades from "@/data/actividades";
import Link from "next/link";

const contenidoActividades = {
  "1": {
    introduccion: "Detective, has aceptado tu primera misión. Para descifrar el caso deberás rastrear el verdadero significado de las palabras... porque no todo es lo que parece. Completa cada etapa en orden para resolver el enigma.",
    imagenes: [
      "/images/actividad1mision1.png",
      "/images/actividad2mision1.png",
      "/images/actividad3mision1.png",
      "/images/actividad4mision1.png",
      "/images/actividad5mision1.png",
    ],
    momentos: [
      {
        numero: "01",
        icono: "🔐",
        titulo: "Código Secreto",
        tipo: "Juego interactivo",
        descripcion: "Inicia tu misión con una narrativa interactiva estilo Breakout. Tomarás el rol de detective y deberás descifrar un código secreto respondiendo correctamente sobre el significado contextualizado de las palabras. Recuerda: solo un significado encaja con la lectura ¡Encuentra al impostor!",
        enlace: { texto: "Iniciar Breakout en Genially", url: "https://view.genially.com/69c47497f9b953899f748294", color: "bg-amber-700 hover:bg-amber-600" },
      },
      {
        numero: "02",
        icono: "📌",
        titulo: "Muro de Reflexión",
        tipo: "Observación reflexiva",
        descripcion: "Tras completar el Breakout, el buen detective siempre anota sus hallazgos. Ingresa al muro colaborativo y comparte tu reflexión: ¿Qué pista seguiste para encontrar el significado correcto? Además, interactúa con las respuestas de tus compañeros de investigación.",
        enlace: { texto: "Ir al Muro Padlet", url: "https://padlet.com/monicabolivar1002/palabras-impostoras-yfbzqwjkoghxrska", color: "bg-rose-700 hover:bg-rose-600" },
      },
      {
        numero: "03",
        icono: "📋",
        titulo: "Manual del Detective",
        tipo: "Conceptualización",
        descripcion: "Todo gran detective necesita conocer sus herramientas. En esta etapa encontrarás las estrategias clave para inferir significados contextualizados. Estudia bien este material — será tu guía para resolver los casos que vienen.",
        enlace: { texto: "Ver Estrategias en Canva", url: "https://www.canva.com/design/DAHFRW0fC04/h1U4YAcCPrRslMk5LL6uJg/edit?utm_content=DAHFRW0fC04&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", color: "bg-blue-700 hover:bg-blue-600" },
      },
      {
        numero: "04",
        icono: "🎯",
        titulo: "Prueba de Campo",
        tipo: "Experimentación activa",
        descripcion: "Es hora de demostrar lo que aprendiste. Ingresa al cuestionario gamificado y pon a prueba tu habilidad para identificar significados en contexto. El mejor detective no solo intuye — también demuestra con evidencia.",
        enlace: { texto: "Iniciar Quizizz", url: "https://wayground.com/join", color: "bg-violet-700 hover:bg-violet-600" },
      },
      {
        numero: "05",
        icono: "📝",
        titulo: "Reporte Final",
        tipo: "Autoevaluación",
        descripcion: "Todo caso se cierra con un informe. Completa tu autoevaluación respondiendo con honestidad: ¿lograste identificar significados por contexto? ¿Participaste activamente? ¿Usaste bien las herramientas digitales? Tu reflexión es parte del caso.",
        enlace: { texto: "Completar Autoevaluación", url: "https://docs.google.com/forms/d/e/1FAIpQLSca6C0phmy44PXarSB1a-djhvRJ--pScZz0O6TIUIAuC2gk1Q/viewform?usp=publish-editor", color: "bg-emerald-700 hover:bg-emerald-600" },
      },
    ],
  },
};

export default async function ActividadPage({ params }) {
  const { id } = await params;
  const actividad = actividades.find((a) => a.id === id);
  const contenido = contenidoActividades[id];

  if (!actividad) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-2xl text-stone-500" style={{ fontFamily: "Georgia, serif" }}>Misión no encontrada.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: "Georgia, serif" }}>

      {/* HEADER */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={actividad.imagen} alt={actividad.titulo} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
          <p className="uppercase tracking-[0.3em] text-amber-400/90 text-xs mb-4">— Expediente Activo —</p>
          <h1 className="text-5xl font-black text-stone-100 mb-4 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{actividad.titulo}</h1>
          <div style={{ background: "linear-gradient(90deg, transparent, #b8860b, transparent)", height: "1px" }} className="w-48 mx-auto mb-6" />
          {contenido && (
            <p className="text-stone-200 text-lg max-w-2xl mx-auto leading-relaxed italic">{contenido.introduccion}</p>
          )}
        </div>
      </div>

      {/* MOMENTOS */}
      {contenido ? (
        <section className="max-w-5xl mx-auto px-6 py-16">
          <p className="uppercase tracking-[0.3em] text-amber-700 text-xs text-center mb-10">— Etapas de la misión —</p>

          <div className="flex flex-col gap-8">
            {contenido.momentos.map((momento, i) => {
              const estilosBorde = [
                { border: "3px solid #b8860b", boxShadow: "4px 4px 0px #b8860b" },
                { border: "3px solid #e11d48", boxShadow: "4px 4px 0px #e11d48" },
                { border: "3px solid #1d4ed8", boxShadow: "4px 4px 0px #1d4ed8" },
                { border: "3px solid #7c3aed", boxShadow: "4px 4px 0px #7c3aed" },
                { border: "3px solid #047857", boxShadow: "4px 4px 0px #047857" },
              ];
              const estilo = estilosBorde[i % estilosBorde.length];

              return (
                <div key={i} className="rounded-2xl overflow-hidden bg-white flex flex-col md:flex-row transition hover:translate-x-1 hover:-translate-y-1" style={{ ...estilo }}>

                  {/* Imagen a la izquierda */}
                  {contenido.imagenes && contenido.imagenes[i] && (
                    <div className="md:w-2/5 flex-shrink-0 flex items-center justify-center bg-stone-50 p-4">
                      <img src={contenido.imagenes[i]} alt={momento.titulo} className="w-full h-auto object-contain" />
                    </div>
                  )}

                  {/* Contenido a la derecha */}
                  <div className="p-8 flex flex-col justify-center flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full" style={{ background: "rgba(184,134,11,0.1)", color: "#92620a", border: "1px solid rgba(184,134,11,0.3)" }}>{momento.tipo}</span>
                      <span className="text-4xl font-black opacity-10 text-amber-800 select-none" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{momento.numero}</span>
                    </div>

                    <div className="flex items-start gap-3 mb-4">
                      <span className="text-3xl flex-shrink-0">{momento.icono}</span>
                      <h2 className="text-2xl font-black text-stone-800" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{momento.titulo}</h2>
                    </div>

                    <div style={{ background: "linear-gradient(90deg, #b8860b, transparent)", height: "1px" }} className="mb-5 w-32" />

                    <p className="text-stone-600 leading-relaxed mb-4 text-base">{momento.descripcion}</p>

                    {momento.nota && (
                      <div className="flex items-start gap-2 mb-5 px-4 py-3 rounded-lg" style={{ background: "rgba(184,134,11,0.06)", border: "1px solid rgba(184,134,11,0.2)" }}>
                        <span className="text-amber-600 text-sm">💡</span>
                        <p className="text-amber-800 text-sm italic">{momento.nota}</p>
                      </div>
                    )}

                    <a href={momento.enlace.url} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg text-stone-100 font-bold text-sm transition shadow-lg w-fit ${momento.enlace.color}`}>
                      {momento.enlace.texto} →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Volver */}
          <div className="mt-16 text-center">
            <Link href="/#misiones" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-amber-300 text-amber-800 hover:bg-amber-50 transition text-sm font-semibold">
              ← Volver al mapa de misiones
            </Link>
          </div>
        </section>
      ) : (
        <section className="max-w-3xl mx-auto px-6 py-16 text-center">
          <div className="rounded-2xl p-12 shadow-lg border border-stone-200 bg-white">
            <p className="text-6xl mb-4">🔒</p>
            <h2 className="text-2xl font-black text-stone-700 mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Misión en preparación</h2>
            <p className="text-stone-500 italic">Esta misión aún no está disponible. El detective debe ser paciente...</p>
          </div>
          <div className="mt-8">
            <Link href="/#misiones" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-amber-300 text-amber-800 hover:bg-amber-50 transition text-sm font-semibold">
              ← Volver al mapa de misiones
            </Link>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="border-t border-stone-200 text-center py-6 mt-8 bg-white">
        <p className="text-stone-400 text-sm">© {new Date().getFullYear()} Mónica María Bolívar · Docente de Lenguaje</p>
      </footer>

    </main>
  );
}