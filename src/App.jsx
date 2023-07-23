import { useState } from 'react'

import Form from './components/Form'
import Component1 from './components/Component1';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/home" element={<Component1 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
