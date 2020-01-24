import React from "react";
import AlertDialog from "../common/AlertDialog";
import ConfirmDialog from "../common/ConfirmDialog";
import SlideSnackbar from "../common/SlideSnackbar";

const KbAdd: React.FC = props => {
  console.log(props);
  return (
    <div className="">
      <div className={"red"}>追加は分離させたほうがいい</div>
      <AlertDialog open={true} onClickClose={() => {}} />
      <ConfirmDialog open={true} onClickNo={() => {}} onClickOk={() => {}} />
      <SlideSnackbar />
    </div>
  );
};

export default KbAdd;
