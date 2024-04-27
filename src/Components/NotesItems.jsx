import React from 'react'
import { Col, Row } from 'react-bootstrap'

const NotesItems = ({ note, index, deleteNote }) => {
  return (
    <>    
    <Row className='valueWrapper align-items-center'>
      <Col className='col-lg-4'>
      <h6 className='titleContent'>{note.title}</h6>
      </Col>
      <Col className='col-lg-4'>
      <p className='titleDescription'>{note.content}</p>
      </Col>
      <Col className='col-lg-4'>
      <button onClick={() => deleteNote(index)} className='btn-delete'>Delete</button>
      </Col>
    </Row>
    </>
  )
}

export default NotesItems