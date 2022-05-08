import { AuthClient } from "@dfinity/auth-client";
import { Actor, HttpAgent } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { principalToAccountIdentifier } from "@/utils/common";
import storage from "@/utils/storage";
class Identity {
  public authClient: any;
  private url: string | unknown =
    process.env.REACT_APP_INTERNET_IDENTITY_CANISTER_URL;
  public principal: any;
  private isAuthClientReady: boolean = false;
  public subAccountId: string | undefined;
  public identity: any;
  constructor() {
    this.create();
    return this;
  }
  async create() {
    this.authClient = await AuthClient.create();
    this.isAuthClientReady = await this.authClient?.isAuthenticated();
  }
  public setOwnerPrincipal(principal: Principal) {
    this.principal = principal;
  }

  //ii login
  async login() {
    return new Promise<any>(async (resolve, reject) => {
      this.authClient.login({
        // maxTimeToLive: BigInt(86400_000_000_000),
        onSuccess: async (res) => {
          this.identity = await this.authClient.getIdentity();
          this.principal = this.identity.getPrincipal();
          this.isAuthClientReady = await this.authClient?.isAuthenticated();
          // this.subAccountId = principalToAccountIdentifier(this.principal, 0)
          resolve(this.identity);
        },
        onError: (err) => {
          reject(err);
        },
      });
    });
  }
  //II
  async logout() {
    storage.removeStorage();
    return await this.authClient?.logout({ returnTo: "/" });
  }

  async getIdentity() {
    return this.authClient?.getIdentity();
  }

  async isAuthenticated() {
    return this.authClient?.isAuthenticated();
  }
  //II
  async checkLogin() {
    const authClient = await AuthClient.create();
    console.log("check", authClient);
    if (await authClient.isAuthenticated()) {
      this.authClient = authClient;
      return Promise.resolve(true);
    }
    return Promise.resolve(false);
  }
}

export const authClient = new Identity();
