import NoteCard from "./NoteCard.jsx";

function NoteList({ notes, deleteNote }) {
  return (
    <>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} deleteNote={deleteNote} />
      ))}
    </>
  );
}

export default NoteList;
