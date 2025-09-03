import Link from "next/link";


export default function Dev0Page01() {
  return (
    <main className="p-10 text-center">
      <h1 className="text-3xl font-bold mb-6">Hojas de Vida - Dev0 - Versión 1</h1>
      <p className="mb-4">Contenido de la hoja de vida - Versión 1</p>
      <Link href="/dev0" className="text-blue-500 hover:underline">
        Volver a la página principal
      </Link>
    </main>
  );
}
