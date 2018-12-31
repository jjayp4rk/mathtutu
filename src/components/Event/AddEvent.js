import React, { Component } from "react";

class AddEvent extends Component {
  state = {
    student: "",
    time: "",
    description: "",
    subject: ""
  };

  handleOnChange = event => {
    const { target } = event;
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { student, time, description, subject } = this.state;

    return (
      <div>
        <h1>ADD EVENT</h1>
        <form submit="">
          Student:
          <input
            type="text"
            name="student"
            value={student}
            placeholder="student"
            onChange={this.handleOnChange}
          />
          Time:
          <input
            type="time"
            name="time"
            value={time}
            placeholder="time"
            onChange={this.handleOnChange}
          />
          <
        </form>
      </div>
    );
  }
}

export default AddEvent;
