import "./index.scss";
import img from "../../../assets/images/book.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, Grid } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import DeleteBook from "../../deleteBook";
import { Data } from "../../../types";
const CardComponent = ({ data }: Data) => {
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
              {data?.book?.author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data?.book?.title}
              <br />
              Sahifa:{data?.book?.pages}
              <br />
              Chop etilgan : {data?.book?.published}
            </Typography>
            <div className="dis_">
              <DeleteBook id={data?.book?.id} />
              <Button
                onClick={() => root(`/edit-book/${data?.book?.id}`)}
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
