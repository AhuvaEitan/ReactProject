import { React } from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { updateUser, addUser, getUserById, userLogin,
} from "./store/userSlice/userThunks";
import { useDispatch, useSelector } from "react-redux";
import "./login.css";
import { initUser, removeProductFromCart } from "./store/userSlice/userActions";
import ProductInCart from "./productInCart";
import "./cart.css";

function Cart() {
  debugger;
  const productsList = useSelector((state) => state.user.currentUser.products);
  const dispatch = useDispatch();
  const [products, setProducts] = useState(productsList);
  // const [sum, setSum] = useState(0);

  // function f() {
  //   let res=0
  //   value.map(val=> {
  //     // 'element' in the parenthesis can be any name
  //     res += val.price;
  //   });
  //   return res
  //   // setSum(res)
  //   debugger
  // }

  // useEffect(()=>{setSum(f()) },[])

  function removeFromCart(productId) {
    dispatch(removeProductFromCart(productId));
    if (products[productId] > 0) 
    
    setProducts([...products.slice(0,productId),products[productId]-1,...products.slice(productId+2, products.length-1)] );
  }

  return (
    <>
      {/* <h2>Cart </h2>Your cart contains {products.length} items and comes to a
        total of ₪{}
        {sum} */}

      <div id="products">
        {products.map(
          (val, ind) =>
            val > 0 && (
              <div>
                <ProductInCart class="product" value={{index: ind, amount: val}}></ProductInCart>
                
              </div>
            )
        )}
      </div>

      <h1>Total payment: </h1>
    </>
  );
}

export default Cart;
