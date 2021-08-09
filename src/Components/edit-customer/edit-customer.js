import React,{useEffect, useState} from 'react';
import axios from 'axios';
import './edit-customer.css'
import SideNavBar from '../SideBar/SideNavBar';
import { useParams } from 'react-router';
import Moment from 'react-moment';
import 'moment-timezone';
import { Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";



const EditCustomer = () =>{

 
    // Interested modal function
    const [interested, setInterested] = useState(false);
    const interestedhandleClose = () => setInterested(false);
    const interestedModal = () => setInterested(true);


    // Junk modal function
    const[junk, setJunk] = useState(false);
    const junkhandleClose = () => setJunk(false);
    const junkModal = () => setJunk(true);


    const {id} = useParams();
    const[name, processName] = useState("");
    const[location, processLocation] = useState("");
    const[mobile, processMobile] = useState("");
    const[altmobile, processAltmobile] = useState("");
    const[email, processEmail] = useState("");
    const[university, processUniversity] = useState("");
    const[course, processCourse] = useState("");
    const[feedback, processFeedback] = useState("");
    const[date, processCurrentdate] = useState("");
    const[newdate, processNewdate] = useState("");
    const[message, updateMessage] = useState("");
    const[status, updateStatus] = useState("");

   const getInfo = () =>{
       var url = "http://localhost:2222/getcustomerinfo";
       var input ={"cid":id};
       axios.post(url,input)
       .then(response =>{
        //    console.log(response.data)
        processName(response.data[0].name);
        processLocation(response.data[0].location);
        processMobile(response.data[0].mobile);
        processAltmobile(response.data[0].altmobile);
        processEmail(response.data[0].email);
        processUniversity(response.data[0].university);
        processCourse(response.data[0].course);
        processCurrentdate(response.data[0].date);
        updateStatus(response.data[0].status)
       })

   }

   
    

   useEffect(() =>{
       getInfo();

   },[])

  // update interested and feedback 
   const saveInterested = () =>{ 
    var empid = localStorage.getItem("id");
    var url="http://localhost:2222/postinterested";
    var jsonData ={
        "cname" : name,
        "cmobile": mobile,
        "caltmobile":altmobile,
        "cemail":email,
        "ccourse":course,
        "cuniversity":university,
        "cfeedback":feedback,
        "cid": id,
        "cfollowup":newdate,
        "empid":empid,
        "cstatus":status
    };
    axios.post(url, jsonData)
    .then(response =>{
        updateMessage(response.data);
        // getInfo();
        processFeedback("");
    })
    window.location.href="http://localhost:3000/allcustomer"
   
        
   }

   




   
    return(
        <>
        <SideNavBar/>
         <form>
         <div className="container">
            <div className="row">
            
               <div className="col-md-6">
                   <div className="card edit-customer-card mt-5">
                       <div className="card-body">
                         <p className="text-danger">Customer id is :- {id}</p>
                         <p>{message}</p>
                          <h5 style={{fontWeight:'bold'}}>Lead Update</h5>
                          <div className="form-group mb-2">
                          <label>Name</label>
                                <input type="text" className="form-control"
                                value={name}
                                disabled = {true} />
                          </div>
                          <div className="form-group mb-2">
                          <label>Mobile No</label>
                            <input type="text" className="form-control"
                            value={mobile}
                            disabled = {true} />
                          </div>
                          <div className="form-group mb-2">
                          <label>Alt Mobile No</label>
                            <input type="text" className="form-control"
                            value={altmobile}
                            disabled = {true}
                            />
                          </div>
                          <div className="form-group mb-2">
                          <label>Email-ID</label>
                            <input type="text" className="form-control"
                            value={email}
                            disabled = {true}
                            />
                          </div>
                          <div className="form-group mb-2">
                          <label>Course</label>
                            <input type="text" className="form-control"
                            value={course}
                            disabled = {true}
                            />
                          </div>
                          <div className="form-group mb-2">
                          <label>University</label>
                            <input type="text" className="form-control"
                            value={university}
                            disabled = {true}
                            />
                          </div>
                          <div className="form-group mb-2">
                          <label>Current Date / Time</label>
                            <input type="text" className="form-control"
                            value={date}
                            disabled = {true}
                            />
                          </div>
                            
                            
                        
                       </div>
                   </div>
               </div>
               <div className="col-md-6 mt-5">
                 <div className="card">
                   <div className="card-body">
                    <h5>Feedback</h5>
                     <div className="row">
                       <div className="col-md-1"></div>
                       <div className="col-md-4">
                       <Button variant="primary" onClick={interestedModal}>
                                Interested <i class="bi bi-hand-thumbs-up"></i>
                            </Button>
                       </div>
                       <div className="col-md-3">
                       <Button variant="warning text-white" >
                                RNR <i class="bi bi-telephone-x"></i>
                            </Button>
                       </div>
                       <div className="col-md-3">
                       <Button variant="danger" onClick={junkModal}>
                                Junk <i class="bi bi-trash"></i>
                            </Button>
                       </div>
                     </div>

                     <div className="row mt-3">
                       <div className="col-md-1"></div>
                         <div className="col-md-4">
                         <Button variant="success" >
                                Admission <i class="bi bi-award"></i>
                            </Button>
                         </div>
                         <div className="col-md-3">
                         <Button variant="success" >
                                Lead <i class="bi bi-award"></i>
                            </Button>
                         </div>
                         <div className="col-md-4">
                         <Button variant="info text-white" >
                                Order Lost <i class="bi bi-cart-x"></i>
                            </Button>
                         </div>
                     </div>

                   </div>
                 </div>
               </div>
              
            
               
            </div>
            
            <div className="row mb-3"></div>
        </div>

          {/* interested modal */}
        <Modal show={interested} onHide={interestedhandleClose}>
        <Modal.Header closeButton>
         
          <Modal.Title>Interested</Modal.Title>
        </Modal.Header>
          <p className="text-center text-success"> {message}</p>
        <Modal.Body>
           <div className="form-group mb-4">
             <label>Name</label>
             <input type="text" className="form-control" value={name} 
              onChange={obj=>processName(obj.target.value)}
             />
           </div>

           <div className="form-group mb-4">
             <label>Mobile</label>
             <input type="text" className="form-control" value={mobile} 
              onChange={obj=>processMobile(obj.target.value)}
             />
           </div>
           <div className="form-group mb-4">
             <label>Alt Mobile</label>
             <input type="text" className="form-control" value={altmobile} 
              onChange={obj=>processAltmobile(obj.target.value)}
             />
           </div>
           <div className="form-group mb-4">
             <label>Email-ID</label>
             <input type="text" className="form-control" value={email} 
             onChange={obj=>processEmail(obj.target.value)}
             />
           </div>
           <div className="form-group mb-4">
             <label>Course</label>
             <input type="text" className="form-control" value={course} 
              onChange={obj=>processCourse(obj.target.value)}
             />
           </div>
           <div className="form-group mb-4">
             <label>University</label>
             <input type="text" className="form-control" value={university} 
             onChange={obj=>processUniversity(obj.target.value)}
             />
           </div>
            <label>Add FeedBack</label>
            <textarea 
            className="form-control mb-4" 
            onChange={obj=>processFeedback(obj.target.value)} >
            </textarea>

            <div className="form-group">
            <label >Followup Date</label>
            <input type="datetime-local" className="form-control mb-3"  
            onChange={obj=>processNewdate(obj.target.value)}/>
            </div>
             
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={interestedhandleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveInterested}>
             Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

       {/* junk modal */}
      <Modal show={junk} onHide={junkhandleClose}>
        <Modal.Header closeButton>
         
          <Modal.Title>Junk</Modal.Title>
        </Modal.Header>
          <p className="text-center text-success"> {message}</p>
        <Modal.Body>
            <label>Add FeedBack</label>
            <textarea
            className="form-control mb-4" 
            onChange={obj=>processFeedback(obj.target.value)}  >
            </textarea>

            <label>Followup Date</label>
            <input type="datetime-local" className="form-control mb-3"   />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={junkhandleClose}>
            Close
          </Button>
          <Button variant="primary" >
             Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      
         </form>
        </>
    )

}

export default EditCustomer;


