import { createSlice } from "@reduxjs/toolkit";
import getCookies from "../service/getCookies";



const initialState = {
  isLogged: getCookies('token') ? true : false,
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
