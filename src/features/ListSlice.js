import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import Api from "../service/Api"



const initialState = {
    data: [],
    loading: false,
    error: "",

}

//list api start
export const getListAll =   createAsyncThunk("getListAll", async (id) => {
    const response = await Api().get(`list?boardId=${id}`);
    return response.data
})
export const addLists =   createAsyncThunk("addLists", async (data) => {
    const response = await Api().post('list',data);
    return response.data
})
 
export const deleteLists =   createAsyncThunk("deleteLists", async (id) => {
    const response = await Api().delete(`list/${id}`);
    return id
})
//list api end
export const editListTitle = createAsyncThunk("editListTitle", async (data) => {
    const response = await Api().put(`list/${data.listId}`, data.updatedListInfo);
    return response.data
})

const ListSlice = createSlice({
    name: "ListSlice",
    initialState,
    extraReducers:  {
        //getListALL REDUCERS
        [getListAll.pending] : (state,action) => {
            state.loading = true;
            state.error = "";
             },
        [getListAll.fulfilled] : (state,action) => {
            state.loading = false;
            state.data = action.payload;     
              },
        [getListAll.rejected] : (state,action) => {
            state.loading = false;
            state.error = "Error fetching data";
             },
             //add list REDUCERS
        [addLists.pending] : (state,action) => {
            state.loading = true;
            state.error = "";
             },
        [addLists.fulfilled] : (state,action) => {
            state.loading = false;
            state.data.push(action.payload)      
              },
        [addLists.rejected] : (state,action) => {
            state.loading = false;
            state.error = "Error fetching data";
             },
                //delete list REDUCERS
        [deleteLists.pending] : (state,action) => {
            state.loading = true;
            state.error = "";
             },
        [deleteLists.fulfilled] : (state,action) => {
            state.loading = false;
            state.data = state.data.filter((item) => item.id !== action.payload)    
              },
        [deleteLists.rejected] : (state,action) => {
            state.loading = false;
            state.error = "Error fetching data";
             },
             //edit list reducers
             [editListTitle.pending] : (state,action) => {
                state.loading = true;
                state.error = "";
                 },
            [editListTitle.fulfilled] : (state,action) => {
                state.loading = false;
                state.data = state.data.map((item) => { 
                    if(item.id === action.payload.id){
                        return action.payload
                    }
                    return item
                })
              },
            [editListTitle.rejected] : (state,action) => {
                state.loading = false;
                state.error = "Error fetching data";
                 },
   

    }



})
export const { removeLists, updateLists, removeCards, addLabels } = ListSlice.actions
export default ListSlice.reducer;
