import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserInfos } from "../types";

export const userSlice = createSlice({
  name:'userInfo',
  initialState: {
    token: 0,
    data: {email:"",firstName:"",lastName:"",createdAt:"",updatedAt:"",id:""}
  },
  reducers: {
    userToken: (state, action:PayloadAction<number>) => {
      state.token = action.payload
    },
    userInfos: (state, action:PayloadAction<UserInfos>) => {
      state.data = action.payload
    }
  }
})

export const { userToken, userInfos} = userSlice.actions

export default userSlice.reducer