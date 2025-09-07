import "../styles/global.css";
import ConsentBanner from "@/components/ConsentBanner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta
          name="google-adsense-account"
          content="ca-pub-8163540274916215"
        ></meta>
      </head>
      <body>
        {children}
        <ConsentBanner />
      </body>
    </html>
  );
}
