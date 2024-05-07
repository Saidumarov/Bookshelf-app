export interface SignUpFormData {
  name: string;
  email: string;
  key: string;
  secret: string;
}

export interface Data {
  data: {
    book: {
      id: number;
      author: string;
      title: string;
      pages: string;
      published: string;
    };
    status: number;
  };
}

export interface getData {
  book: {
    id: number;
    author: string;
    title: string;
    pages: string;
    published: string;
    isbn: string;
  };
  status: number;
}

//
export interface Book {
  id: string;
  title: string;
  author: string;
  pages: string;
  published: string;
  isbn: string;
}

export interface ServiceConfig {
  data: getData[];
  loading: boolean;
  error: any;
  render: any;
  getBooks: (signature: string) => Promise<void>;
  deleteBook: (id: number, signature: string) => Promise<void>;
  addBook: (data: { isbn: string }, signature: string) => Promise<void>;
  updateBook: (signature: string, data: Book) => Promise<void>;
  searchBook: (signature: string, title: string) => Promise<void>;
}
