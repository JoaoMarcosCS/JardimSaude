import api from "@services/axios"

const removeAuthorizationHeaderAPI = () => {
  delete api.defaults.headers.Authorization;
}

export default removeAuthorizationHeaderAPI
