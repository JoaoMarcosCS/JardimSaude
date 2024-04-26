import { MEDICAMENTOS } from "@/app/constants/apiEndPoints";
import api from "../axios";

const fetchTotalMedicamentos = async ():Promise<number> => {
  const response = await api.get(MEDICAMENTOS);
  console.log("ResponsE:" + response.data[1]);

  return response.data[1];

}

export default fetchTotalMedicamentos;
