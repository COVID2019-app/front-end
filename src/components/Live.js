import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Card, CardText, CardBody, CardGroup, CardHeader } from 'reactstrap';
import { getCountryList } from '../store/actions';
import { withRouter } from 'react-router-dom';

function Live(props) {
  const { getCountryList, country } = props;

  useEffect(() => {
    getCountryList();
  }, [getCountryList]);

  var tot_cases = 0;
  var tot_deaths = 0;
  var crit_severe = 0;
  var recovered = 0;
  for (var i in country) {
    tot_cases += country[i].confirmed_cases;
    tot_deaths += country[i].deaths;
    crit_severe += country[i].severe_critical;
    recovered += country[i].recovered;
  }

  return (
    <React.Fragment>
      <div className="row justify-content-around">
    <div className="col-lg-2 mb-5">
      <Card style={{border: 'none'}}>
          <CardBody className="live-total live-card">
          <CardText style={{ height: '1.5rem', fontSize: '0.8rem', padding: '0.1rem', backgroundColor: '#1c4587'}}>Confirmed Cases</CardText>
          <CardText style={{ backgroundColor: '#1155cc' }}>{tot_cases}</CardText>
          <CardText style={{ height: '1.5rem', fontSize: '0.8rem', padding: '0.1rem', backgroundColor: '#990000' }}>Deaths</CardText>
          <CardText style={{ backgroundColor: '#cc0000' }}>{tot_deaths}</CardText>
          <CardText style={{ height: '1.5rem', fontSize: '0.8rem', padding: '0.1rem', backgroundColor: '#351c75' }}>Critical/Severe</CardText>
          <CardText style={{ backgroundColor: '#674ea7' }}>{crit_severe}</CardText>
          <CardText style={{ height: '1.5rem', fontSize: '0.8rem', padding: '0.1rem', backgroundColor: '#274e13' }}>Recovered</CardText>
          <CardText style={{ backgroundColor: '#38761d' }}>{recovered}</CardText>

        </CardBody>
      </Card>
    </div>
    <div className="col-lg-8">
        <CardGroup>
          {country.slice(0, 24).map(x => {
            return (
              <div key={x.country_id} className="col-sm-3 live-container ">
                <Card style={{ border: 'none' }}>
                  <CardHeader>
                    {x.country_name === 'United States of America'
                      ? 'USA'
                      : x.country_name}
                  </CardHeader>
                  <CardBody className="live-card">
                    <CardText className="live-cases">
                      {x.confirmed_cases.toLocaleString(navigator.language, {
                        minimumFractionDigits: 0,
                      })}
                    </CardText>
                    <CardText className="live-deaths">
                      {x.deaths.toLocaleString(navigator.language, {
                        minimumFractionDigits: 0,
                      })}
                    </CardText>
                    {/*<Button>Go to Page</Button>*/}
                  </CardBody>
                </Card>
              </div>
            );
          })}
        </CardGroup>

    </div>
      </div>
    
    </React.Fragment>
  );
}


const mapStateToProps = state => {
  return {
    //isFetching: state.isFetching,
    country: state.country,
  };
};

export default withRouter(connect(mapStateToProps, { getCountryList })(Live));
