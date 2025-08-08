import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cursos de Confeitaria",
  description: "Aqui Você encontra os cursos de Confeitaria de Chef's famosas como Isis Alvarez e Marrara Bortoloti. Tudo para você se preparar para o sucesso!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
