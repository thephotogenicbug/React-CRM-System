import axios from 'axios';
import React,{useState} from 'react';
import SideNavBar from '../SideBar/SideNavBar';
import './newcustomer.css'
const NewCustomer = () =>{

    const[message, updateMessage] = useState([]);

   const [name, pickName] = useState("");
   const [mobile, pickMobile] = useState("");
   const [email, pickEmail] =useState("");
   
   const save = () =>{
       var empid = localStorage.getItem("id");
       var input = {"cname":name, "cmobile":mobile, "cemail":email, "empid":empid};
       var url = "http://localhost:2222/savecustomerdata";
       axios.post(url, input)
       .then(response =>{
         updateMessage(response.data);
         pickName("");
         pickMobile("");
         pickEmail("");

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
                        <p> {message} </p>
                      <div className="row">

                      <div className="col-md-4 mt-2">
                     <div className="form-group mb-3">
                         <label>New Customer Name</label>
                         <input type="text" 
                         className="form-control" value={name}
                         onChange={obj=>pickName(obj.target.value)}
                         />
                     </div>
                     </div>
                     <div className="col-md-4 mt-2">
                     <div className="form-group mb-3">
                         <label>Mobile</label>
                         <input type="text" 
                         className="form-control" value={mobile}
                         onChange={obj=>pickMobile(obj.target.value)}
                         />
                     </div>
                     </div>
                     <div className="col-md-4 mt-2">
                     <div className="form-group mb-3">
                         <label>Email-ID</label>
                         <input type="text"   
                         className="form-control" value={email}
                         onChange={obj=>pickEmail(obj.target.value)}
                         />
                     </div>
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