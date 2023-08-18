import React from 'react';
import Form from './components/Form';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route
            path="/home"
            element={
              <>
                <Component1 />
                <Component2 />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
