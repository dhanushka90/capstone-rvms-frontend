import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../App.css';
import JourneyRefrigeratorService from '../services/JourneyRefrigeratorService';
import UserService from '../services/UserService';

const CreateUpdateJourneyRefrigerator = () => {
  const { id } = useParams();
  const isUpdate = id ? true : false;

  const [state, setState] = useState({
    jrId: id || '',
    deviceId: '',
    transitOrInhouse: '',
    journeyOrRefrigeratorName: '',
    startTime: '',
    status: '',
    tempHigh: '',
    tempLow: '',
    userId: '',
    isUpdate,
  });

  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    UserService.getUsers().then((res) => {
      setUsers(res.data);
    });

    if (isUpdate) {
      JourneyRefrigeratorService.getJourneyRefrigeratorById(id).then((res) => {
        let journeyRefrigerator = res.data;
        setState((prevState) => ({
          ...prevState,
          deviceId: journeyRefrigerator.deviceId,
          transitOrInhouse: journeyRefrigerator.transitOrInhouse,
          journeyOrRefrigeratorName: journeyRefrigerator.journeyOrRefrigeratorName,
          startTime: journeyRefrigerator.startTime,
          status: journeyRefrigerator.status,
          tempHigh: journeyRefrigerator.tempHigh,
          tempLow: journeyRefrigerator.tempLow,
          userId: journeyRefrigerator.userId,
        }));
      });
    }
  }, [id, isUpdate]);

  const saveOrUpdateJourneyRefrigerator = (e) => {
    e.preventDefault();
    let journeyRefrigerator = { ...state };

    if (!isUpdate) {
      JourneyRefrigeratorService.createJourneyRefrigerator(journeyRefrigerator).then(() => {
        navigate('/journeyRefrigerator');
      });
    } else {
      JourneyRefrigeratorService.updateJourneyRefrigerator(journeyRefrigerator, id).then(() => {
        navigate('/journeyRefrigerator');
      });
    }
  };

  const changeHandler = (event, field) => {
    if (field === 'startTime') {
      const formattedDate = event.target.value.replace('T', ' ') + ':00';
      setState({ ...state, [field]: formattedDate });
    } else {
      setState({ ...state, [field]: event.target.value });
    }
  };

  const cancelJourneyRefrigerator = () => {
    navigate('/journeyRefrigerator');
  };
  
  

  return (
    <div>
      <div className="container margin-tb-1">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
          <h3 className="text-center margin-tb-1">{isUpdate ? 'Update Journey / Refrigerator' : 'Add Journey / Refrigerator'}</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Device Id: </label>
                  <input
                    placeholder="Type the device Id"
                    name="deviceId"
                    className="form-control"
                    value={state.deviceId}
                    onChange={(event) => changeHandler(event, 'deviceId')}
                  />
                </div>

                <div className="form-group margin-tb-1">
                    <label>Transit Or Inhouse: </label>
                    <select
                      name="transitOrInhouse"
                      className="form-control custom-dropdown"
                      value={state.transitOrInhouse}
                      onChange={(event) => changeHandler(event, 'transitOrInhouse')}
                    >
                      <option value="" disabled style={{ fontWeight: 'normal' }}>Select Transit Or Inhouse</option>
                      <option value={true}>Transit</option>
                      <option value={false}>Inhouse</option>
                    </select>
                  </div>

                  <div className="form-group margin-tb-1">
                  <label>Journey Or Refrigerator Name: </label>
                  <input
                    placeholder="Type Journey Or Refrigerator Name "
                    name="journeyOrRefrigeratorName"
                    className="form-control"
                    value={state.journeyOrRefrigeratorName}
                    onChange={(event) => changeHandler(event, 'journeyOrRefrigeratorName')}
                  />
                </div>

                <div className="form-group margin-tb-1">
                  <label>Start Time: </label>
                  <input
                    type="datetime-local"
                    name="startTime"
                    className="form-control"
                    value={state.startTime}
                    onChange={(event) => changeHandler(event, 'startTime')}
                  />
                </div>

                <div className="form-group margin-tb-1">
                    <label>Status: </label>
                    <select
                      name="status"
                      className="form-control custom-dropdown"
                      value={state.status}
                      onChange={(event) => changeHandler(event, 'status')}
                    >
                      <option value="" disabled style={{ fontWeight: 'normal' }}>Select Status</option>
                      <option value={true}>Active</option>
                      <option value={false}>Inactive</option>
                    </select>
                  </div>

                <div className="form-group margin-tb-1">
                  <label>Temparature High: </label>
                  <input
                    placeholder="Type temparature high"
                    name="tempHigh"
                    className="form-control"
                    value={state.tempHigh}
                    onChange={(event) => changeHandler(event, 'tempHigh')}
                  />
                </div>

                <div className="form-group margin-tb-1">
                  <label>Temparature Low: </label>
                  <input
                    placeholder="Type temparature low"
                    name="tempLow"
                    className="form-control"
                    value={state.tempLow}
                    onChange={(event) => changeHandler(event, 'tempLow')}
                  />
                </div>

                <div className="form-group margin-tb-1">
                    <label>User: </label>
                    <select
                      name="userId"
                      className="form-control custom-dropdown"
                      value={state.userId}
                      onChange={(event) => changeHandler(event, 'userId')}
                    >
                      <option value="" disabled style={{ fontWeight: 'normal' }}>Select User</option>
                      {users.map((user) => (
                        <option key={user.userId} value={user.userId}>
                          {user.firstName} {user.lastName}
                        </option>
                      ))}
                    </select>
                  </div>



                <button className="btn btn-success margin-tb" onClick={saveOrUpdateJourneyRefrigerator}>
                  Save
                </button>

                <button className="btn btn-danger margin-tb" onClick={cancelJourneyRefrigerator}>
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUpdateJourneyRefrigerator;
