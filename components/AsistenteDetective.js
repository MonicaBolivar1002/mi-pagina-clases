"use client";
import { useState, useEffect } from "react";
import { avatares, tips } from "./DetectiveAvatar";

export default function AsistenteDetective({ nombre, avatarId, onReset }) {
  const [tipActual, setTipActual] = useState(0);
  const [abierto, setAbierto] = useState(false);
  const [parpadeando, setParpadeando] = useState(false);

  const avatar = avatares.find((a) => a.id === avatarId);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setParpadeando(true);
      setTimeout(() => setParpadeando(false), 300);
    }, 5000);
    return () => clearInterval(intervalo);
  }, []);

  function siguienteTip() {
    setTipActual((t) => (t + 1) % tips.length);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Burbuja */}
      {abierto && (
        <div className="relative w-72 rounded-2xl overflow-hidden shadow-2xl" style={{background:"linear-gradient(135deg, #fdf8ee, #f5edda)", border:"1.5px solid #c8960c"}}>
          
          {/* Header dorado */}
          <div className="px-4 py-2 flex items-center justify-between" style={{background:"linear-gradient(90deg, #7a4f00, #b8860b)", borderBottom:"1px solid #c8960c"}}>
            <span className="text-xs font-black tracking-[0.2em] uppercase text-amber-100" style={{fontFamily:"Georgia, serif"}}>— Consejo del caso —</span>
            <button onClick={() => setAbierto(false)} className="text-amber-200 hover:text-white transition text-lg leading-none font-bold" title="Cerrar">×</button>
          </div>

          {/* Tip */}
          <div className="px-5 py-4">
            <p className="text-stone-700 text-sm leading-relaxed mb-4" style={{fontFamily:"Georgia, serif", fontStyle:"italic"}}>
              "{tips[tipActual]}"
            </p>

            {/* Botón otro consejo */}
            <button onClick={siguienteTip} className="w-full py-2 rounded-lg text-xs font-bold tracking-wide transition-all hover:scale-[1.02] active:scale-[0.98] mb-3" style={{background:"linear-gradient(135deg, #7a4f00, #b8860b)", color:"#fdf8ee", fontFamily:"Georgia, serif", border:"1px solid #d4a017"}}>
              🔍 Otro consejo
            </button>

            {/* Separador */}
            <div style={{background:"linear-gradient(90deg, transparent, #c8960c, transparent)", height:"1px"}} className="mb-3" />

            {/* Footer con nombre y cambiar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {avatar && <img src={avatar.imagen} alt={avatar.nombre} className="w-7 h-7 rounded-full object-cover border border-amber-600/40" />}
                <span className="text-stone-600 text-xs" style={{fontFamily:"Georgia, serif"}}>Det. <strong className="text-amber-800">{nombre}</strong></span>
              </div>
              <button onClick={onReset} className="text-xs px-3 py-1 rounded-full border transition hover:bg-red-50 hover:border-red-300 hover:text-red-600" style={{fontFamily:"Georgia, serif", color:"#8a7560", borderColor:"#c8b89a"}}>
                ↺ Cambiar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Avatar flotante */}
      <div className="flex flex-col items-end gap-1">
        <button onClick={() => setAbierto(!abierto)} className={`w-16 h-16 rounded-full overflow-hidden shadow-2xl transition-all hover:scale-110 active:scale-95 ${parpadeando ? "scale-110 shadow-amber-600/40" : ""}`} style={{border:"2.5px solid #b8860b", boxShadow:"0 4px 20px rgba(184,134,11,0.3)"}}>
          {avatar && <img src={avatar.imagen} alt={avatar.nombre} className="w-full h-full object-cover" />}
        </button>
        {!abierto && (
          <span className="text-xs font-semibold px-3 py-1 rounded-full shadow" style={{background:"#b8860b", color:"#1a0a00", fontFamily:"Georgia, serif"}}>
            Det. {nombre}
          </span>
        )}
      </div>

    </div>
  );
}