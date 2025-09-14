import Link from "next/link";
import "../styles/globals.css";
import style from "./layout.module.css";
import { BookData } from "@/types";

export const metadata = {
  title: "yheedev Books",
  description: "for one bite nextjs lecture",
};

async function Footer() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`, { cache: "force-cache" });
  if (!res.ok) {
    return <p>제작 @yheedev</p>;
  }

  const books: BookData[] = await res.json();
  const bookCount = books.length;

  return (
    <footer>
      <p>제작 @yheedev</p>
      <p>{bookCount}개의 도서가 등록되어 있습니다.</p>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <div className={style.container}>
          <header>
            <Link href={"/"}>💭 yheeBOOKS</Link>
          </header>
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
