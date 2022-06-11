import { AuthClient } from "@dfinity/auth-client";
import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory as walletIdl } from "./wallet.d";
const authClient = await AuthClient.create();
const identity = authClient.getIdentity();
const agent = new HttpAgent({ identity });
const wallet = Actor.createActor(walletIdl, {
  agent,
  canisterId: "xxxx",
});
const fetch = async () => {
  const res = await wallet.getProposes();
  const res1 = await wallet.getCanisters();
  //显示提案和canisters
};
fetch();
