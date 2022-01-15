import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URI } from "../../app/config";

export const fetchClientsProm = createAsyncThunk(
    "clients/fetchClients",
    async() => {
        const response = await fetch(`${BASE_URI}`,{
            method: "GET",
        });
        const data = await response.json();
        if(!response.ok){
            throw new Error("Something went Wrong");
        }
        return {clientsProm:data}
    }
);

const clientsPromSlice = createSlice({
    nanme:"clientsProm",
    initialState: {
        status: "idle",
        error: null,
        items: [],
    },
    reducers: {

    },
    extraReducers: {
        [fetchClientsProm.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchClientsProm.fulfilled]: (state, action) => {
            state.status = "succeded";
            state.items = action.payload.clientsProm;
        },
        [fetchClientsProm.error]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
    },
});

export default clientsPromSlice.reducer;
