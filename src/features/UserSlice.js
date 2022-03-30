import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import Api from "../service/Api"


const initialState = {
    data: [],
    loading: false,
    error: "",

}

export const getAllUsers = createAsyncThunk("getAllUsers", async () => {
    const response = await Api().get("user");
    return response.data
})
  
const UserSlice = createSlice({
    name: "UserSlice",
    initialState,
    reducers:{},
    extraReducers:{
        [getAllUsers.pending] : (state,action) => {
            state.loading = true;
            state.error = "";
        },
        [getAllUsers.fulfilled] : (state,action) => {
            state.loading = false;
            state.data = action.payload
        },
        [getAllUsers.rejected] : (state,action) => {
            state.loading = false;
            state.error = "Error fetching data";
        },

    }



})

export default UserSlice.reducer;
