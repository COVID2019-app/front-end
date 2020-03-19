import React from 'react';
import BarChart from '../charts/BarChart';
import SplineChart from '../charts/SplineChart';
import PieChart from '../charts/PieChart';
import CountryTable from '../charts/CountryTable';

export default function Italy() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ textAlign: 'center' }}>Italy</h1>
      <br />
      <br />
      <h2>Cases</h2>
      <br />
      <CountryTable country="Italy" />
      <br />
      <PieChart country="Italy" />
      <br />
      <BarChart country="Italy" />
      <br />
      <SplineChart country="Italy" />
      <hr />
      <h2>Deaths</h2>
      <br />
      <br />
      <CountryTable country="Italy Deaths" />
      <br />
      <PieChart country="Italy Deaths" />
      <br />
      <BarChart country="Italy Deaths" />
      <br />
      <SplineChart country="Italy Deaths" />
    </div>
  );
}
