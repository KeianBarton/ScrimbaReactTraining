import React from "react";

function ContactCard(props) {
    const contact = props.contact;
    return (
        <div className="contact-card">
            <img src={contact.imgUrl} alt={`Image of ${contact.name}`}/>
            <h3 style={{display: !contact.name && "none"}}>{contact.name}</h3>
            <p style={{display: !contact.phone && "none"}}>{contact.phone}</p>
            <p style={{display: !contact.email && "none"}}>{contact.email}</p>
        </div>
    );
};

export default ContactCard;