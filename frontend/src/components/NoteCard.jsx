function NoteCard({ note, deleteNote }) {
  return (
    <div>
      <h4>{note.title}</h4>
      <p>{note.content}</p>
      <button onClick={() => deleteNote(note.id)}>Delete Note</button>
    </div>
  );
}

export default NoteCard;
