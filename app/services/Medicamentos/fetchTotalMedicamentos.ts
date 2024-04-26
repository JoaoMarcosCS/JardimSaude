import { MEDICAMENTOS } from "@/app/constants/apiEndPoints";
import api from "../axios";

const fetchTotalMedicamentos = async ():Promise<number> => {
  const response = await api.get(MEDICAMENTOS);

  return response.data[1];

}

export default fetchTotalMedicamentos;
