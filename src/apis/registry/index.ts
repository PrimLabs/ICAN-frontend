import { GetAgent } from "@/utils/getAgent";
import { HttpAgent } from "@dfinity/agent";
import { IDL } from "@dfinity/candid";
import { authClient } from "@/utils/getAgent/identity";
// import { protobuf } from "protobufjs";
// import {} from "@/proto/proto";

// const protoRoot = require("@/proto/proto");
export const get_value = async (cid: string) => {
  const agent = new HttpAgent({ identity: authClient?.getIdentity() });
  // console.log(protoRoot.registry);

  // console.log(registry);
  // const RegistryGetValueRequest =
  // protoRoot.ic_registry_transport.RegistryGetValueRequest;
  // const RegistryGetValueResponse = protoRoot.lookup(
  //   "ic_registry_transport.RegistryGetValueResponse"
  // );
  // const args = RegistryGetValueRequest.create({
  //   key: Buffer.from("subnet_list"),
  // });
  // console.log(args);

  //   const res = await agent.query(cid, {
  //   methodName: "",
  //   arg: undefined
  // });
};
