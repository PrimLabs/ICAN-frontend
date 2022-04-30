import { configureStore } from "@reduxjs/toolkit";
import buckets from "./features/buckets";
import dfinityIdentityReducer from "./features/dfinityIdentity";
const store = configureStore({
    reducer: {
        buckets,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
