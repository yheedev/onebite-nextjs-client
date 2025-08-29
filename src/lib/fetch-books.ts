// src/lib/fetch-books.ts
import { BookData } from "@/types";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://127.0.0.1:12345";

export default async function fetchBooks(
  q?: string,
  init?: RequestInit // AbortSignal 등 전달용
): Promise<BookData[]> {
  const url = q ? `${API_BASE}/book/search?q=${encodeURIComponent(q)}` : `${API_BASE}/book`;

  const res = await fetch(url, {
    cache: "no-store",
    ...init,
  });

  if (!res.ok) {
    throw new Error(`books API 실패: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

// import { BookData } from "@/types";

// export default async function fetchBooks(q?: string, p0?: { signal: AbortSignal }): Promise<BookData[]> {
//   let url = "http://localhost:12345/book";

//   if (q) {
//     url += `/search?q=${q}`;
//   }

//   try {
//     const res = await fetch(url);
//     if (!res.ok) {
//       throw new Error();
//     }
//     return await res.json();
//   } catch (err) {
//     console.error(err);
//     return [];
//   }
// }
