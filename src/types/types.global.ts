import { ReactNode } from "react";

export type TContainerProps = {
  children: ReactNode;
};

export type TBtnProps = {
  btnText: string;
};

export type TLinkProps = {
  linkUrl: string;
  linkText: string;
};

export type TCategory = {
  id: number;
  title: string;
  description: string;
  bgColor: string;
  hoverColor: string;
  image: string;
};

export type TCategoryProps = {
  category: TCategory;
};

export type TBook = {
  id: string;
  title: string;
  author: string;
  publicationDate: string;
  price: number;
  offerPrice?: number;
  genre: string;
  pages: number;
  publisher?: string;
  isbn: string;
  description?: string;
  coverImageUrl?: string;
};

export type TBookProps = {
  book: TBook;
};

export type TCourse = {
  id: string;
  title: string;
  description: string;
  instructor: string;
  image: string;
  price: string;
  duration: string;
  level: string;
  category: string;
  rating: number;
  ratingCount: number;
};

export type TCourseProps = {
  course: TCourse;
};
