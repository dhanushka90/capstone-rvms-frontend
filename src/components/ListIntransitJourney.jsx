import React, { useState, useEffect } from 'react';
import '../App.css';
import JourneyRefrigeratorService from '../services/JourneyRefrigeratorService';
import { useNavigate } from 'react-router-dom';

const ListIntransitJourneyData = () => {
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
    navigate(`/view-journey/${id}`);
  };

  let rowId = 1;

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">

          <h2 style={{margin:"10px", paddingLeft:"70px"}} className="text-center ">Journey List</h2>
        </div>
      </div>
      <div className="row">
        <div className="table-responsive"> 
          <table className="table table-striped table-bordered margin-tb-3">
          <thead>
            <tr>
              <th>Row #</th>
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
          {journeyRefrigerators
            .filter((journeyRefrigerator) => journeyRefrigerator.transitOrInhouse) // This line filters the array for Intransit
            .map((journeyRefrigerator) => (
                <tr key={journeyRefrigerator.id}>
                <td>{rowId++}</td>
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

export default ListIntransitJourneyData;