import React,{useState} from 'react';
import './SideNavBar.css'
import Avatar from '../assets/user-a.png'
const SideNavBar = () =>{

   const[inactive, setInactive] = useState(false);

    return(
        <div className={`side-menu ${!inactive ? "inactive" : ""}`}>
         <div className="top-section">
             <div className="logo">
              <h6>Lead Management</h6>
             </div>
             <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
             {!inactive ? <i class="fas fa-bars"></i> : <i className="fa fa-times" aria-hidden="true"></i>} 
             </div>
             <div className="divider mt-5"></div>
            <div className="main-menu">
                <ul>
                    <li>
                        <a className="menu-item">
                            <div className="menu-icon">
                            <i class="fas fa-tachometer-alt"></i>
                            </div>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a className="menu-item">
                            <div className="menu-icon">
                            <i class="fas fa-table"></i>
                            </div>
                            <span>Customer Data</span>
                        </a>
                    </li>
                    <li>
                        <a className="menu-item">
                            <div className="menu-icon">
                            <i class="fas fa-users"></i>
                            </div>
                            <span>New Customer</span>
                        </a>
                    </li>
                    <li>
                        <a className="menu-item">
                            <div className="menu-icon">
                            <i class="fas fa-user-check"></i>
                            </div>
                            <span>Admission Entry</span>
                        </a>
                    </li>
                   
                </ul>
            </div>
            <div className="side-menu-footer mt-5">
               <div className="avatar">
               <img src={Avatar} />
               </div>
               <div className="user-info">
                   <h5>scelerisque</h5>
                   <p>scelerisque@gmail.com</p>
                   <li class="fa fa-power-off text-danger"></li> <span className="text-danger">Logout</span>
               </div>
            </div>
         </div>
        </div>
    )

}
export default SideNavBar