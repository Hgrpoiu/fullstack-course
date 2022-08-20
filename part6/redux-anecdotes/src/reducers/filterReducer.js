import { createSlice, current } from "@reduxjs/toolkit";

const initialState=""

const filterReducer=createSlice({
    name:"filter",
    initialState,
    reducers:{
        setFilter(state,action){
            return action.payload
        },
        removeFilter(state,action){
            return ""
        }
    }
})

export const {setFilter,removeFilter}=filterReducer.actions
export default filterReducer.reducer