import ClientComponent from "../components/client-component";
import ServerComponent from "../components/server-component";

export default function Home() {
  return (
    <>
      <h1>home</h1>
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </>
  );
}

// import SearchableLayout from "@/components/searchable-layout";
// import style from "./index.module.css";
// import { ReactNode } from "react";
// import BookItem from "@/components/book-item";
// import { InferGetStaticPropsType } from "next";
// import fetchBooks from "@/lib/fetch-books";
// import fetchRandomBooks from "@/lib/fetch-random-books";
// import Head from "next/head";

// export const getStaticProps = async () => {
//   const [allBooks, recoBooks] = await Promise.all([fetchBooks(), fetchRandomBooks()]);
//   return {
//     props: { allBooks, recoBooks },
//   };
// };

// export default function Home({ allBooks, recoBooks }: InferGetStaticPropsType<typeof getStaticProps>) {
//   return (
//     <>
//       <Head>
//         <title>yheedev Boooks</title>
//         <meta property='og:image' content='/thumbnail.png' />
//         <meta property='og:title' content='yheedev books' />
//         <meta property='og:description' content='yheedev books에 등록된 도서들을 만나보세요.' />
//       </Head>
//       <div className={style.container}>
//         <section>
//           <h3>Recommendations</h3>
//           {recoBooks.map((book) => (
//             <BookItem key={book.id} {...book} />
//           ))}
//         </section>
//         <section>
//           <h3>All Books</h3>
//           {allBooks.map((book) => (
//             <BookItem key={book.id} {...book} />
//           ))}
//         </section>
//       </div>
//     </>
//   );
// }

// Home.getLayout = (page: ReactNode) => {
//   return <SearchableLayout>{page}</SearchableLayout>;
// };
