import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddUser from "./components/add.component";
import User from "./components/users.component";
import UsersList from "./components/list.components";

export default class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-primary">
          <Link to={"/users_list"} className="navbar-brand">
            User Management 
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/users_list"} className="nav-link">
                List Of Users
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add_user"} className="nav-link">
                Add User
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<UsersList/>} />
            <Route path="/users_list" element={<UsersList/>} />
            <Route path="/add_user" element={<AddUser/>} />
            <Route path="/users/:_id" element={<User/>} />
          </Routes>
        </div>
      </div>
    );
  }
}
