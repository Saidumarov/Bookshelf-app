import { Box, Button, TextField, Typography } from "@mui/material";
import "./index.scss";
import img from "../../assets/images/Frame 75.png";
import SearchIcon from "@mui/icons-material/Search";
const Search = () => {
  return (
    <div className="search">
      <Typography
        paddingTop={"25px"}
        textAlign={"center"}
        color={"#D1B89D"}
        variant="h4"
      >
        Qidirish
      </Typography>
      <Box className="search_box">
        <TextField
          type="text"
          className="input_search"
          id="outlined-basic"
          label="Adiblar, kitoblar, audiolar, maqolalar..."
          variant="outlined"
        />
        <Button>
          <img src={img} alt="" />
          <span className="searchIcon">
            <SearchIcon
              sx={{ color: "#cbc0b4", width: "30px", height: "30px" }}
            />
          </span>
        </Button>
      </Box>
    </div>
  );
};

export default Search;
