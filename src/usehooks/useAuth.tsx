import React, {createContext, useContext, useEffect, useState} from "react";
import {authClient} from "@/utils/getAgent/identity";
import {Identity} from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import {getToAccountIdentifier, principalToAccountIdentifier} from "@/utils/common";
import {CommonStore} from "@/store/common.store";
// @ts-ignore
import Storage, {walletKeyType} from "../utils/storage";

export type VariantType = "default" | "error" | "success" | "warning" | "info";
export type WalletType = "II" | "plugWallet";
const II = "II";
const plug = "plugWallet";

interface Props {
    identity: any;
    isAuthClientReady: boolean;
    principal: string;
    logOut: Function;
    IILogIn: Function;
    isAuth: boolean;
    subAccountId: string;
}

export const useProvideAuth = (authClient): Props => {
    const [_identity, _setIdentity] = useState<Identity | undefined>();
    const [isAuthClientReady, setAuthClientReady] = useState(false);
    const [principal, setPrincipal] = useState("");
    const [authenticated, setAuthenticated] = useState(false);
    const [subAccountId, setSubAccountId] = useState("");

    useEffect(() => {
       if (!isAuthClientReady)
        authClient.create().then(() => {
          setAuthClientReady(true);
            Promise.all([
                authClient.getIdentity(),
                authClient.isAuthenticated(),
            ]).then(([identity, isAuthenticated]) => {
               if(isAuthenticated){
                const principal = identity.getPrincipal();
                const subAccountId = principalToAccountIdentifier(principal,0);
                setPrincipal(principal);
                setSubAccountId(subAccountId);
                _setIdentity(identity);
                    setAuthenticated(true);
                setAuthClientReady(true);
               }
            });
          });
    }, []);
    //update principal
    useEffect(() => {
        authClient.setOwnerPrincipal(principal);
    }, [principal]);

    const IILogIn = async (): Promise<{ message?: string; status?: number } | undefined> => {
        if (!authClient) return {message: "connect error"};
        const identity = await authClient.login();
        const principal = identity.getPrincipal();
        const subAccountId = principalToAccountIdentifier(principal,0);
        setPrincipal(principal);
        setSubAccountId(subAccountId);
        if (identity) {
            _setIdentity(_identity);
            setAuthenticated(true);
            Storage.setWalletTypeStorage("II");
        } else {
            return {message: "connect error"};
        }
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
        IILogIn,
        logOut,
        isAuth: authenticated,
        subAccountId,
    };
    //save common data
    CommonStore.actionSave({...Context});
    return Context;
};
const authContext = createContext(null!);

export function ProvideAuth({children}) {
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
