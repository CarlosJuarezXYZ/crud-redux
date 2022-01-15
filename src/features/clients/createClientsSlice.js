import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URI } from "../../app/config";


export const fetchCreateClients = createAsyncThunk(
    "createClients/fetchCreateClients",
    async(client) => {
        console.log("cliente de diego",client);
        const response = await fetch(`${BASE_URI}`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(client)
        });

        const data = await response.json()
        console.log("data 2",data);
        if(!response.ok){
            throw new Error(data);
        }
        
        return {data};
    }
);

const createClientsSlice = createSlice({
    name: "createClients",
    initialState: {
        item: {},
        status: "idle",
        error: null,
        reason: ""
    },
    reducer:{

    },
    extraReducers: {
        [fetchCreateClients.pending]: (state) => {
            state.status = "loading";
        },
        [fetchCreateClients.fulfilled]: (state, action) => {
            state.status = "succeded";
            state.item = action.payload.data;
        },
        [fetchCreateClients.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        }
    },
});

export default createClientsSlice.reducer;
