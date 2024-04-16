import { call, put, takeLatest } from 'redux-saga/effects';
import fetchToken from '../services/fetchToken';
import { AxiosResponse } from 'axios';
import * as jwtDecode from "jwt-decode"
import api from "@services/axios"
import { loginFailed, loginSuccess } from "@states/usuarios/usuarioSlice"
import UsuarioToken from '@interfaces/token/tokenInterface';
import { toast } from 'sonner';
import Cookie from "js-cookie"
import { loginPayloadInterface } from "@interfaces/login/loginPayload"


function* loginRequest({ payload }: { payload: loginPayloadInterface }) {

  try {
    const response: AxiosResponse = yield call(fetchToken, payload);

    const token = response.data.token
    const { name, id, email, nivel } = jwtDecode.jwtDecode<UsuarioToken>(token);

    Cookie.set("auth_token", token, { expires: 1 / 24 });

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(loginSuccess({ name, id, email, nivel }));

    window.location.href = "/";


  } catch (error: any) {

    const errors = error.response?.data.message || "Erro do servidor, tente novamente em alguns instantes.";
    toast.error(error);
    console.log(error);
    yield put(loginFailed({ errors }))

  }
}

export function* getToken() {
  yield takeLatest('usuario/loginRequest', loginRequest as any);
}
