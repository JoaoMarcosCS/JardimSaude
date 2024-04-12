import {UsuarioState} from "@interfaces/usuarios/interfaceUsuarioState"
import { createSlice } from "@reduxjs/toolkit"

const initialState: UsuarioState = {
    nome: null,
    id: null,
    nivel: null,
    isLoading: false,
    error: null,
    email: null
}

const usuarioSlice:any = createSlice({
    name: "usuario",
    initialState,
    reducers:{
        loginSuccess:(state, action) => {
            state.nivel = action.payload.nivel
            state.nome = action.payload.nome;
            state.id = action.payload.id;
            state.email = action.payload.email
            state.isLoading = false;
        },
        loginRequest:(state, action) => {
            state.isLoading = true;
        },
        loginFailed:(state, action) => {
            state.error = action.payload.errors;
            state.isLoading = false;
        }
    }
})

export default usuarioSlice.reducer;
export const {loginRequest, loginFailed, loginSuccess} = usuarioSlice.actions