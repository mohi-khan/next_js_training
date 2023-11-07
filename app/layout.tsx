import './ui/global.css';
import { inter } from './ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='${inter.ClassName} antialiased'>{children}</body>
    </html>
  );
}
