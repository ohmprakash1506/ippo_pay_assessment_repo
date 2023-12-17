import React, { Component } from "react";
import UserDataService from "../service/user.service";
import { Link } from "react-router-dom";

export default class UsersList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchUser = this.onChangeSearchUser.bind(this);
    this.retrieveUsers = this.retrieveUsers.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.removeAllUsers = this.removeAllUsers.bind(this);
    this.searchUser = this.searchUser.bind(this);

    this.state = {
      users: [],
      currentUser: null,
      currentIndex: -1,
      searchUser: "",
    };
  }

  componentDidMount() {
    this.retrieveUsers();
  }

  onChangeSearchUser(e) {
    const searchUser = e.target.value;

    this.setState({
      searchUser: searchUser,
    });
  }

  retrieveUsers() {
    UserDataService.getAll()
      .then((response) => {
        this.setState({
          tutorials: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveUsers();
    this.setState({
      currentUser: null,
      currentIndex: -1,
    });
  }

  setActiveTutorial(users, index) {
    this.setState({
      currentUser: users,
      currentIndex: index
    });
  }

  removeAllUsers() {
    UserDataService.deleteAll()
      .then((response) => {
        console.log(response.data);
        this.refreshList();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  searchUser() {
    UserDataService.findByUser(this.state.searchUser)
      .then((response) => {
        this.setState({
          users: response.data,
        });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { searchUser, users, currentIndex, currentUser } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name or id"
              value={searchUser}
              onChange={this.onChangeSearchUser}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
            <h3>Users List</h3>

            <ul className="list-group">
            {users &&
              users.map((users, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveUser(users, index)}
                  key={index}
                >
                  {users.firstName}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllUsers}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
        {currentUser ? (
            <div>
              <h4>Users</h4>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentUser.firstName}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentUser.description}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentUser.published ? "Published" : "Pending"}
              </div>

              <Link
                to={"/tutorials/" + currentUser.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
        </div>
    ):(
        <div></div>
    )}
    </div>
    </div>
    )
  }
}
