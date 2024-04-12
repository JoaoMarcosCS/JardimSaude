import { call, takeLatest } from 'redux-saga/effects';
import fetchToken from '../services/fetchToken';
import { TokenResponse } from '../interfaces/token/tokenResponseInterface';
import { AxiosResponse } from 'axios';
import api from "@services/axios"

function* authorization(){
    console.log("teste 1");
    try {
        const response:AxiosResponse = yield call(fetchToken);
        const token = response.data.token
        console.log(token);
        api.defaults.headers.Authorization = `Bearer ${token}`;
    } catch (error: any) {
        console.log(error);
        const errors = error.response.data.message
        console.log(errors);
        
    }
}

export function* watchGetUsuario(){
    yield takeLatest('usuario/loginRequest', authorization);
}