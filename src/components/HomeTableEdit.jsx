import React, { useEffect /*, useState*/ } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import { connect /*,useDispatch*/ } from 'react-redux';
import { getCountryList, isUpdating } from '../store/actions/index';
//import number from 'react-bootstrap-table2-filter/lib/src/components/number';

const HomeTableEdit = props => {
  const { country, getCountryList, isUpdating, token } = props;

  useEffect(() => {
    getCountryList();
  }, [getCountryList]);

  const handleChange = (row, column, newValue) => {
    let updatedData = {};
    updatedData[column.dataField] = parseInt(newValue);
    isUpdating(row.country_id, updatedData, token);
  };

  const columns = [
    {
      dataField: 'country_id',
      text: 'Country ID',

      filter: textFilter(),
      editor: {
        type: Type.TEXTAREA,
      },
      hidden: true,
    },
    {
      dataField: 'country_name',
      text: 'Territorry',
      filter: textFilter(),
    },
    {
      dataField: 'confirmed_cases',
      text: 'Cases',
    },
    {
      dataField: 'deaths',
      text: 'Deaths',
    },
    {
      dataField: 'recovered',
      text: 'Recovered',
    },
    {
      dataField: 'severe_critical',
      text: 'Severe',
    },
    {
      dataField: 'tested',
      text: 'Tested',
    },
  ];
  return (
    <BootstrapTable
      keyField="country_id"
      data={country}
      columns={columns}
      cellEdit={cellEditFactory({
        mode: 'click',
        afterSaveCell: (oldValue, newValue, row, column) => {
          handleChange(row, column, newValue);
        },
      })}
      sort={{ dataField: 'country_name', order: 'asc' }}
      filter={filterFactory()}
    />
  );
};

const mapStateToProps = state => {
  return {
    country: state.country,
    token: state.token,
  };
};
export default connect(mapStateToProps, {
  getCountryList,
  isUpdating,
})(HomeTableEdit);
