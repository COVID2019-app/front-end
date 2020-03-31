import React from 'react';
import { Table } from 'reactstrap';
import RegionsTableModal from '../../shared/RegionsTableModal';

function RegionSumTable({ data }) {
  // re-generate the data from backend
  var regions_data = [];
  for (var i in data) {
    var d = {
      id: i,
      name: data[i].region_name,
      confirmed: data[i].confirmed,
      deaths: data[i].deaths,
    };
    regions_data.push(d);
  }

  return (
    <div className="usaRegionsContainer">
      <center>
        <h1>Country</h1>
      </center>
      <RegionsTableModal data={regions_data} />

      <Table>
        <tfoot>
          <tr>
            <td className="table-secondary">Date of first case:</td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}

export default RegionSumTable;
