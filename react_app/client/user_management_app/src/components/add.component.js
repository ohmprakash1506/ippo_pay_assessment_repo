import React, { Component } from "react";
import UserDataService from '../service/user.service' 

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmailId = this.onChangeEmailId.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeContact = this.onChangeContact.bind(this);
    this.onChangeDateOfbirth = this.onChangeDateOfbirth.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.saveUser = this.saveUser.bind(this);
    this.newUser = this.newUser.bind(this);

    this.state = {
      id: null,
      name: "",
      emailID:"",
      password:"",
      contact:"",
      dateOfBirth:"",
      age:"",
      submitted:false
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeEmailId(e){
    this.setState({
        emailID: e.target.value,
    })
  }

  onChangePassword(e){
    this.setState({
        password:e.target.value,
    })
  }

  onChangeContact(e){
    this.setState({
        contact:e.target.value,
    })
  }

  onChangeDateOfbirth(e){
    this.setState({
        dateOfBirth:e.target.value,
    })
  }

  onChangeAge(e){
    this.setState({
        age:e.target.value
    })
  }

  saveUser() {
    var data = {
      name: this.state.name,
      emailID: this.state.emailID,
      password: this.state.password,
      contact: this.state.contact,
      dateOfBirth: this.state.dateOfBirth,
      age: this.state.age,
    };

    UserDataService.create(data)
      .then((response) => {
        this.setState({
            name: data.name,
            emailID: data.emailID,
            password: data.password,
            contact: data.contact,
            dateOfBirth: data.dateOfBirth,
            age: data.age,

          submitted: true,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newUser() {
    this.setState({
        id: null,
        name:"",
        emailID:"",
        password:"",
        contact:"",
        dateOfBirth:"",
        age:"",

        submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You have submitted successfully!</h4>
            <button className="btn btn-primary" onClick={this.newUser}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="col-md-6">
                <h3>Add user</h3>
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
              />
            </div>

            <div className="form-group">
                <label htmlFor="emailId">Email ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="emailId"
                  value={this.state.emailID}
                  onChange={this.onChangeEmailId}
                  name="emailId"
                />
              </div>
            <div className="form-group">
                <label htmlFor="emailId">Password</label>
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                  name="password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact">Contact</label>
                <input
                  type="text"
                  className="form-control"
                  id="contact"
                  value={this.state.contact}
                  onChange={this.onChangeContact}
                  name="contact"
                />
              </div>
              <div className="form-group">
                <label htmlFor="dateOfBirth">Date Of Birth</label>
                <input
                  type="text"
                  className="form-control"
                  id="dateOfBirth"
                  value={this.state.dateOfBirth}
                  onChange={this.onChangeDateOfbirth}
                  name="dateOfBirth"
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                  type="text"
                  className="form-control"
                  id="age"
                  value={this.state.age}
                  onChange={this.onChangeAge}
                  name="age"
                />
              </div>
              <div>
              <button onClick={this.saveUser} className="btn btn-primary">
              Submit
            </button>
              </div>
          </div>
        )}
      </div>
    );
  }
}
