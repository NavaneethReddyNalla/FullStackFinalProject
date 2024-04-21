import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userLoginThunk = createAsyncThunk(
  "userLogin",
  async (user, thunkApi) => {
    const res = await axios.post("/user/login", user);

    if (res.data.status === 6) {
      sessionStorage.setItem("token", res.data.token);
      return res.data;
    } else {
      return thunkApi.rejectWithValue(res.data.message);
    }
  }
);

export const userLoginSlice = createSlice({
  name: "userLogin",
  initialState: {
    isPending: false,
    currentUser: {},
    errorOccured: false,
    errorMessage: "",
    loginStatus: false,
  },
  reducers: {
    resetState: (state) => {
      state.isPending = false;
      state.currentUser = {};
      state.errorOccured = false;
      state.errorMessage = "";
      state.loginStatus = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLoginSlice.pending, (state, action) => {
        state.isPending = true;
      })
      .addCase(userLoginThunk.fulfilled, (state, action) => {
        state.isPending = false;
        state.currentUser = action.payload.user;
        state.errorOccured = false;
        state.errorMessage = "";
        state.loginStatus = true;
      })
      .addCase(userLoginThunk.rejected, (state, action) => {
        state.isPending = false;
        state.currentUser = {};
        state.errorOccured = true;
        state.errorMessage = action.payload.message;
        state.loginStatus = false;
      });
  },
});

export const { resetState } = userLoginSlice.actions;
export default userLoginSlice.reducer;
