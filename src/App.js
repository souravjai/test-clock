import { useState } from 'react';
import './App.css';
import ClockWrapper from './component/ClockWrapper';
import TimezoneSelect from './component/TimezoneSelect';
import data from "./data"

export default function App() {
  const zoneOffset = new Date().getTimezoneOffset();
  const [hrDiff, setHrDiff] = useState(() => zoneOffset);

  function handleTimeZoneChange(diff) {
    console.log(diff);
    setHrDiff(diff);
  }

  return (
    <div className="App">
      <TimezoneSelect timeZones={[{ id: "default", name: "Local TimeZone", duration: zoneOffset }, ...data]}
        handleTimeZoneChange={handleTimeZoneChange} />
      <ClockWrapper diff={hrDiff} />
    </div>
  );
}
