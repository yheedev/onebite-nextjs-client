import Link from "next/link";
import "../styles/globals.css";
import style from "./layout.module.css";

export const metadata = {
  title: "yheedev Books",
  description: "for one bite nextjs lecture",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <div className={style.container}>
          <header>
            <Link href={"/"}>📚 yheedev BOOKS</Link>
          </header>
          <main>{children}</main>
          <footer>@yheedev</footer>
        </div>
      </body>
    </html>
  );
}
