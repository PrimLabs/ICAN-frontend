import { AuthClient } from "@dfinity/auth-client";
import { Principal } from "@dfinity/principal";
import { principalToAccountIdentifier } from "@/utils/common";
import storage from "@/utils/storage";
class IIForIdentity {
  public authClient: any;
  private url: string | unknown = "";
  public principal: any;
  private isAuthClientReady: boolean = false;
  public marketApiActor: Promise<any> | any;
  public subAccountId: string | undefined;
  public identity: any;
  constructor() {
    // this.create();
    return this;
  }
  async create() {
    this.authClient = await AuthClient.create({
      idleOptions: { idleTimeout: 72 * 60 * 60 * 1000 },
    });
    this.isAuthClientReady = await this.authClient?.isAuthenticated();
  }
  public setOwnerPrincipal(principal: Principal) {
    this.principal = principal;
  }

  //ii login
  async login() {
    return new Promise<any>(async (resolve, reject) => {
      this.authClient.login({
        maxTimeToLive: BigInt(3_600_000_000_000) * BigInt(72),
        identityProvider: this.url,
        onSuccess: async (res) => {
          console.log("login success");
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
    if (await authClient.isAuthenticated()) {
      this.authClient = authClient;
      return Promise.resolve(true);
    }
    return Promise.resolve(false);
  }
}

export const authClient = new IIForIdentity();
