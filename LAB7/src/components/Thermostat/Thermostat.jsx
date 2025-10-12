import { useState } from "react";
import TemperatureDisplay from "./TemperatureDisplay";
import Controls from "./Controls";

export default function Thermostat() {
  const [temp, setTemp] = useState(20);

  return (
    <div className="centered-page">
      <div className="page-content">
        <h2 className="title">Thermostat</h2>
        <TemperatureDisplay temp={temp} />
        <Controls increase={() => setTemp(temp + 1)} decrease={() => setTemp(temp - 1)} />
      </div>
    </div>
  );
}
