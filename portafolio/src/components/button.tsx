//lista con los argumentos que va a recibir el componente
type ButtonProps = {
  text: string; //lo que se va a ver en el componente
  className?: string; // opcional para pasar estilos o fuentes
  id?: string; // opcional para personalizar el id si lo necesitas
};

export default function Button({ text, className = "", id = "" }: ButtonProps) {
  return (
    <button className={`${className} antialiased`} id={id}>
      {text}
    </button>
  );
}
