import "../styles/global.css";
import { dynaPuff, indieFlower, inter, abel } from "../../public/fonts/font";
import Button from "../components/button";
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

        <div className="main-container">
          <div className="title">
            <h1 className={`${inter.className}`}>Portafolio</h1>
          </div>
          <div className="btn-container">
            <Button text="dev0" className={inter.className} id="btn-shape" />
            <Button text="dev1" className={abel.className} id="btn-shape" />
            <Button text="dev2" className={dynaPuff.className} id="btn-shape" />
            <Button
              text="dev3"
              className={indieFlower.className}
              id="btn-shape"
            />
          </div>
        </div>

        {/* 👇 Aquí se inyecta la página actual */}
        {children}
      </body>
    </html>
  );
}
