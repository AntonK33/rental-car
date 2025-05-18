// redux/catalog/catalogSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchUrl } from "./operations";

const initialState = {
  items: [],
  page: 1,
  totalPages: 1,
  isLoading: false,
  error: null,
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUrl.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUrl.fulfilled, (state, action) => {
          state.isLoading = false;
          state.page = action.payload.page;
          state.totalPages = action.payload.totalPages;
          state.items = action.payload.cars;
          
      })
      .addCase(fetchUrl.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const catalogReducer = catalogSlice.reducer;
