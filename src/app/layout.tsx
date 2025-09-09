import Link from "next/link";
import "../styles/globals.css";

export const metadata = {
  title: "yheedev Books",
  description: "for one bite nextjs lecture",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <header>
        <Link href={"/"}>index</Link>
        &nbsp;
        <Link href={"/search"}>search</Link>
        &nbsp;
        <Link href={"/book/1"}>book 1</Link>
      </header>
      <body>{children}</body>
    </html>
  );
}
