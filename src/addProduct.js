import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addProduct } from "./store/productsSlice/productsAction.js";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [subHeader, setSubHeader] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");

  function handleClick() {
    navigate("/");
  }

  function save() {
    let product = {
      id: 25,
      name: name,
      subHeader: subHeader,
      description: description,
      img: img + ".png",
      price: price,
    };
    dispatch(addProduct(product));
    handleClick();
  }

  return (
    <div id="wrap">
      <h1>Fill in product details</h1>
      <form>
        <div class="field">
          <TextField
            id="filled-basic"
            label="Enter name"
            variant="filled"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div class="field">
          <TextField
            id="filled-basic"
            label="Enter sub Header"
            variant="filled"
            required
            onChange={(e) => {
              setSubHeader(e.target.value);
            }}
          />
        </div>
        <div class="field">
          <TextField
            id="filled-basic"
            label="Enter description"
            variant="filled"
            required
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div class="field">
          <TextField
            id="filled-basic"
            label="Enter img name"
            variant="filled"
            required
            onChange={(e) => {
              setImg(e.target.value);
            }}
          />
        </div>
        <div class="field">
          <TextField
            id="filled-basic"
            label="Enter price"
            variant="filled"
            required
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>

        <Button variant="contained" onClick={() => save()}>
          Save
        </Button>
      </form>
    </div>
  );
}

export default AddProduct;
