import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const clientsApi = createApi({
  reducerPath: "clients",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
  }),
  endpoints(builder) {
    return {
      fetchClients: builder.query({
        query: () => {
          //the anonymous function had a client arg previously
          return {
            url: "/clients/all",
            // params: {
            //   clientId: client.id,
            // },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchClientsQuery } = clientsApi;
export { clientsApi };
