import { configureStore } from "@reduxjs/toolkit";
import clientsReducer from "../features/clients/clientsSlice";
import createClientsReducer from "../features/clients/createClientsSlice";
import averageClientsReducer from "../features/clients/promClientsSlice";

export default configureStore({
    reducer: {
        clients: clientsReducer,
        createClients: createClientsReducer,
        average: averageClientsReducer
    }
})
