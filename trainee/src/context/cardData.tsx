import { createSlice } from "@reduxjs/toolkit";
import { cardInfo } from "./contextType";
import { fetchCardInfo } from "./cardDataRequest";

const initialStateCard: cardInfo = {
  dataPageOne: [],
  dataPageTwo: [],
  status: "idle",
};

const CardInfoSlice = createSlice({
  name: "cardInfo",
  initialState: initialStateCard,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCardInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCardInfo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.dataPageOne = action.payload.dataPage1;
        state.dataPageTwo = action.payload.dataPage2;
      })
      .addCase(fetchCardInfo.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export { CardInfoSlice };
