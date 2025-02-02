// src/App.jsx
import { useState } from "react";
import NavBar from "./assets/components/NavBar/NavBar";
import { Route, Routes } from "react-router";
import MailboxList from "./assets/components/MailboxList/MailboxList";
import MailboxDetails from "./assets/components/MailboxDetails/MailboxDetails";
import MailboxForm from "./assets/components/MailboxForm/MailboxForm";
 import "./App.css"
const initialState = [
  {
    _id: 1,
    boxSize: 'Small',
    boxOwner: 'Alex',
  }
]
const App = (props) => {
  const [mailboxes,setMailboxes] = useState(initialState)
  
  const addBox =(formData) =>{
    formData._id = mailboxes.length + 1
    setMailboxes([...mailboxes,formData])
}
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<h2>Home page</h2>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes}/>} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox}/>} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes}/>} />
      </Routes>
    </>
  );
};


export default App;
