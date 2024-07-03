import { clearCart } from "@/app/cart/storage/clearCart";
import { decreaseCartItem } from "@/app/cart/storage/decreaseCartItem";
import { getCartItems } from "@/app/cart/storage/getCartItems";
import { updateCartItem } from "@/app/cart/storage/updateCartItem";
import { Medicamento } from "@/app/medicamentos/interfaces/medicamentoInterface";
import { createSlice } from "@reduxjs/toolkit";


interface CarrinhoState {
  medicamentos: Medicamento[];
  isLoading: boolean;
  valorTotal: number;
  quantidadeTotal: number
  error: string | null;
}

const initialState: CarrinhoState = {
  medicamentos: [],
  isLoading: false,
  error: null,
  valorTotal: 0,
  quantidadeTotal: 0
};

const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState,
  reducers: {
    reloadCartItems: (state, action) => {
      state.medicamentos = action.payload;
      state.valorTotal = state.medicamentos.reduce((acc, medicamento) => {
        return (acc + medicamento.quantidade * medicamento.valor_unitario)
      }, 0);
      state.quantidadeTotal = state.medicamentos.reduce((acc, medicamento) => {
        return (acc + medicamento.quantidade)
      }, 0)
    },

    adicionarMedicamento: (state, action) => {
      const existMedicamentoInCart = state.medicamentos.find(itemCart => itemCart.codigo === action.payload.codigo);

      if (existMedicamentoInCart) {
        for (let i = 0; i < state.medicamentos.length; i++) {
          if (state.medicamentos[i].codigo === action.payload.codigo) {
            state.medicamentos[i].quantidade += 1;
          }
        }
      } else {
        state.medicamentos.push(action.payload);
      }
      state.valorTotal = state.medicamentos.reduce((acc, medicamento) => {
        return (acc + medicamento.quantidade * medicamento.valor_unitario)
      }, 0);
      state.quantidadeTotal = state.medicamentos.reduce((acc, medicamento) => {
        return (acc + medicamento.quantidade)
      }, 0)
      updateCartItem(action.payload);
    },

    diminuirMedicamento: (state, action) => {
      const existMedicamentoInCart = state.medicamentos.find(itemCart => itemCart.id === action.payload.id);

      if (existMedicamentoInCart) {
        for (let i = 0; i < state.medicamentos.length; i++) {
          if (state.medicamentos[i].id === action.payload.id) {
            state.medicamentos[i].quantidade -= 1
            state.medicamentos = state.medicamentos.filter((medicamento) => medicamento.quantidade > 0);
          }
        }
      }
      state.valorTotal = state.medicamentos.reduce((acc, medicamento) => {
        return (acc + medicamento.quantidade * medicamento.valor_unitario)
      }, 0);
      state.quantidadeTotal = state.medicamentos.reduce((acc, medicamento) => {
        return (acc + medicamento.quantidade)
      }, 0)

      decreaseCartItem(action.payload);
    },

    limparCarrinho: (state) => {
      state.medicamentos = [];
      state.quantidadeTotal=0
      state.valorTotal=0
      clearCart();
    },
  },
});

export default carrinhoSlice.reducer;
export const {
  adicionarMedicamento,
  diminuirMedicamento,
  limparCarrinho,
  // aumentaValorTotal,
  // aumentaQuantidadeTotal,
  reloadCartItems
} = carrinhoSlice.actions;



