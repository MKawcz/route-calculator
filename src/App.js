import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Add from './Add';
import Subtract from './Subtract';
import Multiply from './Multiply';
import Divide from './Divide';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/sub" element={<Subtract />} />
          <Route path="/mul" element={<Multiply />} />
          <Route path="/div" element={<Divide />} />
        </Routes>
      </Router>
  );
}

export default App;