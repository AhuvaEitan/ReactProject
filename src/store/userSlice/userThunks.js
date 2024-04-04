import axios from "axios";
import { baseRouteUrl } from "../../dataConnection";
import { initUser } from "./userActions";

const baseUrl = `${baseRouteUrl}/User`;

export function updateUser(Id, user, dispatch) {
  axios.put(`${baseUrl}/${Id}`, user).then((res) =>
    dispatch(() => {
      return res.data;
    })
  );
}

export function addUser(user, dispatch) {
  axios
    .post(`${baseUrl}`, user)
    .then((res) =>{console.log(res.data)}
    
     
    //   dispatch(() => {
    //     return res.data;
    //   });
    //   console.log("add: " + res.data);
    )
    .catch((err) => {
      debugger;
      console.log(err);
    });
}

export function getUserById(id, dispatch) {
  axios
    .get(`${baseUrl}/${id}`)
    .then((res) => {
      // dispatch(initUser(res.data));
      
    })
    .catch((err) => {
      debugger;
      console.log(err);
    });
}

export function userLogin(user, dispatch) {
   axios
    .post(`${baseUrl}`, user)
    .then((res) =>{
     return res.data
      // debugger;
      //  if(res.data!=='')
      //  {
      //   dispatch(initUser(res.data));
      //   return true 
       }
       
      //  else{return false}}
       
     
    //   dispatch(() => {
    //     return res.data;
    //   });
    //   console.log("add: " + res.data);
    )
    .catch((err) => {
      debugger;
      console.log(err);
      // return false
    });
}


