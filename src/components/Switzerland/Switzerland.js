import React from 'react';
import CommonChart from '../charts/CommonChart';

export default function Switzerland() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Switzerland</h1>
      <br />
      <br />
      <h2>Cases</h2>
      <br />
      <CommonChart country={42} country_name="Switzerland" field="confirmed_cases" title="Cases" />
    </div>
  );
}
