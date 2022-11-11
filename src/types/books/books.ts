export interface IBooks {
  title: string;
  subtitle?: string;
  isbn13?: string;
  price: string;
  image: string;
}

export interface IBookDetails {
  title?: string;
  subtitle?: string;
  authors?: string;
  publisher?: string;
  pages?: string;
  year?: string;
  rating?: string;
  desc?: string;
  url?: string;
  language?: string;
  isbn13?: string;
  isbn10?: string;
  price?: string;
  image?: string;
  amount?: number;
}
