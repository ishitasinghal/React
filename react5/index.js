// Set up the React app from scratch
// Render an App component (defined in a separate file)
// Inside App, render:
  // 1. A Navbar component
  // 2. A MainContent component
  // 3. A Footer component

import React from "react"
import ReactDom from "react-dom"

import MyApp2 from "./MyApp2.js"

ReactDom.render(<MyApp2 />, document.getElementById("root"))