import React from "react"        //we are importing react, even when we are not using at anywhere is because React helps us make the JSX script.(including multiple tags)
//therefore we need to import react wherever we use JSX code
import ReactDom from "react-dom"

//JSX
function MyFirstFunction() {
  return (
    <div>
      <h1>Ishita Singhal</h1>
      <p>This is a paragraph, and the list of places I would like to visit have been listed below.</p>
      <ul>
        <li>Switzerland</li>
        <li>Paris</li>
        <li>Venice</li>
      </ul>
    </div>
  )
}

export default MyFirstFunction
