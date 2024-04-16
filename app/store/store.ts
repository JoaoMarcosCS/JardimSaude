import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "./root-reducer";
import createSagaMiddleware from "redux-saga"
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export default store;
