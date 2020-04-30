import React from "react"
import Joke from "./Joke.js"

function App(){
    return(
        <div>
            <Joke question=" What two things can you never eat for breakfast?" answer="lunch and dinner"/>
            <Joke question="What never asks a question but gets answered all the time?" answer="your cellphone" />
            <Joke question="How can a girl go 25 days without sleep?" answer="she sleeps at night" />
            <Joke question=" A cowboy rode into town on Friday. He stayed in town for three days and rode out on Friday. How is that possible?" answer="friday was the name of hi horse"/>
            <Joke question= "What has a face and two hands, but no arms or legs?" answer="la clock"/>
        </div>
    )
}

export default App