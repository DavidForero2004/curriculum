import Link from "next/link";

//lista con los argumentos que va a recibir el componente
type ButtonProps = {
  text: string; //lo que se va a ver en el componente
  className?: string; // opcional para pasar estilos o fuentes
  id?: string; // opcional para personalizar el id si lo necesitas
  href: string;
};

export default function Button({ text, className = "", id = "", href }: ButtonProps) {
  return (
    <Link href={href}>
      <button className={`${className} antialiased`} id={id}>
        {text}
      </button>
    </Link>
  );
}
