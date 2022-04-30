

class CStore {
    common:object|any = {};

    actionSave(store:any){
      this.common = {...store}
    }

}

export const CommonStore = new CStore();
