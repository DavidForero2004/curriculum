export async function GET() {
  const githubUrl =
    "https://raw.githubusercontent.com/DavidForero2004/files/main/curriculum/CV-ATM-David%20Forero.pdf";

  const response = await fetch(githubUrl);

  if (!response.ok) {
    return new Response("No se pudo descargar el archivo", { status: 404 });
  }

  const blob = await response.blob();
  const arrayBuffer = await blob.arrayBuffer();

  return new Response(arrayBuffer, {
    headers: {
      "Content-Disposition": 'attachment; filename="CV-ATM-David-Forero.pdf"',
      "Content-Type": "application/pdf",
    },
  });
}
