import React, { useState } from 'react'
import classes from "./Calculator.module.css"
import Metric from './Metric/Metric'
import Imperial from "./Imperial/Imperial";
import ResultsInfo from './ResultsInfo/ResultsInfo'

function Calculator() {

    const [defaultState, setState] = useState(false);

    const radioButtonHandler = () => {
        setState(prevState => !prevState)
    }

    return (
        <>
            <div className={classes.calculator_table}>
                <h2>
                    Enter your details below
                </h2>

                <div className={classes.radioButton}>
                    <div className={classes.row}>
                        <label htmlFor="radio1">
                            <input onClick={radioButtonHandler} type="radio" name="radio" id="radio1" />
                            <span className='ball'></span>
                        </label>
                        <span>Metric</span>
                    </div>
                    <div className={classes.row}>
                        <label htmlFor="radio2">
                            <input onClick={radioButtonHandler} type="radio" name="radio" id="radio2" />
                            <span className='ball'></span>
                        </label>
                        <span>Imperial</span>
                    </div>

                </div>
                <div>

                    {defaultState ? (<Metric></Metric>) : (<Imperial></Imperial>)}

                    <div className={classes.result}>
                        <p>Your BMI is...</p>
                        <h1>23.4</h1>
                        <p>
                            Your BMI suggests you’re a healthy weight. Your ideal weight is between 63.3kgs - 85.2kgs.
                        </p>
                    </div>
                </div>

            </div>
            <ResultsInfo></ResultsInfo>
        </>
    )
}

export default Calculator