import React from "react";

function NoteItem({ note, setSelectedNote, selectedNote }) {
  const { title, body } = note;

  const truncate = (str) => {
    return str.length > 20 ? str.substring(0, 20) + "..." : str;
  };

  return (
    <li
      className={selectedNote && selectedNote.id === note.id ? "active" : ""}
      onClick={() => setSelectedNote(note)}
    >
      <h2>{title}</h2>
      <p>{truncate(body)}</p>
    </li>
  );
}

export default NoteItem;
