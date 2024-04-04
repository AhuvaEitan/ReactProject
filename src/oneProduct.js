import "./oneProduct.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Icon from "@mui/material/Icon";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {removeProductFromCart, addProductToCart} from "./store/userSlice/userActions";

function OneProduct({ value }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/productDetails", { state: value });
  }

  const products = useSelector((state) => state.user.currentUser.products);
  const dispatch = useDispatch();

  function removeFromCart(productId) {
    dispatch(removeProductFromCart(productId));
  }

  function addToCart(productId) {
    console.log(productId);
    dispatch(addProductToCart(productId));
  }

  return (
    <Card id="card" sx={{ maxWidth: 345 }}>
      <CardHeader title={value.name} subheader={value.subHeader} />
      <CardMedia
        onClick={handleClick}
        component="img"
        height="194"
        image={`/images/${value.img}`}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {value.price} NIS per ticket
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Icon onClick={() => removeFromCart(value.id)}>-</Icon>
        </IconButton>
        <IconButton aria-label="share">
          <Icon onClick={() => addToCart(value.id)}>+</Icon>
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default OneProduct;
