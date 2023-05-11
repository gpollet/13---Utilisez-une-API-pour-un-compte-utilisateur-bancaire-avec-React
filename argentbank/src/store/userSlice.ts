import { createSlice } from "@reduxjs/toolkit";
//import axios from "axios";

export const userSlice = createSlice({
  name:'userToken',
  initialState: {
    value: null
  },
  reducers: {
    storeUserToken: (state, action) => {
      state.value = action.payload
    }
  }
})

export const {storeUserToken} = userSlice.actions

export default userSlice.reducer