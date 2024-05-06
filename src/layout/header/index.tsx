import { Button, Container, Typography } from "@mui/material";
import "./index.scss";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Headroom from "react-headroom";
const Header = () => {
  const root = useNavigate();
  return (
    <>
      <Headroom>
        <header>
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "20px",
            }}
          >
            <Link to={"/"}>
              <Typography color={"#D1B89D"} variant="h4" fontWeight={500}>
                Badiiyat
              </Typography>
            </Link>
            <Button
              variant="contained"
              sx={{ padding: 1.5 }}
              className="btn_add"
              onClick={() => root("/add-book")}
            >
              Kitob qo'shish
            </Button>
          </Container>
        </header>
      </Headroom>
      <Outlet />
    </>
  );
};

export default Header;
