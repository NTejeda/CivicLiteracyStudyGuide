import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Flashcards from './components/Flashcards'
import './App.css'
import usaMap from '/usmap2.jpg'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <h1>Florida Civic Literacy Prep</h1>
            <div className="USAmap">
              <img src={usaMap} alt="USA map" />
              <Link to="/flashcards" className="start-button">
                Start
              </Link>
            </div>
          </>
        } />
        <Route path="/flashcards" element={
          <>
            <div className='cardsTitle'>
              <h2>Florida Civic Literacy Prep</h2>
            </div>

            <Flashcards />
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App