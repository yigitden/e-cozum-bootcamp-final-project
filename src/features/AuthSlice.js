import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "../service/Api";

const initialState = {
  isLogged: getCookie("token") ? true : false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLogged: (state, action) => ({
      ...state,
      isLogged: action.payload,
    }),
  },
});
export const { setIsLogged } = AuthSlice.actions;
export default AuthSlice.reducer;
