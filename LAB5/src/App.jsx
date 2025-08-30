import { useState } from 'react'
import TemperatureDisplay from './components/TemperatureDisplay';
import TButton from './components/TButton';
import './App.css'

export default function App() {
  const [celsius, setCelsius] = useState(0);
  const [showCelsius, setShowCelsius] = useState(true);

  const increaseTemp = () => {
    setCelsius((prev) => prev + 1);
  };

  const decreaseTemp = () => {
    setCelsius((prev) => prev - 1);
  };

  const toggleUnit = () => {
    setShowCelsius((prev) => !prev);
  };

  const temperature = showCelsius ? celsius : ((celsius * 9) / 5 + 32);
  const unit = showCelsius ? "°C" : "°F";

  const handleTemperatureChange = (value) => {
    if (showCelsius) {
      setCelsius(value);
    } else {
      // If in Fahrenheit mode, convert input to Celsius
      setCelsius(Math.round((value - 32) * 5 / 9));
    }
  };

  return (
    <div className='temperature-app'>
      <TemperatureDisplay
        temperature={temperature}
        unit={unit}
        onTemperatureChange={handleTemperatureChange}
      />
      <div className='temperature-controls'>
        <TButton
          buttonName={'+ Increase'}
          buttonFunction={increaseTemp}
        />
        <TButton
          buttonName={'- Decrease'}
          buttonFunction={decreaseTemp}
        />
        <TButton
          buttonName={`Convert to ${showCelsius ? '°F' : '°C'}`}
          buttonFunction={toggleUnit}
        />
      </div>
    </div>
  );
}
