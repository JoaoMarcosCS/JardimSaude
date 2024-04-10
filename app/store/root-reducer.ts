import {combineReducers} from "redux"
import usuarioSlice from "../states/usuarios/usuarioSlice"; "@states/usuarios/usuarioSlice"

const rootReducer = combineReducers({usuarioSlice});

export default rootReducer;