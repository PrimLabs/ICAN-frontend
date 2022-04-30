import { DelegationIdentity } from "@dfinity/identity";
import { createSlice } from "@reduxjs/toolkit";

export interface II {
  identity: DelegationIdentity | null;
  principal: string;
  publicKey: string;
  keys: [string, string];
}
const initialState: II | null = {
  identity: null,
  principal: "",
  publicKey: "",
  keys: ["", ""],
};

export const dfinityIdentitySlice = createSlice({
  name: "dfinityIdentity",
  initialState,
  reducers: {
    updateDfinityIdentity: (state, action: { type: string; payload: II }) => {
      return action.payload;
    },
  },
});

export const { updateDfinityIdentity } = dfinityIdentitySlice.actions;

export default dfinityIdentitySlice.reducer;
