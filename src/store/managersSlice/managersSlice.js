import produce from "immer";

const initialState = {
  managersList: {},
};

export const managersReducer = produce((state, action) => {
  switch (action.type) {
    case "initManagers":
      state.managersList = action.payload;
      break;
    case "isValid":
      debugger
      
      return action.payload !== "";
      break;
    
  }
}, initialState);
