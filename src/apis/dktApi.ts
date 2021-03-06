import { GetAgent } from "@/utils/getAgent";
import { idlFactory as dktIDL } from "@/did/dkt.did";
import { Principal } from "@dfinity/principal";
import { updateBuckets } from "@/redux/features/buckets";
import Storage from "@/utils/storage";

class Dkt {
  async getActor() {
    return await GetAgent.createActor(dktIDL, "5hssk-kiaaa-aaaag-aaeva-cai");
  }
  async getIdentity() {
    return await GetAgent.getIdentity();
  }
  async getNoIdentityActor() {
    //   return await GetAgent.noIdentityActor(bucketIDL, this.canisterId);
  }
  async addHub(canisterId: string, name: string) {
    return new Promise(async (resolve, reject) => {
      try {
        const res: any = await (
          await this.getActor()
        ).addHub(name, Principal.fromText(canisterId));
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  }
  async getBucket() {
    console.log(await this.getActor());
    const res: any = await (await this.getActor()).getHub();
    console.log(res);
    updateBuckets(res);
    const tmp = [];
    res.map((v) => {
      //@ts-ignore
      tmp.push([v[0], String(v[1])]);
    });
    console.log(tmp);
    const principal = String((await this.getIdentity()).getPrincipal());
    Storage.setBucketsStorage(tmp, principal);
    return res;
  }
  async createBucket(name: string, icp: number) {
    return new Promise(async (resolve, reject) => {
      try {
        console.log("aa", icp * 1e8);
        const res: any = await (
          await this.getActor()
        ).createHub(name, icp * 1e8);
        console.log("create bucket", res);
        console.log(res);
        if (res.err) reject(Object.keys(res.err)[0] + `${res.err.toString()}`);
        resolve(res);
      } catch (e) {
        console.log(e);
        reject(e);
      }
    });
  }
  async tranformIcp(to: Principal, amount: number) {
    return new Promise(async (resovle, reject) => {
      try {
        const res = await (
          await this.getActor()
        ).transformIcp({
          to_canister_id: to,
          icp_amount: amount * 1e8,
        });
        console.log("tranform", res);
        resovle(res);
      } catch (e) {
        reject(e);
      }
    });
  }
}

export const DktApi = new Dkt();
