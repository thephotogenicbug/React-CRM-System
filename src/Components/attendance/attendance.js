import React,{useState, useEffect} from 'react';
import './attendance.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


// const schema = yup.object().shape({
//     firstName: yup.string().required(),
//     age: yup.number().positive().integer().required(),
//   });
const Attendance = () =>{

    const { register, handleSubmit } = useForm();
    //  const onSubmit = data => console.log(data);
      

    const[time , pickTime] = useState("");
    const[message , updateMessage] = useState("");
     const save = () =>{
        var empid = localStorage.getItem("id");
        var input = {"empid":empid, "time":time}
        var url = "http://localhost:2222/loginattendance";
        axios.post(url, input)
        .then(response =>{
            updateMessage(response.data);
            pickTime();
           
        })
       window.location.href="http://localhost:3000/dashboard";
        
    }



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
                    <form>
                    <div className="card mt-5  login-card">
                         <div className="card-body">
                           <h5 className="text-success">LMS Attendance System</h5>
                           <small>{message}</small>
                           
                                <div className="row">
                                   <div className="form-group mt-3 mb-3">
                                       <label >Login Time</label>
                                       <input type="datetime-local" 
                                       className="form-control"
                                       {...register("date", { required: true })}
                                       onChange={obj=>pickTime(obj.target.value)}
                                    />
                                    {/* <p>{errors.firstName?.message}</p> */}
                                   
                                   </div>
                                    <div className="row">
                                     <div className="col-md-7 m-2">
                                     <div className="form-group">
                                    <input className="btn btn-success" type="submit" onClick={handleSubmit(save)} />
                                       
                                
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

                    </form>

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