import React,{Component} from 'react';
import './Dashboard.css'
class Dashboard extends Component{


    render(){
        return(
            <div className="container ">
                <div className="row">
                   <div className="col-md-2 ">
                 
                   </div>
                   <div className="col-md-3 mt-5">
                   <h5 className="welcome-header">Welcome <span className="welcome-header-user-name">scelerisque</span></h5>
                   </div>
                   <div className="col-md-3"></div>
                   <div className="col-md-3"></div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                   
                    </div>
                    <div className="col-lg-3 ">
                    <div className="card dashboard-cards total-customers">
                            <div className="card-body">
                                <h3 className="card-numbers">0</h3> <li className="fa fa-users icons"></li>
                                <h4 className="card-title">Total Customers</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                    <div className="card dashboard-cards followup">
                            <div className="card-body">
                                <h3 className="card-numbers">0</h3> <li className="fa fa-user icons"></li>
                                <h4 className="card-title">Today's Follow up</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                    <div className="card dashboard-cards interested">
                            <div className="card-body">
                                <h3 className="card-numbers">0</h3> <i className="fas fa-check icons"></i>
                                <h4 className="card-title">Interested</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-3">
                    <div className="card dashboard-cards total-admissions">
                            <div className="card-body">
                                <h3 className="card-numbers">0</h3> <li className="fa fa-university icons"></li>
                                <h4 className="card-title">Total Admissions</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                    <div className="card dashboard-cards dues-followup">
                            <div className="card-body">
                                <h3 className="card-numbers">0</h3> <li className="fab fa-ioxhost icons"></li>
                                <h4 className="card-title">Dues Followup</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
        )
    }

}
export default Dashboard

{/*  */}