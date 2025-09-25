import './globals.css';
import type { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/language-context';

export const metadata: Metadata = {
  title: 'FarmAssist - AI-Powered Farming Assistant for Kerala',
  description: 'Smart farming solutions powered by AI to help Kerala farmers grow better crops, manage diseases, and increase yields with local expertise.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Inter, sans-serif' }}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}