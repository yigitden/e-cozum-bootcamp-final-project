import { configureStore } from "@reduxjs/toolkit";
import boardSlice from "../features/boardSlice";
import { useDispatch, useSelector } from "react-redux";  
import BoardIdSlice from "../features/BoardIdSlice"; 
import ListSlice from "../features/ListSlice";
import CardSlice from "../features/CardSlice";


const store = configureStore ({
    reducer:{
        board : boardSlice,
        BoardIdSlice : BoardIdSlice, 
        list : ListSlice,
        card : CardSlice
    }
})

export default store
export const useAppSelector = useSelector
export const useAppDispatch = () => useDispatch()