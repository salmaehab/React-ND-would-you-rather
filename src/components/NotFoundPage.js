import React, { Component } from "react";
export default class NotFoundPage extends Component {
  render() {
    //to handle new questions
    //  alert('please login first')
    return (
      <div>
        <div className="notfound">
          <h2 className="shadow">404</h2>
          <h4 className="ops">OOPS! page is not found</h4>
          <p className="center">
            The page you are looking for doesn't exist. Please check the address
            again
          </p>
          <br />
        </div>
      </div>
    );
  }
}
