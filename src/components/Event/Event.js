import React from "react";
import dateFns from "date-fns";

const Event = ({ appointment }) => {
  let time = new Date(
    null,
    null,
    null,
    appointment.time.substring(0, 2),
    appointment.time.substring(2, 4)
  );

  return (
    <article>
      {dateFns.format(time, "hh:mm A")} with{" "}
      <strong>{appointment.student}</strong> ({appointment.subject})
      <br />
      <span>{appointment.description}</span>
      <br />
      <br />
    </article>
  );
};

export default Event;
