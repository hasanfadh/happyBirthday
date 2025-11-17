import "./globals.css";

export const metadata = {
  title: "Putri Fitria 21st",
  description: "24 November ke-21 Putri Fitria Rahman",
  manifest: "/manifest.json",
  icons: {
    icon: "/love.png",
    shortcut: "/love.png",
    apple: "/love.png",
  },
};

export const viewport = {
  themeColor: "#16a34a",
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        {/* SEO + PWA support */}
        <meta name="robots" content="index, follow" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/love.png" />
        <meta name="theme-color" content="#16a34a" />
      </head>

      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#000000",
          color: "#ffffff",
          fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          overflowX: "hidden",
        }}
      >
        {children}
      </body>
    </html>
  );
}
