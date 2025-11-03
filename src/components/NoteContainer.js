import React from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer({
  notes,
  selectedNote,
  setSelectedNote,
  searchTerm,
  setSearchTerm,
  setNotes,
}) {
  return (
    <>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="container">
        <Sidebar
          notes={notes}
          selectedNote={selectedNote}
          setSelectedNote={setSelectedNote}
          setNotes={setNotes}
        />
        <Content
          selectedNote={selectedNote}
          setNotes={setNotes}
          setSelectedNote={setSelectedNote}
        />
      </div>
    </>
  );
}

export default NoteContainer;
