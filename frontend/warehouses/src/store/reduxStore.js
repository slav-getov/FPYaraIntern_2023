import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { clientsApi } from "../apis/client-api/clientApi";
import authReducer from "../slices/authSlice";
export const store = configureStore({
  reducer: {
    [clientsApi.reducerPath]: clientsApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(clientsApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useFetchClientsQuery } from "../apis/client-api/clientApi";
