import { Button, Container, TextField, Typography } from "@mui/material";
import "./index.scss";

const EditBook = () => {
  return (
    <Container>
      <div className="book_form_w">
        <Typography variant="h4">Kitobni tahrilash</Typography>
        <form>
          <TextField
            id="outlined-basic"
            label="Ismingiz"
            variant="outlined"
            sx={{ marginTop: "20px" }}
          />
          <TextField
            type="email"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{ marginTop: "20px" }}
          />
          <TextField
            type="email"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{ marginTop: "20px" }}
          />
          <TextField
            type="email"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{ marginTop: "20px" }}
          />
          <Button type="submit">Saqlash</Button>
        </form>
      </div>
    </Container>
  );
};

export default EditBook;
