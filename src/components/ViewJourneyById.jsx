import React, { useState, useEffect } from 'react';
import '.././App.css';
import ListSensorData from './ListSensorData';
import FooterSub from './FooterSub';
import RouteMap from "./RouteMap";
import EChart from "./EChart";
import { useSensorData } from '.././services/SensorService'
import { useParams } from 'react-router-dom';

function ViewJourneyById() {
  const { jrId } = useParams(); // Get the JR Id from the route
  const [lineChartOptions, setLineChartOptions] = useState(null);
  const [tempChartOptions, setTempChartOptions] = useState(null);
  const { data, isLoading, error } = useSensorData(jrId); // Pass the JR Id to useSensorData
  const [positions, setPositions] = useState(null);
  useEffect(() => {
    if (!data) {
      return;
    }
    const positions = data.filter((data) => {
      if(data.latitude === 'Unknown' || data.longitude === 'Unknown') {
       return false;
      }
      return true;
     }).map(d => [d.latitude, d.longitude]);
    setPositions(positions);
  }, [data])

  useEffect(() => {
    if (!data) {
      return;
    }
    const timeStamps = data.map(d => new Date(parseInt(d.timeStamp) * 1000));
    const accelerometerXs = data.map(d => parseFloat(d.accelerometerX));
    const accelerometerYs = data.map(d => parseFloat(d.accelerometerY));
    const accelerometerZs = data.map(d => parseFloat(d.accelerometerZ));
    let opts = {
      "title": {},
      "tooltip": {
        "trigger": "axis",
        "axisPointer": {
          "type": "cross",
          "label": {
            "backgroundColor": "#6a7985"
          }
        }
      },
      "legend": {
        "data": [
          "X Axis",
          "Y Axis",
          "Z Axis"
        ]
      },
      "toolbox": {
        "feature": {
          "saveAsImage": {}
        }
      },
      "grid": {
        "left": "3%",
        "right": "4%",
        "bottom": "3%",
        "containLabel": true
      },
      "xAxis": [
        {
          "type": "category",
          "boundaryGap": false,
          "data": timeStamps
        }
      ],
      "yAxis": [
        {
          "type": "value"
        }
      ],
      "series": [
        {
          "name": "X Axis",
          "type": "line",
          "emphasis": {
            "focus": "series"
          },
          "data": accelerometerXs
        },
        {
          "name": "Y Axis",
          "type": "line",
          "emphasis": {
            "focus": "series"
          },
          "data": accelerometerYs
        },
        {
          "name": "Z Axis",
          "type": "line",
          "emphasis": {
            "focus": "series"
          },
          "data": accelerometerZs
        }
      ]
    }
    setLineChartOptions(opts);
  }, [data]);

  useEffect(() => {
    
    if (!data) {
      return;
    }
    const timeStamps = data.map(d => new Date(parseInt(d.timeStamp) * 1000));
    const temparature = data.map(d => parseFloat(d.temparature));
    let opts = {
      "title": {},
      "tooltip": {
        "trigger": "axis",
        "axisPointer": {
          "type": "cross",
          "label": {
            "backgroundColor": "#6a7985"
          }
        }
      },
      "legend": {
        "data": [
          "Temparature",
        ]
      },
      "toolbox": {
        "feature": {
          "saveAsImage": {}
        }
      },
      "grid": {
        "left": "3%",
        "right": "4%",
        "bottom": "3%",
        "containLabel": true
      },
      "xAxis": [
        {
          "type": "category",
          "boundaryGap": false,
          "data": timeStamps
        }
      ],
      "yAxis": [
        {
          "type": "value"
        }
      ],
      "series": [
        {
          "name": "Temparature",
          "type": "line",
          "emphasis": {
            "focus": "series"
          },
          "data": temparature
        },
      ]
    }
    setTempChartOptions(opts);
  }, [data]);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className='custom-card-2'>
        <h2>Temperature</h2>
          {error && "Error!"}
          {isLoading && "Loading . . . "}
          {data && tempChartOptions && <EChart id="c2" options={tempChartOptions} />}
        </div>
        <div className='custom-card-2'>
          <h2>Route</h2>
          {error && "Error!"}
          {isLoading && "Loading . . . "}
          {data && positions && positions.length !== 0 && <RouteMap positions={positions} />}
        </div>
        <div className='custom-card-2'>
          <h2>Accelerometer and Gyroscope</h2>
          {error && "Error!"}
          {isLoading && "Loading . . . "}
          {data && lineChartOptions && <EChart id="c1" options={lineChartOptions} />}
        </div>
      </div>
      <div className='custom-card-1'>
        <ListSensorData />
      </div>
      <FooterSub />
    </div>
  );
}

export default ViewJourneyById;



