import { WalletType } from "../usehooks/useAuth";
export type { WalletType } from "../usehooks/useAuth";
export type walletKeyType = "WALLET_TYPE_KEY";
export default class Storage {
    static walletType: WalletType | unknown;
    static walletTypeKey: walletKeyType = "WALLET_TYPE_KEY";

    static setWalletTypeStorage(value: any) {
        return localStorage.setItem(this.walletTypeKey, value);
    }

    static getWalletTypeStorage() {
        return localStorage.getItem(this.walletTypeKey);
    }
    static removeStorage() {
        return localStorage.removeItem(this.walletTypeKey);
    }
    static setBucketsStorage(value: any, principal: string) {
        return localStorage.setItem(
            "BUCKETS_KEY" + principal,
            JSON.stringify(value)
        );
    }
    static getBucketsStorage(principal: string) {
        let tmp: any = "[]";
        if (localStorage.getItem("BUCKETS_KEY" + principal) != null)
            tmp = localStorage.getItem("BUCKETS_KEY" + principal);
        return JSON.parse(tmp);
    }
}
