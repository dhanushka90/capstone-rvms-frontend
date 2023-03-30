import React, { Component } from 'react';
import SensorService from '../services/SensorService'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

class AccelerometerChart extends Component {
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
        const data = this.state.sensorData.map(sensor => ({
            time: sensor.timeStamp,
            x: sensor.accelerometerX,
            y: sensor.accelerometerY,
            z: sensor.accelerometerZ
        }));

        const getMaxValue = (data, keys) => {
            return data.reduce((max, entry) => {
                return Math.max(max, ...keys.map(key => entry[key]));
            }, 0);
        };
      
        const maxVal = getMaxValue(data, ["x", "y", "z"]);

        return (
            <div>
                <h2 className="text-center">Sensor Data</h2>
                <LineChart
                    width={data.length * 50}
                    height={maxVal + 50}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis domain={[0, maxVal + 50]} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="x" stroke="#ff0000" />
                    <Line type="monotone" dataKey="y" stroke="#00ff00" />
                    <Line type="monotone" dataKey="z" stroke="#0000ff" />
                </LineChart>
            </div>
        );
    }
}

export default AccelerometerChart;
