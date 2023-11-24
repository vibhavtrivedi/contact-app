import React from "react";

class AddContact extends React.Component {
  render() {
    return (
      <div>
        <h2>AddContact</h2>
        <form>
          <div>
            <label>Name</label>
            <input type="text" name="name" placeholder="Name" />
          </div>
          <div>
            <label>Email</label>
            <input type="text" name="Email" placeholder="Email" />
          </div>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
