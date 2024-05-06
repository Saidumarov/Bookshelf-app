import { Container, Grid, Typography } from "@mui/material";
import Banner from "../../components/shared/banner/banner";
import Search from "../../components/search";
import CardComponent from "../../components/shared/card";
import "./index.scss";
const Home = () => {
  const aar = [{}, {}, {}, {}, {}, {}, {}, {}];
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
        {aar?.map((_, i) => (
          <CardComponent key={i} />
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
