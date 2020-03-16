import React from "react";
import BarChart from "../charts/BarChart";
import SplineChart from "../charts/SplineChart";
import PieChart from "../charts/PieChart";
import CountryTable from "../charts/CountryTable";



export default function China() {
  return (
    <div style={{ textAlign: 'center' }}>

      <h1 style={{ textAlign: 'center' }}>China</h1>
      <br />
      <br />
      <h2>Cases</h2><br />
      <CountryTable country="China" />
      <br />
      <PieChart country="China" />
      <br />
      <BarChart country="China" />
      <br />
      <SplineChart country='China' />
      <hr />
  
      <h2>Deaths</h2><br /><br />
      <CountryTable country="China Deaths" />
      <br />
      <PieChart country="China Deaths" />
      <br />
      <BarChart country="China Deaths" />
      <br />
      <SplineChart country='China Deaths' />

    </div>
  );
}
