import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { Card, CardText, CardBody, CardGroup, CardHeader } from 'reactstrap';
import { getCountryList } from "../store/actions";
import {withRouter} from 'react-router-dom';




function Live (props) {

    const { getCountryList, country} = props;
    
    useEffect(() => {
        getCountryList();
    }, [getCountryList]);

    
        return (
            <div className="container">
                <div className="col-lg-10 offset-lg-2">
                    <CardGroup>

                        {country.slice(0,24).map((x) => {

                            return (
                                <div key={x.country_id} className="col-sm-3 live-container ">
                                    <Card >
                                        <CardHeader>{x.country_name === "United States of America" ? "USA" : x.country_name}</CardHeader>
                                        <CardBody className="live-card">
                                            <CardText className="live-cases">{x.confirmed_cases.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</CardText>
                                            <CardText className="live-deaths">{x.deaths.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</CardText>
                                            {/*<Button>Go to Page</Button>*/}
                                        </CardBody>
                                    </Card>
                                </div>
                            );
                        })}
                    </CardGroup>
                </div>
            </div>
        );
    
}


const mapStateToProps = state => {
    return {
        //isFetching: state.isFetching,
        country: state.country
    };
};

export default withRouter(connect(mapStateToProps, {getCountryList})(Live));



