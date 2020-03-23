import React, { useState } from 'react';

import { Table } from 'reactstrap';
export default function Iran() {
  var headers = [
    {
      name: 'Provinces',
      color: 'black',
      colspanNum: '1',
    },
    {
      name: 'Confirmed Cases',
      color: 'blue',
      colspanNum: '1',
    },
    {
      name: 'Deaths',
      color: 'black',
      colspanNum: '2',
    },
    {
      name: 'Recovered',
      color: 'green',
      colspanNum: '2',
    },

    {
      name: 'Recovery Rate',
      color: 'grey',
      colspanNum: '1',
    },
    {
      name: 'Fatality Rate',
      color: '#e69900',
      colspanNum: '2',
    },
    {
      name: 'Lat',
      color: 'blue',
      colspanNum: 2,
    },
    {
      name: 'Long',
      color: 'blue',
      colspanNum: 2,
    },
  ];
  const [data, setData] = useState([
    {
      province: '',
      confirmed: '',
      deaths: '',
      recovered: '',
      recovery_rate: '',
      fatality_rate: '',
      lat: '',
      long: '',
    },
  ]);
  return (
    <>
      <h1>IRAN</h1>
      <Table bordered>
        <thead>
          <tr>
            {headers.map(heading => (
              <th
                key={heading.name}
                colSpan={heading.colspanNum}
                style={{
                  color: heading.color,
                  border: '1px solid #ddd',
                  padding: '8px',
                  position: 'sticky',
                  top: '0',
                  background: 'red',
                  textAlign: 'center',
                }}
              >
                {heading.name.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
      </Table>
    </>
  );
}
