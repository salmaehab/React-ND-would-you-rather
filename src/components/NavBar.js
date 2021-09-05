import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { deleteAuthedUser } from "../actions/authedUser";

class NavBar extends Component {
  render() {
    return (
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/add" activeClassName="active">
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard" activeClassName="active">
              Leader Board
            </NavLink>
          </li>
          <li className="user-name">Hello, {this.props.authedUser}</li>
          <li>
            <NavLink
              to="/login"
              activeClassName="active"
              onClick={e => {
                this.props.dispatch(deleteAuthedUser());
              }}
            >
              Log Out
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default connect(({ authedUser }) => ({ authedUser }))(NavBar);
