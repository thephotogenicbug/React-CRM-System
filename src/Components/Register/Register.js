import React,{Component} from 'react';
import './Register.css'
import Employee from '../assets/employee-aut.svg';
import axios from 'axios';
import {Link} from 'react-router-dom';
class Register extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            password:'',
            mobile:'',
            message:''
        }
    }

    processName = (obj) =>{
        this.setState({
            name:obj.target.value
        })
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

    processMobile = (obj) =>{
        this.setState({
            mobile:obj.target.value
        })
    }

    Register = () =>{
        var url = "http://localhost:2222/register";
        var jsonData = {
            "uname" : this.state.name,
            "email" : this.state.email,
            "password" : this.state.password,
            "mobile" : this.state.mobile
        };
        axios.post(url, jsonData)
        .then(response =>{
            this.setState({
                message:response.data
            })
        })
    }



    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <h5 className="mt-4">Employee Registration</h5>
                        <span className="progress-bar"></span>
                        <p className='text-success'>{this.state.message}</p>
                       <div className='row employee-input'>
                           <div className="col-md-6 mb-2">
                           <label>Username</label>
                           <input type="text" 
                           className="form-control" 
                           onChange={this.processName}
                           pattern="[a-zA-Z]+"
                           required
                           />
                           </div>
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
                           <div className="col-md-6 mb-2">
                           <label>Mobile No</label>
                           <input type="text" 
                           className="form-control" 
                           onChange={this.processMobile}
                           
                           />
                           </div>
                       </div>
                       <div>
                           <button className="btn btn-success mb-2" onClick={this.Register}>
                               Register
                            </button>
                            <Link to="/"><p>Login to exisiting account</p></Link>
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
export default Register