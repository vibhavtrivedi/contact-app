import "./App.css";

import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Header from "./ContactHeader";

function App() {
  const contacts = [
    {
      id: "1",
      name: "Vibhav",
      email: "vib@gmail.com",
    },
    {
      id: "2",
      name: "Vibhav2",
      email: "vib2@gmail.com",
    },
  ];
  return (
    <div>
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
