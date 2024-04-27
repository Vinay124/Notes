import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NotesMain from './Pages/NotesMain'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<NotesMain/>}/>
      </Routes>
    </Router>
    
    </>
  )
}

export default App
