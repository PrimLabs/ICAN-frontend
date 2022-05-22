import { Actor, ActorSubclass, HttpAgent, CallConfig } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { authClient } from "./identity";
import { CommonStore } from "@/store/common.store";
import { idlFactory as kitIDL } from "@/did/kit.did";
import { idlFactory as manageIDL } from "@/did/manage.did";
import ServiceInterface from "./model";
const MANAGEMENT_CANISTER_ID = Principal.fromText("aaaaa-aa");
class Agent {
    private isAuthClientReady: boolean = false;
    private resolveCallback: any;
    public owner: Principal | undefined;
    async getAgent() {
        return new HttpAgent({
            identity: await authClient.getIdentity(),
        });
    }
    //no  identity
    private async getNoIdentityAgent() {
        return new HttpAgent();
    }
    awaitIdentity(): Promise<Principal> {
        return new Promise((resolve, reject) => {
            if (this.owner) {
                resolve(this.owner);
                return;
            }
            this.resolveCallback = resolve;
        });
    }
    setOwner(owner: Principal) {
        this.owner = owner;
        this.resolveCallback && this.resolveCallback(owner);
    }
    async getIdentity(): Promise<any> {
        return await authClient.getIdentity();
    }
    async createActor(idlFactory: any, canisterId: string | any) : Promise<any>{
        const agent = await this.getAgent();
            return Actor.createActor(idlFactory, {
                agent,
                canisterId,
            });
    }

    async noIdentityActor(
        IdlFactory,
        canisterId: string
    ): Promise<ActorSubclass> {
        const agent = await this.getNoIdentityAgent();
        return Actor.createActor(IdlFactory, {
            agent,
            canisterId,
        });
    }
    async kitActor(): Promise<ActorSubclass> {
        const agent = await this.getAgent();
        return Actor.createActor(kitIDL, {
            agent,
            canisterId: "x5wg3-6yaaa-aaaak-aaihq-cai",
        });
    }
    private transform(
        _methodName: string,
        args: unknown[],
        // eslint-disable-next-line
        _callConfig: CallConfig
    ) {
        // eslint-disable-next-line
        const first = args[0] as any;
        let effectiveCanisterId = MANAGEMENT_CANISTER_ID;
        if (first && typeof first === "object" && first.canister_id) {
            effectiveCanisterId = Principal.from(first.canister_id as unknown);
        }
        return { effectiveCanisterId };
    }

    async manageActor(): Promise<ActorSubclass> {
        const agent = await this.getAgent();
        return Actor.createActor(manageIDL, {
            agent,
            canisterId: "aaaaa-aa",
            ...{
                callTransform: this.transform,
                queryTransform: this.transform,
            },
        });
    }
}

export const GetAgent = new Agent();
export const AuthClient = authClient;
