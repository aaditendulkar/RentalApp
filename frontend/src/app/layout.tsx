// app/layout.tsx
import './globals.css'; // if you're using global styles
import Layout from '@/components/common/Layout';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}