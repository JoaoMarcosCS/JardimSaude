import {combineReducers} from "redux"
import usuarioReducer from "@states/usuarios/usuarioSlice"

const rootReducer = combineReducers({usuarioReducer});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
