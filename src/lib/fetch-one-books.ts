import { BookData } from "@/types";

export default async function fetchOneBook(id: number): Promise<BookData | null> {
  const url = `https://yheedev-books-server-yhees-projects.vercel.app/book/${id}`;

  try {
    const res = await fetch(url);
    if (!res) {
      throw new Error();
    }

    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}
