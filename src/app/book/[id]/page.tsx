import Image from "next/image";
import style from "./[id].module.css";
import { notFound } from "next/navigation";

//export const dynamicParams = false;

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

async function BookDetail({ bookId }: { bookId: string }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${bookId}`);
  if (!res.ok) {
    if (res.status === 404) {
      notFound();
    }
    return <p>오류가 발생했습니다.</p>;
  }

  const book = await res.json();
  const { title, subTitle, description, author, publisher, coverImgUrl } = book;

  return (
    <section>
      <div className={style.cover_img_container}>
        <Image src={coverImgUrl} alt={title} fill priority sizes='(max-width: 768px) 100vw, 600px' style={{ objectFit: "cover" }} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </section>
  );
}

function ReviewEditor() {
  async function createReviewAction(formData: FormData) {
    "use server";

    const content = formData.get("content")?.toString();
    const author = formData.get("author")?.toString();

    console.log(content, author);
  }

  return (
    <section>
      <form action={createReviewAction}>
        <input name='content' placeholder='리뷰를 작성해 주세요.' />
        <input name='author' placeholder='리뷰 작성자' />
        <button type='submit'>작성하기</button>
      </form>
    </section>
  );
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return (
    <div className={style.container}>
      <BookDetail bookId={resolvedParams.id} />
      <ReviewEditor />
    </div>
  );
}
