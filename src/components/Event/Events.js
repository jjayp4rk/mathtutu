import React, { Component } from "react";
import Event from "./Event";

class Events extends Component {
  render() {
    const { events } = this.props;
    return (
      <div className="Events">
        <section>
          <h4>Appointments</h4>

          {events
            .sort((a, b) => Number(a.time) - Number(b.time))
            .map((appointment, i) => (
              <Event key={i} appointment={appointment} />
            ))}
        </section>
      </div>
    );
  }
}

export default Events;
