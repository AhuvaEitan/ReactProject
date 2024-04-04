import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addProduct } from "./store/productsSlice/productsAction";
import { addProductToCart } from "./store/userSlice/userActions";

//לבדוק למה לוגין לא עובד מתוך פרטי מוצר

function ProductDetails() {
  // const user =useSelector(state=>state.user)
  const dispatch = useDispatch();
  const value = useLocation().state;

  function addToCart(p) {
    debugger
    dispatch(addProductToCart(p))
    // dispatch({ type: "addProduct", payload: p });
  }

  return (
    <>
      <h1>{value.name}</h1>
      <h3>{value.subHeader}</h3>
      <p style={{ width: "30vw" }}>{value.description}</p>
      <img style={{ width: "30vw" }} src={`/images/${value.img}`} />
      <h3>{value.price}$</h3>
      <Button
        onClick={() => {
          debugger;
          addToCart(value.id);
        }}
      >
        Add to cart
      </Button>
    </>
  );
}

export default ProductDetails;
