import React, {useState} from "react"

function App() {

  const [temperature, setTemperature] = useState(0)
  const [userInput, setUserInput] = useState(0)

  const userFahrenheit = (e) => {
    setUserInput(e.target.value)  // Update userInput with the value from the input field
  }

  const temperatureConverter = () => {
    const fahrenheit = parseFloat(userInput) // Convert the string input to a number
    const celsius = (fahrenheit - 32) * 5 / 9
    setTemperature(celsius)  // Update the temperature with the converted value
  }

  return (
    <>
      <div className="card-container">
        <div className="temperature-card fahrenheit">
          <h2>Fahrenheit</h2>
          <label htmlFor="temp">Fahrenheit</label>
          <input type="text" onChange={userFahrenheit} value={userInput}></input>  {/* Update input field value */}
        </div>
        <button type="button" onClick={temperatureConverter}>Convert</button>  {/* Call the converter function on click */}
        <div className="temperature-card celsius">
          <h2>Celsius</h2>
          <label htmlFor="temp">Celsius</label>
          <input type="text" readOnly value={temperature}></input>  {/* Display the converted value in read-only mode */}
        </div>
      </div>
    </>
  )
}

export default App