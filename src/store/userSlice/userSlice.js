import produce from "immer";

const initialState = {
  currentUser: {
    personalDetails: {
      name: "",
      userIDNumber: "",
      email: "",
      phoneNumber: "",
    },
    creditDetails: { creditNumber: "", validity: "", threeDigits: "" },
    products: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
  },
  isManager: false,
};

export const userReducer = produce((state, action) => {
  switch (action.type) {
    case "initUserPersonalDetails":
      state.currentUser.personalDetails = action.payload;
      break;
      case "initUserCreditDetails":
      state.currentUser.creditDetails = action.payload;
      break;
    case "addProduct":
      state.currentUser.products[action.payload] += 1;
      break;
    case "removeProduct":
      if (state.currentUser.products[action.payload] > 0) {
        state.currentUser.products[action.payload] -= 1;
      }
      break;
    case "updateIsManager":
      state.isManager = action.payload;
      break;
  }
}, initialState);
