import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { initUserCreditDetails } from "./store/userSlice/userActions";
import { useState } from "react";
import "./step3.css";

function Step3({ value }) {
  const user = useSelector((state) => state.user.currentUser.creditDetails);
  const dispatch = useDispatch();

  const [creditNumber, setCreditNumber] = useState(user.creditNumber);
  const [validity, setValidity] = useState(user.validity);
  const [threeDigits, setThreeDigits] = useState(user.threeDigits);

  function checkValidation() {
    if (creditNumber !== "" && validity !== "" && threeDigits !== "") {
      value(true);
      console.log(value);
    } else {
      value(false);
    }
  }

  function save(e) {
    e.preventDefault()
    debugger
    let creditDetails = {
      creditNumber: creditNumber,
      validity: validity,
      threeDigits: threeDigits,
    };
    dispatch(initUserCreditDetails(creditDetails));
  }

  return (
    <form id="wrap">
      <h1>Fill in your credit card details</h1>
      <div class="field">
        <TextField
          id="filled-basic"
          label="Enter credit number"
          variant="filled"
          onChange={(e)=>{setCreditNumber(e.target.value); checkValidation()}}
          value={creditNumber}
          required
        />
      </div>
      <div class="field">
        <TextField
          id="filled-basic"
          label="Enter validity"
          variant="filled"
          value={validity}
          onChange={(e)=>{setValidity(e.target.value); checkValidation()}}
          required
        />
      </div>

      <div class="field">
        <TextField
          id="filled-basic"
          label="Enter three digits in the back of the card"
          variant="filled"
          value={threeDigits}
          onChange={(e)=>{setThreeDigits(e.target.value); checkValidation()}}
          required
        />
      </div>
      <Button id="b" type="submit" variant="contained">
        Save
      </Button>
    </form>
  );
}

export default Step3;
