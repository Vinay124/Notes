import React, { useState, useEffect } from 'react';
import NotesForms from '../Components/NotesForms'
import NotesLists from '../Components/NotesLists'
import '../Components/allStyles.css'
import { Container } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";


const NotesMain = () => {

  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');


// Add Note
  const addNote = (title, content) => {
    if (title.trim() !== '') {
      const newNote = { title, content };
      setNotes([...notes, newNote]);
      saveNotes([...notes, newNote]);
    }
  };


// Delete Note
  const deleteNote = index => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
  };

// Save Note
  const saveNotes = notes => {
    localStorage.setItem('notes', JSON.stringify(notes));
  };

// handleSubmit
  const handleSearch = query => {
    setSearchQuery(query);
  };


// StoredNotes

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);


  return (
    <section className='notesSection'>
      <Container>
        <div className='notesWrapper'>
          <div>
            <div>
              <h1>Notes App</h1>
            </div>
          </div>
          <div>
          <NotesForms addNote={addNote} />
          
            <div>
                <input
                className='notesSearch'
                  type="text"
                  placeholder="Search notes"
                  value={searchQuery}
                  onChange={e => handleSearch(e.target.value)}
                />
              </div>
          <NotesLists notes={notes} deleteNote={deleteNote} searchQuery={searchQuery} />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default NotesMain