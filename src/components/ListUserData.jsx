import React, { Component } from 'react';
import UserService from '../services/UserService'

class ListUserData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: []
        };
    }
    componentDidMount(){
        UserService.getUsers().then((res) => {
            this.setState({ userData: res.data});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">User Data</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.userData.map((sensor) => (
                                <tr key={user.id}>
                                    <td>{user.userName}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.mobile}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListUserData;
