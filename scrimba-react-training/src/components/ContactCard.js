import React from "react";

function ContactCard(props) {
    const contact = props.contact;
    return (
        <div className="contact-card">
            <img src={contact.imgUrl} alt={`Image of ${contact.name}`}/>
            <h3 style={{display: !props.question && "none"}}>{contact.name}</h3>
            <p style={{display: !props.question && "none"}}>{contact.phone}</p>
            <p style={{display: !props.question && "none"}}>{contact.email}</p>
        </div>
    );
};

export default ContactCard;