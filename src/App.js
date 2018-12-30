import React, { Component } from "react";
import Calendar from "./components/Calendar/Calendar";
import "./App.css";

class App extends Component {
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
          <Calendar />
        </main>
        <section>
          <span>
            events<b>TuTu</b>
          </span>
        </section>
      </div>
    );
  }
}

export default App;
