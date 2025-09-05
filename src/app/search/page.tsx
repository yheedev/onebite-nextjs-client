export default function Search() {
  return (
    <>
      <h1>search</h1>
    </>
  );
}

// import SearchableLayout from "@/components/searchable-layout";
// import BookItem from "@/components/book-item";
// import fetchBooks from "@/lib/fetch-books";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { BookData } from "@/types";
// // import Head from "next/head";

// export default function Page() {
//   const [books, setBooks] = useState<BookData[]>([]);
//   const router = useRouter();
//   const q = router.query.q;

//   const fetchSearchResult = async () => {
//     const data = await fetchBooks(q as string);
//     setBooks(data);
//   };

//   useEffect(() => {
//     if (q) {
//       fetchSearchResult();
//     }
//   }, [q]);

//   return (
//     <div>
//       {/* <Head>
//         {" "}
//         <title>yheedev Boooks - 검색 결과</title>
//         <meta property='og:image' content='/thumbnail.png' />
//         <meta property='og:title' content='yheedev books' />
//         <meta property='og:description' content='yheedev books - 검색 결과' />
//       </Head> */}
//       {books.map((book) => (
//         <BookItem key={book.id} {...book} />
//       ))}
//     </div>
//   );
// }

// Page.getLayout = (page: React.ReactNode) => {
//   return <SearchableLayout>{page}</SearchableLayout>;
// };
