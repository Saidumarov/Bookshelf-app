import { Container, Grid, Typography } from "@mui/material";
import Banner from "../../components/shared/banner/banner";
import Search from "../../components/search";
import CardComponent from "../../components/shared/card";
import "./index.scss";
import { useEffect } from "react";
import md5 from "md5";
import useServiceStore from "../../app/bookSlice";
// import LoadingProduct from "../../components/loading";
const Home = () => {
  const { render, data, getBooks } = useServiceStore();

  useEffect(() => {
    const fetchBooks = async () => {
      const userSecret = "MyUserSecret";
      const stringToSign = `GET/books${userSecret}`;
      const signature = md5(stringToSign);
      try {
        getBooks(signature);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchBooks();
  }, [render]);

  return (
    <Container sx={{ position: "relative" }} maxWidth={"lg"}>
      {/* {loading ? <LoadingProduct /> : null} */}
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
        {data?.map((el, i) => (
          <CardComponent key={i} data={el} />
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
