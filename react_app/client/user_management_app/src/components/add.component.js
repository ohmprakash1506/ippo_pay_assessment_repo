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
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id: null,
      name: "",
      emailId:"",
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
        emailId: e.target.value,
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

  saveTutorial() {
    var data = {
      name: this.state.lastName,
      emailId: this.state.emailId,
      password: this.state.password,
      contact: this.state.contact,
      dateOfBirth: this.state.dateOfBirth,
      age: this.state.age,
    };

    UserDataService.create(data)
      .then((response) => {
        this.setState({
            name: this.data.lastName,
            emailId: this.data.emailId,
            password: this.data.password,
            contact: this.data.contact,
            dateOfBirth: this.data.dateOfBirth,
            age: this.data.age,

          submitted: true,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
        id: null,
        name:"",
        emailId:"",
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
            <button className="btn btn-success" onClick={this.newTutorial}>
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
                value={this.state.firstName}
                onChange={this.onChangeFirstName}
                name="name"
              />
            </div>

            <div className="form-group">
                <label htmlFor="emailId">Email ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="emailId"
                  value={this.state.emailId}
                  onChange={this.onChangeEmailId}
                  name="emailId"
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
              <button onClick={this.saveTutorial} className="btn btn-primary">
              Submit
            </button>
              </div>
          </div>
        )}
      </div>
    );
  }
}
