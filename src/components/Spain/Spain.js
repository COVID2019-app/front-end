import React from 'react';
import CommonChart from '../charts/CommonChart';

export default function Spain() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Spain</h1>
      <br />
      <br />
      <h2>Cases</h2>
      <br />
      <CommonChart country={29} country_name="Spain" field="confirmed_cases" title="Cases" />
    </div>
  );
}
