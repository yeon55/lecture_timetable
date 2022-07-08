import { TableCell } from "@mui/material";
import { useRecoilState } from "recoil";
import { timeTableState } from "../store/store";
import React, { useState, useMemo, useCallback } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ConfirmModal from "../ConfirmModal/ConfirmModal";

function TimeTableCell({ day, timeNum, Edit }) {
  const [timeTableData, setTimeTableData] = useRecoilState(timeTableState);
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);
  const timeData = useMemo(
    () =>
      timeTableData[day].find(
        (time) => time.start <= timeNum && timeNum < time.end
      ),
    [day, timeNum, timeTableData]
  );

  const handleDelete = useCallback(() => {
    setTimeTableData((oldTimeTableData) => {
      const newDayDate = oldTimeTableData[day].filter(
        (data) => data.id !== timeData.id
      );
      return {
        ...oldTimeTableData,
        [day]: newDayDate,
      };
    });
    setOpen(false);
  }, [day, setTimeTableData, timeData?.id]);
  const handleClose = useCallback(() => setOpen(false), []);
  const handleConfirm = useCallback(() => setOpen(true), []);
  const handleEidt = useCallback(() =>
    Edit(day, timeData.id, [Edit, day, timeData?.id])
  );
  return (
    <>
      {timeData?.start === timeNum ? (
        <TableCell
          style={{ backgroundColor: timeData.color, position: "relative" }}
          align="center"
          rowSpan={timeData.end - timeData.start}
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {timeData.name}
          {hover ? (
            <div style={{ position: "absolute", top: 5, right: 5 }}>
              <EditIcon style={{ cursor: "pointer" }} onClick={handleEidt} />
              <DeleteIcon
                style={{ cursor: "pointer" }}
                onClick={handleConfirm}
              />
            </div>
          ) : null}
        </TableCell>
      ) : timeData?.start < timeNum && timeNum < timeData?.end ? null : (
        <TableCell />
      )}
      <ConfirmModal
        open={open}
        handleClose={handleClose}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default TimeTableCell;
