import * as React from "react";
import "./index.css";

const calendarDates = Array(31)
  .fill(0)
  .map((e, i) => i);

export default function CalendarPicker() {
  return (
    <div className="calendar-picker app-body">
      <div className="date-chooser">
        <button className="date-chooser-button">
          Start Date <span>0</span>
        </button>

        <button className="date-chooser-button">
          End Date <span>0</span>
        </button>
      </div>

      <div className="calendar">
        {calendarDates.map((day, index) => {
          return (
            <div key={index} className="calendar-day">
              {day + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
}
