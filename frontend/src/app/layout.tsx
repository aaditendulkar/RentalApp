// app/layout.tsx
import './globals.css'; // if you're using global styles
import type { Metadata } from 'next';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}