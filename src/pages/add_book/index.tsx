import {
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import "./index.scss";
import { useState } from "react";
import md5 from "md5";
import { useNavigate } from "react-router-dom";
import useServiceStore from "../../app/bookSlice";

const AddBook = () => {
  const [isbn, setIsbn] = useState("");
  const root = useNavigate();
  const { loading, addBook } = useServiceStore();

  const onSubmit = async () => {
    const book = { isbn };
    const userSecret = "MyUserSecret";
    const stringToSign = `POST/books${JSON.stringify(book)}${userSecret}`;
    const signature = md5(stringToSign);
    try {
      addBook(book, signature);
      if (!loading) {
        root("/");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Container>
      <div className="book_form_w">
        <Typography variant="h4">Kitob qo'shish</Typography>
        <form onSubmit={(e) => (onSubmit(), e.preventDefault())}>
          <TextField
            id="outlined-basic"
            label="Isbn kriting"
            variant="outlined"
            sx={{ marginTop: "20px" }}
            onChange={(e) => setIsbn(e.target.value)}
            type="number"
            required
          />
          <Button type="submit">
            {loading ? <CircularProgress /> : "Qo'shish"}
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default AddBook;
