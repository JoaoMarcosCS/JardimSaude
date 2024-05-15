
import { createSlice } from "@reduxjs/toolkit"
import { UsuarioState } from "./interfaceUsuarioState";

const initialState: UsuarioState = {
  nome: null,
  id: null,
  nivel: null,
  isLoading: false,
  error: null,
  email: null,
  isLoggedIn: false
}

const usuarioSlice: any = createSlice({
  name: "usuario",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.nivel = action.payload.nivel
      state.nome = action.payload.name;
      state.id = action.payload.id;
      state.email = action.payload.email
      state.isLoggedIn = true
      state.isLoading = false;
    },
    reloadState: (state, action) => {
      state.nivel = action.payload.nivel;
      state.id = action.payload.id;
      state.nome = action.payload.name;
    }
  }
})

export default usuarioSlice.reducer;
export const { reloadState, loginSuccess } = usuarioSlice.actions
