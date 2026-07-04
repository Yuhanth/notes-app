import Header from "./components/Header";
import Welcome from "./components/Welcome";
import NoteList from "./components/NoteList";
import AddNoteForm from "./components/AddNoteForm";
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

  function addNote(newNote) {
    setNotes([
      ...notes,
      {
        id: notes.length + 1,
        ...newNote,
      },
    ]);
  }

  function deleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  return (
    <div>
      <Header />
      <Welcome name={name} />
      <AddNoteForm addNote={addNote} />
      {/* <button onClick={}>Add Note</button> */}
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
