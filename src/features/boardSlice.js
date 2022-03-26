import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {Api} from "../service/Api"


const initialState = {
    boards: [],
    loading: false,
    error: "",

}


export const fetchBoard = createAsyncThunk("fetchBoard", async () => {
    const response = await Api.get("board");
    return response.data
})

export const addBoard = createAsyncThunk("addBoard", async (data) => {
    const response = await Api.post("board",data);
    return response.data
})
 


const boardSlice = createSlice({
    name: "boards",
    initialState,
    reducers:{},
    extraReducers:{
    //get board list extraReducers
        [fetchBoard.pending] : (state,action) => {
            state.loading = true;
            state.error = "";
        },
        [fetchBoard.fulfilled] : (state,action) => {
            state.loading = false;
            state.boards = action.payload;
        },
        [fetchBoard.rejected] : (state,action) => {
            state.loading = false;
            state.error = "Error fetching data";
        },
    //add board to board list extraReducers
         [addBoard.pending] : (state,action) => {
        state.loading = true;
        state.error = "";
         },
        [addBoard.fulfilled] : (state,action) => {
        state.loading = false;
        state.boards.push(action.payload)      
          },
         [addBoard.rejected] : (state,action) => {
        state.loading = false;
        state.error = "Error fetching data";
         },
     

    }



})

export default boardSlice.reducer;
