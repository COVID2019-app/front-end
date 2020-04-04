import React from 'react';
import { Table } from 'reactstrap';

export default function CountryInfo(props) {
  const { region_data } = props;

  if (region_data.length > 1) {
    var date_of_first_case = region_data[0].date
    var total_cases = region_data[region_data.length - 1].cases;
    var deaths = region_data[region_data.length - 1].deaths;
    var recovered = region_data[region_data.length - 1].recovered;
  }

  return (
    <div>
      <h4 style={{ fontWeight: '300' }}>General Information: </h4>

      <div className="row justify-content-center">
        <div className="col-lg-6">
          <Table size="sm" style={{ textAlign: 'left' }} bordered>
            <tbody>
              <tr>
                <th scope="row">Date of First Case</th>
                <td>{date_of_first_case}</td>
              </tr>
              <tr>
                <th scope="row">Total Cases</th>
                <td>{total_cases}</td>
              </tr>
              <tr>
                <th scope="row">Deaths</th>
                <td>{deaths}</td>
              </tr>
              <tr>
                <th scope="row">Recovered</th>
                <td>{recovered}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
