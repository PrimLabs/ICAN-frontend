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
                if (res.err) reject(Object.keys(res.err)[0]);
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
        wasm: Array<any>,
        amount: number,
        principal: Principal
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
                            controllers: [
                                [
                                    principal,
                                    Principal.fromText(this.canisterId),
                                ],
                            ],
                            memory_allocation: [memory_allocation],
                            compute_allocation: [compute_allocation],
                        },
                    ],
                });
                if (res.err) reject(Object.keys(res.err)[0]);
                console.log("deploy", res);
                resolve(res);
            } catch (e) {
                console.log(e);
                reject(e);
            }
        });
    }
    async delCanister(canisterId: Principal, to: string): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await (
                    await this.getActor()
                ).delCanister(canisterId, [Principal.fromText(to)]);

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
}

export const BucketApi = (canisterId: string) => new Bucket(canisterId);
