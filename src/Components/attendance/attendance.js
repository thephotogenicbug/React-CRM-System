import React,{useState, useEffect} from 'react';
import './attendance.css'
import {Link} from 'react-router-dom'
const Attendance = () =>{



    




    return(
       <>
         <div className="container">
             <div className="row">
             <div className="col-md-4"></div>
             <div className="col-md-4"></div>
             <div className="col-md-4 mt-3">
             </div>
             </div>
             <div className="row">
                 <div className="col-md-4"></div>
                 <div className="col-md-4 mt-3 pt-5">
                     <div className="card mt-5  login-card">
                         <div className="card-body">
                           <h5 className="text-success">LMS Attendance System</h5>
                           <small></small>
                           
                                <div className="row">
                                   <div className="form-group mt-3 mb-3">
                                       <label>Login Time</label>
                                       <input type="datetime-local" className="form-control"/>
                                   </div>
                                    <div className="row">
                                     <div className="col-md-7 m-2">
                                     <div className="form-group">
                                    <button className="btn btn-success">
                                        Save
                                    </button>
                                   </div>
                                     </div>
                                     <div className="col-md-3 m-2 ">
                                     <Link className="logout" onClick={logout}>
                                     <span className=" btn btn-danger text-white">Logout</span>
                                
                                </Link>
                                     </div>
                                    </div>
                                 
                           </div>
                         </div>
                     </div>
                 </div>
                 <div className="col-md-4"></div>
             </div>
         </div>
       </>
    )


}

const logout = () =>{
    localStorage.clear();
    window.location.href="http://localhost:3000/";
    window.location.reload();
}
export default Attendance;