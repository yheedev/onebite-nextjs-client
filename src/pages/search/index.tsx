import SearchableLayout from "@/components/searchable-layout";
import BookItem from "@/components/book-item";
import fetchBooks from "@/lib/fetch-books";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BookData } from "@/types";

export default function Page() {
  const [books, setBooks] = useState<BookData[]>([]);
  const router = useRouter();

  const qParam = router.query.q;
  const q = typeof qParam === "string" ? qParam.trim() : "";

  useEffect(() => {
    if (!q) {
      setBooks([]);
      return;
    }

    let cancelled = false;
    const ctrl = new AbortController();

    (async () => {
      try {
        const data = await fetchBooks(q, { signal: ctrl.signal });
        if (!cancelled) setBooks(data);
      } catch {
        if (!cancelled) setBooks([]);
      }
    })();

    return () => {
      cancelled = true;
      ctrl.abort();
    };
  }, [q]);

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
