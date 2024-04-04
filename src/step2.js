import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./step2.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initUserPersonalDetails } from "./store/userSlice/userActions";

function Step2({ value }) {
  const user = useSelector((state) => state.user.currentUser.personalDetails);
  const dispatch = useDispatch();

  const [name, setName] = useState(user.name);
  const [userIDNumber, setUserIDNumber] = useState(user.userIDNumber);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);

  function checkValidation() {
    if (name !== "" && userIDNumber !== "" && email !== "" && phoneNumber !== "") {
      value(true);
      console.log(value);
    } else {
      value(false);
    }
  }

  function save(e) {
    e.preventDefault()
    let personalDetails = {
      name: name,
      userIDNumber: userIDNumber,
      email: email,
      phoneNumber: phoneNumber,
    };
    dispatch(initUserPersonalDetails(personalDetails));
  }

  return (
    <div id="wrap">
      <h1>Fill in your details</h1>
      <form 
      onSubmit={(e)=>save(e)}
      >
        <div class="field">
          <TextField
            id="filled-basic"
            label="Enter name"
            variant="filled"
            required
            onChange={(e)=>{setName(e.target.value); checkValidation()}}
            value={name}
          />
        </div>
        <div class="field">
          <TextField
            id="filled-basic"
            label="Enter ID number"
            variant="filled"
            required
            onChange={(e)=>{setUserIDNumber(e.target.value); checkValidation()}}
            value={userIDNumber}
          />
        </div>
        <div class="field">
          <TextField
            id="filled-basic"
            label="Enter email address"
            variant="filled"
            required
            onChange={(e)=>{setEmail(e.target.value); checkValidation()}}
            value={email}
          />
        </div>
        <div class="field">
          <TextField
            id="filled-basic"
            label="Enter phone number"
            variant="filled"
            required
            onChange={(e)=>{setPhoneNumber(e.target.value); checkValidation()}}
            value={phoneNumber}
          />
        </div>

        <Button variant="contained" type="submit">Save</Button>
      </form>
    </div>
  );
}

export default Step2;
