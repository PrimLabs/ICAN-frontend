import { GetAgent } from "@/utils/getAgent";
import { Principal } from "@dfinity/principal";
import { idlFactory as kitIDL } from "@/did/kit.did";
import { Deploy_Result } from "@/did/model/kit";
class Kit {
  async getActor() {
    return await GetAgent.kitActor();
  }
  async getCanisterInfoExts(): Promise<any> {
    return await (await this.getActor()).getCanisterInfoExts();
  }
  async addOwner(owner: Principal): Promise<any> {
    return await (await this.getActor()).addOwner(owner);
  }
  async createCanister(
    freezing_threshold: number,
    memory_allocation: number,
    compute_allocation: number,
    name: string,
    description: string
  ): Promise<any> {
    return await (
      await this.getActor()
    ).createCanister(
      freezing_threshold,
      memory_allocation,
      compute_allocation,
      name,
      description,
      ""
    );
  }
  async addCycles(index: number, cycle: number): Promise<any> {
    return await (await this.getActor()).addCycles(index, cycle * 1e12);
  }
  async startCanister(): Promise<any> {
    const res = await (await this.getActor()).startCanister();
    console.log(res);
    return res;
  }
  async stopCanister(): Promise<any> {
    const res = await (await this.getActor()).stopCanister();
    console.log(res);
    return res;
  }
  async deleteCanister(): Promise<any> {
    const res = await (await this.getActor()).stop_and_delete();
    console.log(res);
    return res;
  }
  async getCanisterStatus(canister: Principal): Promise<any> {
    const res = await (await this.getActor()).canister_status(canister);
    return res;
  }
  async deploy(
    name: string,
    desc: string,
    tag: string,
    freezing: number | bigint,
    memory: number | bigint,
    compute: number | bigint,
    init_cycle: number | bigint,
    wasm_code: Array<number>
  ): Promise<any> {
    const res = await (
      await this.getActor()
    ).deploy(
      name,
      desc,
      tag,
      freezing,
      memory,
      compute,
      Number(init_cycle) * 1e12,
      wasm_code
    );
    console.log(res);
    return res;
  }
}

export const KitApi = new Kit();
