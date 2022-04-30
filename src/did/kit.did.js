export const idlFactory = ({ IDL }) => {
  const Result = IDL.Variant({ 'ok' : IDL.Text, 'err' : IDL.Text });
  const State = IDL.Record({
    'heapSize' : IDL.Nat,
    'balance' : IDL.Nat,
    'memorySize' : IDL.Nat,
  });
  const Status = IDL.Record({
    'status' : IDL.Variant({
      'stopped' : IDL.Null,
      'stopping' : IDL.Null,
      'running' : IDL.Null,
    }),
    'memory_size' : IDL.Nat,
    'cycles' : IDL.Nat,
  });
  const Result_6 = IDL.Variant({
    'ok' : IDL.Tuple(IDL.Nat, IDL.Principal),
    'err' : IDL.Text,
  });
  const GET = IDL.Record({ 'flag' : IDL.Nat, 'file_key' : IDL.Text });
  const Result_5 = IDL.Variant({ 'ok' : IDL.Vec(IDL.Nat8), 'err' : IDL.Text });
  const Canister = IDL.Record({
    'tag' : IDL.Text,
    'name' : IDL.Text,
    'canister_id' : IDL.Principal,
    'description' : IDL.Text,
  });
  const Result_4 = IDL.Variant({ 'ok' : IDL.Vec(Canister), 'err' : IDL.Text });
  const FileExtension = IDL.Variant({
    'js' : IDL.Null,
    'ts' : IDL.Null,
    'did' : IDL.Null,
    'wasm' : IDL.Null,
  });
  const CanisterInfoExt = IDL.Record({
    'file_extension' : FileExtension,
    'bucket_id' : IDL.Principal,
    'file_name' : IDL.Text,
    'file_key' : IDL.Text,
    'total_size' : IDL.Nat,
    'need_query_times' : IDL.Nat,
  });
  const Result_3 = IDL.Variant({
    'ok' : IDL.Vec(CanisterInfoExt),
    'err' : IDL.Text,
  });
  const Result_2 = IDL.Variant({ 'ok' : IDL.Principal, 'err' : IDL.Text });
  const Chunk = IDL.Record({
    'data' : IDL.Vec(IDL.Nat8),
    'digest' : IDL.Vec(IDL.Nat8),
  });
  const PUT = IDL.Record({
    'file_extension' : FileExtension,
    'order' : IDL.Nat,
    'chunk_number' : IDL.Nat,
    'chunk' : Chunk,
    'file_name' : IDL.Text,
    'file_key' : IDL.Text,
    'total_size' : IDL.Nat,
  });
  const Result_1 = IDL.Variant({ 'ok' : CanisterInfoExt, 'err' : IDL.Text });
  const Kit = IDL.Service({
    'addCycles' : IDL.Func([IDL.Nat, IDL.Nat], [Result], []),
    'addowner' : IDL.Func([IDL.Principal], [Result], []),
    'addsharewasm' : IDL.Func([IDL.Text], [Result], []),
    'canisterState' : IDL.Func([], [State], ['query']),
    'canister_status' : IDL.Func([IDL.Principal], [Status], []),
    'clearAll' : IDL.Func([], [], []),
    'createCanister' : IDL.Func(
        [IDL.Nat, IDL.Nat, IDL.Nat, IDL.Nat, IDL.Text, IDL.Text, IDL.Text],
        [IDL.Nat, IDL.Principal],
        [],
      ),
    'cycle_balance' : IDL.Func([], [IDL.Nat], ['query']),
    'delete' : IDL.Func([IDL.Text], [Result], []),
    'deletesharewasm' : IDL.Func([IDL.Text], [Result], []),
    'deploy' : IDL.Func(
        [
          IDL.Text,
          IDL.Text,
          IDL.Text,
          IDL.Nat,
          IDL.Nat,
          IDL.Nat,
          IDL.Nat,
          IDL.Vec(IDL.Nat8),
        ],
        [Result_6],
        [],
      ),
    'get' : IDL.Func([GET], [Result_5], ['query']),
    'getCanisterInfoExts' : IDL.Func([], [Result_4], ['query']),
    'getsharedCanisterInfoExts' : IDL.Func([], [Result_3], ['query']),
    'installWasm' : IDL.Func([IDL.Nat, IDL.Text], [Result_2], []),
    'put' : IDL.Func([PUT], [Result_1], []),
    'startCanister' : IDL.Func([IDL.Nat], [Result], []),
    'stopCanister' : IDL.Func([IDL.Nat], [Result], []),
    'stop_and_delete' : IDL.Func([IDL.Nat], [Result], []),
    'uninstallWasm' : IDL.Func([IDL.Nat], [Result], []),
    'updatesettings' : IDL.Func(
        [IDL.Nat, IDL.Nat, IDL.Nat, IDL.Nat],
        [Result],
        [],
      ),
    'wallet_receive' : IDL.Func([], [IDL.Nat], []),
  });
  return Kit;
};
export const init = ({ IDL }) => { return [IDL.Principal]; };
