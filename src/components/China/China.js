import React from 'react';
import CommonChart from '../charts/CommonChart';

export default function China() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ textAlign: 'center' }}>China</h1>
      <br />
      <br />
      <br />
      <br />
      <h2>Cases</h2>
      <br />
      <CommonChart country={2} country_name="China" field="confirmed_cases" title="Cases"/>
      <br />
      <hr />
      <h2>Deaths</h2>
      <br />
      <CommonChart country={2} country_name="China" field="deaths" title="Deaths"/>
    </div>
  );
}
