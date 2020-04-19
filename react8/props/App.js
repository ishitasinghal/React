import React from "react"
import ContactCard from "./ContactCard"

function App() {
    return (
        <div className="contacts">
            <ContactCard 
                name="DORAEMON" 
                imgUrl="https://www.freepngimg.com/thumb/doraemon/71299-nobi-youtube-nobita-television-doraemon-free-photo-png-thumb.png" 
                phone="(212) 555-1234" 
                email="doraemon@doracakes.dora"
            />
            
            <ContactCard 
                name="NOBITA" 
                imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHOmaAnNffXpD63m7H20SwfNe9kREyJbJRehsDJ-d8NVHeNKGT&usqp=CAU" 
                phone="(212) 555-2345" 
                email="nobita@tortoise.com"
            />
            
            <ContactCard 
                name="SHIZUKA" 
                imgUrl="https://i.pinimg.com/originals/ce/e9/eb/cee9eb04103255d152acdbc0bfcbbc4d.png" 
                phone="(212) 555-3456" 
                email="shizuka@bunny.com"
            />
            
            <ContactCard 
                name="SUNIYO" 
                imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLiW3ySeh3l-0szedYFo17p7GobssrBCWsT6vUe2t10qKw6-Sg&usqp=CAU" 
                phone="(212) 555-4567" 
                email="suniyo@fox.com"
            />
            
             <ContactCard 
                name="GIYAN" 
                imgUrl="data:image/jpeg;base64,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" 
                phone="12345678" 
                email="giyan@gorilla.com"
            />
            
        </div>
    )
}

export default App