import { Button, Container, TextField, Typography } from "@mui/material";
import "./index.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormData } from "../../types";

const AddBook = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (formData) => {
    console.log(formData);
    reset();
  };
  return (
    <Container>
      <div className="book_form_w">
        <Typography variant="h4">Kitob qo'shish</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="outlined-basic"
            label="Ismingiz"
            variant="outlined"
            sx={{ marginTop: "20px" }}
            {...(register("name"), { required: true })}
          />
          <TextField
            type="email"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{ marginTop: "20px" }}
            {...register("email", { required: true })}
          />
          <TextField
            type="email"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{ marginTop: "20px" }}
            {...register("email", { required: true })}
          />
          <TextField
            type="email"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{ marginTop: "20px" }}
            {...register("email", { required: true })}
          />
          <Button type="submit">Qo'shish</Button>
        </form>
      </div>
    </Container>
  );
};

export default AddBook;
