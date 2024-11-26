import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import { Inter } from 'next/font/google';
import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Daniel DeMelo - Engineer',
  description: 'Senior technology leader focused on frontend engineering and building high-performing teams',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Menu
          title="Daniel DeMelo"
          subtitle="Technology Leader"
        />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
