import "./globals.css";

export const metadata = {
  title: "Clases de Lenguaje - Mónica Bolívar",
  description: "Página educativa de la docente Mónica María Bolívar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-slate-50 text-slate-800">
        {children}
      </body>
    </html>
  );
}