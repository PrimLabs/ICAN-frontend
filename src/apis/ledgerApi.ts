import { GetAgent } from "@/utils/getAgent";
import idlFactory from "@/did/ledger.did";
import {
    getUint8ArrayFromHex,
    principalToAccountIdentifier,
} from "@/utils/common";
import { Principal } from "@dfinity/principal";
import { create } from "lodash";
class Ledger {
    async getActor() {
        return await GetAgent.createActor(
            idlFactory,
            "ryjl3-tyaaa-aaaaa-aaaba-cai"
        );
    }

    async getNoIdentityActor() {
        return await GetAgent.noIdentityActor(
            idlFactory,
            "ryjl3-tyaaa-aaaaa-aaaba-cai"
        );
    }
    async getImportIdentityActor() {
        //   return await GetAgent.getImportIdentityActor(
        //       idlFactory,
        //       "tf3yy-xyaaa-aaaal-qauna-cai"
        //   );
    }
    async transfer(to: string, icp: number): Promise<any> {
        const toAccountIdentifier = Array.from(getUint8ArrayFromHex(to));
        const fee = { e8s: 10000 };
        const memo = 0;
        const amount = { e8s: icp * 1e8 };
        const from_subaccount = [];
        const created_at_time = [{ timestamp_nanos: 0 }];
        const res = await (
            await this.getActor()
        ).transfer({
            to: toAccountIdentifier,
            fee: fee,
            memo: 0,
            from_subaccount: [],
            created_at_time: [],
            amount: amount,
        });
        console.log("trans", res);
        return res;
    }
    async account_balance(str: string): Promise<any> {
        const tmp = getUint8ArrayFromHex(str);
        const accountIdentifier = Array.from(tmp);
        const res = await (
            await this.getNoIdentityActor()
        ).account_balance({
            account: accountIdentifier,
        });
        console.log("account_balance", res);
        return res;
    }
}

export const LedgerApi = new Ledger();
