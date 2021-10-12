
import './App.css';
import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './layout/home/Home';
import Homepage from './modules/dashboard/Homepage';
import PrivateRoute from './router/privateRouter';
import Navbar from './layout/navbar/navbar';
import Dummy  from './layout/navbar/dummy';
import NavSidebar from './layout/navbar/NavSidebar';
import Maindashboard from './modules/dashboard/maindashboard';

function App() {

  return (
    <React.Fragment>
      <div className="container-fluid">
        
      <Router>
      <div className="row">
        <Navbar />
       </div> 
        
         <div className="row my-2 maincontent-paddingright-null">
          <div className="container-fluid main-container px-0 ">
          
            <div className="col-md-2 px-0 visual-height">
            <NavSidebar />

            </div>
            <div className="col-md-10  maincontent-paddingleft ">
              <div className="container visual-height py-2">
        <switch>
        <Route exact={true} path={'/'} component={Home} />
        <Route exact={true} path={'/Home'} component={Homepage}/>
        <Route exact={true} path={'/dashboard'} component={Maindashboard}/>
        </switch>
        </div>
        </div>
        </div>
        
        
        </div>
      </Router>
      
      </div>
    </React.Fragment>
  );
}

export default App;
