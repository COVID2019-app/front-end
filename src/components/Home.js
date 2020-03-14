import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
//import Loading from "./Loading";

import { getCountryList } from '../store/actions';

var headers = [
	{
		name: 'Territories',
		color: 'black',
		colspanNum: '1',
	},
	{
		name: 'Confirmed_case',
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
const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));
function Home(props) {
  
  // interactions with Redux Store
  const { getCountryList, country/*, isFetching */} = props;

  const classes = useStyles();
  const [info, setInfo] = useState({
    search: "",
    category: "confirmed_cases"
  });

  useEffect(() => {
    getCountryList(info);
  }, [getCountryList, info]);

const handleChange = name => event => {
  setInfo({
    ...info,
    [name]: event.target.value
  });
  };

  /* Slower table loads after first render
    if(isFetching){
    return(
      <Loading/>
    )

  }
  else{*/
  return (
    <div>
      <FormControl className={classes.formControl}>
        <NativeSelect
          value={info.category}
          onChange={handleChange("category")}
          name="category"
          className={classes.selectEmpty}
          inputProps={{ "aria-label": "category" }}
        >
          <option value="confirmed_cases">confirmed cases</option>
          <option value={"deaths"}>deaths</option>
          <option value={"severe_critical"}>severe/critical</option>
          <option value={"active_cases"}>active cases</option>
          <option value={"country_name"}>territories</option>
        </NativeSelect>
        <FormHelperText>Sorted By</FormHelperText>
      </FormControl>
    
      <TableContainer>
        <thead>
          <tr>
            {headers.map(heading => (
              <th
              key={heading.name}
                colSpan={heading.colspanNum}
                style={{
                  color: heading.color,
                  border: "1px solid #ddd",
                  padding: "8px",
                  position: "sticky",
                  top: "25px",
                  background: "skyblue",
                  textAlign:"center"
                }}
              >
                {heading.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {country.map(item => (
            <tr key={item.country_id}>
              <Tabletd>{item.country_name}</Tabletd>
              <Tabletd>
                {item.confirmed_cases
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
              </Tabletd>
              <Tabletd style={{ color: "red" }}>
                {item.deaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
              </Tabletd>
              <Tabletd
                style={{
                  background: `rgba(255, 0, 0, ${item.deaths /
                    item.confirmed_cases})`
                }}
              >
                {((item.deaths / item.confirmed_cases) * 100).toFixed(2)}%
              </Tabletd>
              <Tabletd style={{ color: "green" }}>
                {item.recovered
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
              </Tabletd>
              <Tabletd
                style={{
                  background: `rgba(0,128,0, ${item.recovered /
                    item.confirmed_cases})`
                }}
              >
                {((item.recovered / item.confirmed_cases) * 100).toFixed(2)}%
              </Tabletd>
              <Tabletd style={{ color: "purple" }}>
                {item.severe_critical
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
              </Tabletd>
              <Tabletd
                style={{
                  background: `rgba(128,0,128, ${item.severe_critical /
                    item.confirmed_cases})`
                }}
              >
                {((item.severe_critical / item.confirmed_cases) * 100).toFixed(2)}
                %
              </Tabletd>
              <Tabletd style={{ color: "grey" }}>
                {item.tested.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
              </Tabletd>
              <Tabletd style={{ color: "#e69900" }}>
                {item.active_cases
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
              </Tabletd>
              <Tabletd
                style={{
                  background: `rgba(255, 171, 0, ${item.active_cases /
                    item.confirmed_cases})`
                }}
              >
                {((item.active_cases / item.confirmed_cases) * 100).toFixed(2)}%
              </Tabletd>
            </tr>
          ))}
        </tbody>
      </TableContainer>
      </div>
    );
  }


const mapStateToProps = state => {
  return {
    //isFetching: state.isFetching,
    country: state.country
  };
};
export default connect(mapStateToProps, {
	getCountryList,
})(Home);

const TableContainer = styled.table`
	max-width: 1200px;
	margin: 20px auto 50px auto;
	position: relative;
	border-collapse: collapse;
`;

const Tabletd = styled.td`
	border: 1px solid #ddd;
	padding: 8px;
	text-align: center;
`;
