"use client";
import { useState, useEffect } from "react";
import { avatares } from "./DetectiveAvatar";

export default function BienvenidaModal({ onComplete }) {
  const [nombre, setNombre] = useState("");
  const [avatarSeleccionado, setAvatarSeleccionado] = useState(null);
  const [error, setError] = useState("");
  const [animando, setAnimando] = useState(false);

  function handleConfirmar() {
    if (!nombre.trim()) { setError("Escribe tu nombre, detective."); return; }
    if (!avatarSeleccionado) { setError("Elige tu avatar para comenzar."); return; }
    setAnimando(true);
    setTimeout(() => {
      localStorage.setItem("detective_nombre", nombre.trim());
      localStorage.setItem("detective_avatar", avatarSeleccionado);
      onComplete({ nombre: nombre.trim(), avatar: avatarSeleccionado });
    }, 600);
  }

  return (
    <div className={`fixed inset-0 z-[999] flex items-center justify-center p-4 transition-opacity duration-500 ${animando ? "opacity-0" : "opacity-100"}`} style={{background:"rgba(10,8,6,0.97)"}}>
      
      {/* Papel envejecido */}
      <div className="relative max-w-lg w-full rounded-2xl overflow-hidden shadow-2xl" style={{background:"linear-gradient(135deg, #f5f0e8 0%, #ede5d0 50%, #e8dfc8 100%)", border:"2px solid #b8860b"}}>
        
        {/* Esquinas decorativas */}
        <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-amber-700 opacity-60" />
        <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-amber-700 opacity-60" />
        <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-amber-700 opacity-60" />
        <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-amber-700 opacity-60" />

        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <p className="text-amber-800 text-xs tracking-[0.3em] uppercase mb-1" style={{fontFamily:"Georgia, serif"}}>— Expediente Confidencial —</p>
            <h2 className="text-3xl font-black text-stone-800 mb-2" style={{fontFamily:"'Playfair Display', Georgia, serif"}}>Identificación del Detective</h2>
            <div style={{background:"linear-gradient(90deg, transparent, #b8860b, transparent)", height:"1px"}} className="w-full mt-2" />
          </div>

          {/* Nombre */}
          <div className="mb-6">
            <label className="block text-stone-700 text-sm font-semibold mb-2 tracking-wide" style={{fontFamily:"Georgia, serif"}}>
              🔍 Nombre del Detective
            </label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => { setNombre(e.target.value); setError(""); }}
              onKeyDown={(e) => e.key === "Enter" && handleConfirmar()}
              placeholder="Escribe tu nombre aqui..."
              className="w-full px-4 py-3 rounded-lg text-stone-800 text-sm outline-none transition"
              style={{background:"rgba(255,255,255,0.6)", border:"1px solid #b8860b", fontFamily:"Georgia, serif"}}
            />
          </div>

          {/* Avatares */}
          <div className="mb-6">
            <label className="block text-stone-700 text-sm font-semibold mb-3 tracking-wide" style={{fontFamily:"Georgia, serif"}}>
              🕵️ Elige tu identidad
            </label>
            <div className="grid grid-cols-4 gap-3">
              {avatares.map((av) => (
                <button key={av.id} onClick={() => { setAvatarSeleccionado(av.id); setError(""); }} className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all ${avatarSeleccionado === av.id ? "ring-2 ring-amber-600 scale-105" : "opacity-70 hover:opacity-100"}`} style={{background: avatarSeleccionado === av.id ? "rgba(184,134,11,0.15)" : "rgba(255,255,255,0.3)"}}>
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-600/40"><img src={av.imagen} alt={av.nombre} className="w-full h-full object-cover" /></div>
                  <span className="text-stone-700 text-xs font-semibold text-center leading-tight" style={{fontFamily:"Georgia, serif"}}>{av.nombre}</span>
                  <span className="text-stone-500 text-xs text-center leading-tight">{av.descripcion}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Error */}
          {error && <p className="text-red-700 text-sm text-center mb-4 font-semibold">{error}</p>}

          {/* Boton */}
          <button onClick={handleConfirmar} className="w-full py-4 rounded-xl font-black text-stone-100 text-lg tracking-wide transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg" style={{background:"linear-gradient(135deg, #7a4f00, #b8860b, #7a4f00)", fontFamily:"'Playfair Display', Georgia, serif", border:"1px solid #d4a017"}}>
            Aceptar el caso
          </button>
          <p className="text-stone-400 text-xs text-center mt-3" style={{fontFamily:"Georgia, serif"}}>Tu identidad quedara registrada en este expediente</p>
        </div>
      </div>
    </div>
  );
}