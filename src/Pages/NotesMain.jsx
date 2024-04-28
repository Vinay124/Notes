import React, { useState, useEffect } from 'react';
import '../Components/allStyles.css'
import { Col, Container, Row } from 'react-bootstrap';


const NotesMain = () => {

  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({ id: null, title: '', content: '' });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleChange = (e) => {
    setCurrentNote({
      ...currentNote,
      [e.target.name]: e.target.value
    });
  };

  const handleAddNote = () => {
    if (currentNote.title.trim() !== '' && currentNote.content.trim() !== '') {
      if (currentNote.id === null) {
        // Add new note
        setNotes([...notes, { ...currentNote, id: Date.now() }]);
      } else {
        // Edit existing note
        const updatedNotes = notes.map((note) =>
          note.id === currentNote.id ? currentNote : note
        );
        setNotes(updatedNotes);
      }
      setCurrentNote({ id: null, title: '', content: '' });
    }
  };

  const handleEditNote = (note) => {
    setCurrentNote({ id: note.id, title: note.title, content: note.content });
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <>
    <section className='notesSection'>
      <Container>
        <Row>
          <Col>
          <div className='notesWrapper'>
            <div>
              <h1>Notes App</h1>
            </div>
          
          <div>
              <input
                type="text"
                name="title"
                className='notesTitle'
                placeholder="Title"
                value={currentNote.title}
                onChange={handleChange}
              />
              <textarea
                name="content"
                placeholder="Content"
                className='notesTitle'
                value={currentNote.content}
                onChange={handleChange}
              />
            <button onClick={handleAddNote} className='btn-addnotes'>
              {currentNote.id === null ? 'Add Note' : 'Edit Note'}
            </button>
          </div>
             {/* Search notes */}
          <div>
          <input
            className='notesSearch'
            type="text"
            placeholder="Search notes"
            value={searchTerm}
            onChange={handleSearch}/>
          </div>
      <div>

            <Row className='NotesData align-items-center'>
              <Col className='col-lg-4'>
              <span className='notestitlData'>Notes title</span>
              </Col>
              <Col className='col-lg-4'>
              <span className='notestitlData'>Notes Description</span>
              </Col>
              <Col className='col-lg-4'>
              <span className='notestitlData'>Action</span>
              </Col>
            </Row>

              <Row className='valueWrapper '>
                  {filteredNotes.map((note) => (
                    <>
                    <Col className='col-lg-4 col-sm-12 col-md-4'>
                      <h6 className='titleContent'>{note.title}</h6>
                    </Col>
                    <Col className='col-lg-4 col-sm-12 col-md-4'>
                      <p className='titleDescription'>{note.content}</p>
                    </Col>
                    <Col className='col-lg-4 col-sm-12 '>
                        <div className='notesActionButton'>
                          <button onClick={() => handleEditNote(note)} className='btn-delete'>Edit</button>
                          <button onClick={() => handleDeleteNote(note.id)} className='btn-delete'>Delete</button>
                        </div>
                    </Col>
                    </>
                  ))}
              </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default NotesMain