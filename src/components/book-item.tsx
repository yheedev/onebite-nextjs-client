import type { BookData } from "@/types";
import Link from "next/link";
import style from "./book-item.module.css";
import Image from "next/image";

export default function BookItem({
  id,
  title,
  subTitle,

  author,
  publisher,
  coverImgUrl,
}: BookData) {
  return (
    <Link className={style.container} href={`/book/${id}`}>
      <Image width={30} height={50} src={coverImgUrl} alt='book cover' />
      <div>
        {" "}
        <div className={style.title}>{title}</div>
        <div className={style.subtitle}>{subTitle}</div>
        <br />
        <div className={style.author}>
          {author} | {publisher}
        </div>
      </div>
    </Link>
  );
}
