import { createSlice } from "@reduxjs/toolkit";
import { createEducationAction, createExperienceAction, createProfileAction, getCurrentProfileAction } from "../action/profile.action";
 
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
      .addCase(createProfileAction.pending,(state) => {
        state.loading = true;
      })
      .addCase(createProfileAction.fulfilled,(state,action) => {
        state.loading = false;
        state.profile = action.payload.data
      })
      .addCase(createProfileAction.rejected,(state,action) => {
        state.loading = false;
        state.profile = action.payload
      })
      .addCase(getCurrentProfileAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCurrentProfileAction.fulfilled, (state, action) => {
        state.loading = false;
        //state.token = action.payload.data.token;
        state.profile = action.payload;
        //localStorage.setItem("token", action.payload.data.token);
      })
      .addCase(getCurrentProfileAction.rejected,(state,action) => {
        console.log(action);
        state.loading = false;
        state.error = action.payload;
        state.profile = null;
      })
      .addCase(createEducationAction.pending,(state) => {
        state.loading = true;
      })
      .addCase(createEducationAction.fulfilled,(state,action) => {
        state.loading = false;
        state.profile = action.payload.data
      })
      .addCase(createEducationAction.rejected, (state,action) => {
        state.loading = false;
        state.profile = action.payload
      })

      .addCase(createExperienceAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(createExperienceAction.fulfilled, (state,action) => {
        state.loading = false;
        state.profile = action.payload.data
      })
      .addCase(createExperienceAction.rejected, (state,action) => {
        state.loading = false;
        state.profile = action.payload
      })
 
 
  },
});
 
export default profileSlice.reducer;