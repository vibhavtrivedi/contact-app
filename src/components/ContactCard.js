import React from "react";

const CardContact = (contact) => {
  const { id, name, email } = contact.contact;
  return (
    <div>
      <div>
        <div>{name}</div>
        <div>{email}</div>
      </div>
    </div>
  );
};

export default CardContact;
