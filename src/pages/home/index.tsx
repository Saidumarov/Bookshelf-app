import { Container, Grid, Typography } from "@mui/material";
import Banner from "../../components/shared/banner/banner";
import Search from "../../components/search";
import CardComponent from "../../components/shared/card";
import "./index.scss";
import { useEffect, useState } from "react";
import md5 from "md5";
const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const userSecret = "MyUserSecret";
      const stringToSign = `GET/books${userSecret}`;
      const signature = md5(stringToSign);

      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Key: "MyUserKey", // Foydalanuvchi kaliti
          Sign: signature,
        },
      };

      try {
        const response = await fetch(
          "https://no23.lavina.tech/books",
          requestOptions
        );
        const data = await response.json();
        setBooks(data?.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <Container sx={{ position: "relative" }} maxWidth={"lg"}>
      <Banner />
      <Search />
      <Typography
        paddingTop={"180px"}
        textAlign={"center"}
        color={"#D1B89D"}
        variant="h4"
        className="h4"
      >
        Asosiy kategoriyalar
      </Typography>
      <Grid container spacing={2} sx={{ paddingBottom: "100px" }}>
        {books?.map((el, i) => (
          <CardComponent key={i} data={el} />
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
