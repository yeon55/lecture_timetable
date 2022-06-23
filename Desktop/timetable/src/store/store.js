import { atom } from "recoil";

export const timeTableState = atom({
  key: "timeTableState",
  default: {
    mon: [{ start: 9, end: 11, name: "교양", color: "red", id: 1 }],
    tue: [{ start: 10, end: 13, name: "영어", color: "orange", id: 2 }],
    wed: [{ start: 12, end: 16, name: "프로그래밍", color: "green", id: 3 }],
    thu: [{ start: 13, end: 15, name: "수학1", color: "blue", id: 4 }],
    fri: [{ start: 16, end: 19, name: "물리", color: "gray", id: 5 }],
  },
});
