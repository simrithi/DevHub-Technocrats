import "./globals.css";

export const metadata = {
  title: "HypeRadar",
  description: "Meme coin behavioral intelligence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-zinc-950 text-white">{children}</body>
    </html>
  );
}
