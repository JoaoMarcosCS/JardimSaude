import { USUARIOS } from "@/app/constants/apiEndPoints";
import Cookies from "js-cookie"
import api from "@/app/services/axios";
import { PerfilFormProps } from "../schemas/perfilFormSchema";

export const updatePersonalData = async (data: PerfilFormProps) => {
  const id_usuario = Number(Cookies.get("id_usuario"));
  await api.put(`${USUARIOS}/${id_usuario}`, data);
}

