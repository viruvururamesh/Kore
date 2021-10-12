import React from 'react';
import NavSidebar from './NavSidebar';
import logo from '../../assets/img/cigna-logo.png';
import { useParams } from 'react-router';


const Navbar =(props)=>{  
    const paramslist = useParams();
    console.log(window.location.href);
    let urlsdata=window.location.href;
    let urlsarray = urlsdata.split('/');
    let newurlarray =urlsarray.splice(3,urlsarray.length);
    



    
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                       
                        <div className="col-md-2 bg-white py-2   px-2 mx-0 my-auto  text-center"><img src={logo}  width="80" height="auto" /></div>
                        <div className="col-md-10 my-auto">
                            <div className="container my-auto">
                       <div className="row">
                       
                        <div className="col-md-8 my-auto">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">{newurlarray}</li>
                                </ol>
                </nav>
                </div>    
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-6 nvabar-fontsize">My Account : ESI</div>
                                <div className="col-md-6 nvabar-fontsize">Help</div>
                                </div>
                            </div>
                       
                       </div>
                        </div></div>
                    </div>
                
                
                </div>
            </React.Fragment>

        )
}

export default Navbar;
