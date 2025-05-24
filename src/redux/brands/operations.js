import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchBrands = createAsyncThunk(
    "brands/fetchBrands",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/brands");
            console.log("Brands:", response.data);
            return response.data;
          } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
          }
    }
)