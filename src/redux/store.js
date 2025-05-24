
//import {combineReducers} from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer, 
  FLUSH,
  REHYDRATE, 
  PAUSE,
  PERSIST,
  PURGE, 
  REGISTER,
} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { catalogReducer } from "./catalog/catalogSlice";
import { brandsReducer } from "./brands/brandsSlice";


const catalogPersistConfig = {
  key:'catalog',
  storage,
  //whitelist: ['token'],
};
const brandsPersistConfig = {
  key:'brands',
   storage,
   //whitelist: ['token'],
 };
    export const store = configureStore({
        reducer:{
        
        catalog: catalogReducer,
          brands: brandsReducer
       
    },
        
        middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    ],
        devTools: process.env.NODE_ENV === 'development',
        });

  

export const persistor = persistStore(store);








