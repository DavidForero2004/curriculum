"use client";

import { useState } from "react";
import Button from "../components/button";
import LoaderDev0 from "@/components/loaders/dev0";
import { routes } from "../routes/routes";
import { useRouter } from "next/navigation";
import { inter, abel, dynaPuff, indieFlower } from "../../public/fonts/font";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleDev0Click = (e: React.MouseEvent) => {
    e.preventDefault(); // evita que navegue inmediatamente
    setLoading(true);

    setTimeout(() => {
      setLoading(true);
      router.push(routes[1].href); //  ruta del botón dev0
    }, 2500);
  };

  return (
    <div className="main-container">
      <div className="title">
        <h1 className={inter.className}>Portafolio</h1>
      </div>

      <div className="btn-container">
        <>
          <Button
            text="dev0"
            className={inter.className}
            id="btn-shape"
            href={routes[1].href}
            onClick={handleDev0Click} // solo este botón muestra loader
          />
          {loading && <LoaderDev0 />}
        </>
        
        {/*botones normales sin loader */}
        <Button
          text="dev1"
          className={abel.className}
          id="btn-shape"
          href={routes[2].href}
        />
        <Button
          text="dev2"
          className={dynaPuff.className}
          id="btn-shape"
          href={routes[3].href}
        />
        <Button
          text="dev3"
          className={indieFlower.className}
          id="btn-shape"
          href={routes[4].href}
        />
      </div>
    </div>
  );
}
