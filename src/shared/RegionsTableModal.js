import React from 'react';
import { Table } from 'reactstrap';
import Loading from '../components/Loading';

function RegionsTableModal(props) {

  if (props.data.length === 0) {
    return <Loading />;
  } else {
    var tot_cases = 0;
    var tot_deaths = 0;
    for (var i in props.data) {
      tot_cases += props.data[i].confirmed;
      tot_deaths += props.data[i].deaths;
    }
    return (
      <Table hover responsive>
        <thead>
          <tr className="thead-dark" style={{ textAlign: 'center' }}>
            {Object.keys(props.data[0]).map(header => {
              if (!header.includes('id')) {
                if (header.includes('_')) {
                  header = header.replace('_', ' ');
                }
                return <th key={header}>{header.toUpperCase()}</th>;
              } else {
                return null;
              }
            })}
          </tr>
        </thead>
        <tbody>
          {props.data.map(item => (
            <tr>
              {Object.keys(item).map(key => {
                if (!key.includes('id')) {
                  if (key.includes('name')) {
                    return (
                      <td style={{ fontWeight: '600' }}>
                        {item[key].toUpperCase()}
                      </td>
                    );
                  } else if (typeof item[key] === 'string') {
                    return (
                      <td style={{ fontWeight: '600', textAlign: 'center' }}>
                        {item[key].toUpperCase()}
                      </td>
                    );
                  } else if (key.includes('confirme')) {
                    return (
                      <td
                        style={{
                          color: 'rgb(71, 71, 243)',
                          textAlign: 'center',
                        }}
                      >
                        {item[key]}
                      </td>
                    );
                  } else if (key.includes('death')) {
                    return (
                      <td
                        style={{
                          color: 'rgb(216, 14, 41)',
                          textAlign: 'center',
                        }}
                      >
                        {item[key]}
                      </td>
                    );
                  }
                  return <td style={{ textAlign: 'center' }}>{item[key]}</td>;
                } else {
                  return null;
                }
              })}
            </tr>
          ))}

          <tr className="table-warning">
            <th>Total</th>

            <td
              style={{
                fontWeight: '600',
                color: 'rgb(71, 71, 243)',
                textAlign: 'center',
              }}
            >
              {tot_cases}
            </td>
            <td
              style={{
                fontWeight: '600',
                color: 'rgb(216, 14, 41)',
                textAlign: 'center',
              }}
            >
              {tot_deaths}
            </td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default RegionsTableModal;
