import React from "react";
import BarChart from "../charts/BarChart";
import SplineChart from "../charts/SplineChart";
import PieChart from "../charts/PieChart";
import CountryTable from "../charts/CountryTable";

export default function Italy() {
  return (
    <div>
      <h1>Italy</h1>
      <br/>
      <br />
      <h2>Italy Cases</h2><br />
      <CountryTable country="Italy"/>
      <br/>
      <PieChart country="Italy" />
      <br/>
      <BarChart country="Italy" />
      <br/>
      <SplineChart country='Italy' />
      <hr/>
      <h2>Italy Deaths</h2><br />
      <CountryTable country="Italy Deaths" />
      <br/>
      <PieChart country="Italy Deaths" />
      <br />
      <BarChart country="Italy Deaths" />
      <br />
      <SplineChart country='Italy Deaths' />

    </div>
  );
}
