import axios from 'axios';
import React,{useState} from 'react';
import SideNavBar from '../SideBar/SideNavBar';
import './newcustomer.css'
const NewCustomer = () =>{

    const[message, updateMessage] = useState([]);

   const [name, pickName] = useState("");
   const [location, pickLocation] = useState("");
   const [mobile, pickMobile] =useState("");
   const [altmobile, pickAltmobile] = useState("");
   const [email, pickEmail] = useState("");
   const [university, pickUniversity] = useState("");
   const [course, pickCourse] = useState("");
   const [feedback, pickFeedback] = useState("");
   
   const save = () =>{
       var empid = localStorage.getItem("id");
       var input = {"cname":name, "clocation":location, "cmobile":mobile, "caltmobile":altmobile, "cemail":email, "cuniversity":university, "ccourse":course, "cfeedback":feedback, "empid":empid};
       var url = "http://localhost:2222/savecustomerdata";
       axios.post(url, input)
       .then(response =>{
         updateMessage(response.data);
         pickName("");
         pickLocation("");
         pickMobile("");
         pickAltmobile("");
         pickEmail("");
         pickUniversity("");
         pickCourse("");
         pickFeedback("");

       })
   }

    return(
        <>
        <SideNavBar/>
        <div className="container ">
            <div className="row">
             <div className="col-md-12">
             <div className="card mt-5 newcustomer-card">
                    <div className="card-body">
                        <p>Enter Customer Details</p>
                        <span className="progress-bar"></span>
                        <p className="text-success"> {message} </p>
                      <div className="row">

                      <div className="col-md-4 mt-2">
                     <div className="form-group mb-3">
                         <label>Full Name</label>
                         <input type="text" 
                         className="form-control" value={name}
                         onChange={obj=>pickName(obj.target.value)}
                         />
                     </div>
                     </div>
                     <div className="col-md-4 mt-2">
                     <div className="form-group mb-3">
                         <label>Location</label>
                         <input type="text" 
                         className="form-control" value={location}
                         onChange={obj=>pickLocation(obj.target.value)}
                        
                         />
                     </div>
                     </div>
                     <div className="col-md-4 mt-2">
                     <div className="form-group mb-3">
                         <label>Mobile No</label>
                         <input type="text"   
                         className="form-control" value={mobile}
                         onChange={obj=>pickMobile(obj.target.value)}
                        
                         />
                     </div>
                     </div>
                     <div className="col-md-4 mt-2">
                     <div className="form-group mb-3">
                         <label>Alternate Number</label>
                         <input type="text"   
                         className="form-control" value={altmobile}
                         onChange={obj=>pickAltmobile(obj.target.value)}
                        
                         />
                     </div>
                     </div>
                     <div className="col-md-4 mt-2">
                     <div className="form-group mb-3">
                         <label>Email</label>
                         <input type="text"   
                         className="form-control" value={email}
                         onChange={obj=>pickEmail(obj.target.value)}
                        
                         />
                     </div>
                     </div>
                     <div className="col-md-4 mt-2">
                     <div className="form-group mb-3">
                         <label>College / University</label>
                         <input type="text"   
                         className="form-control" value={university}
                         onChange={obj=>pickUniversity(obj.target.value)}
                        
                         />
                     </div>
                     </div>
                     <div className="col-md-4 mt-2">
                     <div className="form-group mb-3">
                         <label>Course</label>
                         <input type="text"   
                         className="form-control" value={course}
                         onChange={obj=>pickCourse(obj.target.value)}
                        
                         />
                     </div>
                     </div>
                     <div className="col-md-8 mt-2">
                         <label>FeedBack</label>
                         <textarea className="form-control"
                         value={feedback}
                         onChange={obj=>pickFeedback(obj.target.value)}
                         > 
                         </textarea>
                     </div>
                     <div >
                         <button className="btn btn-primary" onClick={save}>
                             Save Details
                             </button>
                     </div>
                      </div>
                     
                    </div>
                </div>
             </div>
            </div>
        </div>
        </>
    )


}
export default NewCustomer