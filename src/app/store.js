import { configureStore } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";
// import { TypedUseSelectorHook, useSelector } from "react-redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import { authApi } from "./services";
import { setupListeners } from "@reduxjs/toolkit/query";
import { loadState } from "./localStorage";
import rootReducer from "./rootReducer";

const persistedState = loadState();

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  preloadedState: persistedState,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authApi.middleware),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
export default store;
