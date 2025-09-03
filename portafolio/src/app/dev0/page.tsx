import Link from "next/link";

export default function Dev0Page() {
  return (
    <main className="p-10 text-center">
      <h1 className="text-3xl font-bold mb-6">Hojas de Vida - Dev0</h1>

      <div className="flex flex-col gap-4 items-center">
        <Link href="/dev0/v01" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Ver CV - Versión 1
        </Link>
        <Link href="/dev0/v02" className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
          Ver CV - Versión 2
        </Link>
      </div>
    </main>
  );
}
