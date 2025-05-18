
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


const authPersistConfig = {
  key:'catalog',
  storage,
  //whitelist: ['token'],
};

    export const store = configureStore({
        reducer:{
        
        catalog: catalogReducer,
       
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








