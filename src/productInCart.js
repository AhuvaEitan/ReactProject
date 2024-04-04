import { useDispatch, useSelector } from "react-redux";
import { React } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  removeProductFromCart,
  addProductToCart,
} from "./store/userSlice/userActions";

import "./productInCart.css";
import { Button } from "@mui/material";

function ProductInCart({ value }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/productDetails", { state: product });
  }

  const prod = useSelector((state) => state.products.productsList[value.index]);
  const dispatch = useDispatch();
  const [product, setProduct] = useState(prod);
  const [amount, setAmount] = useState(value.amount);

  function removeFromCart(productId) {
    if (amount > 0) {
      dispatch(removeProductFromCart(productId));
      setAmount(amount - 1);
    }
  }

  function addToCart(productId) {
    dispatch(addProductToCart(productId));
    setAmount(amount + 1);
  }

  return (
    <div id="wrap">
      <div id="contain">
        <img src={`/images/${product.img}`} onClick={handleClick}></img>
        <div id="product">
          <h3>{product.name}</h3>
          <p>{product.subHeader}</p>
        </div>
        <Button onClick={() => addToCart(product.id)}>+</Button>
        <p>amount: {amount}</p>
        <Button onClick={() => removeFromCart(product.id)}>-</Button>
      </div>
      <h4>{product.price}.00$</h4>
      
    </div>
  );
}

export default ProductInCart;
