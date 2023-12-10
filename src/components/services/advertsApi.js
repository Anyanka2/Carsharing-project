import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASEURL = "https://64fef441f8b9eeca9e295705.mockapi.io";

export const advertAPI = axios.create({
  BaseURL: "https://64fef441f8b9eeca9e295705.mockapi.io/api/v1/",
});

export const getAdverts = createAsyncThunk(
  "adverts/getAdverts",
  async ({ page, limit }, thunkApi) => {
    try {
      const { data } = await advertAPI.get(`/advert?page=${page}`, {
        params: {
          limit,
        },
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addFavoriteAdvert = async (id) => {
  const { data } = await advertAPI.delete(`${BASEURL}/advert/${id}`);
  return data;
};

export const removeFavoriteAdvert = async (id) => {
  const { data } = await advertAPI.delete(`${BASEURL}/advert/${id}`);
  return data;
};
