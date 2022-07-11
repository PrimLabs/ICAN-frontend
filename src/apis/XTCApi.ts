import {idlFactory} from "@/declarations/XTC.did";
import {BurnArgs} from "@/declarations/XTC";

class XTCToCycle {

  async getActor() {
    try {
      await window?.ic?.plug?.requestConnect({
        whitelist: ["aanaa-xaaaa-aaaah-aaeiq-cai"]
      });
      console.log(window?.ic?.plug?.agent)
      if (window?.ic?.plug?.agent) return await window.ic.plug.createActor({
        canisterId: "aanaa-xaaaa-aaaah-aaeiq-cai",
        interfaceFactory: idlFactory,
      });
    } catch (e) {
      console.log(e)
      throw e
    }
  }

  async burn(burnArg: BurnArgs): Promise<string> {
    console.log(burnArg)
    return new Promise(async (resolve, reject) => {
      try {
        const Actor = await this.getActor()
        const res = await Actor.burn(burnArg)
        console.log(res)
        if (Object.keys(res)[0] === "Ok") resolve(res.Ok)
        else reject(Object.keys(res.Err)[0])
      } catch (e) {
        console.log(e)
        reject(e)
      }
    })
  }
}

export const XTCApi = new XTCToCycle()
