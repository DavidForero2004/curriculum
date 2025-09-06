"use client";
import { useState, useEffect } from "react";
import styles from "../styles/ConsentBanner.module.css";
export default function ConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("user-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleConsent = (choice: string) => {
    localStorage.setItem("user-consent", choice);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <p>
          Usamos cookies para mejorar tu experiencia y mostrar anuncios
          personalizados. Puedes aceptar, rechazar o administrar tus opciones.
        </p>
        <div className={styles.buttons}>
          <button
            onClick={() => handleConsent("rejected")}
            className={`${styles.button} ${styles.reject}`}
          >
            Rechazar
          </button>
          <button
            onClick={() => handleConsent("accepted")}
            className={`${styles.button} ${styles.accept}`}
          >
            Aceptar
          </button>
        </div>
        <a href="/privacy-policy" className={styles.link}>
          Administrar opciones
        </a>
      </div>
    </div>
  );
}
