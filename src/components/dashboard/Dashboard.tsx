import React from "react";
import CircularDeterminate from "../common/CircularDeterminate";
import styles from "./dashboard.module.scss";

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboard}>
      <div>ここは…ダッシュボードの世界…</div>
      <CircularDeterminate />
    </div>
  );
};

export default Dashboard;
