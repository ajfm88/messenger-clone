import './globals.css';
import AuthContext from './context/AuthContext';
import ActiveStatus from './components/ActiveStatus';
import ToasterContext from './context/ToasterContext';

export const metadata = {
  title: 'Messenger',
  description:
    '🗨️ Messenger clone created by ajfm88 using Next.js 13, Tailwind CSS and TypeScript. 🗣',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
