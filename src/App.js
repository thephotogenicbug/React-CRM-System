
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SideNavBar from './Components/SideBar/SideNavBar';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <Router >
     <SideNavBar/>
      <Dashboard/>
    </Router>
  );
}

export default App;
