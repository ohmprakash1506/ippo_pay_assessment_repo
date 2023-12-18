import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserDataService from "../service/user.service";

export default class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchUser: "",
      users: [],
      filteredUsers: [],
    };
  }

  componentDidMount() {
    this.retrieveUsers();
  }

  retrieveUsers() {
    UserDataService.getAll()
      .then((response) => {
        this.setState({
          users: response.data.response.data,
          filteredUsers: response.data.response.data,
        });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleSearch = () => {
    const { searchUser, users } = this.state;
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchUser.toLowerCase())
    );
    this.setState({ filteredUsers });
  };

  render() {
    const { searchUser, filteredUsers } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name"
              value={searchUser}
              onChange={(e) => this.setState({ searchUser: e.target.value })}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <h3>Users List</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Date of Birth</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user._id}>
                  <td>
                    <Link to={`/users/:_${user._id}`}>{user.name}</Link>
                  </td>
                  <td>{user.emailID}</td>
                  <td>{user.contact}</td>
                  <td>{user.dateOfbirth}</td>
                  <td>{user.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
