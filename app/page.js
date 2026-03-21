"use client";
import { useState, useEffect } from "react";
import actividades from "@/data/actividades";
import ActivityCard from "@/components/ActivityCard";
import Image from "next/image";
import BienvenidaModal from "@/components/BienvenidaModal";
import AsistenteDetective from "@/components/AsistenteDetective";

const enlaces = [
  { nombre: "Genially", descripcion: "Crea presentaciones interactivas", url: "https://genially.com", icono: "🎨" },
  { nombre: "Padlet", descripcion: "Muro colaborativo digital", url: "https://padlet.com", icono: "📌" },
  { nombre: "Quizizz", descripcion: "Juegos y cuestionarios educativos", url: "https://quizizz.com", icono: "🎯" },
  { nombre: "Teachy", descripcion: "Recursos didácticos con IA", url: "https://teachy.app", icono: "🦜" },
  { nombre: "Edpuzzle", descripcion: "Videos interactivos para el aula", url: "https://edpuzzle.com", icono: "🎬" },
  { nombre: "Google Forms", descripcion: "Formularios y autoevaluaciones", url: "https://forms.google.com", icono: "📋" },
];

export default function Home() {
  const [detective, setDetective] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
    const nombre = localStorage.getItem("detective_nombre");
    const avatar = localStorage.getItem("detective_avatar");
    if (nombre && avatar) setDetective({ nombre, avatar });
    setCargando(false);
  }, []);

  function handleReset() {
    localStorage.removeItem("detective_nombre");
    localStorage.removeItem("detective_avatar");
    setDetective(null);
  }

  if (cargando) return null;

  return (
    <main className="bg-[#0f0e0c] text-stone-200 min-h-screen">

      {/* MODAL de bienvenida */}
      {!detective && <BienvenidaModal onComplete={setDetective} />}

      {/* ASISTENTE flotante */}
      {detective && <AsistenteDetective nombre={detective.nombre} avatarId={detective.avatar} onReset={handleReset} />}

      {/* NAVBAR */}
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-amber-900/30 px-6 py-3 flex justify-between items-center">
        <span className="font-display text-amber-400 font-bold text-base tracking-wide">Mónica Bolívar</span>
        <div className="relative">
          <button onClick={() => setMenuAbierto(!menuAbierto)} className="text-stone-300 text-sm px-4 py-2 rounded border border-amber-900/40 hover:bg-amber-900/20 hover:text-amber-300 transition flex items-center gap-2 font-display">
            🔍 Misiones <span className="text-xs opacity-60">{menuAbierto ? "▲" : "▼"}</span>
          </button>
          {menuAbierto && (
            <div className="absolute right-0 top-full mt-2 w-64 bg-[#1a1714] border border-amber-900/40 rounded-xl shadow-2xl overflow-hidden">
              {[
                { id: "1", nombre: "Palabras Impostoras" },
                { id: "2", nombre: "El Reto Cronológico" },
                { id: "3", nombre: "Exploradores Textuales" },
                { id: "4", nombre: "El Manual de las Ideas" },
                { id: "5", nombre: "¡A Resolver Misterios!" },
                { id: "6", nombre: "Código: Reconstrucción" },
                { id: "7", nombre: "El Juicio del Detective" },
                { id: "8", nombre: "¡La Recompensa!" },
              ].map((m) => (
                <a key={m.id} href={"/actividades/" + m.id} onClick={() => setMenuAbierto(false)} className="flex items-center gap-3 px-4 py-3 text-stone-400 hover:text-amber-300 hover:bg-amber-900/20 transition text-sm border-b border-stone-800/50 last:border-0"><span className="text-amber-500 font-bold font-display text-xs w-5">{m.id}</span>{m.nombre}</a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* HERO */}
      <section className="relative text-white min-h-[100vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        <Image src="/images/fondo.png" alt="Fondo" fill className="object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0f0e0c]" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-amber-900/10 rounded-full -top-20 -left-20 animate-pulse" />
          <div className="absolute w-72 h-72 bg-amber-600/5 rounded-full top-1/2 -right-16 animate-pulse" style={{ animationDuration: "5s" }} />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-amber-500/80 text-xs mb-4 font-display">
            — Docente de Lenguaje —
          </p>
          <h1 className="font-display text-6xl font-black mb-6 leading-tight text-stone-100">
            Mónica María<br />Bolívar
          </h1>
          <div className="gold-line w-32 mx-auto mb-6" />
          <p className="text-lg text-stone-300 mb-10 max-w-xl mx-auto leading-relaxed" style={{ fontStyle: "italic" }}>
            Bienvenidos a mi espacio educativo digital. Aquí encontrarás
            misiones, recursos y materiales para aprender juntos.
          </p>
          <a href="#misiones" className="inline-block bg-amber-700 hover:bg-amber-600 text-stone-800 font-display font-bold px-10 py-4 rounded border border-amber-500/30 hover:border-amber-400/60 transition shadow-lg shadow-amber-900/30">
            Iniciar investigación
          </a>
        </div>
      </section>

      {/* VIDEO + PRESENTACION */}
      <section className="bg-white px-6 py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="rounded-xl overflow-hidden shadow-2xl shadow-black/50 aspect-video bg-black border border-amber-900/20">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/TU_VIDEO_ID" title="Saludo de bienvenida" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="mb-6 relative">
              <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-amber-600/50 shadow-xl shadow-black/50 bg-stone-900">
                <Image src="/images/avatar.png" alt="Mónica María Bolívar" width={144} height={144} className="object-cover object-top w-full h-full" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-sm shadow-lg">🔍</div>
            </div>
            <p className="uppercase tracking-widest text-amber-600/70 text-xs mb-3 font-display">La detective del lenguaje</p>
            <h2 className="font-display text-3xl font-bold text-stone-800 mb-4">¡Hola, detectives!</h2>
            <div className="gold-line w-16 mb-4" />
            <p className="text-stone-600 text-lg leading-relaxed mb-4">
              Soy <strong className="text-amber-700">Mónica María Bolívar</strong>, docente de Lenguaje.
              En este espacio encontrarás 7 misiones que pondrán a prueba tus habilidades como lector crítico.
            </p>
            <p className="text-stone-500 text-base leading-relaxed" style={{ fontStyle: "italic" }}>
              Cada misión es un nuevo reto. El caso está abierto... ¡a investigar!
            </p>
          </div>
        </div>
      </section>

      {/* SEPARADOR */}
      <div className="gold-line max-w-4xl mx-auto opacity-40" />

      {/* MISIONES */}
      <section id="misiones" className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-amber-600 text-xs text-center mb-3 font-display">— El caso te espera —</p>
          <h2 className="font-display text-4xl font-black text-stone-800 text-center mb-3">Las Misiones</h2>
          <div className="gold-line w-24 mx-auto mb-4" />
          <p className="text-stone-500 text-center mb-14 text-lg italic">Selecciona una misión para comenzar tu investigación</p>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
            {actividades.map((act) => (
              <ActivityCard key={act.id} actividad={act} />
            ))}
          </div>
        </div>
      </section>

      {/* SEPARADOR */}
      <div className="gold-line max-w-4xl mx-auto opacity-40" />

      {/* ENLACES DE INTERES */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-blue-600 text-xs text-center mb-3 font-display">— Herramientas del detective —</p>
          <h2 className="font-display text-4xl font-black text-stone-800 text-center mb-3">Contenido de Interés</h2>
          <div className="gold-line w-24 mx-auto mb-4" />
          <p className="text-slate-600 text-center mb-14 text-lg italic">Recursos y plataformas que usamos en clase</p>
          <div className="grid md:grid-cols-3 gap-5">
            {enlaces.map((e) => (
              <a key={e.nombre} href={e.url} target="_blank" rel="noopener noreferrer" className="group bg-blue-50 border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-100 rounded-xl p-6 transition hover:shadow-xl hover:shadow-blue-200">
                <div className="text-4xl mb-3">{e.icono}</div>
                <h3 className="font-display text-blue-700 font-bold text-lg mb-1 group-hover:text-blue-600 transition">{e.nombre}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{e.descripcion}</p>
                <span className="inline-block mt-4 text-xs text-blue-600 group-hover:text-amber-500 transition font-semibold">Visitar sitio →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-amber-900/20 text-center py-8 bg-[#0a0908]">
        <p className="font-display text-amber-700/50 text-sm tracking-widest uppercase mb-1">El caso nunca se cierra</p>
        <p className="text-stone-600 text-sm">{new Date().getFullYear()} © Mónica María Bolívar · Docente de Lenguaje</p>
      </footer>

    </main>
  );
}