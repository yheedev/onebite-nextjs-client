import BookItem from "@/components/book-item";
import style from "./page.module.css";
import { BookData } from "@/types";
import { delay } from "@/util/delay";
import { Suspense } from "react";
import BookListSkeleton from "@/components/skeleton/book-list-skeleton";

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
            <BookListSkeleton count={3} />
          }
        >
          <RecoBooks />
        </Suspense>
      </section>
      <section>
        <h3>📚 All</h3>
        <Suspense
          fallback={
            <BookListSkeleton count={10} />
          }
        >
          <AllBooks />
        </Suspense>
      </section>
    </div>
  );
}
