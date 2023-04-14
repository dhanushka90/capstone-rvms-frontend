import React, { Component } from 'react';
import SensorService from '../services/SensorService'

class ListSensorData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sensorData: []
        };
    }
    componentDidMount(){
        SensorService.getSensors().then((res) => {
            this.setState({ sensorData: res.data});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Sensor Data</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Time Stamp</th>
                                <th>Journey/Refregirator ID</th>
                                <th>Temparature</th>
                                <th>Accelerometer X</th>
                                <th>Accelerometer Y</th>
                                <th>Accelerometer Z</th>
                                <th>Gyroscope X</th>
                                <th>Gyroscope Y</th>
                                <th>Gyroscope Z</th>
                                <th>Longitude</th>
                                <th>Latitude</th>
                                <th>Battery Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.sensorData.filter(({jrId}) =>  jrId === this.props.jrId).map((sensor) => (
                                <tr key={sensor.id}>
                                    <td>{sensor.timeStamp}</td>
                                    <td>{sensor.jrId}</td>
                                    <td>{sensor.temparature}</td>
                                    <td>{sensor.accelerometerX}</td>
                                    <td>{sensor.accelerometerY}</td>
                                    <td>{sensor.accelerometerZ}</td>
                                    <td>{sensor.gyroscopeX}</td>
                                    <td>{sensor.gyroscopeY}</td>
                                    <td>{sensor.gyroscopeZ}</td>
                                    <td>{sensor.longitude}</td>
                                    <td>{sensor.latitude}</td>
                                    <td>{sensor.batterystatus}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListSensorData;
