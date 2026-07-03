import Header from "./components/Header";
import Welcome from "./components/Welcome";
import NoteList from "./components/NoteList";
import { useState } from "react";

const name = "Yuhanth";

function App() {

  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Learn React",
      content: "Understand JSX, components and props.",
    },
  ]);
  
  function handleClick() {
    setNotes([...notes,{
      id: notes.length + 1,
      title: "Sample",
      content: "Sample note.",
    }])
  }
  
  return (
    <div>
      <Header />
      <Welcome name={name} />
      <button onClick={handleClick}>+ Add Sample Note</button>
      <NoteList notes={notes} />
      
    </div>
  );
}

export default App;
