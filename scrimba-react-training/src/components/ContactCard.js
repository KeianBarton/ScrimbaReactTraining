import React from "react";

function ContactCard(props) {
    const contact = props.contact;
    return (
        <div className="contact-card">
            <img src={contact.imgUrl} alt={`Image of ${contact.name}`}/>
            <h3>{contact.name}</h3>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
        </div>
    );
};

export default ContactCard;