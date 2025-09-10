import BookItem from "../../components/book-item";
import { BookData } from "@/types";

export default async function Page({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${(await searchParams).q}`);
  if (!res.ok) {
    return <p>오류가 발생했습니다.</p>;
  }

  const books: BookData[] = await res.json();

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
