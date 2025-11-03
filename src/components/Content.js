import React, { useState, useEffect } from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";

function Content({ selectedNote, setNotes, setSelectedNote }) {
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setIsEditing(false);
  }, [selectedNote]);

  const getContent = () => {
    if (isEditing) {
      return (
        <NoteEditor
          selectedNote={selectedNote}
          setNotes={setNotes}
          setSelectedNote={setSelectedNote}
          setIsEditing={setIsEditing}
        />
      );
    } else if (selectedNote) {
      return <NoteViewer selectedNote={selectedNote} setIsEditing={setIsEditing} />;
    } else {
      return <Instructions />;
    }
  };

  return <div className="master-detail-element detail">{getContent()}</div>;
}

export default Content;
