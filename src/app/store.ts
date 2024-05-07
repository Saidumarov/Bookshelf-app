import { configureStore } from "@reduxjs/toolkit";
import { signUpApi } from "./api";
import { booksApi } from "./bookSlice";

export const store = configureStore({
  reducer: {
    [signUpApi.reducerPath]: signUpApi.reducer,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(signUpApi.middleware, booksApi.middleware),
});
