import React from "react";

function NoteViewer({ selectedNote, setIsEditing }) {
  const { title, body } = selectedNote;

  return (
    <>
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </>
  );
}

export default NoteViewer;
