import { createSlice } from "@reduxjs/toolkit";
const authState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
  token: null, // would be used to perform interaction with backend.
};
//isAuthenticated: to check if the user is logged in or not
//

const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUserAction.pending, (state) => {
        //state: authState / initialState
        state.loading = true;
      })
      .addCase(registerUserAction.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = true;
        //payload --> it is the strategy by the RTK to share data from action to reducer
        state.user = action.payload.data.token;
      })
      .addCase(registerUserAction.rejected);
  }, // all rest calls
  reducers: {}, // common business logic related to auth no rest calls
});

export default authSlice.reducer;
