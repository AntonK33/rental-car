import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://car-rental-api.goit.global';

export const fetchUrl = createAsyncThunk(
    "catalog/fetchAll",
    async ({ page = 1, brand = "", rentalPrice = "",minMileage="", maxMileage="", }, thunkAPI) => {
        console.log("what comes in to brand,price",brand,rentalPrice,minMileage,maxMileage);
        try {
            const response = await axios.get("/cars", {
              params: {
                page,
                    ...(brand && { brand }), // добавляем brand, только если он задан
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

// export const fetchFilteredCars = createAsyncThunk(
//     "catalog/fetchFilteredCars",
//     async ({ brand,price }, thunkAPI) => {
//         try {
//             const response = await axios.get("/cars",{
//                 params: {
//                     brand,
//                     price
                   
//                 }
//                 });
//             console.log("What comes in the response",response.data)
//             return response.data;
//         }
//         catch (e) {
//             return thunkAPI.rejectWithValue(e.message);
//         }
//     }
// )


