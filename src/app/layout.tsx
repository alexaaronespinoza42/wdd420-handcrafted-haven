// src/app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Handcrafted Haven',
  description: 'Marketplace para artesanos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <main className="min-h-screen flex flex-col">
          <header className="bg-gray-900 text-white p-4">
            <h1 className="text-2xl font-bold">Handcrafted Haven</h1>
          </header>
          <nav className="bg-gray-100 p-4 flex gap-4">
            <a href="/dashboard">Dashboard</a>
            <a href="/sellers">Sellers</a>
            <a href="/products">Products</a>
            <a href="/reviews">Reviews</a>
          </nav>
          <section className="flex-1 p-6">{children}</section>
          <footer className="bg-gray-200 text-center p-4">
            © 2025 Handcrafted Haven
          </footer>
        </main>
      </body>
    </html>
  );
}
