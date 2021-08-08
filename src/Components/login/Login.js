import React,{Component} from 'react';
import './Login.css'
import Employee from '../assets/employee-aut.svg';
import axios from 'axios';
import {Link} from 'react-router-dom';
class Login extends Component{
       constructor(){
           super();
           this.state = {
               email:'',
               password:'',
               message:''
           }
       }

       processEmail = (obj) =>{
           this.setState({
               email:obj.target.value
           })
       }

       processPassword = (obj) =>{
           this.setState({
               password:obj.target.value
           })
       }


     login = () =>{
         var url ="http://localhost:2222/login";
         var input ={"email" :this.state.email, "password" :this.state.password};
         axios.post(url, input)
         .then(response =>{
             if(response.data.id==""){
                 this.setState({
                     message: "Invalid email and password"
                 }) 
             } else{
                 this.setState({
                     message: "Logged in Successfully"
                 })
                 localStorage.setItem("name" , response.data[0].name);
                 localStorage.setItem("email" , response.data[0].email);
                 localStorage.setItem("id" , response.data[0].id);
                 window.location.href="http://localhost:3000/"
                 window.location.reload();
             }
         })
     }

    render(){
        return(
            <div className="container ">
                <div className="row">
                    <div className="col-md-12 mt-3">
                        <h4 className="text-primary">Lead Management System</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4  mt-5">
                        <div className="card login-card mt-3">
                            <div className="card-body">
                             <h5>LMS Employee Login</h5>
                             {/* <small className="text-sucess"> login</small> */}
                             <p className="text-success">{this.state.message}</p>

                             <div className="form-group mt-3 mb-3">
                                <label>Email-ID</label>
                                <input type="text" 
                                className="form-control" 
                                onChange={this.processEmail}/>
                             </div>
                             <div className="form-group mb-3">
                                <label>Password</label>
                                <input type="text" 
                                className="form-control"
                               onChange={this.processPassword}  />
                             </div>
                             <div className="form-group">
                              <button className="btn btn-primary" onClick={this.login}>
                                 Login
                              </button>
                             </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        )
    }
}
export default Login