import React from 'react';
import CommonChart from '../charts/CommonChart';

export default function Iraq() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ textAlign: 'center' }}>Iraq</h1>
            <br />
            <br />
            <h2>Cases</h2>
            <br />
            <CommonChart country={38} country_name="Iraq" field="confirmed_cases" title="Cases" />
            <br />
            <hr />
            <h2>Deaths</h2>
            <br />
            <CommonChart country={38} country_name="Iraq" field="deaths" title="Deaths" />
            <br />
        </div>
    );
}