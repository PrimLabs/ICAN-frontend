import { GetAgent } from "@/utils/getAgent";
import { Principal } from "@dfinity/principal";
import { idlFactory as kitIDL } from "@/did/kit.did";

export type Mode = { reinstall: null } | { upgrade: null } | { install: null };
class Manage {
  async getActor() {
    return await GetAgent.manageActor();
  }
  async canisterStatus(canisterId: Principal) {
    const res = await (
      await this.getActor()
    ).canister_status({ canister_id: canisterId });
    return res;
  }
  async createCanister(
    freezing_threshold: number,
    controllers: [Principal],
    memory_allocation: number,
    compute_allocation: number
  ): Promise<any> {
    const res = await (
      await this.getActor()
    ).create_canister({
      settings: [
        {
          freezing_threshold: [freezing_threshold],
          controllers: [controllers],
          memory_allocation: [memory_allocation],
          compute_allocation: [compute_allocation],
        },
      ],
    });
    console.log(res);
  }
  async intall_code(wasm: Array<any>, mode: Mode, canisterId: Principal) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await (
          await this.getActor()
        ).install_code({
          arg: [],
          wasm_module: wasm,
          mode: mode,
          canister_id: canisterId,
        });
        console.log("install", res);
        resolve(res);
      } catch (e) {
        console.log(e);
        reject(e);
      }
    });
  }
  async addCycles(index: number, cycle: number): Promise<any> {
    return await (await this.getActor()).addCycles(index, cycle * 1e12);
  }
  async startCanister(canisterId: Principal): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await (
          await this.getActor()
        ).start_canister({ canister_id: canisterId });
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
        const res = await (
          await this.getActor()
        ).stop_canister({ canister_id: canisterId });
        console.log("stop", res);
        resolve(res);
      } catch (e) {
        console.log(e);
        reject(e);
      }
    });
  }
  async deleteCanister(canisterId: Principal): Promise<any> {
    const res = await (await this.getActor()).stop_and_delete(canisterId);
    console.log(res);
    return res;
  }
}

export const ManageApi = new Manage();
