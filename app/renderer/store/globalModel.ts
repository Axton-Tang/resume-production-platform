export interface GStore {
  rootPath: string;
  readingLocalData: boolean;
}

const globalModel: TSRcReduxModel.Props<GStore> = {
  namespace: 'globalModel',
  openSeamlessImmutable: true,
  state: {
    rootPath: '',
    readingLocalData: false,
  },
};

export default globalModel;
