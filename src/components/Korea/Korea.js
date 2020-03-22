import React from 'react';
import CommonChart from '../charts/CommonChart';

export default function Korea() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>South Korea</h1>
      <br />
      <br />
      <h2>Cases</h2>
      <br />
      <CommonChart country={6} country_name="South Korea" field="confirmed_cases" title="Cases" />
    </div>
  );
}
