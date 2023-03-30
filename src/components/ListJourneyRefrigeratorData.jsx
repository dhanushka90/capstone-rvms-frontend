import React, { Component } from 'react';
import JourneyRefrigeratorService from '../services/JourneyRefrigeratorService'

class ListJourneyRefrigeratorData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            journeyRefrigeratorData: []
        };
    }
    componentDidMount(){
        JourneyRefrigeratorService.getJourneyRefrigerators().then((res) => {
            this.setState({ journeyRefrigeratorData: res.data});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Journey / Refrigerator Data</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Device ID</th>
                                <th>Transit or Inhouse</th>
                                <th>Journey or Refrigerator Name</th>
                                <th>Start Time</th>
                                <th>Status</th>
                                <th>Temp High</th>
                                <th>Temp Low</th>
                                <th>User ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.journeyRefrigeratorData.map((journeyRefrigerator) => (
                                <tr key={journeyRefrigerator.jrId}>
                                    <td>{journeyRefrigerator.deviceId}</td>
                                    <td>{journeyRefrigerator.transitOrInhouse}</td>
                                    <td>{journeyRefrigerator.journeyOrRefrigeratorName}</td>
                                    <td>{journeyRefrigerator.startTime}</td>
                                    <td>{journeyRefrigerator.status}</td>
                                    <td>{journeyRefrigerator.tempHigh}</td>
                                    <td>{journeyRefrigerator.tempLow}</td>
                                    <td>{journeyRefrigerator.userId}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListJourneyRefrigeratorData;
