import React, {useState, useEffect} from 'react';
import './customerdata.css'
import SideNavBar from '../SideBar/SideNavBar';
import {Link}from 'react-router-dom';
import axios from 'axios';
const Allcustomer =()=>{
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
        <div className="container ">
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10 mt-5">
                   <table className="table table-bordered table-sm text-center">
                       <thead >
                           <tr>
                               <th>Name</th>
                               <th>Mobile No</th>
                               <th>Email</th>
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
                                    <td><Link to={`/${xcustomer.cid}/editemp`} 
                                    className="btn btn-warning btn-sm m-2 text-white">
                                        Edit Customer
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

 