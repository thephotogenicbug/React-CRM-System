import React,{useState, useEffect}from 'react';
import './Dashboard.css'
import SideNavBar from '../SideBar/SideNavBar';
import axios from 'axios';
import {Link} from 'react-router-dom'

const Dashboard = () =>{
    const[lead, updateLead] = useState([]);
    const getLead = () =>{
        
    }

    const[followup, updateFollowup] = useState([]);
    const getFollowup = () =>{

        
    }

    useEffect(()=>{
      getLead();
      getFollowup();
    },[])

    return(

        <>
        <SideNavBar/>
        <div className="container ">
            <div className="row">
               <div className="col-md-2 ">
             
               </div>
               <div className="col-md-3 mt-5">
               <h5 className="welcome-header">Welcome <span className="welcome-header-user-name">{localStorage.getItem("name")}</span></h5>
               </div>
               <div className="col-md-4"></div>
               <div className="col-md-3 mt-5 pt-4">
               <Link className="logout" onClick={logout}>
                  <li class="fa fa-power-off text-danger"></li> <span className="text-danger">Logout</span>
            
              </Link>
               </div>
            </div>
            <div className="row">
                <div className="col-md-2">
               
                </div>
                <div className="col-lg-3 ">
                <div className="card dashboard-cards total-customers">
                        <div className="card-body">
                            <h3 className="card-numbers">0</h3> <i class="bi bi-stars icons"></i>
                            <h4 className="card-title">Today's Lead</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                <div className="card dashboard-cards followup">
                        <div className="card-body">
                            <h3 className="card-numbers">0</h3> <i class="bi bi-telephone-outbound icons"></i>
                            <h4 className="card-title">Today's call</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                <div className="card dashboard-cards interested">
                        <div className="card-body">
                            <h3 className="card-numbers">0</h3> <i class="bi bi-hand-thumbs-up icons"></i>
                            <h4 className="card-title">Interested</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-3">
                <div className="card dashboard-cards total-admissions">
                        <div className="card-body">
                            <h3 className="card-numbers">0</h3> <i class="bi bi-trash icons"></i>
                            <h4 className="card-title">Junk</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                <div className="card dashboard-cards dues-followup">
                        <div className="card-body">
                            <h3 className="card-numbers">0</h3> <li className="fab fa-ioxhost icons"></li>
                            <h4 className="card-title">Dues Followup</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>

        </>
    )
}

const logout = () =>{
    localStorage.clear();
    window.location.href="http://localhost:3000";
}

export default Dashboard

