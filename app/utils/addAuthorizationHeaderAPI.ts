import api from "@services/axios";

const addAuthorizationHeaderAPI = (token:string) => {
  api.defaults.headers.Authorization = `Bearer ${token}`;
}

export default addAuthorizationHeaderAPI
