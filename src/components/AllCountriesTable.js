import React from "react";
import "./table.css";

import {covidData } from "./coviddata"

// var covidData = {
//   Territories: {
//     "0": "China",
//     "1": "Thailand",
//     "2": "Japan",
//     "3": "Diamond Princess",
//     "4": "Korea, Republic of"
//   },
//   confirmed_cases: { "0": 80695, "1": 47, "2": 461, "3": 696, "4": 7134 },
//   deaths: { "0": 3097, "1": 1, "2": 6, "3": 6, "4": 50 },
//   recovered: { "0": 55404, "1": 31, "2": 69, "3": 242, "4": 130 }
// };
var headers = [
  "Territories",
  "Confirmed_case",
  "deaths",
  "recovered",
  "severe/critical",
  "Tested",
  "Active Cases"
];
var datalist = [];
console.log(Object.values(covidData.Territories));
for (var i = 0; i < Object.values(covidData.Territories).length; i++) {
  var increased_confirmed_case = Object.values(
    covidData.increased_confirmed_case
  )[i];
  if (Object.values(covidData.increased_confirmed_case)[i] != null) {
    increased_confirmed_case = `+ ${
      Object.values(covidData.increased_confirmed_case)[i]
    }`;
  }
  datalist.push([
    Object.values(covidData.GMT)[i],
    Object.values(covidData.Territories)[i],
    Object.values(covidData.confirmed_cases)[i],
    increased_confirmed_case,
    Object.values(covidData.deaths)[i],
    `${(
      (Object.values(covidData.deaths)[i] /
        Object.values(covidData.confirmed_cases)[i]) *
      100
    ).toFixed(2)}%`,
    Object.values(covidData.recovered)[i],
    `${(
      (Object.values(covidData.recovered)[i] /
        Object.values(covidData.confirmed_cases)[i]) *
      100
    ).toFixed(2)}%`,
    Object.values(covidData.severe_critical)[i],
    `${(
      (Object.values(covidData.severe_critical)[i] /
        Object.values(covidData.confirmed_cases)[i]) *
      100
    ).toFixed(2)}%`,
    Object.values(covidData.active_cases)[i],
    `${(
      (Object.values(covidData.active_cases)[i] /
        Object.values(covidData.confirmed_cases)[i]) *
      100
    ).toFixed(2)}%`,
    Object.values(covidData.tested)[i]
  ]);
}

Object.keys(covidData).map(item => {
  console.log(item);
  return Object.values(covidData[item]).map(i => {
    console.log(i);
    return 1;
  });
});
export default function AllCountriesTable() {
  return (
    <table id="customers" className="table table-bordered">
      <thead>
        <tr>
          {headers.map(heading => (
            <th colspan="2">{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {datalist.map(item => (
          <tr>
            {item.map(v => (
              <td>{v}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
