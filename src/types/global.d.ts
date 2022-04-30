import { Principal } from "@dfinity/agent";
import { JsonnableEd25519KeyIdentity } from "@dfinity/identity/lib/cjs/identity/ed25519";

declare global {
    interface Window {
        ic: any;
    }
}

export interface DfinitySubAccount {
    type: string;
    name: string;
    aid: string;
    index: number;
}

export interface Ed25519Account {
    type: string;
    name: string;
    aid: string;
    principal: string;
    publicKey: string;
    keys: JsonnableEd25519KeyIdentity;
    index: number;
}

export interface TokenInList {
    name: string;
    symbol: string;
    decimals: string;
    canisterId: string;
    owner: string;
    logo: string;
}

export interface DTokenStats {
    cycles: BigInt;
    fee: BigInt;
    feeTokenId: Principal;
    owner: Principal;
    numTokens: BigInt;
    cyclesPerToken: BigInt;
    maxNumTokens: BigInt;
    maxNumTokensPerId: BigInt;
}

export interface TokenAdded {
    canisterId: string;
    name: string;
    symbol: string;
    decimals: string;
    logo: string;
    addedBy: string; // account principal
    addedAt: number;
}

export interface TokenPair {
    blockTimestampLast: bigint;
    creator: Principal;
    id: string;
    kLast: bigint;
    lptoken: string;
    price0CumulativeLast: bigint;
    price1CumulativeLast: bigint;
    reserve0: bigint;
    reserve1: bigint;
    token0: string;
    token1: string;
    totalSupply: bigint;
    lptokens?: string;
}

export interface Token {
    index: BigInt;
    canisterId: Principal;
    name: string;
    symbol: string;
    logo: string;
    decimals: BigInt;
    totalSupply: BigInt;
    mintable: boolean;
    burnable: boolean;
    owner: Principal;
    timestamp: BigInt;
}

export interface TokenValue {
    decimals: number;
    fee: bigint;
    id: string;
    name: string;
    symbol: string;
    totalSupply: number;
    logo?: string;
}

export interface TokenMetadata {
    canisterId: string;
    cycles: BigInt;
    decimals: BigInt;
    deployTime: BigInt;
    fee: BigInt;
    feeTo: Principal;
    historySize: BigInt;
    holderNumber: BigInt;
    name: string;
    owner: Principal;
    symbol: string;
    totalSupply: BigInt;
    logo: string;
}

export interface TokenTx {
    amount: BigInt;
    caller: Principal;
    fee: BigInt;
    from: Principal[];
    index: BigInt;
    op: {
        [string]: null;
    };
    timestamp: BigInt;
    to: Principal[];
}

export interface ICPTx {
    type: string;
    blockNumber: number;
    from: string;
    to: string;
    amount: number;
    fee: number;
    hash: string;
    timestamp: Date;
    status: string;
    aid?: string;
}

export interface UserInfoInSwap {
    lpBalances: [string, BigInt][];
    balances: [Principal, BigInt][];
}

export interface TokenInSwap {
    id: string; // canister id
    name: string;
    symbol: string;
    decimals: BigInt;
    owner: Principal; // do not use
    totalSupply: BigInt; // total amount of token deposited into dswap
    logo: string;
}

export interface RecordInSwap {
    caller: Principal;
    op: { [string]: null };
    index: BigInt;
    tokenId: string;
    from: Principal;
    to: Principal;
    amount: BigInt;
    amount0: BigInt;
    amount1: BigInt;
    timestamp: BigInt;
}

export interface Pool {
    id: BigInt;
    stakingToken: string;
    rewardToken: Principal;
    isDSwapLP: boolean;
    startTime: BigInt;
    endTime: BigInt;
    lastRewardTime: BigInt;
    accTokenPerShare: BigInt;
    rewardRate: BigInt;
    totalReward: BigInt;
    totalSupply: BigInt;
}

export interface UserStakingInfo {
    amount: BigInt;
    rewardDebt: BigInt;
    unclaimedReward: BigInt;
}

export interface TokenPrice {
    canisterId: string;
    price: string;
}

export interface LpPrice {
    id: string;
    price: string;
}

export interface Notification {
    timestamp?: number;
    id: number;
    type: "success" | "error" | "warning" | "default";
    title?: string;
    content: string;
}

export interface TokenInfo {
    logo: string;
    name: string;
    symbol: string | number;
    decimals: bigint | number;
    totalSupply: bigint | number;
    owner: Principal | string;
    fee: bigint | number;
    id?: string;
    bal?: string | null;
    feeTo: Principal | string;
    historySize: bigint | number;
    deployTime: bigint | number;
    holderNumber: bigint | number;
    cycles: bigint | number;
}
