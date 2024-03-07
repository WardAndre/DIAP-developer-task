import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { titanicData } from "@/utils/titanicData";

function createData({
  PassengerId,
  Survived,
  Pclass,
  Name,
  Sex,
  Age,
  SibSp,
  Parch,
  Ticket,
  Fare,
  Cabin,
  Embarked,
}) {
  return {
    PassengerId,
    Survived,
    Pclass,
    Name,
    Sex,
    Age,
    SibSp,
    Parch,
    Ticket,
    Fare,
    Cabin,
    Embarked,
  };
}

const rows = titanicData.map((obj) => createData(obj));

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {Object.keys(titanicData[0]).map((item) => (
              <TableCell key={item}>{item}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.PassengerId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.PassengerId}
              </TableCell>
              <TableCell align="right">{row.Survived}</TableCell>
              <TableCell align="right">{row.Pclass}</TableCell>
              <TableCell align="right">{row.Name}</TableCell>
              <TableCell align="right">{row.Sex}</TableCell>
              <TableCell align="right">{row.Age}</TableCell>
              <TableCell align="right">{row.SibSp}</TableCell>
              <TableCell align="right">{row.Parch}</TableCell>
              <TableCell align="right">{row.Ticket}</TableCell>
              <TableCell align="right">{row.Fare}</TableCell>
              <TableCell align="right">{row.Cabin}</TableCell>
              <TableCell align="right">{row.Embarked}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
