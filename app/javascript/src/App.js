import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink
} from "react-router-dom"
import Greeting from './components/Greeting'

const App = () => (
  <BrowserRouter>
    <nav>
      <NavLink to="/api/messages">Greeting</NavLink>
    </nav>
    <div>
      <Routes>
        <Route exact path="/api/messages" element={<Greeting />} />
      </Routes>
    </div>
  </BrowserRouter>
)

export default App
