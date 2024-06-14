import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../data/getData";

type CardInfo = {
  dataPage1: [];
  dataPage2: [];
};

const urlPage1 = "https://reqres.in/api/users?page=1";
const urlPage2 = "https://reqres.in/api/users?page=2";

const fetchCardInfo = createAsyncThunk<CardInfo>(
  "cardInfo/fetchCardInfo",
  async () => {
    const [dataCardPage1, dataCardPage2] = await Promise.all([
      getData(urlPage1),
      getData(urlPage2),
    ]);
    return { dataPage1: dataCardPage1.data, dataPage2: dataCardPage2.data };
  },
);

export { fetchCardInfo };
