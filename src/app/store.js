import { configureStore } from "@reduxjs/toolkit";
import clientsReducer from "../features/clients/clientsSlice";
import createClientsReducer from "../features/clients/createClientsSlice";

export default configureStore({
    reducer: {
        clients: clientsReducer,
        createClients: createClientsReducer
    }
})
