import React, { Component } from "react";
import Calendar from "./components/Calendar/Calendar";
import "./App.css";
import AddEvent from "./components/Event/AddEvent";
import Events from "./components/Event/Events";

class App extends Component {
  state = {
    events: [
      {
        student: "Jay",
        time: "1130",
        subject: "math",
        description: "fijewaofejfiwajfawiofjawfiowjfawoi"
      },
      {
        student: "Aman",
        time: "0320",
        subject: "math",
        description: "fijewaofejfiwajfawiofjawfiowjfawoi"
      },
      {
        student: "Jackie",
        time: "2030",
        subject: "english",
        description: "fijewaofejfiwajfawiofjawfiowjfawoi"
      }
    ],
    selectedDate: ""
  };

  addEvent = appointment => {
    this.setState({ events: [appointment, ...this.state.events] });
  };

  dateClick = date => {
    this.setState({ selectedDate: date });
  };

  render() {
    return (
      <div className="App">
        <header>
          <div id="logo">
            <span className="icon">date_range</span>
            <span>
              react<b>calendar</b>
            </span>
          </div>
        </header>
        <main>
          <Calendar dateClick={this.dateClick} />
        </main>
        <section>
          <div className="EventsContainer">
            <AddEvent addEvent={this.addEvent} />
            <Events events={this.state.events} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
