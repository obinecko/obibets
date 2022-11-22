import { configureStore } from "@reduxjs/toolkit";
import { BettingApi } from "./services/apiticket";

export default configureStore({
  reducer: {
    [BettingApi.reducerPath]: BettingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(BettingApi.middleware),
});
