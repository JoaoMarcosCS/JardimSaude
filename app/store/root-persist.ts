import {  persistReducer } from 'redux-persist';
import storage from "./storage"
import rootReducer from "./root-reducer"

const persistConfig = {
  key: 'root',
  storage,
  version:0,
  whitelist: ['usuario', 'cart'],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);

