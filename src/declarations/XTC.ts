import type {Principal} from '@dfinity/principal';
import type {ActorMethod} from '@dfinity/agent';

export interface BurnArgs {
  'canister_id': Principal,
  'amount': bigint
}

export type BurnError = { 'InsufficientBalance': null } |
  { 'InvalidTokenContract': null } |
  { 'NotSufficientLiquidity': null };
export type BurnResult = { 'Ok': bigint } |
  { 'Err': BurnError };

export interface _SERVICE {
  'burn': ActorMethod<[BurnArgs], BurnResult>
}
