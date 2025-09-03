import "../styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* 👇 Aquí se renderiza la página actual */}
        {children}
      </body>
    </html>
  );
}
