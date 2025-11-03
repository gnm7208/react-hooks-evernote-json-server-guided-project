import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, setSelectedNote, selectedNote }) {
  const noteItems = notes.map((note) => (
    <NoteItem
      key={note.id}
      note={note}
      setSelectedNote={setSelectedNote}
      selectedNote={selectedNote}
    />
  ));

  return <ul>{noteItems}</ul>;
}

export default NoteList;
