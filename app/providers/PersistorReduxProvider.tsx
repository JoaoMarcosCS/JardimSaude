"use client";

import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../store/store";

const PersistorReduxStore = ({children}: {children: React.ReactNode}) => {
    return (
        <PersistGate persistor={persistor} >{children}</PersistGate>
    )
}

export default PersistorReduxStore;
