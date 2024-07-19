import { USUARIOS } from "@/app/constants/apiEndPoints";
import { PerfilFormProps } from "../perfilFormSchema";
import Cookies from "js-cookie"
import api from "@/app/services/axios";

export const updatePersonalData = async (data: PerfilFormProps) => {
  const id_usuario = Number(Cookies.get("id_usuario"));
  await api.put(`${USUARIOS}/${id_usuario}`, data);
}

