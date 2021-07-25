declare namespace TSRcReduxModel {
  interface D {
    [key: string]: any;
  }
  export interface Props<S = D, A = D, R = D> {
    namespace: string;
    state: S;
    action?: A;
    reducers?: R;
    openSeamlessImmutable?: boolean;
  }
}
