import React, { useState, useEffect } from 'react';
import './Teacher.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Teacher = (props) => {

    console.log(props);
    //Random Quote API
    const [quote,setQuote] = useState([]);
    useEffect(()=>{
        fetch('https://api.quotable.io/random')
        .then(res => res.json())
        .then(data => setQuote(data));
    },[])

    //object destructor so that we don't need to props.teacher.name again and again. (Optional)
    const {picture, name, email, phone} = props.teacher;

    //Random Salary Generator
    let min = 6000;
    let max = 15000;
    let salary = Math.floor(Math.random() * (max - min)) + min;
    return (
        <div className="teacher-container">
            <div className="row">
                <div className="col-md-4 align-self-center">
                    <img className="rounded-circle img-fluid" src={picture.large} alt=""/>
                </div>
                <div className="col-md-8 justify-self-start">
                    <h5>{name.first} {name.last}</h5>
                    <h6>{email}</h6>
                    <p>{phone}</p>
                    <h6>Salary ${salary}</h6>
                    <p>{quote.content}</p>
                    <button type="button" 
                    onClick={()=>props.handlePlusBtn(salary)}
                    className="btn btn-info"><FontAwesomeIcon icon={faPlus} />  Hack this buddy's info</button>
                </div>
            </div>
        </div>
    );
};

export default Teacher;