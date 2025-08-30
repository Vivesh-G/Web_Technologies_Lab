export default function TInput({ temperature, unit, onTemperatureChange }) {
    return (
        <div class='temperature-input'>
            <input
                type="number"
                value={temperature}
                onChange={e => onTemperatureChange(Number(e.target.value))}
            />
            <span>{unit}</span>
        </div>
    )
}