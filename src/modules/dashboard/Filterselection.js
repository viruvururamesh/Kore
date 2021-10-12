import React from "react";
import {DateRangePickerComponent} from '@syncfusion/ej2-react-calendars'

const Filterselection =()=>{

    return(
        <React.Fragment>
            <div className="row">
            <div className="select-column-width">
                <select class="form-select" aria-label="Default select example">
                <option selected>Business Unit</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </select>
            </div>
            
            
            <div className="select-column-width">
                <select class="form-select" aria-label="Default select example">
                <option selected>APP</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </select>
            </div>
           
            <div className="select-column-width">
                <select class="form-select" aria-label="Default select example">
                <option selected>DNIS</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </select>
            </div>
            <div className="select-column-width">
                <select class="form-select" aria-label="Default select example">
                <option selected>Platform</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </select>
            </div>
            <div className="select-column-width">
                <DateRangePickerComponent placeholder="Enter Date Range"/>
            </div>
            <div className="select-column-width">
                <select class="form-select" aria-label="Default select example">
                <option selected>Trend By</option>
                <option value="1">Default</option>
                <option value="2">Day</option>
                <option value="3">week</option>
                <option value="4">Month</option>
                <option value="5">year</option>
                </select>
            </div>
            
      
</div>
       
        </React.Fragment>
    )

}
export default Filterselection;