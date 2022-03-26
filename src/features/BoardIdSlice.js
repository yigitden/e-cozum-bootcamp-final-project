import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {Api} from "../service/Api"



const initialState = {
    data: [],
    loading: false,
    error: "",

}


export const getBoardAll =   createAsyncThunk("getBoardAll", async (id) => {
    const response = await Api.get(`board/${id}`);
    return response.data
})

 

const BoardIdSlice = createSlice({
    name: "boardidslice",
    initialState,
    reducers:{
      
        addMember: (state,action) => {
           state.data.members.push(action.payload)
        },

        update: (state, action ) => {
            state= {
              ...state,
              title:action.payload
            }
          },
       

         


    },
    extraReducers: (builder) => {
        builder.addCase(getBoardAll.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(getBoardAll.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        });
        builder.addCase(getBoardAll.rejected, (state, action) => {
            state.loading = false;
            state.error = "Error fetching data";
        })

    }



})
export const {update, addMember } = BoardIdSlice.actions
export default BoardIdSlice.reducer;
