import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://car-rental-api.goit.global';

export const fetchUrl = createAsyncThunk(
    "catalog/fetchAll",
    async ({page=1,brand = ""}, thunkAPI) => {
        try {
            const response = await axios.get("/cars", {
              params: {
                page,
                ...(brand && { brand }) // добавляем brand, только если он задан
              }
            });
            console.log("Response:", response.data);
            return response.data;
          } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
          }
    }
)

export const fetchFilteredCars = createAsyncThunk(
    "catalog/fetchFilteredCars",
    async ({ brand }, thunkAPI) => {
        try {
            const response = await axios.get("/cars",{
                params: {
                    brand,
                   
                }
                });
            console.log("What comes in the response",response.data)
            return response.data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)