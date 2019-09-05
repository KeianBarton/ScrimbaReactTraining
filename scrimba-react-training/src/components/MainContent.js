import React from "react";

import ContactCard from "./ContactCard";

function MainContent() {
    return (
        <div className="todo-list">
            <ContactCard 
                contact={{
                    name: "Mr. Whiskerson",
                    imgUrl: "http://placekitten.com/300/200",
                    phone: "(212) 555-1234",
                    email: "mr.whiskaz@catnap.meow"
                }}
            />
            
            <ContactCard 
                contact={{
                    name: "Fluffykins",
                    imgUrl: "http://placekitten.com/400/200",
                    phone: "(212) 555-2345",
                    email: "fluff@me.com"
                }}
            />
            
            <ContactCard
                contact={{
                    name: "Destroyer",
                    imgUrl: "http://placekitten.com/400/300",
                    phone: "(212) 555-3456",
                    email: "ofworlds@yahoo.com"
                }}
            />
            
            <ContactCard 
                contact={{imgUrl: "http://placekitten.com/200/100"}}
            />
        </div>
    );
};

export default MainContent;