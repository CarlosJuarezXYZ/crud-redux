import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URI } from "../../app/config";

export const fetchClients = createAsyncThunk(
    "clients/fetchClients",
    async() => {
        const response = await fetch(`${BASE_URI}`,{
            method: "GET",
        });
        const data = await response.json();
        if(!response.ok){
            throw new Error("Something went Wrong");
        }
        return {clients:data}
    }
);

const clientsSlice = createSlice({
    name:"clients",
    initialState: {
        status: "idle",
        error: null,
        items: [],
    },
    reducers: {

    },
    extraReducers: {
        [fetchClients.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchClients.fulfilled]: (state, action) => {
            state.status = "succeded";
            state.items = action.payload.clients
        },
        [fetchClients.error]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
    },
});

export default clientsSlice.reducer;
