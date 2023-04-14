import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../App.css';
import UserService from '../services/UserService';

const CreateUpdateUser = () => {
  const { id } = useParams();
  const isUpdate = id ? true : false;

  const [state, setState] = useState({
    userId: id || '',
    userName: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    isUpdate,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (isUpdate) {
      UserService.getUserById(id).then((res) => {
        let user = res.data;
        setState((prevState) => ({
          ...prevState,
          userName: user.userName,
          password: user.password,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          mobile: user.mobile,
        }));
      });
    }
  }, [id, isUpdate]);

  const saveOrUpdateUser = (e) => {
    e.preventDefault();
    let user = { ...state };

    if (!isUpdate) {
      UserService.createUser(user).then(() => {
        navigate('/user');
      });
    } else {
      UserService.updateUser(user, id).then(() => {
        navigate('/user');
      });
    }
  };

  const changeHandler = (event, field) => {
    setState({ ...state, [field]: event.target.value });
  };

  const cancelUser = () => {
    navigate('/user');
  };


  return (
    <div>
      <div className="container margin-tb-2">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
          <h3 className="text-center margin-tb-1">{isUpdate ? 'Update User' : 'Add User'}</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Username: </label>
                  <input
                    placeholder="Type your username"
                    name="userName"
                    className="form-control"
                    value={state.userName}
                    onChange={(event) => changeHandler(event, 'userName')}
                  />
                </div>

                <div className="form-group margin-tb-1">
                  <label>Password: </label>
                  <input
                    placeholder="Type your password"
                    name="password"
                    className="form-control"
                    value={state.password}
                    onChange={(event) => changeHandler(event, 'password')}
                  />
                </div>

                <div className="form-group margin-tb-1">
                  <label>First Name: </label>
                  <input
                    placeholder="Type your first name"
                    name="firstName"
                    className="form-control"
                    value={state.firstName}
                    onChange={(event) => changeHandler(event, 'firstName')}
                  />
                </div>

                <div className="form-group margin-tb-1">
                  <label>Last Name: </label>
                  <input
                    placeholder="Type your last name"
                    name="lastName"
                    className="form-control"
                    value={state.lastName}
                    onChange={(event) => changeHandler(event, 'lastName')}
                  />
                </div>

                <div className="form-group margin-tb-1">
                  <label>Email: </label>
                  <input
                    placeholder="Type your email address"
                    name="email"
                    className="form-control"
                    value={state.email}
                    onChange={(event) => changeHandler(event, 'email')}
                  />
                </div>

                <div className="form-group margin-tb-1">
                  <label>Mobile: </label>
                  <input
                    placeholder="Type your mobile number"
                    name="mobile"
                    className="form-control"
                    value={state.mobile}
                    onChange={(event) => changeHandler(event, 'mobile')}
                  />
                </div>

                <button className="btn btn-success margin-tb" onClick={saveOrUpdateUser}>
                  Save
                </button>

                <button className="btn btn-danger margin-tb" onClick={cancelUser}>
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

export default CreateUpdateUser;
