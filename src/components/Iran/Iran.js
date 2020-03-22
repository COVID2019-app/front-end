import React from 'react';
import CommonChart from '../charts/CommonChart';

export default function Iran() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ textAlign: 'center' }}>Iran</h1>
      <br />
      <br />
      <h2>Cases</h2>
      <br />
      <CommonChart country={32} country_name="Iran" field="confirmed_cases" title="Cases" />
      <br />
      <hr />
      <h2>Deaths</h2>
      <br />
      <CommonChart country={32} country_name="Iran" field="deaths" title="Deaths" />
      <br />
    </div>
  );
}
