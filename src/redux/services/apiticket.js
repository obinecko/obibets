// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const BettingApi = createApi({
  reducerPath: "BettingApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://daily-betting-tips.p.rapidapi.com/daily-betting-tip-api/items",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", process.env.REACT_APP_RAPID_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCoupons: builder.query({
      query: () => "/daily_betting_coupons?sort=-id",
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetCouponsQuery } = BettingApi;
