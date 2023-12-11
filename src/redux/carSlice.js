import { createSlice } from "@reduxjs/toolkit";
import { getAdverts } from "../components/services/advertsApi";

export const carSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    isLoading: false,
    isError: "",
  },
  reducers: {
    clearCarsList(state) {
      state.items = [];
    },
  },
  extraReducers: {
    [getAdverts.pending]: (state) => {
      state.isLoading = true;
    },
    [getAdverts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = [...state.items, ...action.payload];
    },
    [getAdverts.rejected]: (state, action) => {
      state.isError = action.payload;
      state.isLoading = false;
    },
  },
});
export const { clearCarsList } = carSlice.actions;
