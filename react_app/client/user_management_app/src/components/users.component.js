import React, { Component } from "react";
import UserDataService from "../service/user.service";
import { Router } from "../common/router";

class User extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmailId = this.onChangeEmailId.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeContact = this.onChangeContact.bind(this);
    this.onChangeDateOfbirth = this.onChangeDateOfbirth.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.getUser = this.getUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);

    this.state = {
      currentUser: {
        id: null,
        name: "",
        emailId: "",
        password: "",
        contact: "",
        dateOfBirth: "",
        age: "",
      },
      message: "",
    };
  }

  componentDidMount() {
    this.getUser(this.props.router.params.id);
  }

  onChangeName(e) {
    const name = e.target.value;

    this.setState((prevState) => {
      return {
        currentUser: {
          ...prevState.currentUser,
          name: name,
        },
      };
    });
  }

  onChangeEmailId(e) {
    const emailId = e.target.value;

    this.setState((prevState) => {
      return {
        currentUser: {
          ...prevState.currentUser,
          emailId: emailId,
        },
      };
    });
  }

  onChangePassword(e) {
    const password = e.target.value;

    this.setState((prevState) => {
      return {
        currentUser: {
          ...prevState.currentUser,
          password: password,
        },
      };
    });
  }

  onChangeContact(e) {
    const contact = e.target.value;

    this.setState((prevState) => {
      return {
        currentUser: {
          ...prevState.currentUser,
          contact: contact,
        },
      };
    });
  }

  onChangeDateOfbirth(e) {
    const dateOfBirth = e.target.value;

    this.setState((prevState) => {
      return {
        currentUser: {
          ...prevState.currentUser,
          dateOfBirth: dateOfBirth,
        },
      };
    });
  }

  onChangeAge(e) {
    const age = e.target.value;

    this.setState((prevState) => {
      return {
        currentUser: {
          ...prevState.currentUser,
          age: age,
        },
      };
    });
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

  updateUser() {
    UserDataService.update(this.state.currentUser.id, this.state.currentUser)
      .then((response) => {
        console.log(response.data);
        this.setState({
          message: `the data is updated successfully`,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteUser() {
    UserDataService.delete(this.state.currentUser.id)
      .then((response) => {})
      .catch(error =>{
        console.log(error)
      });
  }

  render() {
    const {currentUser} = this.state
    return (
      <div>
        {currentUser? (
          <div className="edit-form">
            <h3>Users Details</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                type="text"
                className="form-control"
                id="name"
                value={currentUser.name}
                onChange={this.onChangeName} 
                />
              </div>
              <div className="form-group">
                <label htmlFor="emailId">Email ID</label>
                <input
                type="text"
                className="form-control"
                id="emailId"
                value={currentUser.emailId}
                onChange={this.onChangeEmailId} 
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact">Contact</label>
                <input
                type="text"
                className="form-control"
                id="contact"
                value={currentUser.contact}
                onChange={this.onChangeContact} 
                />
              </div>
              <div className="form-group">
                <label htmlFor="dateOfBirth">Date Of Birth</label>
                <input
                type="text"
                className="form-control"
                id="dateOfbirth"
                value={currentUser.dateOfBirth}
                onChange={this.onChangeDateOfbirth} 
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                type="text"
                className="form-control"
                id="age"
                value={currentUser.age}
                onChange={this.onChangeAge} 
                />
              </div>
            </form>
            <button
              type="button"
              className="btn btn-success"
              onClick={this.updateUser}
            >
              Update
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.deleteUser}
            >
              Delete
            </button>
            <div className="mt-3">
              <p>{this.state.message}</p>
            </div>
          </div>
        ):(
          <div>
            <br />
            <p>Please click on a User</p>
          </div>
        )}
      </div>
    );
  }
}

export default Router(User);
