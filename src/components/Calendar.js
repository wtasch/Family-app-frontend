import React from "react";
import moment from 'moment'
import Calendar from 'react-calendar'
import '../Calendar.css';
import React, {useState} from 'react'


function MyApp() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
  );
}



export default Calendar;