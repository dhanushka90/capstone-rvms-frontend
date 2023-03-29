import axios from "axios";

const JOURNEYREFRIGERATOR_API_BASE_URL = "http://localhost:8080/api/v1/allJourneyRefrigeratorData";

class JourneyRefrigeratorService {

    getJourneyRefrigerators(){
        return axios.get(JOURNEYREFRIGERATOR_API_BASE_URL);
    }
}

export default new JourneyRefrigeratorService()