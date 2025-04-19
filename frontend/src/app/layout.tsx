// app/layout.tsx
import './globals.css'; // if you're using global styles
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RentKar - Community Item Sharing',
  description: 'Borrow what you need, share what you have. A community-driven platform for sharing everyday items.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
