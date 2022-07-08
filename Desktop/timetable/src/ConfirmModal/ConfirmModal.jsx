import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

function ConfirmModal({ open, handleClose, handleDelete }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>강의 삭제</DialogTitle>
      <DialogContent>
        <DialogContentText>해당 강의를 삭제히겠습니까?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>취소</Button>
        <Button onClick={handleDelete}>삭제</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmModal;
