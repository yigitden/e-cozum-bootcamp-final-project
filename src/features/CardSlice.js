import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Api } from "../service/Api"



const initialState = {
    data: [],
    loading: false,
    error: "",

}

// card createAsyncThunk

export const getAllCard = createAsyncThunk("getAllCard", async () => {
    const response = await Api.get(`card`);
    return response.data
})

export const addCard = createAsyncThunk("addCard", async (data) => {
    const response = await Api.post(`card`, data);
    return response.data
})

export const deleteCard = createAsyncThunk("deleteCard", async (id) => {
    const response = await Api.delete(`card/${id}`);
    return id
})

// label createAsyncThunk

export const addLabel = createAsyncThunk("addLabel", async (data) => {
    const response = await Api.post(`card-label`, data);
    return response.data
})

// checklists createAsyncThunk

export const addCheckLists = createAsyncThunk("addCheckList", async (data) => {
    const response = await Api.post(`checklist`, data);
    return response.data
})
export const editCheckListName = createAsyncThunk("editCheckListName", async (data) => {
    const response = await Api.put(`checklist/${data.id}`, data.checkListNameEditInfo);
    return response.data
})

export const deleteCheckList = createAsyncThunk("deleteCheckList", async (id) => {
    const response = await Api.delete(`checklist/${id}`);
    return id
})


// comments createAsyncThunk

export const addComments = createAsyncThunk("addComments", async (data) => {
    const response = await Api.post(`comment`, data);
    return response.data
})


// checklists item  createAsyncThunk

export const addChecklistItems = createAsyncThunk("addChecklistItems", async (data) => {
    const response = await Api.post(`checklist-item`, data);
    return response.data
})
export const editCheckListItemName = createAsyncThunk("editCheckListItemName", async (data) => {
    const response = await Api.put(`checklist-item/${data.id}`, data.checkListItemEdit);
    return response.data
})
export const editCheckListItemCheckStatus = createAsyncThunk("editCheckListItemCheckStatus", async (data) => {
    const response = await Api.put(`checklist-item/${data.id}`, data.checkBoxEdit);
    return response.data
})
 




const CardSlice = createSlice({
    name: "CardSlice",
    initialState,
    extraReducers: {

        [getAllCard.pending]: (state, action) => {
            state.loading = true;
            state.error = "";
        },
        [getAllCard.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        [getAllCard.rejected]: (state, action) => {
            state.loading = false;
            state.error = "Error fetching data";
        },
        [addCard.pending]: (state, action) => {
            state.loading = true;
            state.error = "";
        },
        [addCard.fulfilled]: (state, action) => {
            state.loading = false;
            state.data.push(action.payload)
        },
        [addCard.rejected]: (state, action) => {
            state.loading = false;
            state.error = "Error fetching data";
        },
        [deleteCard.pending]: (state, action) => {
            state.loading = true;
            state.error = "";
        },
        [deleteCard.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = state.data.filter((item) => item.id !== action.payload)
        },
        [deleteCard.rejected]: (state, action) => {
            state.loading = false;
            state.error = "Error fetching data";
        },
        [addLabel.pending]: (state, action) => {
            state.loading = true;
            state.error = "";
        },
        [addLabel.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = { ...state.data, labels: action.payload }
        },
        [addLabel.rejected]: (state, action) => {
            state.loading = false;
            state.error = "Error fetching data";
        },
        [addCheckLists.pending]: (state, action) => {
            state.loading = true;
            state.error = "";
        },
        [addCheckLists.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = { ...state.data, checklists: action.payload }

        },
        [addCheckLists.rejected]: (state, action) => {
            state.loading = false;
            state.error = "Error fetching data";
        },
        [deleteCheckList.pending]: (state, action) => {
            state.loading = true;
            state.error = "";
        },
        [deleteCheckList.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = state.data.checklists.filter((item) => item.id !== action.payload)
        },
        [deleteCheckList.rejected]: (state, action) => {
            state.loading = false;
            state.error = "Error fetching data";
        },
        [addComments.pending]: (state, action) => {
            state.loading = true;
            state.error = "";
        },
        [addComments.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = { ...state.data, comments: action.payload }

        },
        [addComments.rejected]: (state, action) => {
            state.loading = false;
            state.error = "Error fetching data";
        },
        [addChecklistItems.pending]: (state, action) => {
            state.loading = true;
            state.error = "";
        },
        [addChecklistItems.fulfilled]: (state, action) => {
            state.loading = false;
 
            state.data = { ...state.data, checklists: {items: action.payload} }

        },
        [addChecklistItems.rejected]: (state, action) => {
            state.loading = false;
            state.error = "Error fetching data";
        },
 
        [editCheckListName.pending]: (state, action) => {
            state.loading = true;
            state.error = "";
        },
        [editCheckListName.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = state.data.map((item) => { 
                if(item.checklists.id === action.payload.id){
                    return action.payload
                }
                return item
            })
            

        },
        [editCheckListName.rejected]: (state, action) => {
            state.loading = false;
            state.error = "Error fetching data";
        },

        [editCheckListItemName.pending]: (state, action) => {
            state.loading = true;
            state.error = "";
        },
        [editCheckListItemName.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = state.data.map((item) => { 
                if(item.checklists.items.id === action.payload.id){
                    return action.payload
                }
                return item
            })
            

        },
        [editCheckListItemName.rejected]: (state, action) => {
            state.loading = false;
            state.error = "Error fetching data";
        },
        [editCheckListItemCheckStatus.pending]: (state, action) => {
            state.loading = true;
            state.error = "";
        },
        [editCheckListItemCheckStatus.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = state.data.map((item) => { 
                if(item.checklists.items.id === action.payload.id){
                    return action.payload
                }
                return item
            })
            

        },
        [editCheckListItemCheckStatus.rejected]: (state, action) => {
            state.loading = false;
            state.error = "Error fetching data";
        },

    }


    
})
export default CardSlice.reducer;





