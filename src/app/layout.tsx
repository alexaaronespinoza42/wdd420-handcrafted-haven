import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Handcrafted Haven',
  description: 'Marketplace para artesanos',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen">
        {/* Navbar */}
        <header className="bg-white h-16 px-6 flex items-center shadow-sm border-b">
          <h1 className="text-xl font-semibold">Handcrafted Haven</h1>
        </header>

        <div className="flex flex-1">
          {/* Sidebar */}
          <aside className="w-64 bg-white border-r p-4">
            <nav className="space-y-2">
              <Link className="block text-gray-700 hover:text-blue-600" href="/dashboard">Dashboard</Link>
              <Link className="block text-gray-700 hover:text-blue-600" href="/sellers">Sellers</Link>
              <Link className="block text-gray-700 hover:text-blue-600" href="/products">Products</Link>
            </nav>
          </aside>

          {/* Main content */}
          <main className="flex-1 p-6 bg-gray-50">{children}</main>
        </div>
      </body>
    </html>
  );
}
