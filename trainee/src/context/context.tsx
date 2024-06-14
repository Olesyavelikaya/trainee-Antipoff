import { configureStore } from "@reduxjs/toolkit";
import { userDataSlice } from "./userData";
import { userData, cardInfo } from "./contextType";
import { CardInfoSlice } from "./cardData";

export const {
  setUserEmail,
  setUserName,
  setUserPassword,
  setUserRepeatPassword,
  userReset,
} = userDataSlice.actions;

const reducer = {
  user: userDataSlice.reducer,
  cardInfo: CardInfoSlice.reducer,
};

export const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;

export interface AppState {
  user: userData;
  cardInfo: cardInfo;
}

export const selectUser = (state: AppState) => state.user;
export const selectCardInfo = (state: AppState) => state.cardInfo;
