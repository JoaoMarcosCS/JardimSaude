import { call, put, takeLatest } from 'redux-saga/effects';
import fetchToken from '../services/fetchToken';
import { AxiosResponse } from 'axios';
import * as jwtDecode from "jwt-decode"
import api from "@services/axios"
import { loginFailed, loginSuccess } from "@states/usuarios/usuarioSlice"
import UsuarioToken from '@interfaces/token/tokenInterface';
import { toast } from 'sonner';
import {loginPayloadInterface} from "@interfaces/login/loginPayload"

function* loginRequest({payload}: {payload: loginPayloadInterface}){
    console.log(`Payload: ${payload.email} | ${payload.senha}`)
    try {
        const response:AxiosResponse = yield call(fetchToken,payload);

        const token = response.data.token
        const dados = jwtDecode.jwtDecode<UsuarioToken>(token);
        const { name, id, email, nivel} = dados;
        toast.success(`Olá, ${name}`)

        api.defaults.headers.Authorization = `Bearer ${token}`;

        yield put(loginSuccess({name, id, email,nivel}));
    } catch (error: any) {
        console.log(error);
        const errors = error.response?.data.message || "Erro do servidor, tente novamente em alguns instantes.";
        console.log(errors);
        toast.error(errors);
        yield put(loginFailed({errors}))
        
    }
}

export function* watchGetUsuario(){
    yield takeLatest('usuario/loginRequest', loginRequest as any);
}