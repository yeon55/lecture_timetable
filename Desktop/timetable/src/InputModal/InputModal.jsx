import { Controller, useForm } from "react-hook-form";
import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Radio,
} from "@mui/material";

function InputModal({ showModal, handleClose }) {
  const {
    formState: { errors },
    control,
    getValues,
    handleSubmit,
    reset,
  } = useForm();

  return (
    <Dialog open={showModal} onClose={handleClose}>
      <form onSubmit={handleSubmit()}>
        <DialogTitle>강의정보 입력</DialogTitle>
        <DialogContent style={{ width: "400px" }}>
          <Controller
            control={control}
            name="lectureName"
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.lectureName}
                style={{ marginTop: "30px", width: "350px" }}
                label="강의명"
              />
            )}
          />
          {errors.lectureName?.type === "required" && (
            <p style={{ color: "red" }}>강의명을 입력해주세요.</p>
          )}

          <FormControl style={{ marginTop: "30px" }}>
            <FormLabel>요일</FormLabel>
            <Controller
              control={control}
              name="day"
              rules={{ required: true }}
              render={({ field }) => (
                <RadioGroup {...field} style={{ display: "block" }}>
                  <FormControlLabel
                    value="mon"
                    control={<Radio />}
                    label="Mon"
                  />
                  <FormControlLabel
                    value="tue"
                    control={<Radio />}
                    label="Tue"
                  />
                  <FormControlLabel
                    value="wed"
                    control={<Radio />}
                    label="Wed"
                  />
                  <FormControlLabel
                    value="thu"
                    control={<Radio />}
                    label="Thu"
                  />
                  <FormControlLabel
                    value="fri"
                    control={<Radio />}
                    label="Fri"
                  />
                </RadioGroup>
              )}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button>취소</Button>
          <Button type="submit">입력</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default InputModal;
