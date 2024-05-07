import {
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import "./index.scss";
import SignUpImg from "../../assets/images/Rectangle 1.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSignUpMutation } from "../../app/api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SignUpFormData } from "../../types";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<SignUpFormData>();
  const [signUp, { isLoading }] = useSignUpMutation();

  const url = window.location.href;
  const router = useNavigate();
  const generateRandomKey = () => {
    return Math.floor(Math.random() * 10e12).toString();
  };

  useEffect(() => {
    setValue("key", generateRandomKey());
    setValue("secret", "MyUserSecret");
  }, [setValue]);

  const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
    try {
      const { data: responseData } = await signUp(data).unwrap();
      localStorage.setItem("user", JSON.stringify(responseData));
      reset();
      router("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      router("/");
    }
  }, [url]);

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
            {errors.name && <span className="error">Ismingiz kriting</span>}
            <TextField
              type="email"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              sx={{ marginTop: "20px" }}
              {...register("email", { required: true })}
            />
            {errors.email && <span className="error">Emailni kriting</span>}
            <Button type="submit">
              {isLoading ? <CircularProgress /> : "Ro’yxatdan o’tish"}
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
