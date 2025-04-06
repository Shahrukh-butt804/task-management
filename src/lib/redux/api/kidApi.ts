import { BASE_URL } from "@/constants/constant";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const kidSlice = createApi({
  reducerPath: "kidSlice", // Name of the reducer
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/kid`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    addKid: builder.mutation({
      query(body) {
        return {
          url: "/create",
          method: "POST",
          body,
        };
      },
    }),

    getMyKids: builder.query({
      query: () => "/get-my-kids",
    }),

    kidLogin: builder.mutation({
      query(body) {
        return {
          url: "/kidLogin",
          method: "POST",
          body,
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components
export const { useAddKidMutation, useGetMyKidsQuery, useKidLoginMutation } = kidSlice;
