import React from "react";

import ContactCard from "./ContactCard";
import contactsData from "../contactsData";

function MainContent() {
    const contactsComponents = contactsData.map(contact => <ContactCard key={contact.id} contact={contact} />);
    return <div className="contacts-list">{contactsComponents}</div>;
};

export default MainContent;