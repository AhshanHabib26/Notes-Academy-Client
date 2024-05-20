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
