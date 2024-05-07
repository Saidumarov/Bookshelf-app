import {
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import "./index.scss";
import { useEffect, useState } from "react";
import useServiceStore from "../../app/bookSlice";
import { useParams } from "react-router-dom";
import md5 from "md5";

const EditBook = () => {
  const { loading, updateBook } = useServiceStore();
  const { data } = useServiceStore();
  const { id } = useParams();
  const [book, setbook] = useState({
    id: "",
    title: "",
    author: "",
    pages: "",
    published: "",
    isbn: "",
  });

  useEffect(() => {
    data?.map((el) => {
      if (el?.book.id.toString() === id) {
        setbook({
          id: el?.book.id.toString(),
          title: el?.book.title,
          author: el?.book.author,
          pages: el?.book.pages,
          published: el?.book.published,
          isbn: el?.book.isbn,
        });
      }
    });
  }, [data]);

  const handleSubmit = () => {
    const userSecret = "MyUserSecret";
    const stringToSign = `PUT/books${JSON.stringify(book)}${userSecret}`;
    const signature = md5(stringToSign);
    updateBook(signature, book);
  };

  return (
    <Container>
      <div className="book_form_w">
        <Typography variant="h4">Kitobni tahrilash</Typography>
        <form onSubmit={(e) => (e.preventDefault(), handleSubmit())}>
          <TextField
            id="outlined-basic"
            placeholder="Title"
            variant="outlined"
            sx={{ marginTop: "20px" }}
            onChange={(e) => setbook({ ...book, title: e.target.value })}
            required
            value={book.title}
          />
          <TextField
            type="text"
            placeholder="Author"
            id="outlined-basic"
            variant="outlined"
            sx={{ marginTop: "20px" }}
            onChange={(e) => setbook({ ...book, author: e.target.value })}
            required
            value={book.author}
          />
          <TextField
            type="number"
            placeholder="Pages"
            id="outlined-basic"
            variant="outlined"
            sx={{ marginTop: "20px" }}
            onChange={(e) => setbook({ ...book, pages: e.target.value })}
            required
            value={book.pages}
          />
          <TextField
            type="number"
            placeholder="Published"
            id="outlined-basic"
            variant="outlined"
            sx={{ marginTop: "20px" }}
            onChange={(e) => setbook({ ...book, published: e.target.value })}
            required
            value={book.published}
          />
          <Button type="submit">
            {loading ? <CircularProgress /> : "Tahrirlash"}
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default EditBook;
