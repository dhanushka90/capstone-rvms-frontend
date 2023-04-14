import React, { useState, useEffect } from 'react';
import '../App.css';
import JourneyRefrigeratorService from '../services/JourneyRefrigeratorService';
import { useNavigate } from 'react-router-dom';

const ListJourneyRefrigeratorData = () => {
  const [journeyRefrigerators, setJourneyRefrigerators] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    JourneyRefrigeratorService.getJourneyRefrigerators().then((res) => {
      setJourneyRefrigerators(res.data);
    });
  }, []);

  const convertTransitOrInhouse = (boolValue) => {
    return boolValue ? 'Transit' : 'Inhouse';
  };

  const convertStatus = (boolValue) => {
    return boolValue ? 'Active' : 'Inactive';
  };

  const addJourneyRefrigerator = () => {
    navigate('/add-journeyRefrigerator');
  };

  const editJourneyRefrigerator = (id) => {
    navigate(`/update-journeyRefrigerator/${id}`);
  };

  const deleteJourneyRefrigerator = (id) => {
    JourneyRefrigeratorService.deleteJourneyRefrigerator(id).then((res) => {
        setJourneyRefrigerators(journeyRefrigerators.filter((journeyRefrigerator) => journeyRefrigerator.jrId !== id));
    });
  };

  
  const viewJourneyRefrigerator = (id) => {
    navigate(`/view-journeyRefrigerator/${id}`);
  };

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <button className="btn btn-primary margin-tb" onClick={addJourneyRefrigerator}>
            Add Journey / Refrigerator
          </button>
          <h2 className="text-center ml-3">Journey / Refrigerator List</h2>
        </div>
      </div>
      <div className="row">
        <div className="table-responsive"> 
          <table className="table table-striped table-bordered margin-tb-3">
          <thead>
            <tr>
            <th>JR Id</th>
              <th>Device Id</th>
              <th>Transit or Inhouse</th>
              <th>Journey or Refrigerator</th>
              <th>Start Time</th>
              <th>Status</th>
              <th>Temparature High</th>
              <th>Temparature Low</th>
              <th>User</th>
              <th >Actions</th>
            </tr>
          </thead>

          <tbody>
            {journeyRefrigerators.map((journeyRefrigerator) => (
              <tr key={journeyRefrigerator.id}>
                <td>{journeyRefrigerator.jrId}</td>
                <td>{journeyRefrigerator.deviceId}</td>
                <td>{convertTransitOrInhouse(journeyRefrigerator.transitOrInhouse)}</td>
                <td>{journeyRefrigerator.journeyOrRefrigeratorName}</td>
                <td>{journeyRefrigerator.startTime}</td>
                <td>{convertStatus(journeyRefrigerator.status)}</td>
                <td>{journeyRefrigerator.tempHigh}</td>
                <td>{journeyRefrigerator.tempLow}</td>
                <td>{journeyRefrigerator.userId}</td>
                <td>
                  <button className="btn btn-info" onClick={() => editJourneyRefrigerator(journeyRefrigerator.jrId)}>Update</button>
                  <button style={{marginLeft:"10px"}} className="btn btn-danger "  onClick={() => deleteJourneyRefrigerator(journeyRefrigerator.jrId)}>Delete</button>
                  <button style={{marginLeft:"10px"}}  className="btn btn-success "  onClick={() => viewJourneyRefrigerator(journeyRefrigerator.jrId)}>View</button>                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default ListJourneyRefrigeratorData;