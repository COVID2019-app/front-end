import React, { useState, useEffect } from 'react';
import { DateBox } from 'devextreme-react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import { connect /*,useDispatch*/ } from 'react-redux';
import {
  getCountryRegionsByDate,
  updateDailyRegion,
} from '../../store/actions/index';
import { COUNTRIES } from '../../shared/country_add';
import Loading from '../Loading';

//import number from 'react-bootstrap-table2-filter/lib/src/components/number';

const PARSE_FUNCTIONS = {
  confirmed_cases: parseInt,
  deaths: parseInt,
  recovered: parseInt,
};

const EditRegionTable = props => {
  const {
    regions,
    getCountryRegionsByDate,
    isFetching,
    updateDailyRegion,
    token,
  } = props;

  // country dropdown setup
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const countryToggle = () => setCountryDropdownOpen(prevState => !prevState);

  const [countrydata, setCountryData] = useState({
    countryName: 'Choose Country',
    country_id: null,
  });
  // date setup
  const [date, setDate] = useState(convert(new Date()));

  useEffect(() => {
    if (countrydata.country_id) {
      console.log();
      getCountryRegionsByDate({ id: countrydata.country_id, date: date });
    }
  }, [getCountryRegionsByDate, countrydata.country_id, date]);

  // change country id - in country dropdown
  const handleIDChange = event => {
    setCountryData({
      ...countrydata,
      country_id: event.currentTarget.getAttribute('dropdownvalue'),
      countryName: event.currentTarget.textContent,
    });
  };
  // change date - in date calendar
  const handleDateChange = event => {
    setDate(convert(event.value));
  };
  function convert(str) {
    var date = new Date(str),
      mnth = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join('-');
  }

  const handleChange = (row, column, newValue) => {
    let updatedData = {};
    const parseFunction = PARSE_FUNCTIONS[column.text];

    updatedData[column.text] =
      parseFunction !== undefined ? parseFunction(newValue) : newValue;
    updateDailyRegion(row.regions_id, updatedData, token);
  };

  const columns = [
    {
      dataField: 'regions_id',
      text: 'Region ID',

      filter: textFilter(),
      editor: {
        type: Type.TEXTAREA,
      },
      hidden: true,
    },
    {
      dataField: 'regions_name',
      text: 'Region',
      filter: textFilter(),
      sort: true,
    },
    {
      dataField: 'daily_confirmed_cases',
      text: 'confirmed_cases',
    },

    {
      dataField: 'daily_deaths',
      text: 'deaths',
    },

    {
      dataField: 'daily_recovered',
      text: 'recovered',
    },
  ];
  return (
    <React.Fragment>
      <h2 style={{ textAlign: 'center' }}>Edit Daily Data</h2>
      <Dropdown
        isOpen={countryDropdownOpen}
        toggle={countryToggle}
        style={{ margin: '10px 0' }}
        direction="right"
      >
        <DropdownToggle caret>{countrydata.countryName}</DropdownToggle>
        <DropdownMenu
          modifiers={{
            setMaxHeight: {
              enabled: true,
              order: 890,
              fn: data => {
                return {
                  ...data,
                  styles: {
                    ...data.styles,
                    overflow: 'auto',
                    maxHeight: '150px',
                  },
                };
              },
            },
          }}
        >
          {COUNTRIES.map(country => {
            return (
              <DropdownItem
                onClick={handleIDChange}
                dropdownvalue={country.country_id}
                key={country.country_id}
              >
                {country.name}
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </Dropdown>
      <br />
      <p>Date:</p>
      <div className="dx-field" style={{ width: '200px' }}>
        <div>
          <DateBox
            defaultValue={date}
            type="date"
            onValueChanged={handleDateChange}
          />
        </div>
      </div>
      <br />
      {countrydata.country_id ? (
        isFetching ? (
          <Loading />
        ) : (
          <BootstrapTable
            keyField="regions_id"
            data={regions}
            columns={columns}
            cellEdit={cellEditFactory({
              mode: 'click',
              afterSaveCell: (oldValue, newValue, row, column) => {
                handleChange(row, column, newValue);
              },
            })}
            filter={filterFactory()}
          />
        )
      ) : null}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    regions: state.daily_region,
    token: state.token,
    isFetching: state.isFetching,
  };
};
export default connect(mapStateToProps, {
  getCountryRegionsByDate,
  updateDailyRegion,
})(EditRegionTable);
