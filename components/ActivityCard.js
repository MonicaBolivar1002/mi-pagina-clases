import Link from "next/link";

export default function ActivityCard({ actividad }) {
  return (
    <Link href={`/actividades/${actividad.id}`}>
      <div className={`bg-gradient-to-br ${actividad.color} rounded-2xl p-6 text-white cursor-pointer hover:scale-105 transition-transform shadow-lg`}>
        <div className="text-5xl mb-4">{actividad.icono}</div>
        <h3 className="text-xl font-bold mb-2">{actividad.titulo}</h3>
        <p className="text-white/80 text-sm leading-relaxed">
          {actividad.descripcion}
        </p>
        <div className="mt-6 text-sm font-semibold underline underline-offset-2">
          Ir a la actividad →
        </div>
      </div>
    </Link>
  );
}