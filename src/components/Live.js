import React, { Component } from 'react';
import { Card, CardText, CardBody, CardGroup, CardHeader } from 'reactstrap';
import { COUNTRIES } from '../shared/livecountries';


const RenderCards = ({ topcountries }) => {
    return (
        <div className="col-lg-10 offset-lg-2">
            <CardGroup>

                {topcountries.data.map((x) => {

                    return (
                        <div key={x.index} className="col-sm-3 live-container ">
                            <Card >
                                <CardHeader>{x.Country}</CardHeader>
                                <CardBody className="live-card">
                                    <CardText className="live-cases">{x.Cases}</CardText>
                                    <CardText className="live-deaths">{x.Deaths}</CardText>
                                    {/*<Button>Go to Page</Button>*/}
                                </CardBody>
                            </Card>
                        </div>
                    );
                })}
            </CardGroup>
        </div>

    );

}



class Live extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: COUNTRIES
        }
    }


    render() {
        return (
            <div className="container">

                <RenderCards topcountries={this.state.country} />

            </div>
        );
    }
}

export default Live;



