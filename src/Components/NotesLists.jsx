import React from 'react'
import NotesItems from './NotesItems';

const NotesLists = ({ notes, deleteNote, searchQuery }) => {
  
  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div>
      {filteredNotes.map((note, index) => (
        <NotesItems key={index} note={note} index={index} deleteNote={deleteNote} />
      ))}
    </div>
  )
}

export default NotesLists