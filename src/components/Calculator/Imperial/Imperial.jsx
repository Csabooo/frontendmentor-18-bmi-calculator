import React from 'react'
import classes from "./Imperial.module.css";


function Imperial() {
    return (
        <div className={classes.input_table}>

            <label htmlFor="height">Height</label>
            <div className='grid grid-cols-2 gap-5'>
                <div className='relative'>
                    <input className="relative" type='text' placeholder=''></input>
                    <span className={classes.ft}>ft</span>
                </div>
                <div className='relative'>
                    <input type='text' placeholder=''></input>
                    <span className="">in</span>
                </div>
            </div>

            <label htmlFor="weight">Weight</label>
            <div className='grid grid-cols-2 gap-5'>
                <div className='relative'>
                    <input className="relative" type='text' placeholder=''></input>
                    <span className={classes.ft}>st</span>
                </div>
                <div className='relative'>
                    <input type='text' placeholder=''></input>
                    <span className="">lbs</span>
                </div>
            </div>
        </div>
    )
}

export default Imperial;