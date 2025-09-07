import "../styles/globals.css";

export const metadata = {
  title: "yheedev Books",
  description: "for one bite nextjs lecture",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
