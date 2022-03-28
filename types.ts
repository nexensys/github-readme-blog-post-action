export interface FeedData {
  title: string;
  description: string;
  url: string;
  updated: Date;
  images: Img[];
}

export interface Img {
  image: string;
  link: string;
  title: string;
  imageFileName: string;
}

export interface MetaData {
  url?: string;
  title?: string;
  description?: string;
  image?: null | string;
  date?: Date;
  [k: string]: any;
}
