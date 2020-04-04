import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import { Table } from 'reactstrap';
import Loading from './Loading';

import { getSortedCountryList } from '../store/actions';

var headers = [
  {
    name: 'Territories',
    color: 'black',
    colspanNum: '1',
  },
  {
    name: 'Cases',
    color: 'blue',
    colspanNum: '1',
  },
  {
    name: 'Deaths',
    color: 'red',
    colspanNum: '2',
  },
  {
    name: 'Recovered',
    color: 'green',
    colspanNum: '2',
  },
  {
    name: 'Severe/Critical',
    color: 'purple',
    colspanNum: '2',
  },
  {
    name: 'Tested',
    color: 'grey',
    colspanNum: '1',
  },
  {
    name: 'Active Cases',
    color: '#e69900',
    colspanNum: '2',
  },
];

function renderDataCell(item, dataProperty, linkProperty) {
  return (
    <div className="d-flex justify-content-around">
      {/* <div>
        {item[dataProperty]
          .toString()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
      </div> */}
      {item[linkProperty] && (
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={item[linkProperty]}
          >
            [source]
          </a>
        </div>
      )}
    </div>
  );
}

function Home(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  // interactions with Redux Store
  const { getSortedCountryList, country, isFetching } = props;

  // const classes = useStyles();
  const [sorted, setSorted] = useState({
    search: '',
    category: 'cases',
    title: 'cases',
  });
  useEffect(() => {
    getSortedCountryList(sorted.category);
  }, [getSortedCountryList, sorted]);

  const handleChange = event => {
    setSorted({
      ...sorted,
      category: event.currentTarget.getAttribute('dropdownvalue'),
      title: event.currentTarget.textContent,
    });
  };

  /* Slower table loads after first render*/
  if (isFetching) {
    return <Loading />;
  } else {
    country.forEach(item => {
      if (item.tested === null) {
        item.tested = 0;
      }
      if (item.active=== null) {
        item.active = 0;
      }
      if (item.deaths === null) {
        item.deaths = 0;
      }
      if (item.recovered === null) {
        item.recovered = 0;
      }
      if (item.cases === null) {
        item.cases = 0;
      }
    });
    return (
      <React.Fragment>
        <Dropdown
          isOpen={dropdownOpen}
          toggle={toggle}
          style={{ margin: '10px 0' }}
        >
          <DropdownToggle caret>Sorted by: {sorted.title}</DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              onClick={handleChange}
              dropdownvalue="cases"
            >
              Cases
            </DropdownItem>
            <DropdownItem onClick={handleChange} dropdownvalue="deaths">
              Deaths
            </DropdownItem>
            <DropdownItem
              onClick={handleChange}
              dropdownvalue="severe_critical"
            >
              Severe/Critical
            </DropdownItem>
            <DropdownItem onClick={handleChange} dropdownvalue="active">
              Active Cases
            </DropdownItem>
            <DropdownItem onClick={handleChange} dropdownvalue="country">
              Territories
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

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
                    background: 'skyblue',
                    textAlign: 'center',
                  }}
                >
                  {heading.name.toUpperCase()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {country.map(item => (
              <tr key={item.country_id}>
                <td>{item.country}</td>
                <td style={{ textAlign: 'center' }}>
                {item.cases
                    .toString()
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                  {renderDataCell(
                    item,
                    'cases',
                    'cases_link'
                  )}
                </td>
                <td style={{ color: 'red', textAlign: 'center' }}>
                {item.deaths
                    .toString()
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                  {renderDataCell(item, 'deaths', 'deaths_link')}
                </td>
                <td
                  style={{
                    background: `rgba(255, 0, 0, ${item.deaths /
                      item.cases})`,
                    textAlign: 'center',
                  }}
                > 
                  {((item.deaths / item.cases) * 100).toFixed(2)}%
                </td>
                <td style={{ color: 'green', textAlign: 'center' }}>
                {item.recovered
                    .toString()
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                  {renderDataCell(item, 'recovered', 'recovered_link')}
                </td>
                <td
                  style={{
                    background: `rgba(0,128,0, ${item.recovered /
                      item.cases})`,
                    textAlign: 'center',
                  }}
                  
                >
    
                  {((item.recovered / item.cases) * 100).toFixed(2)}%
                </td>
                <td style={{ color: 'purple', textAlign: 'center' }}>
                {item.severe_critical
                    .toString()
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                  {renderDataCell(
                    item,
                    'severe_critical',
                    'severe_critical_link'
                  )}
                </td>
                <td
                  style={{
                    background: `rgba(128,0,128, ${item.severe_critical /
                      item.cases})`,
                    textAlign: 'center',
                  }}
                >
                  {(
                    (item.severe_critical / item.cases) *
                    100
                  ).toFixed(2)}
                  %
                </td>
    
                <td style={{ color: 'grey', textAlign: 'center' }}>
                {item.tested
                    .toString()
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                  {renderDataCell(item, 'tested', 'tested_link')}
                </td>
                <td style={{ color: '#e69900', textAlign: 'center' }}>
                  {(item.cases - item.recovered - item.deaths)
                    .toString()
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                </td>
                <td
                  style={{
                    background: `rgba(255, 171, 0, ${item /
                      item.cases})`,
                    textAlign: 'center',
                  }}
                >
                  {((item.active / item.cases) * 100).toFixed(
                    2
                  )}
                  %
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    country: state.country,
  };
};

export default connect(mapStateToProps, {
  getSortedCountryList,
})(Home);
