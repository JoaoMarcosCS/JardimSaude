import {UsuarioState} from "@interfaces/usuarios/interfaceUsuarioState"
import { createSlice } from "@reduxjs/toolkit"

const initialState: UsuarioState = {
    nome: null,
    id: null,
    nivel: null,
}

const usuarioSlice = createSlice({
    name: "usuario",
    initialState,
    reducers:{
        loginRequest:(state, action) => {
            state.nivel = action.payload.nivel
            state.nome = action.payload.nome;
            state.id = action.payload.id
        }
    }
})

export default usuarioSlice.reducer;
export const {loginRequest} = usuarioSlice.actions