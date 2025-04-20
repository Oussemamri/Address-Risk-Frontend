import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Address Risk App',
  description: 'Search for addresses and view associated risk data',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="bg-blue-600 text-white p-4">
            <h1 className="text-2xl">Address Risk App</h1>
          </header>
          <main className="flex-grow">
            {children}
          </main>
          <footer className="bg-gray-800 text-white p-4 text-center">
            <p>&copy; {new Date().getFullYear()} Address Risk App</p>
          </footer>
        </div>
      </body>
    </html>
  );
}