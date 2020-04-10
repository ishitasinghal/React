import React from "react"
import ReactDOM from "react-dom"

function App() {
  const firstName = "Ishita"
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  
  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }
  
  return (
    <h1 className = "navbar" >Good {`${timeOfDay} ${firstName}`}!</h1>
  )
}
  

ReactDOM.render(<App />, document.getElementById("root"))