import React from 'react'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Search from './Components/Search/Search';
import Known from './Components/Known/Known';
import Prepared from './Components/Prepared/Prepared';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App flex-col h-screen justify-between">
      <Header />
      <div className="flex-grow">
        <Router>
          <Routes>
            <Route path="/" element={<Prepared/>} />
            <Route path="/search" element={<Search/>} />
            <Route path="/known" element={<Known/>} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  )
}

export default App
