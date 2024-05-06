import { Button, Container, TextField, Typography } from "@mui/material";
import "./index.scss";
import SignUpImg from "../../assets/images/Rectangle 1.png";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormData } from "../../types";

const SignUp = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (formData) => {
    console.log(formData);
    reset();
  };
  return (
    <Container maxWidth="lg">
      <div className="sign_up_wrapper">
        <div className="image">
          <img src={SignUpImg} alt="404" />
        </div>
        <div className="form_sign_up">
          <Typography variant="h3" fontWeight={500}>
            Ro’yxatdan o’tish
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              id="outlined-basic"
              label="Ismingiz"
              variant="outlined"
              sx={{ marginTop: "20px" }}
              {...register("name", { required: true })}
            />
            <TextField
              type="email"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              sx={{ marginTop: "20px" }}
              {...register("email", { required: true })}
            />
            <Button type="submit">Keyingi qadam</Button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
