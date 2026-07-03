import NoteCard from "./NoteCard.jsx";

function NoteList(props) {
  return (
    <>
      {props.notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </>
  );
}

export default NoteList;
