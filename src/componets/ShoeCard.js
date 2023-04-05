import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useDispatch } from "react-redux";
import {addToCart} from '../Redux/ShoppingCartSlice';
import {removeFromCart} from '../Redux/ShoppingCartSlice';


export default function MultiActionAreaCard({
  shoeId,
  srcImage,
  shoeTitle,
  shoeInfo,
  shoePrice,
}) {
  const dispatch = useDispatch();
  return (
    <Card sx={{ maxWidth: 300, p: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={srcImage}
          alt={srcImage}
        />
        <CardContent sx={{ p: 0 }}>
          <Typography
            align="left"
            gutterBottom
            variant="body1"
            component="div"
            sx={{ fontSize: 14, fontWeight: 600, pt: 2 }}
          >
            {shoeTitle}
          </Typography>
          <Typography
            align="left"
            gutterBottom
            variant="p"
            component="div"
            sx={{ color: "red" }}
          >
            {"Rs " + shoePrice}
          </Typography>
          <Typography
            align="left"
            variant="body2"
            color="text.secondary"
            sx={{ color: "#000", fontSize: 12 }}
          >
            {shoeInfo}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          // color="primary"
          sx={{ color: "blue", fontSize: 12, border: 1 }}
          onClick={() =>
            dispatch(addToCart({ id: shoeId, shoeTitle, shoePrice, srcImage }))
          }
        >
          Add to Cart
        </Button>
        <Button
          size="small"
          // color="primary"
          sx={{ color: "blue", fontSize: 12, border: 1 }}
          onClick={() => dispatch(removeFromCart({ id: shoeId }))}
        >
          Remove from Cart
        </Button>
      </CardActions>
    </Card>
  );
}
