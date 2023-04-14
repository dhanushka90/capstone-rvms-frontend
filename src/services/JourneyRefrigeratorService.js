import axios from "axios";

const JOURNEYREFRIGERATOR_API_BASE_URL = "http://localhost:8080/api/v1/journeyRefrigerator";

class JourneyRefrigeratorService {

    getJourneyRefrigerators() {
        return axios.get(JOURNEYREFRIGERATOR_API_BASE_URL);
    }

    createJourneyRefrigerator(journeyRefrigerator) {
        return axios.post(JOURNEYREFRIGERATOR_API_BASE_URL, journeyRefrigerator);
    }

    getJourneyRefrigeratorById(journeyRefrigeratorId) {
        return axios.get(JOURNEYREFRIGERATOR_API_BASE_URL + '/' + journeyRefrigeratorId);
    }

    updateJourneyRefrigerator(journeyRefrigerator, journeyRefrigeratorId) {
        return axios.put(JOURNEYREFRIGERATOR_API_BASE_URL + '/' + journeyRefrigeratorId, journeyRefrigerator);
    }

    deleteJourneyRefrigerator(journeyRefrigeratorId) {
        return axios.delete(JOURNEYREFRIGERATOR_API_BASE_URL + '/' + journeyRefrigeratorId);
    }
}

export default new JourneyRefrigeratorService();
