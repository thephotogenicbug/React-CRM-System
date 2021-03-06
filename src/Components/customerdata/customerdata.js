import React, {useState, useEffect} from 'react';
import './customerdata.css'
import SideNavBar from '../SideBar/SideNavBar';
import {Link}from 'react-router-dom';
import axios from 'axios';
import { Modal, Button } from "react-bootstrap";
const Allcustomer =()=>{
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const[customer, getCustomer]=useState([]);
    const FetchCustomer=()=>{
      var input ={"empid":localStorage.getItem("id")};
      var url ="http://localhost:2222/customerdata";
      axios.post(url,input)
      .then(response => getCustomer(response.data))
      
    }
    useEffect(()=>{
        FetchCustomer();
    },[])

   

    return(
        <>
        <SideNavBar/>
        <div className="container-fluid ">
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10 mt-5 table-border-radius">
                   <table className="table table-bordered table-sm text-center " >
                       <thead  className="bg-success text-white" >
                           <tr>
                               <th>Name</th>
                               <th>Mobile No</th>
                               <th>Email</th>
                               <th>University</th>
                               <th>Action</th>
                           </tr>
                       </thead>
                       
                        <tbody>
                        {
                            customer.map((xcustomer, index)=>{
                                return(
                                    <tr key={index}>
                                    <td>{xcustomer.name}</td>
                                    <td>{xcustomer.mobile}</td>
                                    <td>{xcustomer.email}</td>
                                    <td>{xcustomer.university}</td>
                                    <td><Link style={{textDecoration:'none'}} to={`/${xcustomer.cid}/editcustomer`} 
                                    className="text-success">
                                    <i class="fas fa-eye"></i>
                                    </Link>
                                    </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                      
                   </table>
                </div>
                <div className="col-md-1"></div>
              
            </div>
         
        </div>
        </>
    )
}
export default Allcustomer;

 