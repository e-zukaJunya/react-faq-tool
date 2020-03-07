//アプリの設定
export const APP_CONFIGS = {
  //開発時フラグ
  IS_DEVELOP: process.env.REACT_APP_MY_ENV?.trim() === "dev",
  //画面モード切替の閾値
  WINDOW_MODE_THRESHOLD: 750,
  //API Gateway用のkey
  API_KEY: ""
};

//APIのURL
export const URLS = {
  BASE: APP_CONFIGS.IS_DEVELOP ? "http://localhost:3100/" : "https://honban/",
  SUB: "react-faq-tool",
  // SUB: "/react-faq-tool/",
  SETTINGS: "settings",
  MASTERS: "masters",
};
