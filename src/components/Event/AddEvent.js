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
      <div className="EventForm">
        <h1>ADD EVENT</h1>
        <form submit="">
          <fieldset>
            Student:
            <br />
            <input
              type="text"
              name="student"
              value={student}
              placeholder="student"
              onChange={this.handleOnChange}
            />
            <br />
            Time:
            <br />
            <input
              type="time"
              name="time"
              value={time}
              placeholder="time"
              onChange={this.handleOnChange}
            />
            <br />
            Subject: <br />
            <input
              type="text"
              name="subject"
              value={subject}
              placeholder="subject"
              onChange={this.handleOnChange}
            />{" "}
            <br />
            Description: <br />
            <textarea
              type="text"
              name="description"
              value={description}
              placeholder="Add a description..."
              onChange={this.handleOnChange}
            />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default AddEvent;
