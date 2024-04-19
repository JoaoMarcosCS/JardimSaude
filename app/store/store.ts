import {configureStore} from "@reduxjs/toolkit"

import { persistedReducer } from "./root-persist";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore } from "redux-persist";
import rootReducer from "./root-reducer";

// const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

// sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);

export default store;
