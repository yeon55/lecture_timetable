import TimeTableRow from "./TimeTableRow";
import InputModal from "../InputModal/InputModal";
import { useRecoilValue } from "recoil";
import { timeTableState } from "../store/store";
import { withStyles } from "@mui/styles";
import AddBoxIcon from "@mui/icons-material/AddBox";
import React, { useState, useCallback } from "react";
import {
  TableContainer,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";

const hourData = Array.from({ length: 11 }, (i, j) => j + 9);
const styles = () => ({
  Table: {
    "& th, td": {
      border: "1px solid rgba(224,224,224,1)",
    },
  },
});

function TimeTable({ classes }) {
  const timeTableData = useRecoilValue(timeTableState);
  const [showModal, setShowModal] = useState(false);
  const [editInfo, setEditInfo] = useState({});
  const handleClose = useCallback(() => {
    setShowModal(false);
    setEditInfo({});
  }, []);

  const Edit = useCallback(
    (day, id) => {
      const { start, end, name, color } = timeTableData[day].find(
        (lectureInfo) => lectureInfo.id === id
      );
      setEditInfo({
        dayData: day,
        startTimeData: start,
        endTimeData: end,
        lectureNameData: name,
        colorData: color,
        idNum: id,
      });
      setShowModal(true);
    },
    [timeTableData]
  );

  return (
    <>
      <TableContainer
        sx={{
          width: "80%",
          minWidth: "650px",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "200px",
        }}
      >
        <Typography variant="h2" fontWeight={10} component="div" align="center">
          강의시간표
        </Typography>
        <Button
          variant="contain"
          sx={{ float: "right" }}
          //   endIcon={<AddBoxIcon />}
          onClick={() => setShowModal(true)}
        >
          강의 입력
          <AddBoxIcon style={{ paddingLeft: "5px" }} />
        </Button>
        <Table className={classes.Table}>
          <TableHead>
            <TableRow>
              <TableCell align="center" width={100}>
                Time
              </TableCell>
              <TableCell align="center" width={200}>
                Mon
              </TableCell>
              <TableCell align="center" width={200}>
                Tue
              </TableCell>
              <TableCell align="center" width={200}>
                Wed
              </TableCell>
              <TableCell align="center" width={200}>
                Thu
              </TableCell>
              <TableCell align="center" width={200}>
                Fri
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hourData.map((time, index) => (
              <TableRow key={index}>
                <TableCell align="center">{`${time}:00 - ${
                  time + 1
                }:00`}</TableCell>
                <TimeTableRow timeNum={time} Edit={Edit} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <InputModal
        showModal={showModal}
        handleClose={handleClose}
        {...editInfo}
      />
    </>
  );
}

export default withStyles(styles)(TimeTable);
