import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";

function InputModal({ showModal }) {
  return (
    <Dialog open={showModal}>
      <DialogTitle>강의정보 입력</DialogTitle>
      <DialogContent style={{ width: "400px" }}></DialogContent>
    </Dialog>
  );
}

export default InputModal;
