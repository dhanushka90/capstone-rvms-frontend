import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const SENSOR_API_BASE_URL = "http://localhost:8080/api/v1/allSensorData";
// const SENSOR_API_BASE_URL = "http://3.97.194.206:8080/api/v1/allSensorData"

export const useSensorData = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
            (async () => {
                try {
                    const response = await fetch(SENSOR_API_BASE_URL);
                    if (!response.ok) {
                        throw new Error("Error while fetching the sensor data!");
                    }
                    const data = await response.json();
                    setData(data);
                } catch (error) {
                    console.error("Error while fetching the sensor data!");
                    console.error(error)
                    setError(error);
                } finally {
                    setIsLoading(false)
                }
            })()
    }, [])

    return { data, isLoading, error }
}
class SensorService {

    getSensors() {
        return axios.get(SENSOR_API_BASE_URL);
    }
}

export default new SensorService()
