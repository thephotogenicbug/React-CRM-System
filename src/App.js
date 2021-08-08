
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SideNavBar from './Components/SideBar/SideNavBar';
import Dashboard from './Components/Dashboard/Dashboard';
import Register from './Components/Register/Register';
import Login from './Components/login/Login';
import NewCustomer from './Components/newcustomer/newcustomer'
import Allcustomer from './Components/customerdata/customerdata';
import EditCustomer from './Components/edit-customer/edit-customer';
import Attendance from './Components/attendance/attendance';
const Resume = () =>   <> <SideNavBar/> <h2>My Resume</h2></>;
function App() {
  if(localStorage.getItem("id") == null){
    return(
      <Router>
        
         <Route exact path='/register' component={Register}/>
         <Route exact path='/' component={Login} />
      </Router>
    )
  } else{


    return (
      <Router >
        <Route exact path='/' component={Attendance} />
       {/* <Route exact path='/' component={Dashboard} /> */}
       <Route exact path='/newcustomer' component={NewCustomer} />
       <Route exact path='/allcustomer' component={Allcustomer} />
       <Route exact path='/:id/editcustomer' component={EditCustomer} />
      </Router>
    );
  }
}

export default App;
