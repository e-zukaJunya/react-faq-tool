import React from "react";
// import styles from "./kbEdit.module.scss";
import Table from "./Table";

const KbEdit: React.FC = props => {
  console.log(props);
  return (
    // <div className={styles.kbEdit}>
    <div>
      <Table />
    </div>
  );
};

export default KbEdit;
