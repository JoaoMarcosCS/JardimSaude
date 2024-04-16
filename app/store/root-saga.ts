import {all} from "redux-saga/effects"
import { getToken } from "@sagas/loginSagas"

export default function* rootSaga() {
    yield all([
        getToken(),
    ])
}
