import React, { Component } from "react";
import Calendar from "./components/Calendar/Calendar";
import "./App.css";
import AddEvent from "./components/Event/AddEvent";

import { API } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react";

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
          <div className="Events">
            events<b>TuTu</b>
            <AddEvent />
          </div>
        </section>
      </div>
    );
  }
}

export default withAuthenticator(App);
