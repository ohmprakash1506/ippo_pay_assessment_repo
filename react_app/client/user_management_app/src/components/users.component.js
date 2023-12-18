import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserDataService from "../service/user.service";

export default class UserDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: {
        _id: "",
        name: "",
        emailID: "",
        password: "",
        contact: "",
        dateOfBirth: "",
        age: "",
      },
    };
  }

  componentDidMount() {
    this.getUser(this.props.match.params.id);
  }

  getUser(id) {
    UserDataService.get(id)
      .then((response) => {
        this.setState({
          currentUser: response.data,
        });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      currentUser: {
        ...prevState.currentUser,
        [name]: value,
      },
    }));
  };

  handleUpdate = () => {
    const { _id, name, emailID, password, contact, dateOfBirth, age } =
      this.state.currentUser;

    const data = {
      name,
      emailID,
      password,
      contact,
      dateOfBirth,
      age,
    };

    UserDataService.update(_id, data)
      .then(() => {
        this.props.history.push("/user-list");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleDelete = () => {
    const { _id } = this.state.currentUser;

    UserDataService.delete(_id)
      .then(() => {
        this.props.history.push("/user-list");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleCancel = () => {
    this.props.history.push("/user-list");
  };

  render() {
    const { currentUser } = this.state;

    return (
      <div className="container">
        <h2>User Details</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={currentUser.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="emailID" className="form-label">
              Email ID
            </label>
            <input
              type="text"
              className="form-control"
              id="emailID"
              name="emailID"
              value={currentUser.emailID}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contact" className="form-label">
              Contact
            </label>
            <input
              type="text"
              className="form-control"
              id="contact"
              name="contact"
              value={currentUser.contact}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dateOfBirth" className="form-label">
              Date of Birth
            </label>
            <input
              type="text"
              className="form-control"
              id="dateOfBirth"
              name="dateOfBirth"
              value={currentUser.dateOfBirth}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="text"
              className="form-control"
              id="age"
              name="age"
              value={currentUser.age}
              onChange={this.handleChange}
            />
          </div>

          <div className="d-grid gap-2">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handleUpdate}
            >
              Edit
            </button>
          </div>
          <div className="d-grid gap-2 mt-2">
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.handleDelete}
            >
              Delete
            </button>
          </div>
          <div className="d-grid gap-2 mt-2">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
        <Link to={"/user-list"} className="btn btn-link mt-3">
          Back to User List
        </Link>
      </div>
    );
  }
}
