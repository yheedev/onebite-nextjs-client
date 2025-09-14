import BookItem from "../components/book-item";
import style from "./page.module.css";
import { BookData } from "@/types";
import { delay } from "@/util/delay";
import { Suspense } from "react";

async function AllBooks() {
  await delay(1500);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
    { cache: "force-cache" }
  );
  if (!res.ok) {
    return <p>오류가 발생했습니다.</p>;
  }

  const allBooks: BookData[] = await res.json();

  return (
    <div>
      {allBooks.map(book => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

async function RecoBooks() {
  await delay(3000);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`,
    { next: { revalidate: 3 } }
  );
  if (!res.ok) {
    return <p>오류가 발생했습니다.</p>;
  }

  const recoBooks: BookData[] = await res.json();

  return (
    <div>
      {recoBooks.map(book => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>👍 Best</h3>
        <Suspense
          fallback={
            <p>
              추천 도서를 불러오는 중입니다...
            </p>
          }
        >
          <RecoBooks />
        </Suspense>
      </section>
      <section>
        <h3>📚 All</h3>
        <Suspense
          fallback={
            <p>
              모든 도서를 불러오는 중입니다...
            </p>
          }
        >
          <AllBooks />
        </Suspense>
      </section>
    </div>
  );
}
