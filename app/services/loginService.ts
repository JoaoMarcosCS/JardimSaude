import api from "@config/axios";
import {Login} from "@endpoints"

const loginService = async () => {
    const response = await api.post(Login, {email:"jmcsjoaomarcos@gmail.com",
    senha:"JMCS2024"})

    console.log(response);
}

export default loginService