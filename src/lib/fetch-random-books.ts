import { BookData } from "@/types";

export default async function fetchRandomBooks(): Promise<BookData[]> {
  const url = "https://yheedev-books-server.vercel.app/random";
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error();
    }
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
