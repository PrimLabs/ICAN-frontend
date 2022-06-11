import { GetAgent } from "@/utils/getAgent";
import { idlFactory as bucketIDL } from "@/did/bucket.did";
import { Principal } from "@dfinity/principal";

class Bucket {
  private canisterId: string = "";

  constructor(canisterId: string) {
    this.canisterId = canisterId;
  }

  async getActor() {
    return await GetAgent.createActor(bucketIDL, this.canisterId);
  }

  async getNoIdentityActor() {
    return await GetAgent.noIdentityActor(bucketIDL, this.canisterId);
  }

  async getCanisters(): Promise<any> {
    const res = await (await this.getActor()).getCanisters();
    console.log("canisters", res);
    return res;
  }

  async transformIcp(amount: number): Promise<any> {
    const res = await (
      await this.getActor()
    ).transformIcp({ icp_amount: amount });
    console.log("transform Icp", res);
    return res;
  }

  async depositCycles(canisterId: Principal, amount: number): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await (
          await this.getActor()
        ).depositCycles(canisterId, amount * 1e12);
        console.log("deposit cycles", res);
        if (Object.keys(res)[0] === "err") reject(Object.keys(res.err)[0]);
        resolve(res);
      } catch (e) {
        reject(e);
      }
    });
  }

  async deployCanister(
    freezing_threshold: number,
    memory_allocation: number,
    compute_allocation: number,
    name: string,
    description: string,
    amount: number,
    controllers: Array<Principal>,
    wasm?: Array<any>
  ): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await (
          await this.getActor()
        ).deployCanister({
          preserve_wasm: false,
          name: name,
          wasm: wasm ? [wasm] : [],
          description: description,
          cycle_amount: amount * 1e12,
          settings: [
            {
              freezing_threshold: [freezing_threshold],
              controllers: [[...controllers]],
              memory_allocation: [memory_allocation],
              compute_allocation: [compute_allocation],
            },
          ],
          deploy_arguments: [],
        });
        if (Object.keys(res)[0] === "err") reject(Object.keys(res.err)[0]);
        console.log("deploy", res);
        resolve(res);
      } catch (e) {
        console.log(e);
        reject(e);
      }
    });
  }

  async delCanister(canisterId: Principal): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await (await this.getActor()).delCanister(canisterId);

        resolve(res);
      } catch (e) {
        console.log(e);
        reject(e);
      }
    });
  }

  async getStatus(): Promise<any> {
    const res = await (await this.getActor()).getStatus();
    console.log("status", res);
    return res;
  }
  async getOwners(): Promise<any> {
    const res = await (await this.getActor()).getOwners();
    return res;
  }
  async getVersion(): Promise<any> {
    const res = await (await this.getActor()).getVersion();
    return res;
  }

  async startCanister(canisterId: Principal): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await (await this.getActor()).startCanister(canisterId);
        console.log(res);
        resolve(res);
      } catch (e) {
        console.log(e);
        reject(e);
      }
    });
  }

  async stopCanister(canisterId: Principal): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await (await this.getActor()).stopCanister(canisterId);
        console.log("stop", res);
        resolve(res);
      } catch (e) {
        console.log(e);
        reject(e);
      }
    });
  }
  async canisterStatus(canisterId: Principal): Promise<any> {
    const res = await (await this.getActor()).canisterStatus(canisterId);
    return res;
  }
  async updateCanisterSettings(
    canisterId: Principal,
    freezing_threshold: number,
    memory_allocation: number,
    compute_allocation: number,
    controllers: Array<Principal>
  ): Promise<any> {
    console.log(controllers);
    return new Promise(async (resolve, reject) => {
      try {
        const res = await (
          await this.getActor()
        ).updateCanisterSettings({
          canister_id: canisterId,
          settings: {
            freezing_threshold: [freezing_threshold],
            controllers: [[...controllers]],
            memory_allocation: [memory_allocation],
            compute_allocation: [compute_allocation],
          },
        });
        if (Object.keys(res)[0] === "err") reject(Object.keys(res.err)[0]);
        console.log(res);
        resolve(res);
      } catch (e) {
        console.log(e);
        reject(e);
      }
    });
  }
  async putCanister(
    name: string,
    description: string,
    canisterId: Principal
  ): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await (
          await this.getActor()
        ).putCanister({
          name: name,
          description: description,
          canister_id: canisterId,
          wasm: [],
        });
        if (Object.keys(res)[0] === "err") reject(Object.keys(res.err)[0]);
        console.log("put", res);
        resolve(res);
      } catch (e) {
        console.log(e);
        reject(e);
      }
    });
  }
}

export const BucketApi = (canisterId: string) => new Bucket(canisterId);
