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
      fetchSpecificClient: builder.query({
        query: (client) => {
          return {
            url: "clients/:clientid",
            params: {
              clientId: client.id,
            },
            method: "GET",
          };
        },
      }),
      registerClient: builder.mutation({
        query: (client) => {
          return {
            url: "authentication/sign-up",
            method: "POST",
            body: {
              first_name: client.first_name,
              last_name: client.last_name,
              email: client.email,
              username: client.username,
              password: client.password,
              phone: client.phone,
            },
          };
        },
      }),
      signInClient: builder.mutation({
        query: (client) => {
          return {
            url: "authentication/sign-in",
            method: "POST",
            body: {
              email: client.email,
              password: client.password,
            },
          };
        },
      }),
    };
  },
});

export const {
  useFetchClientsQuery,
  useFetchSpecificClientQuery,
  useRegisterClientMutation,
  useSignInClientMutation,
} = clientsApi;
export { clientsApi };
