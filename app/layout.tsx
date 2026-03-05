import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Solar Energy Solutions | Clean Power for Your Future',
  description: 'Professional solar panel installation and maintenance services for homes and businesses. Get clean, renewable energy today.',
  keywords: ['solar energy', 'solar panels', 'renewable energy', 'solar installation'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
