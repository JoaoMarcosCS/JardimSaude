import { Dispatch, SetStateAction } from "react";

export interface ModalActionTratamentoProps{
  tratamentoId: string,
  modalController:Dispatch<SetStateAction<boolean>>
}
