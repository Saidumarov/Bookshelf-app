import { Box, Button, TextField, Typography } from "@mui/material";
import "./index.scss";
import img from "../../assets/images/Frame 75.png";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import useServiceStore from "../../app/bookSlice";
import md5 from "md5";
const Search = () => {
  const [titleSearch, settitleSearch] = useState("");
  const { searchBook } = useServiceStore();

  const handleClik = () => {

    const userSecret = "MyUserSecret";
    const stringToSign = `GET/books${userSecret}`;
    const signature = md5(stringToSign);
    searchBook(signature, titleSearch);
  };
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
          onChange={(e) => settitleSearch(e.target.value)}
        />
        <Button onClick={handleClik}>
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
