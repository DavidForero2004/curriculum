import Link from "next/link";


export default function Dev0Page02() {
  return (
    <main className="p-10 text-center">
      <h1 className="text-3xl font-bold mb-6">Hojas de Vida - Dev0 - Versión 2</h1>
      <p className="mb-4">Contenido de la hoja de vida - Versión 2</p>
      <Link href="/dev0" className="text-blue-500 hover:underline">
        Volver a la página principal
      </Link>
    </main>
  );
}
