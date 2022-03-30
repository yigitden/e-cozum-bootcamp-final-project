import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import Api from "../service/Api"


const initialState = {
    data: [],
    loading: false,
    error: "",

}

export const getBoardInfoFromId = createAsyncThunk("getBoardInfoFromId", async (id) => {
    const response = await Api().get(`board/${id}`);
    return response.data
})
 


const BoardSliceFromId = createSlice({
    name: "BoardSliceFromId",
    initialState,
    reducers:{},
    extraReducers:{
    //get board list extraReducers
        [getBoardInfoFromId.pending] : (state,action) => {
            state.loading = true;
            state.error = "";
        },
        [getBoardInfoFromId.fulfilled] : (state,action) => {
            state.loading = false;
            state.data = action.payload
        },
        [getBoardInfoFromId.rejected] : (state,action) => {
            state.loading = false;
            state.error = "Error fetching data";
        },

    }



})

export default BoardSliceFromId.reducer;
