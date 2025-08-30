import THeader from './THeader';
import TInput from './TInput';

export default function TemperatureDisplay({ temperature, unit, onTemperatureChange }) {
    return (
        <div className='temperature-card'>
            <THeader />
            <TInput temperature={temperature} unit={unit} onTemperatureChange={onTemperatureChange} />
        </div>
    )
}