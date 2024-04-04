import { React } from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {
  updateUser,
  addUser,
  getUserById,
  userLogin,
} from "./store/userSlice/userThunks";
import { useDispatch, useSelector } from "react-redux";
import "./login.css";
import { initUser, updateIsManager } from "./store/userSlice/userActions";
import { padding } from "@mui/system";
import { redirect, useNavigate } from "react-router-dom";

import { useLocation } from "react-router-dom";
import { getManagerById } from "./store/managersSlice/managersThunks";

import axios from "axios";
import { baseRouteUrl } from "./dataConnection";
// import { initUser } from "./userActions";
import { isValid } from "./store/managersSlice/managersActions.js";

function Login() {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();
  const baseUrl = `${baseRouteUrl}/Manager`;
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");

  function updateStatus() {
    // if(getManagerById(userId, dispatch)===true){
    //   dispatch(updateIsManager(true));
    //   if (location.pathname === "/products") navigate("/");
    // }
    // else{
    //   alert("Wrong password!")
    // }
    axios
      .get(`${baseUrl}/${userId}`)
      .then((res) =>
        // dispatch(() => {
        //   return res.data;
        // })
        // dispatch({type:'isValid', payload: res.data})
        {
          if (res.data === "") alert("Wrong password!");
          else {
            dispatch(updateIsManager(true));
            if (location.pathname === "/products") navigate("/");
          }
        }
      )
      .catch(console.log("err"));
  }

  return (
    <>
      <form id="loginForm">
      <h2>Login</h2>
        <div class="inp">
          <TextField
            id="filled-search"
            label="User name:"
            type="text"
            variant="filled"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div class="inp">
          <TextField
            id="filled-search"
            label="Password"
            type="search"
            variant="filled"
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <Button onClick={updateStatus} variant="contained">
          Login
        </Button>
      </form>
    </>
  );
}

export default Login;
