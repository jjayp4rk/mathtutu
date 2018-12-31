import React, { Component } from "react";
import "./Events.css";

class AddEvent extends Component {
  state = {
    student: "",
    time: "",
    subject: "",
    description: ""
  };

  handleSubmit = event => {
    const { addEvent } = this.props;
    const { student, time, subject, description } = this.state;
    addEvent({
      student,
      time: time.replace(":", ""),
      subject,
      description
    });

    this.setState({ student: "", time: "", subject: "", description: "" });
    event.preventDefault();
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
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            Add Appointment
            <br />
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
              rows="6"
              cols="40"
              onChange={this.handleOnChange}
            />
            <br />
            <input type="submit" />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default AddEvent;
