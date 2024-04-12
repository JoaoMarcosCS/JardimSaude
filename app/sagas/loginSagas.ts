import { call, put, takeLatest } from 'redux-saga/effects';
import fetchToken from '../services/fetchToken';
import { AxiosResponse } from 'axios';
import * as jwtDecode from "jwt-decode"
import api from "@services/axios"
import { loginFailed, loginSuccess } from "@states/usuarios/usuarioSlice"
import UsuarioToken from '@interfaces/token/tokenInterface';
import { toast } from 'sonner';

function* authorization(){
    
    try {
        const response:AxiosResponse = yield call(fetchToken);

        const token = response.data.token
        const dados = jwtDecode.jwtDecode<UsuarioToken>(token);
        const { name, id, email, nivel} = dados;

        yield put(loginSuccess({name,id, email,nivel}));
    
        api.defaults.headers.Authorization = `Bearer ${token}`;
    } catch (error: any) {
        console.log(error);
        const errors = error.response.data.message;
        console.log(errors);
        toast.error(errors);
        yield put(loginFailed({errors}))
        
    }
}

export function* watchGetUsuario(){
    yield takeLatest('usuario/loginRequest', authorization);
}