/* global BigInt */
import { DelegationIdentity } from "@dfinity/identity";
import { getCrc32 } from "@dfinity/principal/lib/esm/utils/getCrc";
import * as SHA1 from "@dfinity/principal/lib/esm/utils/sha224";
import * as SHA2 from "js-sha256";
import { Principal } from "@dfinity/principal";
import { blobFromUint8Array, blobToHex } from "@dfinity/agent";
import crc32 from "crc-32";
import { GetAgent } from "./getAgent";
import { getSelectedAccount } from "./identity";

/**
 * @param {String} str - hex string
 * @returns
 */
export const getUint8ArrayFromHex = (str) => {
    return new Uint8Array(
        str.match(/.{1,2}/g).map((byte) => parseInt(byte, 16))
    );
};

/**
 * Whether a principal is delegated from a delegation identity.
 * @param {*} principal -- the principal string to be checked
 * @param {*} delegationIdentityAccount
 * @returns -- true for yes, false for no.
 */
export const isDelegateByAccount = (principal, delegationIdentityAccount) => {
    const publicKey = DelegationIdentity.fromDelegation(
        principal,
        delegationIdentityAccount.delegationChain
    )
        .getPublicKey()
        .toDer();
    return publicKey === delegationIdentityAccount.publicKey;
};

/**
 *
 * @param {string} principal
 * @param {*} s
 * @returns
 */
export const principalToAccountIdentifier = (principal, s) => {
    if (!principal) return "";
    const padding = Buffer("\x0Aaccount-id");
    const array = new Uint8Array([
        ...padding,
        ...principal.toUint8Array(),
        ...getSubAccountArray(s),
    ]);
    const hash = SHA1.sha224(array);
    const checksum = to32bits(getCrc32(hash));
    const array2 = new Uint8Array([...checksum, ...hash]);
    return toHexString(array2);
};
export const getToAccountIdentifier = (principal, s) => {
    const padding = Buffer("\x0Aaccount-id");
    const array = new Uint8Array([
        ...padding,
        ...principal.toUint8Array(),
        ...getPrincipalSubAccountArray(s),
    ]);
    const hash = SHA1.sha224(array);
    const checksum = to32bits(getCrc32(hash));
    const array2 = new Uint8Array([...checksum, ...hash]);
    return toHexString(array2);
};
const getPrincipalSubAccountArray = (principal) => {
    const p = Array.from(principal.toUint8Array());
    let tmp = Array(1).fill(p.length).concat(p);
    while (tmp.length < 32) tmp.push(0);
    console.log(tmp);
    return tmp;
};
const getSubAccountArray = (s) => {
    return Array(28)
        .fill(0)
        .concat(to32bits(s ? s : 0));
};
const to32bits = (num) => {
    let b = new ArrayBuffer(4);
    new DataView(b).setUint32(0, num);
    return Array.from(new Uint8Array(b));
};
export const toHexString = (byteArray) => {
    return Array.from(byteArray, function (byte) {
        return ("0" + (byte & 0xff).toString(16)).slice(-2);
    }).join("");
};

export const formatNumber = (value, decimals) => {
    if (value < 10) {
        if (decimals) {
            return value.toFixed(decimals);
        } else {
            return value.toFixed(1);
        }
    } else {
        let st = value.toString().split(".")[0];
        if (st.length < 4) return st;
        if (st.length < 7) return `${st.substring(0, st.length - 3)}K`;
        if (st.length < 10) return `${st.substring(0, st.length - 6)}M`;
        if (st.length < 13) return `${st.substring(0, st.length - 9)}G`;
        if (st.length < 13) return `${st.substring(0, st.length - 12)}T`;
    }

    return value;
};
