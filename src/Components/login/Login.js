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
                     message: "Login Successfull please wait redirecting..."
                 })
                 localStorage.setItem("name" , response.data[0].name);
                 localStorage.setItem("email" , response.data[0].email);
                 localStorage.setItem("id" , response.data[0].id);
                 window.location.href="http://localhost:3000/dashboard"
                 window.location.reload();
             }
         })
     }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <h5 className="mt-4">Employee Login</h5>
                        <span className="progress-bar"></span>
                        <p className='text-success'>{this.state.message}</p>
                       <div className='row employee-input'>
                        
                           <div className="col-md-6 mb-2">
                           <label>Email-ID</label>
                           <input type="text" 
                           className="form-control" 
                           onChange={this.processEmail}
                           />
                           </div>
                           <div className="col-md-6 mb-2">
                           <label>Password</label>
                           <input type="text" 
                           className="form-control" 
                           onChange={this.processPassword}
                           />
                           </div>
                       </div>
                       <div>
                           <button className="btn btn-danger mb-2" onClick={this.login}>
                               Login
                            </button>
                            <Link to="/register"><p>Create new account here </p></Link>
                       </div>
                   
                    </div>
                    <div className="col-md-6 mt-5 pt-4">
                        <img src={Employee} height="320px" />
                    </div>
                </div>
            </div>
        )
    }
}
export default Login