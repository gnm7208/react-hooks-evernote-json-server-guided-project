import React from "react";
import NoteList from "./NoteList";

function Sidebar({ notes, setSelectedNote, selectedNote, setNotes }) {
  const newNote = {
    title: "New Note",
    body: "This is a new note.",
    userId: 1,
  };

  const handleNewNote = () => {
    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote),
    })
      .then((r) => r.json())
      .then((note) => {
        setNotes((notes) => [note, ...notes]);
        setSelectedNote(note);
      });
  };

  return (
    <div className="master-detail-element sidebar">
      <NoteList
        notes={notes}
        setSelectedNote={setSelectedNote}
        selectedNote={selectedNote}
      />
      <button onClick={handleNewNote}>New</button>
    </div>
  );
}

export default Sidebar;
