import axios from "axios";
import { baseRouteUrl } from "../../dataConnection";
// import { initUser } from "./userActions";
import { isValid } from "./managersActions";

const baseUrl = `${baseRouteUrl}/Manager`;

export function getManagerById(Id, dispatch) {
  return axios
    .get(`${baseUrl}/${Id}`)
    .then((res) =>
      // dispatch(() => {
      //   return res.data;
      // })

      // dispatch({type:'isValid', payload: res.data})
      {
        debugger
        if (res.data !== "") {
          return true;
        }
        return false;
      }
    )
    .catch(console.log("err"));
}

// export function addUser(user, dispatch) {
//   axios
//     .post(`${baseUrl}`, user)
//     .then(
//       (res) => {
//         console.log(res.data);
//       }

//       //   dispatch(() => {
//       //     return res.data;
//       //   });
//       //   console.log("add: " + res.data);
//     )
//     .catch((err) => {
//       debugger;
//       console.log(err);
//     });
// }

// export function getUserById(id, dispatch) {
//   axios
//     .get(`${baseUrl}/${id}`)
//     .then((res) => {
//       // dispatch(initUser(res.data));
//     })
//     .catch((err) => {
//       debugger;
//       console.log(err);
//     });
// }

// export function userLogin(user, dispatch) {
//   axios
//     .post(`${baseUrl}`, user)
//     .then(
//       (res) => {
//         return res.data;
//         // debugger;
//         //  if(res.data!=='')
//         //  {
//         //   dispatch(initUser(res.data));
//         //   return true
//       }

//       //  else{return false}}

//       //   dispatch(() => {
//       //     return res.data;
//       //   });
//       //   console.log("add: " + res.data);
//     )
//     .catch((err) => {
//       debugger;
//       console.log(err);
//       // return false
//     });
// }
