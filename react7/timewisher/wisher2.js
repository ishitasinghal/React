import React from "react"
import ReactDOM from "react-dom"

function Time() {
  const date = new Date(2020, 4, 11, 17)
  const hours = date.getHours()
  const styles = {
    fontsize: "20"
  }
  let time
  
  if (hours < 12) {
    time = "Morning"
    styles.color = "#00FFFF"
  } 
  else if (hours >= 12 && hours < 18) {
    time = "Afternoon"
    styles.color = "#FFA500"
  } 
  else {
    time = "Night"
    styles.color = "#000000"
  }
  
  return (
    <h1 style={styles}>Good {time}! Ishita!</h1>
  )
}

ReactDOM.render(<Time />, document.getElementById("root"))
