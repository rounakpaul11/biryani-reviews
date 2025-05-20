import type {Metadata} from 'next';
import { Inter } from 'next/font/google'; // Switched to Inter
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ // Changed from GeistSans to Inter
  variable: '--font-inter', // Updated variable name
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Biryani Vista - Savor the Flavor',
  description: 'Interactive dashboard for biryani restaurant ratings and AI recommendations.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}> {/* Updated font variable */}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
