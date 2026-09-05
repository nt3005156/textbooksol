import type { Metadata } from 'next';
import { Inter, Merriweather } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const merriweather = Merriweather({ weight: ['300','400','700'], subsets: ['latin'], variable: '--font-merriweather' });

export const metadata: Metadata = {
  title: 'Study Platform — Smart Digital Study Materials for Class 6 to 12',
  description: 'Learn smarter. Understand better. Browse textbook summaries, important concepts, question & answer solutions, and diagrams for Computer Science (Class 6–12).',
  openGraph: { title: 'Study Platform — Digital Study Materials', type: 'website', locale: 'en_NP' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="min-h-screen bg-paper text-ink antialiased flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
