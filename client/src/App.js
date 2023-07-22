import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Dashboard from "./pages/Dashboard"
import Writer from "./pages/Writer"




function App() {

  return(
    <Router> 
     <div className="App"> 
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}>
        </Route>
        <Route path="/writer" element={<Writer/>}>
        </Route>
      </Routes>
     </div>
    </Router>);

}
export default App;
