import React, { useState } from "react";

function NoteEditor({ selectedNote, setNotes, setSelectedNote, setIsEditing }) {
  const [title, setTitle] = useState(selectedNote.title);
  const [body, setBody] = useState(selectedNote.body);

  const handleSave = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3000/notes/${selectedNote.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body, userId: selectedNote.userId }),
    })
      .then((r) => r.json())
      .then((updatedNote) => {
        setNotes((notes) =>
          notes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
        );
        setSelectedNote(updatedNote);
        setIsEditing(false);
      });
  };

  return (
    <form className="note-editor" onSubmit={handleSave}>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        name="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button" onClick={() => setIsEditing(false)}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default NoteEditor;
