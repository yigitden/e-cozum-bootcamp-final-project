import { configureStore } from "@reduxjs/toolkit";
import boardSlice from "../features/boardSlice";
import { useDispatch, useSelector } from "react-redux";   
import ListSlice from "../features/ListSlice";
import CardSlice from "../features/CardSlice";
import UserSlice from "../features/UserSlice";
import BoardSliceFromId from "../features/BoardSliceFromId";



const store = configureStore ({
    reducer:{
        board : boardSlice, 
        list : ListSlice,
        card : CardSlice,
        user : UserSlice,
        BoardSliceFromId : BoardSliceFromId
    }
})

export default store
export const useAppSelector = useSelector
export const useAppDispatch = () => useDispatch()