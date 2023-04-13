import { createSlice } from "@reduxjs/toolkit";
import { clientsApi } from "../apis/client-api/clientApi";

import { current } from "@reduxjs/toolkit";
//use this only for debugging!!!
const initialState = { user: null, token: null };
const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.payload;
    },
    nullCurrentUser: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        clientsApi.endpoints.signInClient.matchFulfilled,
        (state, { payload }) => {
          console.log(payload);
          state.token = payload.accessToken;
        }
      )
      .addMatcher(
        clientsApi.endpoints.registerClient.matchFulfilled,
        (state, { payload }) => {
          //look at dev tools
          console.log("this is in the second matcher");
          console.log(current(state), payload);
        }
      );
  },
});
export const { setCurrentUser, nullCurrentUser } = slice.actions;
export default slice.reducer;
