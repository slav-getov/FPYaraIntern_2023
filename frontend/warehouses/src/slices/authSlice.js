import { createSlice } from "@reduxjs/toolkit";
import { clientsApi } from "../apis/client-api/clientApi";
import { current } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "auth",
  initialState: { user: null, token: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      clientsApi.endpoints.signInClient.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.accessToken;
      }
    );
    //   .addMatcher(
    //     clientsApi.endpoints.registerClient.matchFulfilled,
    //     (state, { payload }) => {
    //       //look at dev tools
    //       console.log(state, payload);
    //     }
    //   )
  },
});

export default slice.reducer;
