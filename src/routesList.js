import { Route, Switch, Routes, Navigate } from "react-router-dom";
import Products from "./products";
import Login from "./login";
import ProductDetails from "./productDetails";
import Cart from "./cart";
import Checkout from "./checkout";
import AddProduct from "./addProduct";

function RoutesList() {
  return (
    // <Switch>
    //   <Route path="/login">
    //     <Login></Login>
    //   </Route>
    //   <Route path="/products">
    //     <Products></Products>
    //   </Route>
    //   <Route path="/productDetails">
    //     <ProductDetails></ProductDetails>
    //   </Route>
    //   <Route path="/cart">
    //     <Cart></Cart>
    //   </Route>
    //   <Route path="/">
    //     <Products></Products>
    //   </Route>
    // </Switch>
    <Routes>
      <Route path="/" element={<Navigate to="/products" />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/productDetails" element={<ProductDetails />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/addProduct" element={<AddProduct />}></Route>
    </Routes>
  );
}
export default RoutesList;
