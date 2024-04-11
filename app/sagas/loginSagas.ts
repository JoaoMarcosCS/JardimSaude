import axios from 'axios'
import { takeLatest } from 'redux-saga/effects';

function* authorization(){
    console.log("teste ");
}

export function* watchGetUsuario(){
    yield takeLatest('usuario/loginRequest', authorization);
}