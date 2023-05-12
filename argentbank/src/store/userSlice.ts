import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name:'userInfo',
  initialState: {
    token: undefined,
    data: {}
  },
  reducers: {
    userToken: (state, action) => {
      state.token = action.payload
    },
    userInfos: (state, action) => {
      state.data = action.payload
    }
  }
})

export const { userToken, userInfos} = userSlice.actions

export default userSlice.reducer