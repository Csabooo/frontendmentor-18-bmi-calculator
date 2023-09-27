import React from 'react'
import classes from "./Metric.module.css";

function Metric() {
    return (
        <div className={classes.input_table}>

            <label htmlFor="height">Height</label>
            <div className='flex flex-col relative'>
                <input type='text' placeholder=''></input>
                <span className="">cm</span>
            </div>


            <label htmlFor="weight">Weight</label>
            <div className='flex flex-col relative'>
                <input type='text' placeholder=''></input>
                <span className="">kg</span>
            </div>
        </div>
    )
}

export default Metric;