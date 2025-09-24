import Image from "next/image";
import style from "./page.module.css";
import { notFound } from "next/navigation";
import { ReviewData } from "@/types";
import ReviewItem from "@/app/components/review-item";
import ReviewEditor from "@/app/components/review-editor";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

async function BookDetail({ bookId }: { bookId: string }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${bookId}`,
    { cache: "no-store" }
    // { next: { tags: [`review-${bookId}`] } }
  );
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

async function ReviewList({ bookId }: { bookId: string }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/book/${bookId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data: ${res.statusText");
  }

  const reviews: ReviewData[] = await res.json();

  return (
    <section>
      {reviews.map((review) => (
        <ReviewItem key={`review-item-${review.id}`} {...review} />
      ))}
    </section>
  );
}

export default async function Page({ params }: { params: { id: string } }) {
  const resolvedParams = await params;
  return (
    <div className={style.container}>
      <BookDetail bookId={resolvedParams.id} />
      <ReviewEditor bookId={params.id} />
      <ReviewList bookId={params.id} />
    </div>
  );
}
