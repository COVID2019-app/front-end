import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Card, CardText, CardBody, CardGroup, CardHeader } from 'reactstrap';
import { getCountryList } from '../store/actions';
import { withRouter } from 'react-router-dom';

function renderNumber(number) {
  return number.toLocaleString(navigator.language, {
    minimumFractionDigits: 0,
  });
}

function Live(props) {
  const { getCountryList, country } = props;

  useEffect(() => {
    getCountryList();
  }, [getCountryList]);

  let totalConfirmedCases = 0;
  let totalDeaths = 0;
  let totalCriticalSevere = 0;
  let totalRecovered = 0;

  for (let index in country) {
    totalConfirmedCases += country[index].cases;
    totalDeaths += country[index].deaths;
    totalCriticalSevere += country[index].severe_critical;
    totalRecovered += country[index].recovered;
  }

  return (
    <React.Fragment>
      <div className="row justify-content-around">
        <div className="col-lg-2 mb-5">
          <Card style={{ border: 'none' }}>
            <CardBody className="live-total live-card">
              <CardText
                style={{
                  height: '1.5rem',
                  fontSize: '0.8rem',
                  padding: '0.1rem',
                  backgroundColor: '#1c4587',
                }}
              >
                Confirmed Cases
              </CardText>
              <CardText style={{ backgroundColor: '#1155cc' }}>
                {renderNumber(totalConfirmedCases)}
              </CardText>
              <CardText
                style={{
                  height: '1.5rem',
                  fontSize: '0.8rem',
                  padding: '0.1rem',
                  backgroundColor: '#990000',
                }}
              >
                Deaths
              </CardText>
              <CardText style={{ backgroundColor: '#cc0000' }}>
                {renderNumber(totalDeaths)}
              </CardText>
              <CardText
                style={{
                  height: '1.5rem',
                  fontSize: '0.8rem',
                  padding: '0.1rem',
                  backgroundColor: '#351c75',
                }}
              >
                Critical/Severe
              </CardText>
              <CardText style={{ backgroundColor: '#674ea7' }}>
                {renderNumber(totalCriticalSevere)}
              </CardText>
              <CardText
                style={{
                  height: '1.5rem',
                  fontSize: '0.8rem',
                  padding: '0.1rem',
                  backgroundColor: '#274e13',
                }}
              >
                Recovered
              </CardText>
              <CardText style={{ backgroundColor: '#38761d' }}>
                {renderNumber(totalRecovered)}
              </CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-lg-8">
          <CardGroup>
            {country.slice(0, 24).map(x => {
              return (
                <div key={x.id} className="col-sm-3 live-container ">
                  <Card style={{ border: 'none' }}>
                    <CardHeader>
                      {x.country === 'United States of America'
                        ? 'USA'
                        : x.country}
                    </CardHeader>
                    <CardBody className="live-card">
                      <CardText className="live-cases">
                        {renderNumber(x.cases)}
                      </CardText>
                      <CardText className="live-deaths">
                        {renderNumber(x.deaths)}
                      </CardText>
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
    country: state.country,
  };
};

export default withRouter(connect(mapStateToProps, { getCountryList })(Live));
