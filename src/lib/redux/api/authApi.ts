import { BASE_URL } from "@/constants/constant";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authSlice = createApi({
  reducerPath: "authSlice", // Name of the reducer
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/auth`,
    credentials: "include",
  }),
  endpoints: (builder) => ({

    Login: builder.mutation({
      query(body) {
        return {
          url: "/login",
          method: "POST",
          body,
        };
      },
    }),

    signup: builder.mutation({
      query(body) {
        return {
          url: "/signup",
          method: "POST",
          body,
        };
      },
    }),

    logout: builder.query({
      query: () => "/logout",
    }),
  }),
});

// Export hooks for usage in functional components
export const { useLoginMutation, useSignupMutation , useLazyLogoutQuery} = authSlice;
