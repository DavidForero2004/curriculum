import "../styles/global.css";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Image
          src="/img/black-cat.png"
          alt="Descripción de la imagen"
          width={50}
          height={50}
          className="rounded-img"
        />

        {/* 👇 Aquí se renderiza la página actual */}
        {children}
      </body>
    </html>
  );
}
