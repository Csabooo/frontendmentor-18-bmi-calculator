import React, { useState } from 'react'
import classes from "./Metric.module.css";
import { useEffect } from 'react';

function Metric(props) {

    const [defaultHeightCM, setHeightCM] = useState(0);
    const [defaultWeightKG, setWeightKG] = useState(0);
    const [bmi, setBmi] = useState();

    useEffect(() => {
        calculateBMI();
    }, [defaultHeightCM, defaultWeightKG]);


    const enterHeight = (event) => {
        const height = event.target.value;
        setHeightCM(height);
    }

    const enterWeight = (event) => {
        setWeightKG(event.target.value);
    }

    props.bmiIndex(bmi);




    const calculateBMI = () => {
        if (defaultHeightCM > 0 && defaultWeightKG > 0) {
            const heightInMeters = defaultHeightCM / 100;

            const calculatedBmi = defaultWeightKG / (heightInMeters * heightInMeters);
            setBmi(calculatedBmi.toFixed(1)); // 2 tizedesjegy pontossággal
        }
        else if (defaultHeightCM == 0 || defaultWeightKG == 0) {
            setBmi("");
        }


    }

    return (
        <div className={classes.input_table}>

            <label htmlFor="height">Height</label>
            <div className='flex flex-col relative'>
                <input type='text' placeholder='' onChange={enterHeight} value={defaultHeightCM}></input>
                <span className="">cm</span>
            </div>


            <label htmlFor="weight">Weight</label>
            <div className='flex flex-col relative'>
                <input type='text' placeholder='' onChange={enterWeight} value={defaultWeightKG}></input>
                <span className="">kg</span>
            </div>
            {/*  <p>{bmi}</p> */}
        </div>
    )
}

export default Metric;