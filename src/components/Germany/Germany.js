import React from 'react';
import CommonChart from '../charts/CommonChart';

export default function Germany() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Germany</h1>
      <br />
      <br />
      <h2>Cases</h2>
      <br />
      <CommonChart country={19} country_name="Germany" field="confirmed_cases" title="Cases" />
    </div>
  );
}

