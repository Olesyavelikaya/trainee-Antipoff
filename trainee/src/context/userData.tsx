import { createSlice } from "@reduxjs/toolkit";
import { userData } from "./contextType";

const initialStateUser: userData = {
  userName: "",
  userEmail: "",
  userPassword: "",
  userRepeatPassword: "",
};

const userDataSlice = createSlice({
  name: "userData",
  initialState: initialStateUser,
  reducers: {
    setUserName(state, action) {
      state.userName = action.payload;
    },
    setUserEmail(state, action) {
      state.userEmail = action.payload;
    },
    setUserPassword(state, action) {
      state.userPassword = action.payload;
    },
    setUserRepeatPassword(state, action) {
      state.userRepeatPassword = action.payload;
    },
    userReset(state) {
      (state.userEmail = ""),
        (state.userName = ""),
        (state.userPassword = ""),
        (state.userRepeatPassword = "");
    },
  },
});

export { userDataSlice };
