import React from "react";
import styles from "./app.module.scss";
// import * as styles from "./app.module.scss";

import Routes from "./components/Routes";
import GlobalHeader from "./components/globalHeader/GlobalHeaderCont";

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      {/* 共通ヘッダー */}
      <GlobalHeader />
      {/* メインコンテンツ */}
      <Routes />
    </div>
  );
};

export default App;
