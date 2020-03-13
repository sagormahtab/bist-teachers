import React, { useState, useEffect } from 'react';
import Teacher from '../Teacher/Teacher';
import Calculation from '../Calculation/Calculation';

const Teachershub = () => {
    //Random user API
    const [teacher,setTeacher] = useState([]);
    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=15')
        .then(res => res.json())
        .then(data => setTeacher(data.results));
    },[])

    //Count State
    const [count, setCount] = useState([]);

    const handlePlusBtn = (salary) => {
        //setting the previous count(that's why using spread ... operator) and salary to newCount
        const newCount = [...count, salary];
        setCount(newCount);
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        {
                        teacher.map(tchr => <Teacher
                        teacher={tchr}
                        handlePlusBtn={handlePlusBtn}
                        ></Teacher>)
                        }
                    </div>
                    <div className="col-md-5">
                        <Calculation count={count}></Calculation>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teachershub;