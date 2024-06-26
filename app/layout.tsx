import '../app/ui/global.css';
import { Metadata } from 'next';
import { montserrat } from './ui/fonts';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        {/* <footer className="flex items-center justify-center py-10">
          Hecho con amor por Vercel
        </footer> */}
      </body>
    </html>
  );
}
