import React from 'react';
import './Calculation.css'

const Calculation = (props) => {
    const count = props.count;
    //This console log may help us to understand well the ...count thing on Teachershub.js. Just run this and check the output on console tab by pressing the add button.
    console.log(count);
    const total = count.reduce((total, prd) => total + prd,0);
    return (
        <div className="calculation-container">
            <h4>Secret Revealed!</h4>
            <h5>Teacher Selected: {count.length}</h5>
            <h6>Total Salary: {total}</h6>
        </div>
    );
};

export default Calculation;