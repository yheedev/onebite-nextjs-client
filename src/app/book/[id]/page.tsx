import Image from "next/image";
import style from "./[id].module.css";

export default async function Page({ params }: { params: Promise<{ id: string | string[] }> }) {
  const { id } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${id}`);
  if (!res.ok) {
    return <p>오류가 발생했습니다.</p>;
  }

  const book = await res.json();
  const { title, subTitle, description, author, publisher, coverImgUrl } = book;

  return (
    <div className={style.container}>
      <div className={style.cover_img_container}>
        <Image src={coverImgUrl} alt={title} fill priority sizes='(max-width: 768px) 100vw, 600px' style={{ objectFit: "cover" }} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </div>
  );
}
