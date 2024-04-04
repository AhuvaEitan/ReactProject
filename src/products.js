import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import OneProduct from "./oneProduct.js";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { removeProduct } from "./store/productsSlice/productsAction.js";
import "./products.css";

function Products() {
  const productsList = useSelector((state) => state.products.productsList);
  const [products, setProducts] = useState(productsList);

  const status = useSelector((state) => state.user.isManager);
  const [userStatus, setUserStatus] = useState(status);
  const dispatch = useDispatch();

  function remove(productId) {
    
    dispatch(removeProduct(productId));
    console.log(products)
    setProducts(products.filter((item)=>productId!==item.id)
    );

    console.log(products)
  }

  return (
    <>
      <div id="cards">
        {products.map((val, ind) => (
          <div>
            <OneProduct class="oneCard" value={val}></OneProduct>
            {userStatus === true && (
              <Button onClick={()=>remove(val.id)}>Remove Product</Button>
            )}
          </div>
        ))}
      </div>
      {userStatus === true && (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link
            color="inherit"
            style={{padding:'3em', color: "#1976d2" }}
            component={Button}
            to="../addProduct"
          >
            Add product
          </Link>
        </Typography>
      )}
    </>
  );
}
export default Products;
