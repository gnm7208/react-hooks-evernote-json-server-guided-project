import React, { useState, useEffect } from "react";
import Header from "./Header";
import NoteContainer from "./NoteContainer";

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/notes")
      .then((r) => r.json())
      .then((data) => setNotes(data));
  }, []);

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <NoteContainer
        notes={filteredNotes}
        selectedNote={selectedNote}
        setSelectedNote={setSelectedNote}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setNotes={setNotes}
      />
    </div>
  );
}

export default App;
