import {combineReducers} from "redux"
import usuarioReducer from "@states/usuarios/usuarioSlice"
import cartReducer from "@states/cart/cartSlice"

const rootReducer = combineReducers({usuarioReducer, cartReducer});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
