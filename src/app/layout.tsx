import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import { JetBrains_Mono } from 'next/font/google';
import React from 'react';
import './globals.css';

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
  preload: true,
});

export const metadata = {
  title: 'Daniel DeMelo - Engineer',
  description: 'Senior technology leader focused on frontend engineering and building high-performing teams',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jetBrainsMono.className} ${jetBrainsMono.variable}`}>
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
