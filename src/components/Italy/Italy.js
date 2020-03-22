import React from 'react';
import CommonChart from '../charts/CommonChart';

export default function Italy() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ textAlign: 'center' }}>Italy</h1>
      <br />
      <br />
      <h2>Cases</h2>
      <br />
      <CommonChart country={25} country_name="Italy" field="confirmed_cases" title="Cases" />
      <br />
      <hr />
      <h2>Deaths</h2>
      <br />
      <CommonChart country={25} country_name="Italy" field="deaths" title="Deaths"/>
      <br />
    </div>
  );
}
