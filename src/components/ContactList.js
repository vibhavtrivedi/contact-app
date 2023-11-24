import React from "react";
import CardContact from "./ContactCard";

const ContactList = (props) => {
  console.log(props);
  const renderContactList = props.contacts.map((contact) => {
    return <CardContact contact={contact} />;
  });

  return <div>{renderContactList}</div>;
};
export default ContactList;
