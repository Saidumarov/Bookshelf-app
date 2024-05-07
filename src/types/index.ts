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
      pages: number;
      published: number;
    };
    status: number;
  };
}

//

export interface ServiceConfig {
  data: [];
  loading: boolean;
  error: any;
  render: any;
  getBooks: (signature: string) => Promise<void>;
  deleteBook: (id: number, signature: string) => Promise<void>;
  addBook: (data: { isbn: string }, signature: string) => Promise<void>;
}
