import "./index.scss";
import img from "../../../assets/images/avloniy (1).png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, Grid } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
const CardComponent = () => {
  const root = useNavigate();
  return (
    <Grid item xs={6} md={3} sm={4}>
      <Card sx={{ width: "100%", marginTop: 5 }}>
        <Box>
          <CardMedia
            component="img"
            height="200"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
            <div className="dis_">
              <Button variant="contained" color="error">
                <DeleteIcon />
              </Button>
              <Button
                onClick={() => root("/edit-book/626")}
                variant="contained"
                color="info"
              >
                <EditIcon />
              </Button>
            </div>
          </CardContent>
        </Box>
      </Card>
    </Grid>
  );
};

export default CardComponent;
