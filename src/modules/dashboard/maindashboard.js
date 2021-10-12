
import React from 'react';
import Apexsemidonut from '../../components/Apexsemidount';
import Apexpiechart from '../../components/Apexpiechart';
import Apexbarchart from '../../components/Apexbarchart';
import Apexhorizontalbarcharts from '../../components/Apexhorizontalbarchart';
import Apexrepeatcaller from '../../components/Apexrepeatcaller';
import Filterselection from './Filterselection';
const Maindashboard =()=>{
    return(
        <React.Fragment>
            <div className="container filter-data">
                <Filterselection />

                <div className="row">
                    <div className="col-md-4"><Apexsemidonut /></div>
                    <div className="col-md-4"><Apexpiechart /></div>
                    <div className="col-md-4"><Apexbarchart /></div>
                </div>
                <div className="row">
                    <div className="container">
                        <Apexhorizontalbarcharts />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <Apexrepeatcaller />
                    </div>
                    <div className="col-md-6">
                        <Apexrepeatcaller />
                    </div>
                </div>

            </div>
        </React.Fragment>
    )

}

export default Maindashboard;