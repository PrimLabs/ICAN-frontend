import type { Principal } from "@dfinity/principal";
export interface Canister {
    tag: string;
    name: string;
    canister_id: Principal;
    description: string;
}
export interface CanisterInfoExt {
    file_extension: FileExtension;
    bucket_id: Principal;
    file_name: string;
    file_key: string;
    total_size: bigint;
    need_query_times: bigint;
}
export interface Chunk {
    data: Array<number>;
    digest: Array<number>;
}
export type FileExtension =
    | { js: null }
    | { ts: null }
    | { did: null }
    | { wasm: null };
export interface GET {
    flag: bigint;
    file_key: string;
}
export interface Kit {
    addCycles: (arg_0: bigint, arg_1: bigint) => Promise<Result>;
    addowner: (arg_0: Principal) => Promise<Result>;
    addsharewasm: (arg_0: string) => Promise<Result>;
    canisterState: () => Promise<State>;
    canister_status: (arg_0: Principal) => Promise<Status>;
    clearAll: () => Promise<undefined>;
    createCanister: (
        arg_0: bigint,
        arg_1: bigint,
        arg_2: bigint,
        arg_3: bigint,
        arg_4: string,
        arg_5: string,
        arg_6: string
    ) => Promise<[bigint, Principal]>;
    cycle_balance: () => Promise<bigint>;
    delete: (arg_0: string) => Promise<Result>;
    deletesharewasm: (arg_0: string) => Promise<Result>;
    deploy: (
        arg_0: string,
        arg_1: string,
        arg_2: string,
        arg_3: bigint,
        arg_4: bigint,
        arg_5: bigint,
        arg_6: bigint,
        arg_7: Array<number>
    ) => Promise<Deploy_Result>;
    get: (arg_0: GET) => Promise<Result_5>;
    getCanisterInfoExts: () => Promise<Result_5>;
    getsharedCanisterInfoExts: () => Promise<Result_3>;
    installWasm: (arg_0: bigint, arg_1: string) => Promise<Result_2>;
    put: (arg_0: PUT) => Promise<Result_1>;
    startCanister: (arg_0: bigint) => Promise<Result>;
    stopCanister: (arg_0: bigint) => Promise<Result>;
    stop_and_delete: (arg_0: bigint) => Promise<Result>;
    uninstallWasm: (arg_0: bigint) => Promise<Result>;
    updatesettings: (
        arg_0: bigint,
        arg_1: bigint,
        arg_2: bigint,
        arg_3: bigint
    ) => Promise<Result>;
    wallet_receive: () => Promise<bigint>;
}
export interface PUT {
    file_extension: FileExtension;
    order: bigint;
    chunk_number: bigint;
    chunk: Chunk;
    file_name: string;
    file_key: string;
    total_size: bigint;
}
export type Result = { ok: string } | { err: string };
export type Result_1 = { ok: CanisterInfoExt } | { err: string };
export type Result_2 = { ok: Principal } | { err: string };
export type Result_3 = { ok: Array<CanisterInfoExt> } | { err: string };
export type Result_4 = { ok: Array<Canister> } | { err: string };
export type Result_5 = { ok: Array<number> } | { err: string };
export type Deploy_Result = { ok: [bigint, Principal] } | { err: string };
export interface State {
    heapSize: bigint;
    balance: bigint;
    memorySize: bigint;
}
export interface Status {
    status: { stopped: null } | { stopping: null } | { running: null };
    memory_size: bigint;
    cycles: bigint;
}
export interface _SERVICE extends Kit {}
