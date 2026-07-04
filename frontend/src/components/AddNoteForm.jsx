import { useState } from "react";

function AddNoteForm({ addNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  function handleSubmit() {
    if (title === "" || content === ""){
        return;
    }
    const newNote = {
      title,
      content,
    };

    addNote(newNote);
    setTitle("");
    setContent("");
  }
  return (
    <div>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <p>{title}</p>
      <label htmlFor="content">Content</label>
      <textarea
        id="content"
        value={content}
        onChange={(event) => setContent(event.target.value)}
      ></textarea>
      <p>{content}</p>
      <button onClick={handleSubmit}>Add Note</button>
    </div>
  );
}

export default AddNoteForm;
