import Link from "next/link";
import Image from "next/image";

export default function ActivityCard({ actividad }) {
  return (
    <Link href={"/actividades/" + actividad.id}>
      <div className="rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 shadow-xl shadow-black/50 group bg-[#1a1714] border border-amber-900/20 hover:border-amber-600/40">
        <div className="relative h-44 w-full overflow-hidden">
          <Image src={actividad.imagen} alt={actividad.titulo} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1714] via-transparent to-transparent" />
        </div>
        <div className="p-4">
          <h3 className="font-display text-amber-400 text-sm font-bold mb-2 leading-tight group-hover:text-amber-300 transition">{actividad.titulo}</h3>
          <p className="text-stone-500 text-xs leading-relaxed mb-3">{actividad.descripcion}</p>
          <span className="text-amber-700 text-xs font-semibold group-hover:text-amber-500 transition">Iniciar misión →</span>
        </div>
      </div>
    </Link>
  );
}