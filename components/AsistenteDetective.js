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
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">

      {/* Burbuja de tip */}
      {abierto && (
        <div className="relative max-w-xs rounded-2xl rounded-br-none p-4 shadow-2xl animate-bounce-once" style={{background:"linear-gradient(135deg, #f5f0e8, #ede5d0)", border:"1.5px solid #b8860b"}}>
          <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-amber-700 opacity-40" />
          <p className="text-xs text-stone-600 mb-1 uppercase tracking-widest" style={{fontFamily:"Georgia, serif"}}>— Consejo del caso —</p>
          <p className="text-stone-800 text-sm leading-relaxed mb-3" style={{fontFamily:"Georgia, serif", fontStyle:"italic"}}>
            "{tips[tipActual]}"
          </p>
          <div className="flex justify-between items-center">
            <button onClick={siguienteTip} className="text-amber-700 text-xs hover:text-amber-600 transition font-semibold" style={{fontFamily:"Georgia, serif"}}>Otro consejo →</button>
            <button onClick={() => setAbierto(false)} className="text-stone-400 text-xs hover:text-stone-600 transition">cerrar</button>
          </div>
          <hr className="my-2 border-amber-200" />
          <div className="flex items-center justify-between">
            <p className="text-stone-500 text-xs" style={{fontFamily:"Georgia, serif"}}>Det. <strong className="text-amber-700">{nombre}</strong></p>
            <button onClick={onReset} className="text-xs text-stone-400 hover:text-red-600 transition" title="Cambiar detective">↺ Cambiar</button>
          </div>
        </div>
      )}

      {/* Avatar flotante */}
      <button onClick={() => setAbierto(!abierto)} className={`w-16 h-16 rounded-full overflow-hidden shadow-2xl transition-transform hover:scale-110 active:scale-95 ${parpadeando ? "scale-110" : ""}`} style={{border:"2.5px solid #b8860b", background:"#1a1410"}}>
        {avatar && <div className="w-full h-full">{avatar.svg}</div>}
      </button>

      {/* Etiqueta de nombre */}
      {!abierto && (
        <div className="rounded-full px-3 py-1 text-xs font-semibold shadow" style={{background:"#b8860b", color:"#1a0a00", fontFamily:"Georgia, serif"}}>
          Det. {nombre}
        </div>
      )}
    </div>
  );
}