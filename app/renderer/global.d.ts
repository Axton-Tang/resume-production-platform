// png 类型声明
declare module '*.png' {
  const png: string;
  export default png;
}

declare module '*.jpg' {
  const jpg: string;
  export default jpg;
}

// svg 类型声明
declare module '*.svg';

// png 类型声明
declare module '*.less';

// rc-redux-model 类型声明
declare module 'rc-redux-model';

declare interface Window {
  pdk: string;
}
