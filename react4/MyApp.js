import React from "react"
import MyFooter from "./MyFooter.js"

function MyApp() {
    return (
        <div>
            <nav>
                <h1>Main heading</h1>
                <ul>
                    <li>item1</li>
                    <li>item2</li>
                    <li>item3</li>
                    <li>item4</li>
                </ul>
            </nav>
            <main>
                <p>This is the paragraph.</p>
            </main>
        <MyFooter />
        </div>
    )
}

export default MyApp