import React, { useState } from 'react';

const NotesForms = ({ addNote }) => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addNote(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='notesFormsdiv'>
        <input
        className='notesTitle'
          type="text"
          placeholder="Notes title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Note Content"
          value={content}
          rows="1"
          cols="80"
          onChange={e => setContent(e.target.value)}
        ></textarea>
        <button type="submit" className='btn-addnotes'>Add Note</button>
      </form>
    </div>
  )
}

export default NotesForms
