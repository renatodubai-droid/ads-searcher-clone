import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Ads Searcher - Encontre anuncios vencedores antes de todo mundo",
  description: "A plataforma de inteligencia de anuncios para media buyers de elite. Biblioteca do Facebook + TikTok Creative Center, unificados.",
  openGraph: {
    title: "Ads Searcher - Encontre anuncios vencedores",
    description: "A plataforma de inteligencia de anuncios para media buyers de elite.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
