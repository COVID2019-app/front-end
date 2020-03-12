import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const covidData = {
  Territories: {
    0: "China",
    1: "Thailand",
    2: "Japan"
  },
  confirmed_case: {
    0: 80695,
    1: 47,
    2: 461
  },
  deaths: {
    0: 3097,
    1: 1,
    2: 6
  },
  recovered: {
    0: 55404,
    1: 31,
    2: 69
  }
};

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth:200
  }
});

function createData(Territories, confirmed_cases, deaths, recovered) {
  return { Territories, confirmed_cases, deaths, recovered };
}

var rows = [
//   createData("China", 80695,3097,55404),
//   createData("Thailand", 47,1,31),
//   createData("Japan", 461,6,69),
//   createData("Diamond Princess", 696,6,242),
//   createData("Korea", 7134,50,130)
];

for (var i = 0; i < Object.keys(covidData.Territories).length; i++){
    rows.push(
      createData(
        covidData.Territories[i],
        covidData.confirmed_case[i],
        covidData.deaths[i],
        covidData.recovered[i]
      )
    );
}

export default function Home() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Territories</TableCell>
            <TableCell align="right">confirmed_cases</TableCell>
            <TableCell align="right">deaths</TableCell>
            <TableCell align="right">recovered</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.Territories}
              </TableCell>
              <TableCell align="right">{row.confirmed_cases}</TableCell>
              <TableCell align="right">{row.deaths}</TableCell>
              <TableCell align="right">{row.recovered}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
