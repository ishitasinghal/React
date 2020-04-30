import React from "react"

function Joke(props) {
    return(
        <div>
            <h2>Question: {props.question} </h2>
            <h3>Answer: {props.answer} </h3>
            <hr></hr>
        </div>
    )
}



export default Joke