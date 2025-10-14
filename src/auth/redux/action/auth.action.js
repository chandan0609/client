import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerUserAction = createAsyncThunk(
  //this action with whom it will be associated.
  "auth/registerUserAction",
  async (userData, { rejectWithValue }) => {
    try {
      const data = await registerUser(userData);
      return data;
    } catch (error) {}
  }
);
m;
