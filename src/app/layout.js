// src/app/layout.js
import './globals.css';
import Link from 'next/link';
import "@fortawesome/fontawesome-free/css/all.min.css";

export const metadata = {
  title: 'Neel Aldrin Thomas - Portfolio',
  description: 'Welcome to my personal portfolio website.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav> */}
        <main>{children}</main>
      </body>
    </html>
  );
}
