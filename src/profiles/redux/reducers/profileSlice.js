import { createSlice } from "@reduxjs/toolkit";
import { getCurrentProfileAction } from "../action/profile.action";
 
const profileState = {
  profile: null,
  profiles: [],
  loading: true,
  error: {},
};
 
const profileSlice = createSlice({
  name: "profile",
  initialState:profileState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentProfileAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCurrentProfileAction.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.data.token;
        state.profile = action.payload.data.profile;
        localStorage.setItem("token", action.payload.data.token);
      })
      .addCase(getCurrentProfileAction.rejected,(state,action) => {
        console.log(action);
        state.loading = false;
        state.error = action.payload;
        state.profile = null;
      })
 
  },
});
 
export default profileSlice.reducer;