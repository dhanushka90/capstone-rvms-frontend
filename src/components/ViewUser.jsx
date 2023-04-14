import React, { useState, useEffect } from 'react';
import UserService from '../services/UserService';
import { useParams, useNavigate } from 'react-router-dom';

const ViewUser = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    UserService.getUserById(id).then((res) => {
      setUser(res.data);
    });
  }, [id]);

  const viewUser = () => {
    navigate('/user');
  };

  return (
    <div>
      <br />
      <div className="card col-md-6 offset-md-3">
        <h3 className="text-center">View User Details</h3>
        <div className="card-body">

        <div className="label-data-row">
            <label style={{ fontWeight: 'bold' }}>Username: </label>
            <span style={{ marginLeft: '5px' }}>{user.userName}</span>
          </div>

          <div className="label-data-row margin-tb-1">
            <label style={{ fontWeight: 'bold' }}>password: </label>
            <span style={{ marginLeft: '5px' }}>{user.password}</span>
          </div>

          <div className="label-data-row margin-tb-1">
            <label style={{ fontWeight: 'bold' }}>First Name: </label>
            <span style={{ marginLeft: '5px' }}>{user.firstName}</span>
          </div>

          <div className="label-data-row margin-tb-1">
            <label style={{ fontWeight: 'bold' }}>Last Name: </label>
            <span style={{ marginLeft: '5px' }}>{user.lastName}</span>
          </div>

          <div className="label-data-row margin-tb-1">
            <label style={{ fontWeight: 'bold' }}>Email: </label>
            <span style={{ marginLeft: '5px' }}>{user.email}</span>
          </div>

          <div className="label-data-row margin-tb-1">
            <label style={{ fontWeight: 'bold' }}>Mobile: </label>
            <span style={{ marginLeft: '5px' }}>{user.mobile}</span>
          </div>

        </div>
      </div>
      <button style={{marginLeft:"910px", marginTop:"10px"}}  className="btn btn-success "  onClick={() => viewUser(user)}>Back</button>  
    </div>
  );
};

export default ViewUser;
