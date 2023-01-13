import React, { useState } from "react";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Header } from '../components';
import { events } from "../data/events";

const locales = {
  "en-GB": require("date-fns/locale/en-GB"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

function Calendarpg() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
      
      for (let i=0; i<allEvents.length; i++){

          const d1 = new Date (allEvents[i].start);
          const d2 = new Date(newEvent.start);
          const d3 = new Date(allEvents[i].end);
          const d4 = new Date(newEvent.end);

           if (
            ( (d1  <= d2) && (d2 <= d3) ) || ( (d1  <= d4) &&
              (d4 <= d3) )
            )
          {   
              alert("CLASH"); 
              break;
           }
  
      }
      
      
      setAllEvents([...allEvents, newEvent]);
  }

  return (
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
           <Header category="Planning" title="Calendar"/>
           <h2 className="text-left p-5 text-gray-600 text-lg">Add New Event</h2>
          <div className="inline-flex space-x-3">
              <input className="bg-gray-200 rounded-3xl p-3 text-black" type="text" placeholder="Add Title" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
              <DatePicker className="bg-gray-200 rounded-3xl p-3 text-black z-30" placeholderText="Start Date"  selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
              <DatePicker className="bg-gray-200 rounded-3xl p-3 text-black z-30" placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
              <button className="bg-lime-600 rounded-xl p-1 text-white tracking-widest" onClick={handleAddEvent}>
                  Add   
              </button>
          </div>
          <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
      </div>
  );
  }

export default Calendarpg