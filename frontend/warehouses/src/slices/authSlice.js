import { createSlice } from "@reduxjs/toolkit";
import { clientsApi } from "../apis/client-api/clientApi";

const slice = createSlice({
  name: "auth",
  initialState: { user: null, token: null },
  reducers: {},
  extraReducers: (builder) => {},
});

export default slice.reducer;
