import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import Api from "../service/Api"



const initialState = {
    board: [],
    loading: false,
    error: "",

}

export const allBoardLists = createAsyncThunk("allBoardLists", async () => {
    const response = await Api().get("board");
    return response.data
})



export const addBoard = createAsyncThunk("addBoard", async (data) => {
    const response = await Api().post("board",data);
    return response.data
})
export const editBoard = createAsyncThunk("editBoard", async (data) => {
    const response = await Api().put(`board/${data.id}`,data.sendNewName);
    return response.data
})
export const deleteBoard = createAsyncThunk("deleteBoard", async (id) => {
    const response = await Api().delete(`board/${id}`);
    return id
})
 


const boardSlice = createSlice({
    name: "board",
    initialState,
    reducers:{},
    extraReducers:{
    //get board list extraReducers
        [allBoardLists.pending] : (state,action) => {
            state.loading = true;
            state.error = "";
        },
        [allBoardLists.fulfilled] : (state,action) => {
            state.loading = false;
            state.board = action.payload
        },
        [allBoardLists.rejected] : (state,action) => {
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
        state.board.push(action.payload)      
          },
         [addBoard.rejected] : (state,action) => {
        state.loading = false;
        state.error = "Error fetching data";
         },
        //edit board to board list extraReducers
        [editBoard.pending] : (state,action) => {
            state.loading = true;
            state.error = "";
             },
        [editBoard.fulfilled] : (state,action) => {
            state.loading = false;
            state.board = state.board.map((item) => { 
                if(item.id === action.payload.id){
                    return action.payload
                }
                return item
            })     
              },
        [editBoard.rejected] : (state,action) => {
            state.loading = false;
            state.error = "Error fetching data";
             }, 
                     //delete board to board list extraReducers
        [deleteBoard.pending] : (state,action) => {
            state.loading = true;
            state.error = "";
             },
        [deleteBoard.fulfilled] : (state,action) => {
            state.loading = false;
            state.board = state.board.filter((item) => item.id !== action.payload)
              },
        [deleteBoard.rejected] : (state,action) => {
            state.loading = false;
            state.error = "Error fetching data";
             }, 

    }



})

export default boardSlice.reducer;
