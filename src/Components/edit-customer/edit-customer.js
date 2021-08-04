import React,{useEffect, useState} from 'react';
import axios from 'axios';
import './edit-customer.css'
import SideNavBar from '../SideBar/SideNavBar';
import { useParams } from 'react-router';



const EditCustomer = () =>{
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
    const [oldfeedback, updateoldFeedback]=useState("");

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
        processFeedback(response.data[0].feedback);
        processCurrentdate(response.data[0].date);
       })

   }
    

   useEffect(() =>{
       getInfo();
   },[])


   const updateInfo = () =>{

    let allfeedback = oldfeedback + "------" +feedback;
    let input ={"cid":id, "feedback":allfeedback };
    input = JSON.stringify(input);
   }
    return(
        <>
        <SideNavBar/>
        <div className="container">
            <div className="row">
               <div className="col-md-6">
                   <div className="card edit-customer-card mt-5">
                       <div className="card-body">
                         <p className="text-danger">Customer id is :- {id}</p>
                          <h5 style={{fontWeight:'bold'}}>Lead Update</h5>
                            <div className="form-group mb-3">
                            <label>Name</label>
                                <input type="text" className="form-control"
                                value={name}
                                disabled = {true} />
                            </div>
                            <div className="form-group mb-3">
                            <label>Location</label>
                            <input type="text" className="form-control"
                            value={location}
                            disabled = {true}
                            />
                            </div>
                            <div className="form-group mb-3">
                            <label>Mobile No</label>
                            <input type="text" className="form-control"
                            value={mobile}
                            disabled = {true}
                            />
                            </div>
                            <div className="form-group mb-3">
                            <label>Alt Mobile No</label>
                            <input type="text" className="form-control"
                            value={altmobile}
                            disabled = {true}
                            />
                            </div>
                            <div className="form-group mb-3">
                            <label>Email-ID</label>
                            <input type="text" className="form-control"
                            value={email}
                            disabled = {true}
                            />
                            </div>
                            <div className="form-group mb-3">
                            <label>University / College</label>
                            <input type="text" className="form-control"
                            value={university}
                            disabled = {true}
                            />
                            </div>
                            <div className="form-group mb-3">
                            <label>Course</label>
                            <input type="text" className="form-control"
                            value={course}
                            disabled = {true}
                            />
                            </div>
                            <div className="form-group mb-3">
                            <label>Current Date / Time</label>
                            <input type="text" className="form-control"
                            value={date}
                            disabled = {true}
                            />
                            </div>
                            <div className="form-group mb-3">
                            <label>Follow up Date</label>
                            <input type="date" className="form-control"
                            />
                            </div>
                            <div className="form-group mb-3">
                            <label>FeedBack</label>
                            <textarea className="form-control" rows={5}>

                            </textarea>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-success">Update customer data</button>
                            </div>
                       </div>
                   </div>
               </div>
               <div className="col-md-6 mt-5">
                <table className="table table-sm text-center table-bordered">
                  <tbody>
                      <tr>
                          <th>Updated date</th>
                          <th>FeedBack</th>
                          <th>Status</th>
                          <th>Followup Date</th>
                          <th>Employee Name</th>
                      </tr>
                  </tbody>
                </table>
               </div>
            </div>
        </div>
        </>
    )

}

export default EditCustomer;


{/* <div className="row">
<div className="col-md-4 mb-2 mt-2">

/>
</div>
<div className="col-md-4 mb-2 mt-2">

</div>
<div className="col-md-4 mb-2 mt-2">

</div>
<div className="col-md-4 mb-2 mt-2">

</div>
<div className="col-md-4 mb-2 mt-2">

</div>
<div className="col-md-4 mb-2 mt-2">

</div>
<div className="col-md-4 mb-2 mt-2">

</div>
<div className="col-md-4 mb-2 mt-2">

</div>
<div className="col-md-4 mb-2 mt-2">

</div>
<div className="col-md-12 mt-2 mb-4">
   
</div>
<div className="col-md-4">
    <button className="btn btn-success">Update customer data</button>
</div>

</div> */}