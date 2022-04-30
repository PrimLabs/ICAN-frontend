import React, {
    useContext,
    createContext,
    useEffect,
    useState,
    useCallback,
} from "react";
import { authClient } from "@/utils/getAgent/identity";
import { Identity } from "@dfinity/agent";
import { principalToAccountIdentifier } from "@/utils/common";
import { CommonStore } from "@/store/common.store";
// @ts-ignore
import Storage, { walletKeyType } from "../utils/storage";
export interface AuthContext {
    isAuthenticated: boolean;
    isAuthReady: boolean;
    hasCanCanAccount: boolean;
}
export type VariantType = "default" | "error" | "success" | "warning" | "info";
export type WalletType = "II" | "plugWallet";
const II = "II";
const plug = "plugWallet";
interface Props {
    identity: any;
    isAuthClientReady: boolean;
    principal: string;
    logOut: Function;
    isAuth: boolean;
    subAccountId: string;
    walletType: string;
    userInfo: {
        principal: string;
        subAccountId: string;
    };
}
export const useProvideAuth = (authClient): Props => {
    const [_identity, _setIdentity] = useState<Identity | undefined>();
    const [isAuthClientReady, setAuthClientReady] = useState(false);
    const [principal, setPrincipal] = useState("");
    const [authenticated, setAuthenticated] = useState(false);
    const [subAccountId, setSubAccountId] = useState("");
    const [walletType, setWalletType] = useState<WalletType>("II");
    if (!isAuthClientReady)
        authClient.create().then(() => setAuthClientReady(true));
    useEffect(() => {
        const type = Storage.getWalletTypeStorage();
        //set wallet type
        if (type === "II") {
            checkII();
        } else if (type === plug) {
        }
    }, []);
    //update principal
    useEffect(() => {
        authClient.setOwnerPrincipal(principal);
    }, [principal]);
    const checkII = async () => {
        const connected = await authClient.checkLogin();
        if (connected) {
            const identity = await authClient.getIdentity();
            _setIdentity(identity);
            const principal = await identity.getPrincipal();
            setPrincipal(principal);
            const subAccountId = principalToAccountIdentifier(principal, 0);
            console.log(subAccountId);
            setSubAccountId(subAccountId);
            setAuthenticated(true);
            setWalletType("II");
            Storage.setWalletTypeStorage("II");
        }
    };

    const IILogIn = async (): Promise<
        { message?: string; status?: number } | undefined
    > => {
        const result = await authClient.login();
        console.log(result);
        if (result) {
            const principal = result.getPrincipal();
            setPrincipal(principal);
            const subAccountId = principalToAccountIdentifier(principal, 0);
            setSubAccountId(subAccountId);
            setAuthenticated(true);
            setWalletType("II");
            Storage.setWalletTypeStorage("II");
            return { status: 200 };
        }
        return { message: "login error" };
    };

    const logOut = async (): Promise<void> => {
        // if (!authClient.ready) return;
        await authClient.logout();
        setAuthenticated(false);
    };

    const Context = {
        identity: _identity,
        isAuthClientReady,
        principal,
        logOut,
        isAuth: authenticated,
        IILogIn,
        subAccountId,
        walletType,
        userInfo: {
            principal,
            subAccountId,
        },
    };
    //save common data
    CommonStore.actionSave({ ...Context });
    return Context;
};
const authContext = createContext(null!);
export function ProvideAuth({ children }) {
    const auth = useProvideAuth(authClient);
    // @ts-ignore
    return (
        //@ts-ignore
        <authContext.Provider value={Object.assign(auth)}>
            {children}
        </authContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(authContext);
};
