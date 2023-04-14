import React, { useState, useEffect } from 'react';
import '../App.css';
import UserService from '../services/UserService';
import { useNavigate } from 'react-router-dom';

const ListUserData = () => {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    UserService.getUsers().then((res) => {
      setUsers(res.data);
    });
  }, []);

  const addUser = () => {
    navigate('/add-user');
  };

  const editUser = (id) => {
    navigate(`/update-user/${id}`);
  };

  const deleteUser = (id) => {
    UserService.deleteUser(id).then((res) => {
      setUsers(users.filter((user) => user.userId !== id));
    });
  };

  
  const viewUser = (id) => {
    navigate(`/view-user/${id}`);
  };

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <button className="btn btn-primary margin-tb" onClick={addUser}>
            Add User
          </button>
          <h2 className="text-center ml-3">Users List</h2>
        </div>
      </div>
      <div className="row">
        <div className="table-responsive"> {/* Add this div with the table-responsive class */}
          <table className="table table-striped table-bordered margin-tb-3">
          <thead>
            <tr>
            <th>Id</th>
              <th>User Name</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th >Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.userId}</td>
                <td>{user.userName}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>
                  <button className="btn btn-info" onClick={() => editUser(user.userId)}>Update</button>
                  <button style={{marginLeft:"10px"}} className="btn btn-danger "  onClick={() => deleteUser(user.userId)}>Delete</button>
                  <button style={{marginLeft:"10px"}}  className="btn btn-success "  onClick={() => viewUser(user.userId)}>View</button>                  
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

export default ListUserData;