import actividades from "@/data/actividades";
import Link from "next/link";

export default async function ActividadPage({ params }) {
  const { id } = await params;
  const actividad = actividades.find((a) => a.id === id);

  if (!actividad) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl text-slate-500">Actividad no encontrada.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className={`bg-gradient-to-br ${actividad.color} text-white py-16 px-6 text-center`}>
        <div className="text-6xl mb-4">{actividad.icono}</div>
        <h1 className="text-4xl font-bold">{actividad.titulo}</h1>
        <p className="text-white/80 mt-3 text-lg max-w-xl mx-auto">{actividad.descripcion}</p>
      </div>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Instrucciones</h2>
          <p className="text-slate-600 leading-relaxed">
            Aquí va el contenido de la actividad {id}. Puedes reemplazar
            este texto con las instrucciones reales, videos, imágenes o formularios.
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-700 font-semibold hover:underline">
            Volver a la página principal
          </Link>
        </div>
      </section>
    </main>
  );
}