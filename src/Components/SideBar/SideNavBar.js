import React,{useState} from 'react';
import './SideNavBar.css'
import Avatar from '../assets/user-a.png'
import {Link} from 'react-router-dom';
const SideNavBar = () =>{

   const[inactive, setInactive] = useState(false);

    return(
        <div className={`side-menu ${!inactive ? "inactive" : ""}`}>
        <div className="top-section">
            <div className="logo">
             <h5>LMS</h5>
            </div>
            <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
            {!inactive ? <i class="fas fa-bars"></i> : <i className="fa fa-times" aria-hidden="true"></i>} 
            </div>
            <div className="divider mt-5"></div>
           <div className="main-menu">
               <ul>
                   <Link to="/">
                       <a className="menu-item">
                           <div className="menu-icon">
                           <i class="fas fa-tachometer-alt"></i>
                           </div>
                           <span>Dashboard</span>
                       </a>
                   </Link>
                   <Link to="/allcustomer">
                       <a className="menu-item">
                           <div className="menu-icon">
                           <i class="fas fa-table"></i>
                           </div>
                           <span>Customer Data</span>
                       </a>
                   </Link>
                   <Link to="/newcustomer">
                       <a className="menu-item">
                           <div className="menu-icon">
                           <i class="fas fa-users"></i>
                           </div>
                           <span>New Customer</span>
                       </a>
                   </Link>
                   <li>
                       <a className="menu-item">
                           <div className="menu-icon">
                           <i class="fas fa-user-check"></i>
                           </div>
                           <span>Track Attendance</span>
                       </a>
                   </li>
                  
               </ul>
           </div>
           <div className="side-menu-footer mt-5">
              <div className="avatar">
              {/* <img src={Avatar} /> */}
              </div>
              {/* <Link onClick={logout}>
              <div className="user-info">
                  <h5>{localStorage.getItem("name")}</h5>
                  <p>{localStorage.getItem("email")}</p>
                  <li class="fa fa-power-off text-danger"></li> <span className="text-danger">Logout</span>
              </div>
              </Link> */}
           </div>
        </div>
       </div>
    )

}

const logout = () =>{
    localStorage.clear();
    window.location.href="http://localhost:3000";
    window.location.reload();
}
export default SideNavBar