import { createSlice } from "@reduxjs/toolkit";

const initialState: Array<any> = [];
export const bucketsSlice = createSlice({
    name: "buckets",
    initialState,
    reducers: {
        update: (state, action: { type: string; payload: Array<any> }) => {
            return action.payload;
        },
    },
});

export const { update } = bucketsSlice.actions;
export const updateBuckets = async (result: any) => {
    const store = await (await import("@/redux/store")).default;
    store.dispatch(update(result));
};

export default bucketsSlice.reducer;
