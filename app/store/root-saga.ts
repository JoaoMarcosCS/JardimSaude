import {all} from "redux-saga/effects"
import { watchGetUsuario } from "@sagas/loginSagas"

export default function* rootSaga() {
    yield all([
        watchGetUsuario(),
    ])
}