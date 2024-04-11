import { call, takeLatest } from 'redux-saga/effects';
import loginService from '../services/loginService';

function* authorization(){
    console.log("teste")
    yield call(loginService);
}

export function* watchGetUsuario(){
    yield takeLatest('usuario/loginRequest', authorization);
}