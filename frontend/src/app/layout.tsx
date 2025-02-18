import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Amigo Oculto",
  description: "",
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className="bg-yellow-600 text-green-100"
      >
        {children}
      </body>
    </html>
  );
}
