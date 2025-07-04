import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://car-rental-api.goit.global';

export const fetchUrl = createAsyncThunk(
    "catalog/fetchAll",
    async ({ page = 1, brand = "", rentalPrice = "",minMileage="", maxMileage="", }, thunkAPI) => {
      //console.log("what comes in to brand,price",brand,rentalPrice,minMileage,maxMileage);
      console.log("what comes in to page operations", page)
        try {
            const response = await axios.get("/cars", {
              params: {
                page,
                    ...(brand && { brand }), 
                    ...(rentalPrice && { rentalPrice }),
                    ...(minMileage && { minMileage }),
                    ...(maxMileage && { maxMileage }) 
              }
            });
            // console.log("Response:", response.data);
            return response.data;
          } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
          }
    }
)




