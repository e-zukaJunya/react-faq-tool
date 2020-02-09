import React from "react";
import styles from "./app.module.scss";
// import * as styles from "./app.module.scss";
import SlideSnackbar from "./components/common/SlideSnackbarCont";
import GlobalHeader from "./components/globalHeader/GlobalHeaderCont";
import Routes from "./components/Routes";


const App: React.FC = () => {
  return (
    <div className={styles.App}>
      {/* 共通ヘッダー */}
      <GlobalHeader />
      {/* メインコンテンツ */}
      <Routes />
      {/* スナックバー */}
      <SlideSnackbar />
    </div>
  );
};

export default App;
