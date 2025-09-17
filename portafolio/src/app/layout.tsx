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
        <script
          async
          custom-element="amp-auto-ads"
          src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js"
        ></script>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8163540274916215"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        {children}
        <ConsentBanner />
      </body>
    </html>
  );
}
