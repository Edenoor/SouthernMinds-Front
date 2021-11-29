import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const CalendarExact = () => {
  const [startDate, setStartDate] = useState(new Date());

  console.log("DIA", startDate);

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      isClearable
      placeholderText="Choose Birthday"
    />
  );
};

export default CalendarExact;
