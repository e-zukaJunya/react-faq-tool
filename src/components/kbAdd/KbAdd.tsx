import React from "react";
import AlertDialog from "../common/AlertDialog";
import ConfirmDialog from "../common/ConfirmDialog";

const KbAdd: React.FC = props => {
  console.log(props);
  return (
    <div className="">
      <div className={"red"}>追加は分離させたほうがいい</div>
      <AlertDialog open={true} onClickClose={() => {}} />
      <ConfirmDialog open={true} onClickNo={() => {}} onClickOk={() => {}} />
    </div>
  );
};

export default KbAdd;
